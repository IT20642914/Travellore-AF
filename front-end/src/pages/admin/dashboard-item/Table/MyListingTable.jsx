import React from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { Box } from '@mui/material';

const columns: GridColDef[] = [
  { field: 'address', headerName: 'Address', width: 200,  renderCell: (params) => <img src={params.value} alt="Address" style={{ width: '5rem', height: '5rem' }} /> },
  { field: 'firstName', headerName: 'First name', width: 130 },
  { field: 'lastName', headerName: 'Last name', width: 130 },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 90,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params: GridValueGetterParams) =>
      `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35, address:"/images/agentpic.jpg" },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42,    address:"/images/agentpic.jpg", },
  // ... rest of the rows
];

const MyListingTable = () => {
    const getRowHeight = () => {
        // Return the desired row height in pixels
        return 100;
      };
 return (
    <Box style={{ height: 400, width: '100%' }}>
   
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
        getRowHeight={getRowHeight}
      />


    </Box>
   
 );
};

export default MyListingTable;
