import React, {useEffect} from 'react';
import { useAppData } from '../../../Context/AppDataContext';
//import { DataGrid, GridColDef } from '@material-ui/data-grid';
import MUIDataTable from "mui-datatables";
import { useHistory } from 'react-router-dom';
import moment from 'moment';
import { EditRounded } from "@material-ui/icons/";
import { Backdrop, CircularProgress, createStyles, makeStyles, Theme } from '@material-ui/core';
  
  // const columns: GridColDef[] = [
  //   { field: 'id', headerName: 'Transaction', width: 200 },
  //   {
  //     field: 'OrderDate',
  //     headerName: 'Date',
  //     width: 195,
  //     editable: false,
  //   },
  //   {
  //     field: 'OrderStatus',
  //     headerName: 'Status',
  //     width: 195,
  //     editable: false,
  //   },
  //   {
  //     field: 'OrderTotal',
  //     headerName: 'Order Total',
  //     width: 195,
  //     editable: false,
  //   },
  //   {
  //     field: 'Rider',
  //     headerName: 'Delivered By',
  //     description: 'This column has a value getter and is not sortable.',
  //     sortable: false,
  //     width: 160
  //   },
  //   {
  //     field: 'Actions',
  //     headerName: 'Action',
  //     description: 'This column has a value getter and is not sortable.',
  //     sortable: false,
  //     width: 100
  //   },
  // ];
  
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
    var { orders, fetchOrdersForRider, currentUser, userRolef } = value;
    var history = useHistory();

    const rows = [] as Object[];
    useEffect(() => {
      try{
        fetchOrdersForRider(value).then(()=>{
          
        });
  
      }catch(e){
        //console.log(e)
      }
      // eslint-disable-next-line
    }, [currentUser]);
    
    const handleEdit = (event) => {
      event.preventDefault();
    }

    const options = {
      filterType: 'dropdown',
      search: true,
      selectableRows: false,
      download: false,
      print: false
    };
    
    if(userRolef !== undefined && orders.length !== 0){
       if(userRolef === "Rider"){
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
      </div>
    )
    
  }
  