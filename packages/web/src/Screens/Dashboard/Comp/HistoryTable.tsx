import React, {useEffect} from 'react';
import { useAppData } from '../../../Context/AppDataContext';
import { DataGrid, GridColDef } from '@material-ui/data-grid';
import moment from 'moment';
import { useHistory } from 'react-router-dom';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'Transaction', width: 414 },
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
    headerName: 'Delivery Partner',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160
  },
];





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

  if(userRolef !== undefined && orders.length !== 0){
    if(userRolef === "Admin" || userRolef === "Rider" || userRolef === "Customer" ){
      orders.map((item, index) => {
        const now = new Date(parseInt(item.OrderDate, 10));
        const estTime = moment.tz(now, "America/Jamaica").format();
        //console.log(item);
        let row = {
          id: item._id, 
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
