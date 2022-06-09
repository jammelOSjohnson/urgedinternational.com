import React, {useEffect} from 'react';
import { useAppData } from '../../../Context/AppDataContext';
//import { DataGrid, GridColDef } from '@material-ui/data-grid';
import MUIDataTable from "mui-datatables";
import { useHistory } from 'react-router-dom';
import moment from 'moment';
import { EditRounded } from "@material-ui/icons/";
import { Button, createStyles, FormControl, makeStyles, MenuItem, Select, Snackbar, Theme, Typography } from '@material-ui/core';
import { useQuery } from '@apollo/client';
import { GET_ORDERS_BY_RIDERID } from '../../../GraphQL/Queries';
import { Alert } from '@material-ui/lab';
import clsx from 'clsx';
  
 
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
      Accept: {
        backgroundColor: "#4caf50",
        color: "#FFF",
        width: "150px",
        marginLeft: "auto",
        marginRight: "auto"
      },
      Reject: {
        backgroundColor: "#f50057",
        color: "#FFF",
        width: "150px",
        marginLeft: "auto",
        marginRight: "auto"
      }
    }),
  );
  
  
  
  export const OrdersTable: React.FC = function OrdersTable () {
    const classes = useStyles();
    var { value }  = useAppData();
    var { orders, riders, fetchRiders, UpdateOrderRejectionList, UpdateOrder, CreateOrderRejectionList, OrderRejectionList, refreshingOrderTables, currentUser, userRolef } = value;

    var history = useHistory();

    const [open, setOpen] = React.useState(false);
    const [open2, setOpen2] = React.useState(false);

    const {data} = useQuery(GET_ORDERS_BY_RIDERID,{
      variables: {Rider: value.userInfo._id},
      pollInterval: 500,
    });
    
    const rows = [] as Object[];
    useEffect(() => {
      try{
        if(value.riders.length === 0){
          fetchRiders(value);
        }
        if(data.getOrdersByRiderId !== null){
          var Orders = data.getOrdersByRiderId;
          refreshingOrderTables(value, Orders).then(()=>{
          
          });
        }
  
      }catch(e){
        //console.log(e)
      }
      // eslint-disable-next-line
    }, [currentUser, data]);

    const options = {
      filterType: 'dropdown',
      search: true,
      selectableRows: 'none',
      download: false,
      print: false
    };

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

    const handleReject = async(status, orderIndex) => {
      try{
          setOpen(false);
          setOpen2(false);
          console.log(status);
          console.log(orders[orderIndex].OrderStatus);
          let order = {...orders[orderIndex], Rider: orders[orderIndex].Rider };
          console.log(order);
          console.log(riders);
          
          await OrderRejectionList(order).then(async(res) => {
              if(res === null){
                let filteredRiders = 
                  riders.filter(rider => rider.disabled === false 
                  && rider.isAvailable === true &&
                  rider._id !== orders[orderIndex].Rider._id);
                console.log(filteredRiders);
                if(filteredRiders.length > 0){ 
                  order.Rider = filteredRiders[0]._id; 
                }else{
                  order.Status = "Rejected";
                }
                console.log('about to update order');
                await UpdateOrder(value, order).then(async (res) => {
                  if(res){
                      console.log('about to create rejection list')
                      await CreateOrderRejectionList(order).then((res) => {
                        if(res !== null){
                            setOpen(true);
                        }else{
                          setOpen2(true);
                        }
                      });
                  }else{
                    setOpen2(true);
                  }
                }) 
              }else{
                console.log(res);
                let unrestricted = true;
                let filteredRiders = 
                  riders.filter(rider => rider.disabled === false 
                  && rider.isAvailable === true &&
                  rider._id !== orders[orderIndex].Rider._id);
                console.log(filteredRiders);
                if(filteredRiders.length > 0){ 
                  let unrestricktedRiders = filteredRiders.filter(rider => !res.RejectionList.includes(rider._id));
                  console.log('unrestricted', unrestricktedRiders)
                  if(unrestricktedRiders.length !== 0){
                    order.Rider = unrestricktedRiders[0]._id; 
                  }else{
                    order.OrderStatus = "Not Assigned";
                    unrestricted = false;
                  }
                  
                }else{
                  order.OrderStatus = "Not Assigned";
                }
                console.log('about to update order', order);
                await UpdateOrder(value, order).then(async (res2) => {
                  if(res2){
                      if(unrestricted){
                        console.log('about to update rejection list')
                        await UpdateOrderRejectionList(order, res._id).then((res) => {
                          if(res !== null){
                              setOpen(true);
                          }else{
                            setOpen2(true);
                          }
                        });
                      }else{
                        setOpen(true);
                      }

                  }else{
                    setOpen2(true);
                  }
                }) 
              }
          });
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
    
    if(userRolef !== undefined && orders.length !== 0){
       if(userRolef === "Rider"){
        let filteredOrders = orders.filter((item) => item.OrderStatus !== "Delivered");
        filteredOrders.map((item, index) => {
          const now = new Date(parseInt(item.OrderDate, 10));
          const estTime = moment.tz(now, "America/Jamaica").format("YYYY-MM-DD h:mm a");

          var orderItems = "";
          orderItems = orderItems + item.OrderItems.map((item,index) => {
            return(
              item.chickenFlavour1 !== "" && item.chickenFlavour1 !== "Select Flavour" && item.chickenFlavour1 !== null && item.chickenFlavour1 !== undefined?
              // eslint-disable-next-line no-useless-concat
            `${item.itemName + ": "}\n${item.chickenFlavour1 + " | "}\n${item.chickenFlavour2 + " | "}\n${item.drink !== "Select Drink"? item.drink + " | ": "" + " | "}\n${item.otherIntructions + " | "}\n${'Not Available? ' + item.ifnotAvailable}` :
            // eslint-disable-next-line no-useless-concat
            `${item.itemName + ": "}\n${item.drink !== "Select Drink"? item.drink + " | ": "" + " | "}\n${item.otherIntructions + " | "}\n${item.side!== undefined && item.side!== "Select Side"?'Side:' + item.side + " | ": ""}\n${'Not Available? ' + item.ifnotAvailable}`
            )
          })

          let row = {
            _id: item._id,
            Description: orderItems, 
            OrderDate: estTime,
            OrderStatus:
            item.OrderStatus === "Pending"?
              <>
                <Button 
                  className={clsx(classes.Accept, 'btn-accept')} 
                  onClick={() => handleSubmit("Ordered",index)}
                >
                  Accept
                </Button>
                <br />
                <br />
                <Button 
                  className={clsx(classes.Reject, 'btn-reject')}
                  onClick={() => handleReject("Not Assigned",index)}
                >
                  Reject
                </Button>
              </>
            :
            item.OrderStatus === "Cancelled" || item.OrderStatus === "Not Assigned"?
              <>
                <Typography style={{color: "red"}}>
                  <b>{item.OrderStatus === "Not Assigned"? <b>REJECTED</b>: item.OrderStatus}</b>
                </Typography>
              </>
            :
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
                  {/* <MenuItem value={"Pending"} style={{color: "red"}}>
                    Pending
                  </MenuItem> */}
                  <MenuItem value={"Ordered"}>Ordered</MenuItem>
                  <MenuItem value={"Picked Up"}>Picked Up</MenuItem>
                  <MenuItem value={"In Transit"}>In Transit</MenuItem>
                  <MenuItem value={"Delivered"}>Delivered</MenuItem>
              </Select>
            </FormControl>
            ,  
            OrderTotal: `$ ${item.OrderTotal}`, 
            PaymentMethod: item.PaymentMethod,
            Rider: item.Rider.FirstName,
            Actions: <><a href="javascript()" title="edit" onClick={(e) => {e.preventDefault(); history.push('/DeliveryOrdersDetails', { from: index});}}><EditRounded color="primary" /></a></>
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
          {`
            th{
              background-color: #F7B614 !important;
            }

            th > span > button > span div > div{
              color: #FFF !important;
            }

            .btn-accept:hover{
              background-color: #4caf50;
            }

            .btn-reject:hover{
              background-color: #f50057;
            }
          `}
        </style>
      </div>
    )
    
  }
  