import React, {useEffect} from 'react';
import clsx from 'clsx';
import { createStyles, lighten, makeStyles, Theme, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, TableSortLabel, Toolbar, Typography, Paper, Checkbox, IconButton, Tooltip, FormControlLabel, Switch, Collapse, Box } from '@material-ui/core';
import { useAppData } from '../../../Context/AppDataContext';
import { DataGrid, GridColDef, GridValueGetterParams } from '@material-ui/data-grid';

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
    headerName: 'Delivered By',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160
  },
];





export const HistoryTable: React.FC = function HistoryTable () {
 
  var { value }  = useAppData();
  var { orders, fetchOrdersByUser, currentUser } = value;

  const rows = [] as Object[];
  useEffect(() => {
    try{
      fetchOrdersByUser(value).then(()=>{
        
      });

    }catch(e){
      console.log(e)
    }
  }, [currentUser]);

  if(orders.length !== 0){
    orders.map((item, index) => {
      let row = {
        id: item._id, 
        OrderDate: item.OrderDate, 
        OrderStatus: item.OrderStatus, 
        OrderTotal: `$ ${item.OrderTotal}`, 
        Rider: item.Rider
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
