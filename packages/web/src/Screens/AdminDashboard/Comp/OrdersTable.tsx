import React, {useEffect} from 'react';
import { useAppData } from '../../../Context/AppDataContext';
//import { DataGrid, GridColDef } from '@material-ui/data-grid';
import MUIDataTable from "mui-datatables";
import { useHistory } from 'react-router-dom';
import moment from 'moment';
import { EditRounded } from "@material-ui/icons/";
import { Backdrop, CircularProgress, createStyles, FormControl, makeStyles, MenuItem, Select, Snackbar, Theme } from '@material-ui/core';
import { useQuery } from '@apollo/client';
import { GET_ORDERS } from '../../../GraphQL/Queries';
import { Alert } from '@material-ui/lab';
  

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
    }),
  );
  
  
  
  export const OrdersTable: React.FC = function OrdersTable () {
    const classes = useStyles();
    var { value }  = useAppData();
    var { orders, fetchOrders, UpdateOrder, currentUser, userRolef, refreshingOrderTables } = value;
    var history = useHistory();

    const [open, setOpen] = React.useState(false);
    const [open2, setOpen2] = React.useState(false);

    const {data} = useQuery(GET_ORDERS);

    const rows = [] as Object[];
    useEffect(() => {
      try{
        if(data.getOrders !== null){
          var Orders = data.getOrders;
          if(Orders.length > orders.length){
            refreshingOrderTables(value, Orders).then(()=>{
          
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
          console.log(status);
          console.log(orders[orderIndex].OrderStatus);
          let order = {...orders[orderIndex], OrderStatus: status, Rider: orders[orderIndex].Rider._id };
          console.log(order);
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
        handleSubmit(status,index);
      }catch(err){
        console.log(err);
        setOpen2(true);
      }
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



    const options = {
      filterType: 'dropdown',
      search: true,
      selectableRows: false
    };
    
    if(userRolef !== undefined && orders.length !== 0){
       if(userRolef === "Admin"){
          orders.map((item, index) => {
            const now = new Date(parseInt(item.OrderDate, 10));
            const estTime = moment.tz(now, "America/Jamaica").format("YYYY-MM-DD h:mm a");

            var orderItems = "";
            orderItems = orderItems + item.OrderItems.map((item,index) => {
              return(
                item.chickenFlavour1 !== "" && item.chickenFlavour1 !== "Select Flavour" && item.chickenFlavour1 !== null && item.chickenFlavour1 !== undefined?
              `${item.itemName + ": "}\n${item.chickenFlavour1 + " | "}\n${item.chickenFlavour2 + " | "}
              \n${item.drink !== "Select Drink"? item.drink + " | ": "" + " | "}\n${item.otherIntructions + " | "}\n${'Not Available? ' + item.ifnotAvailable}` :
              `${item.itemName + ": "}\n${item.drink !== "Select Drink"? item.drink + " | ": "" + " | "}\n${item.otherIntructions + " | "}\n${'Not Available? ' + item.ifnotAvailable}`
              )
            })
            let row = {
              _id: item._id, 
              Description: orderItems,
              OrderDate: estTime,
              OrderStatus: <>
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
                      <MenuItem value={"Ordered"}>Ordered</MenuItem>
                      <MenuItem value={"Picked Up"}>Picked Up</MenuItem>
                      <MenuItem value={"In Transit"}>In Transit</MenuItem>
                      <MenuItem value={"Delivered"}>Delivered</MenuItem>
                  </Select>
                </FormControl>
              </>, 
              OrderTotal: `$ ${item.OrderTotal}`,
              PaymentMethod: item.PaymentMethod, 
              Rider: item.Rider.FirstName,
              Actions: <><a href="/AdminOrderSDetails" title="edit" onClick={(e) => {e.preventDefault(); history.push('/AdminOrderSDetails', { from: index});}}><EditRounded color="primary" /></a></>
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
        {/* <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          checkboxSelection={false}
          disableSelectionOnClick
        /> */}
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
  