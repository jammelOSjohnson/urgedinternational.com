import React, {useEffect} from 'react';
import { useAppData } from '../../../Context/AppDataContext';
import moment from 'moment';
import { Link, useHistory } from 'react-router-dom';
import MUIDataTable from "mui-datatables";
import { Backdrop, Button, createStyles, Fade, Grid, makeStyles, Modal, Snackbar, Theme, Typography } from '@material-ui/core';
import clsx from 'clsx';
import { Alert } from '@material-ui/lab';

const columns = [
  { 
    name: 'id', 
    label: 'ORDER#', 
    options: {
      filter: true,
      sort: true,
     }
  },{
    name: 'Description',
    label: 'ORDER DETAILS',
    options: {
      filter: true,
      sort: true,
     }
  },{
    name: 'OrderDate',
    label: 'DATE',
    options: {
      filter: true,
      sort: true,
     }
  },
  {
    name: 'OrderStatus',
    label: 'STATUS',
    options: {
      filter: true,
      sort: true,
     }
  },
  {
    name: 'OrderTotal',
    label: 'ORDER TOTAL',
    options: {
      filter: true,
      sort: true,
     }
  },
  {
    name: 'Rider',
    label: 'DELIVERY PARTNER',
    options: {
      filter: true,
      sort: true,
     }
  },
]

const useStyles = makeStyles((theme: Theme) => 
  createStyles({
    root: {
        padding: "0% 5% 0% 5%",
        // borderRadius: "22px"
        borderRadius: "22px",
        "& .MuiInputBase-root": {
            color: "#9B9B9B ",
            borderColor: "#888888",
            border: "0.1px dotted"
        },
        "& .MuiSelect-select:$focus": {
            backgroundColor: "inherit",
            color: "#9B9B9B"
        },
        "& .MuiFormLabel-root": {
            fontWeight: 700,
            fontSize: "1.2rem"
        },
        "& .MuiInputLabel-root.Mui-focused":{
            color: "#9B9B9B"
        }
    },
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.primary.contrastText,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        minWidth: "50%",
        maxWidth: "400px",
        borderRadius: "20px",
        borderColor: theme.palette.primary.light,
        position: "relative"
    },
    cartIcon: {
        position: "absolute",
        top: 18,
        right: 10
    },
    YesBtn: {
      backgroundColor: "#72C123",
      color: "#FFF"
    },
    NoBtn: {
      backgroundColor: "red",
      color: "#FFF"
    }
  }),
);

