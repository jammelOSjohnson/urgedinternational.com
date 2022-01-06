import React, {useEffect} from 'react';
import { useAppData } from '../../../Context/AppDataContext';
//import { DataGrid, GridColDef } from '@material-ui/data-grid';
import MUIDataTable from "mui-datatables";
import { useHistory } from 'react-router-dom';
import moment from 'moment';
import { EditRounded } from "@material-ui/icons/";
import { Backdrop, CircularProgress, createStyles, makeStyles, Theme } from '@material-ui/core';
import { useQuery, useSubscription } from '@apollo/client';
import { GET_ORDERS } from '../../../GraphQL/Queries';
import { ORDERS_SUBSCRIPTION } from '../../../GraphQL/Subscriptions';
  

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
      backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',
      },
    }),
  );
  
  
  
  export const OrdersTable: React.FC = function OrdersTable () {
    const classes = useStyles();
    var { value }  = useAppData();
    var { orders, fetchOrders, currentUser, userRolef, refreshingOrderTables } = value;
    var history = useHistory();
    const {data} = useQuery(GET_ORDERS);

    

    const rows = [] as Object[];
    useEffect(() => {
      try{
        if(data.getOrders !== null){
          var Orders = data.getOrders;
          refreshingOrderTables(value, Orders).then(()=>{
          
          });
        }

        
        // fetchOrders(value).then(()=>{
          
        // });
  
      }catch(e){
        //console.log(e)
      }
      // eslint-disable-next-line
    }, [currentUser]);
    
    // const handleEdit = (event) => {
    //   event.preventDefault();
    // }


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
            OrderStatus: item.OrderStatus, 
            OrderTotal: `$ ${item.OrderTotal}`,
            PaymentMethod: item.PaymentMethod, 
            Rider: item.Rider.FirstName,
            Actions: <><a href="javascript()" title="edit" onClick={(e) => {e.preventDefault(); history.push('/AdminOrderSDetails', { from: index});}}><EditRounded color="primary" /></a></>
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
      </div>
    )
    
    
  }
  