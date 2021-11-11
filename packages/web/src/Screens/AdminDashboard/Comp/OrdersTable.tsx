import React, {useEffect} from 'react';
import { useAppData } from '../../../Context/AppDataContext';
import { DataGrid, GridColDef } from '@material-ui/data-grid';
import moment from 'moment';
import { EditRounded } from "@material-ui/icons/";
  
  const columns: GridColDef[] = [
    { field: 'id', headerName: 'Transaction', width: 200 },
    {
      field: 'OrderDate',
      headerName: 'Date',
      width: 195,
      editable: false,
    },
    {
      field: 'OrderStatus',
      headerName: 'Status',
      width: 195,
      editable: false,
    },
    {
      field: 'OrderTotal',
      headerName: 'Order Total',
      width: 195,
      editable: false,
    },
    {
      field: 'Rider',
      headerName: 'Delivered By',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160
    },
    {
      field: 'Actions',
      headerName: 'Action',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 100
    },
  ];
  
  
  
  
  
  export const OrdersTable: React.FC = function OrdersTable () {
   
    var { value }  = useAppData();
    var { orders, fetchOrders, currentUser } = value;
  
    const rows = [] as Object[];
    useEffect(() => {
      try{
        fetchOrders(value).then(()=>{
          
        });
  
      }catch(e){
        console.log(e)
      }
      // eslint-disable-next-line
    }, [currentUser]);
    
    const handleEdit = (event) => {
      event.preventDefault();
    }
    if(orders.length !== 0){
      orders.map((item, index) => {
        const now = new Date(item.OrderDate * 100);
        const estTime = moment.tz(now, "America/Jamaica").format();
        let row = {
          id: item._id, 
          OrderDate: new Date(parseInt(item.OrderDate, 10)),
          OrderStatus: item.OrderStatus, 
          OrderTotal: `$ ${item.OrderTotal}`, 
          Rider: item.Rider,
          Actions: <><a href="javascript()" title="edit" onClick={() => handleEdit}><EditRounded color="primary" /></a></>
        };
  
        rows.push(row)
        return true;
      })
    }
  
    return (
      <div style={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          checkboxSelection={false}
          disableSelectionOnClick
        />
      </div>
    );
  }
  