import React, {useEffect} from 'react';
import { useAppData } from '../../../Context/AppDataContext';
import { DataGrid, GridColDef } from '@material-ui/data-grid';
import moment from 'moment';
import { useHistory } from 'react-router-dom';
import MUIDataTable from "mui-datatables";

const columns = [
  { 
    name: 'id', 
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
  },{
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
    name: 'Rider',
    label: 'Delivery Partner',
    options: {
      filter: true,
      sort: true,
     }
  },
]



export const HistoryTable: React.FC = function HistoryTable () {
 
  var { value }  = useAppData();
  var history = useHistory();
  var { orders, fetchOrdersByUser, currentUser, userRolef } = value;

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
    selectableRows: false,
    download: false,
    print: false
  };

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
          id: item._id,
          Description: orderItems,
          OrderDate: estTime, 
          OrderStatus: item.OrderStatus, 
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
