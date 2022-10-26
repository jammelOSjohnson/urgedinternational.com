import React, {useEffect, useState} from 'react';
import { useAppData } from '../../../Context/AppDataContext';
//import { DataGrid, GridColDef } from '@material-ui/data-grid';
import MUIDataTable from "mui-datatables";
import { useHistory } from 'react-router-dom';
import moment from 'moment';
import { EditRounded } from "@material-ui/icons/";
import { Backdrop, Button, createStyles, Fade, FormControl, Grid, makeStyles, MenuItem, Modal, Select, Snackbar, Theme, Typography } from '@material-ui/core';
import { useQuery } from '@apollo/client';
import { GET_ORDERS, GET_ORDERS_BY_DATE_AND_TYPE } from '../../../GraphQL/Queries';
import { Alert } from '@material-ui/lab';
import { Calendar } from './Calendar';
import clsx from 'clsx';
import { Link } from "react-router-dom";
  

  const columns = [
    { 
      name: '_id', 
      label: 'Transaction', 
      options: {
        filter: true,
        sort: true,
       }
    },{
      name: 'Description',
      label: 'Order Details',
      options: {
        filter: true,
        sort: true,
       }
    },
    {
      name: 'OrderDate',
      label: 'Date',
      options: {
        filter: true,
        sort: true,
       }
    },
    {
      name: 'OrderStatus',
      label: 'Status',
      options: {
        filter: true,
        sort: true,
       }
    },
    {
      name: 'OrderTotal',
      label: 'Order Total',
      options: {
        filter: true,
        sort: true,
       }
    },
    {
      name: 'PaymentMethod',
      label: 'Payment Method',
      options: {
        filter: true,
        sort: true,
       }
    },
    {
      name: 'Rider',
      label: 'Delivery Partner',
      options: {
        filter: true,
        sort: true,
       }
    },
    {
      name: 'Actions',
      label: 'Action',
      options: {
        filter: true,
        sort: true,
       }
    },
  ];

  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      root: {
        padding: "0% 0px 0% 0px",
        borderRadius: "22px",
        "& .MuiInputBase-root": {
            color: "#9B9B9B ",
            borderColor: "#888888",
            border: "3px solid black"
        },
        "& .MuiSelect-select:$focus": {
            backgroundColor: "inherit",
            color: "black"
        },
        "& .MuiSelect-select": {
            border: "2px dotted black"
        },
        "& .MuiFormLabel-root": {
            fontWeight: 700,
            fontSize: "1.2rem"
        },
        "& .MuiInputLabel-root.Mui-focused":{
            color: "#9B9B9B"
        }
        
    },backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',
      },formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
        marginLeft: "0px"
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
        minWidth: "34%",
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
    Button: {
      backgroundColor: "#FF5E14",
      border: "1.21951px solid #FFFFFF",
      height: "41px",
      width: "113px",
      borderRadius: 36,
    },
    btnfonts: {
      fontFamily: "PT Sans",
      fontSize: "13px",
      lineHeight: "16.82px",
      fontWeight: "bolder",
      color: "#FAFAFA",
      textTransform: "none"
    },
    }),
  );
  
  
  
  export const OrdersTable: React.FC = function OrdersTable () {
    const classes = useStyles();
    var { value }  = useAppData();
    var { orders, UpdateOrder, currentUser, userRolef, refreshingOrderTables } = value;

    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [open, setOpen] = React.useState(false);
    const [open2, setOpen2] = React.useState(false);
    const [open3, setOpen3] = React.useState(false);
    const [selorderIndex, setSelectedOrderIndex] = React.useState(0);
    const [selorderStatus, setSelectedOrderStatus] = React.useState('');
    var history = useHistory();
    var location = history.location;
    var referralPath = location.pathname;

    //const {data} = useQuery(GET_ORDERS);
    const {data} = useQuery(GET_ORDERS_BY_DATE_AND_TYPE,{
      variables: {StartDate: startDate, EndDate: endDate },
      pollInterval: 3000,
    })

    const rows = [] as Object[];
    useEffect(() => {
      try{
        //console.log("startDate", startDate)
        //console.log("endDate",endDate)

        //console.log(end)
        
        if(startDate === ""){
          //console.log("setting start date")
          const Year = new Date().getFullYear();
          const month = new Date().getMonth() + 1;
          const day = new Date().getDate();
          let start = Year + "-" + month.toString().padStart(2,"0") +  "-" + day.toString().padStart(2,"0") + "T00:00";
          setStartDate(start);
        }
      
        if(endDate === ""){
          //console.log("setting end date")
          let end =  moment().endOf('month').format('YYYY-MM-DDT23:59');
          setEndDate(end);
        }

        if(data.getOrdersByDateAndTime !== null){
          var Orders = data.getOrdersByDateAndTime;
        // if(data.getOrders !== null){
        //   var Orders = data.getOrders;
          //console.log(Orders)
          let filteredOrders = Orders.filter((item) => item.OrderStatus !== "Delivered");
          let deliveredOrders = Orders.filter((item) => item.OrderStatus === "Delivered");
          if(deliveredOrders.length > 0) 
          {
            deliveredOrders.map((item)=> {
              filteredOrders.push(item);
            })
          }

          //if(filteredOrders.length > orders.length){
          if(filteredOrders.length > orders.length || filteredOrders.length < orders.length){
            refreshingOrderTables(value, filteredOrders).then(()=>{
          
            });
          }
        }

        
        // fetchOrders(value).then(()=>{
          
        // });
  
      }catch(e){
        //console.log(e)
      }
      // eslint-disable-next-line
    }, [currentUser, orders, data]);
    
    // const handleEdit = (event) => {
    //   event.preventDefault();
    // }

    const handleSubmit = async(status, orderIndex) => {
      try{
          setOpen(false);
          setOpen2(false);
          //console.log(status);
          //console.log(orders[orderIndex].OrderStatus);
          let order = {...orders[orderIndex], OrderStatus: status, Rider: orders[orderIndex].Rider._id };
          //console.log(order);
          await UpdateOrder(value, order).then((res) => {
              if(res){
                  setOpen(true);
              }
          }) 
      }catch(err){
          console.log(err);
          setOpen2(true);
      }
    }

    const handleChange = (event, index) => {
      // setValues({...values,[event.target.name]:event.target.value, itemName: selectedItem.ItemName, itemCost: selectedItem.ItemCost, itemDescription: selectedItem.ItemDescription});
      try{
        let status = event.target.value;
        if(status !== "Cancelled"){
          handleSubmit(status,index);
        }else{
          handleOpen3(index, status);
        }
      }catch(err){
        console.log(err);
        setOpen2(true);
      }
    };

    const handleOpen3 = (index, Status: React.SetStateAction<string>) => {
      try
      {
        setSelectedOrderIndex(index);
        setSelectedOrderStatus(Status);
        setOpen3(true);
      }catch(err){

      }
      
    };

    const handleClose3 = () => {
      let status = selorderStatus;
      let index = selorderIndex;
      handleSubmit(status,index);
      setOpen3(false);
    };

    const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
      if (reason === 'clickaway') {
        return;
      }

      setOpen(false);
    };

    const handleClose2 = (event?: React.SyntheticEvent, reason?: string) => {
      if (reason === 'clickaway') {
        return;
      }

      setOpen2(false);
    };

    const handleCloseX2 = () => {
      setOpen3(false);
    };



    const options = {
      filterType: 'dropdown',
      search: true,
      selectableRows: 'none'
    };
    
    if(userRolef !== undefined && orders.length !== 0){
       if(userRolef === "Admin"){
          orders.map((item, index) => {
            const now = new Date(parseInt(item.OrderDate, 10));
            const estTime = moment.tz(now, "America/Jamaica").format("YYYY-MM-DD h:mm a");

            var orderItems = "";
            orderItems = item.OrderItems.map((item,index) => {
              // return(
              //   item.chickenFlavour1 !== "" && item.chickenFlavour1 !== "Select Flavour" && item.chickenFlavour1 !== null && item.chickenFlavour1 !== undefined?
              // `${item.itemName + ": "}\n${item.chickenFlavour1 + " | "}\n${item.chickenFlavour2 + " | "}
              // \n${item.drink !== "Select Drink"? item.drink + " | ": "" + " | "}\n${item.otherIntructions + " | "}\n${'Not Available? ' + item.ifnotAvailable}` :
              // `${item.itemName + ": "}\n${item.drink !== "Select Drink"? item.drink + " | ": "" + " | "}\n${item.otherIntructions + " | "}\n${item.side!== undefined && item.side!== "Select Side"?'Side:' + item.side + " | ": ""}\n${'Not Available? ' + item.ifnotAvailable}`
              // )
              let IName = `Item Name: ${item.itemName}`;
              let IFlavor1 = item.chickenFlavour1 !== "" && 
                            item.chickenFlavour1 !== "Select Flavour" &&
                            item.chickenFlavour1 !== null 
                            && item.chickenFlavour1 !== undefined?
                            `1st Flavor Choice: ${item.chickenFlavour1 }`: "";

              let IFlavor2 = item.chickenFlavour2 !== "" && 
                            item.chickenFlavour2 !== "Select Flavour" &&
                            item.chickenFlavour2 !== null && 
                            item.chickenFlavour2 !== undefined?
                            `2nd Flavor Choice: ${item.chickenFlavour2}`: "";

              let Drink = item.drink !== "Select Drink"? 
                          `Drink: ${item.drink}` : "";

              let fianlDecision = item.otherIntructions != ""?
                  `If not available: ${item.otherIntructions}`: "";
              
              return (
                <>
                  <Typography style={{fontWeight: 900}}>
                    {IName}
                  </Typography>
                  <Typography>
                    {IFlavor1}
                  </Typography>
                  <Typography>
                    {IFlavor2}
                  </Typography>
                  <Typography>
                    {Drink}
                  </Typography>
                  <Typography>
                    {fianlDecision}
                  </Typography>
                </>
              )
            })
            let row = {
              _id: item._id, 
              Description: orderItems,
              OrderDate: estTime,
              OrderStatus: 
                item.OrderStatus !== "Cancelled" && item.OrderStatus !== "Not Assigned" ?
                  <>
                    <FormControl variant="outlined" className={classes.formControl} fullWidth required>
                      {/* <InputLabel id="demo-simple-select-outlined-label">Status</InputLabel> */}
                      <Select
                          labelId="demo-simple-select-outlined-label"
                          id="demo-simple-select-outlined"
                          value={item.OrderStatus}
                          onChange={(e) => handleChange(e,index)}
                          label="Status"
                          name="Status"
                          className={classes.root}
                          style={{color: 'black'}}
                          required
                      >
                          <MenuItem value={"Pending"} style={{color: "red"}}>
                            Pending
                          </MenuItem>
                          <MenuItem value={"Cancelled"} style={{color: "red"}}>
                            Cancelled
                          </MenuItem>
                          <MenuItem value={"Ordered"}>Ordered</MenuItem>
                          <MenuItem value={"Picked Up"}>Picked Up</MenuItem>
                          <MenuItem value={"In Transit"}>In Transit</MenuItem>
                          <MenuItem value={"Delivered"}>Delivered</MenuItem>
                      </Select>
                    </FormControl>
                  </>
                :
                item.OrderStatus.toUpperCase(),
              OrderTotal: `$ ${item.OrderTotal}`,
              PaymentMethod: item.PaymentMethod, 
              Rider: item.Rider.FirstName,
              Actions: <><a href="/AdminOrderSDetails" title="edit" onClick={(e) => {e.preventDefault(); history.push('/AdminOrderSDetails', { from: index});}}><Typography style={{width: "100%"}}><EditRounded color="primary" /></Typography></a></>
            };
    
            rows.push(row)
            return true;
          })
       }else{
        return history.push("/Dashboard");
       }

    }
    
    return(
      <div style={{ height: 400, width: '100%' }}>
        
        <Calendar type={'general'} setStartDate={setStartDate} setEndDate={setEndDate}  />
        <MUIDataTable
          title={"Orders"}
          data={rows}
          columns={columns}
          options={options}
        />
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="success">
              Order Updated Successfully.
          </Alert>
        </Snackbar>
        <Snackbar open={open2} autoHideDuration={6000} onClose={handleClose2}>
            <Alert onClose={handleClose2} severity="error">
                Unable to update order at this time.
            </Alert>
        </Snackbar>
        {/*DELETE MODAL */}
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            className={classes.modal}
            open={open3}
            onClose={handleCloseX2}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
            timeout: 500,
            }}
        >
            <Fade in={open3}>
                <div className={clsx(classes.paper, 'modalMobile')}>
                    <h3 id="transition-modal-title" style={{textAlign: "center", color: "#F7B614"}}>Are You Sure?</h3>
                    <Link to={referralPath} className={classes.cartIcon} onClick={handleCloseX2}>
                            <img src="Images/CartCloseIcon.png" alt="closemodal" />
                    </Link>
                    <br />
                    <Grid container direction="row" spacing={1} className={classes.root} alignItems="center">
                        <Grid item xs={12} style={{textAlign: "center"}}>
                            <Button variant="contained" 
                                style={{backgroundColor: "red", fontFamily: "PT Sans"}} onClick={handleClose3}
                                color="secondary" size="small" className={`${classes.Button} ${classes.btnfonts}`}
                                fullWidth>
                                Cancel Order #{orders[selorderIndex]?._id}
                            </Button>
                            </Grid>
                        </Grid>
                </div>
            </Fade>
        </Modal>
        <style>
        {
          `
            th{
              background-color: #F7B614 !important;
            }

            th > span > button > span div > div{
              color: #FFF !important;
            }
          `
        }
        </style>
      </div>
    )
    
    
  }
  