export const HistoryTable: React.FC = function HistoryTable () {
  const classes = useStyles();
  var { value }  = useAppData();
  var history = useHistory();
  var location = history.location;
  var referralPath = location.pathname;

  var { orders, fetchOrdersByUser, currentUser, userRolef, UpdateOrder } = value;
  const [open, setOpen] = React.useState(false);
  const [open1, setOpen1] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const [open3, setOpen3] = React.useState(false);
  const [selectedOrderNumber, setSelectedOrderNumber] = React.useState("");

  

  const rows = [] as Object[];
  useEffect(() => {
    try{
      fetchOrdersByUser(value).then(()=>{
        
      });

    }catch(e){
      //console.log(e)
    }
    // eslint-disable-next-line
  }, [currentUser]);

  const options = {
    filterType: 'dropdown',
    search: true,
    selectableRows: 'none',
    download: false,
    print: false
  };

  const handleOpen = (orderNumber) => {
    try
    {
      setOpen(true);
      setSelectedOrderNumber(orderNumber);
    }catch(err){

    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleClose1 = () => {
    setOpen1(false);
  };

  const handleClose2 = () => {
    setOpen2(false);
  };

  const handleClose3 = () => {
    setOpen3(false);
  };

  const handleSubmit = async(status) => {
    try{
        setOpen(false);
        setOpen2(false);
        console.log(status);
        console.log(selectedOrderNumber);
        console.log(orders);
        let filteredOrder = orders.filter((item) => item._id.toString() === selectedOrderNumber);
        console.log(filteredOrder);
        let order = {...filteredOrder[0], OrderStatus: status, Rider: filteredOrder[0].Rider._id };
        console.log(order);
        await UpdateOrder(value, order).then((res) => {
            if(res === "Already Accepted"){
                setOpen3(true);
            }else if(res){
              setOpen1(true);
            }
        }) 
    }catch(err){
        console.log(err);
        setOpen2(true);
    }
  }

  if(userRolef !== undefined && orders.length !== 0){
    if(userRolef === "Admin" || userRolef === "Rider" || userRolef === "Customer" ){
      orders.map((item, index) => {
        const now = new Date(parseInt(item.OrderDate, 10));
        const estTime = moment.tz(now, "America/Jamaica").format("YYYY-MM-DD h:mm a");
        //console.log(item);
        var orderItems = "";
        orderItems = orderItems + item.OrderItems.map((item,index) => {
          return(
            item.chickenFlavour1 !== "" && item.chickenFlavour1 !== "Select Flavour" && item.chickenFlavour1 !== null && item.chickenFlavour1 !== undefined?
          `${item.itemName + ": "}\n${item.chickenFlavour1 + " | "}\n${item.chickenFlavour2 + " | "}
          \n${item.drink !== "Select Drink"? item.drink + " | ": "" + " | "}\n${item.otherIntructions + " | "}\n${'Not Available? ' + item.ifnotAvailable}` :
          `${item.itemName + ": "}\n${item.drink !== "Select Drink"? item.drink + " | ": "" + " | "}\n${item.otherIntructions + " | "}\n${item.side!== undefined && item.side!== "Select Side"?'Side:' + item.side + " | ": ""}\n${'Not Available? ' + item.ifnotAvailable}`
          )
        })

        let row = {
          id: `#${item._id}`,
          Description: orderItems,
          OrderDate: estTime, 
          OrderStatus: item.OrderStatus === "Ordered"?
                        <>
                          <Typography 
                          style={{backgroundColor: "#FF5E14", color:"#FFF", textAlign:"center"}}>
                            {"PROCESSING"}
                          </Typography>
                        </>
                        :item.OrderStatus === "Picked Up"?
                        <>
                          <Typography 
                          style={{backgroundColor: "#13ADD1", color:"#FFF", textAlign:"center"}}>
                            {item.OrderStatus.toUpperCase()}
                          </Typography>
                        </>
                        :item.OrderStatus === "In Transit"?
                        <>
                          <Typography 
                          style={{backgroundColor: "#F7B614", color:"#FFF", textAlign:"center"}}>
                            {item.OrderStatus.toUpperCase()}
                          </Typography>
                        </>
                        :item.OrderStatus === "Delivered"?
                        <>
                          <Typography 
                          style={{backgroundColor: "#72C123", color:"#FFF", textAlign:"center"}}>
                            {item.OrderStatus.toUpperCase()}
                          </Typography>
                        </>
                        :item.OrderStatus === "Not Assigned" || item.OrderStatus === "Pending"?
                        <>
                          <Button
                          onClick={() => handleOpen(item._id.toString())}
                          style={{backgroundColor: "red", color:"#FFF", textAlign:"center"}}>
                              Cancel Order ?
                          </Button>
                        </>
                        :item.OrderStatus === "Cancelled"?
                        <>
                          <Typography
                          style={{backgroundColor: "red", color:"#FFF", textAlign:"center"}}>
                              {item.OrderStatus.toUpperCase()}
                          </Typography>
                        </>
                        :
                        <></>
                        , 
          OrderTotal: `$ ${item.OrderTotal}`, 
          Rider: item.Rider.FirstName
        };

        rows.push(row)
        return true;
      })
    }else{
      return history.push("/Dashboard");
     }
  }

  return (
    <div style={{ height: 400, width: '100%' }}>
      <MUIDataTable
          title={""}
          data={rows}
          columns={columns}
          options={options}
        />

      <Snackbar open={open1} autoHideDuration={6000} onClose={handleClose1}>
          <Alert onClose={handleClose1} severity="success">
              Order Updated Successfully.
          </Alert>
      </Snackbar>
      <Snackbar open={open2} autoHideDuration={6000} onClose={handleClose2}>
            <Alert onClose={handleClose2} severity="error">
                Unable to update order at this time.
            </Alert>
      </Snackbar>
      <Snackbar open={open3} autoHideDuration={6000} onClose={handleClose3}>
            <Alert onClose={handleClose3} severity="warning">
                The order is already being processed.
            </Alert>
      </Snackbar>

      <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          className={classes.modal}
          open={open}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
          timeout: 500,
          }}
      >
          <Fade in={open}>
              <div className={clsx(classes.paper, 'modalMobile')}>
                  <h3 id="transition-modal-title" style={{textAlign: "center", color: "#F7B614"}}>Are You Sure?</h3>
                  <Link to={referralPath} className={classes.cartIcon} onClick={handleClose}>
                          <img src="Images/CartCloseIcon.png" alt="closemodal" />
                  </Link>
                  <br />
                  <Grid container direction="row" spacing={1} className={classes.root} alignItems="center">
                          <Grid item xs={12} sm={6} style={{textAlign: "center"}}>
                              <Button className={classes.YesBtn} onClick={() => handleSubmit("Cancelled")}>
                                Yes
                              </Button>
                          </Grid>
                          <Grid item xs={12} sm={6} style={{textAlign: "center"}}>
                              <Button className={classes.NoBtn}>
                                No
                              </Button>
                          </Grid>
                  </Grid>
              </div>
          </Fade>
      </Modal>
      <style>
        {`
          th{
            background-color: #F7B614 !important;
          }

          th > span > button > span div > div{
            color: #FFF !important;
          }
        `}
      </style>
    </div>
  );
}
