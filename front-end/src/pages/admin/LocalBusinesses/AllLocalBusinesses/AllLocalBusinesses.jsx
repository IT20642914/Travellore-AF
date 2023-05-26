import React from 'react'
import { Link } from "react-router-dom";

import './localbusinesses.css';
import { useNavigate } from 'react-router-dom';
// import getCurrentUser from '../../../../utils/getCurrentUser';
//import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
// import newRequest from '../../../../utils/newRequest';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';
import IconButton from '@mui/material/IconButton';
import { LocalBusinesses } from '../../../../constants';
import { Box, Typography, Table, TableBody,TableCell, TableContainer,TableHead,TableRow,Paper} from '@mui/material';

// import Table from "@material-ui/core/Table";
// import TableBody from "@material-ui/core/TableBody";
// import TableCell from "@material-ui/core/TableCell";
// import TableContainer from "@material-ui/core/TableContainer";
// import TableHead from "@material-ui/core/TableHead";
// import TableRow from "@material-ui/core/TableRow";
// import Paper from "@material-ui/core/Paper";

import MyListingTable from '../../../admin/dashboard-item/Table/MyListingTable'
import { useDispatch, useSelector } from 'react-redux';
import { deleteLBProduct } from '../../../../Redux/actions/localBusinessesAction';
const AllLocalBusinesses = () => {
  //fghjhgfrtyuijhgf
  console.log("sdfrewfdd")
  const dispatch = useDispatch();
  const LbproductList = useSelector((state) => state.lbproducts.lbproducts);
  const accessKey = useSelector((state) => state.login.accessKey);
  const navigate = useNavigate();

  const handleDelete = (id) => {
    console.log("delete", accessKey);
    dispatch(deleteLBProduct(id, accessKey));
  };

  const handlUpdate = (id) => {
    navigate("/")
  }
  return (
    <Box>

      <Box sx className='myProducts'>

        <Box sx={{ background: "white" }} className='container'>
          <Box className='title'>
            <Typography color={"#046380"} variant='h3'>All Business Products</Typography  >
          </Box>

          <TableContainer component={Paper}>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>S.No</TableCell>
                  <TableCell align="right">Image</TableCell>
                  <TableCell align="right">Name</TableCell>
                  {/* <TableCell align="right">UserID</TableCell> */}
                  <TableCell align="right">Category</TableCell>
                  <TableCell align="right" width="30%">Description</TableCell>
                  <TableCell align="right">Location1</TableCell>
                  <TableCell align="right">Location2</TableCell>
                  <TableCell align="right">Location3</TableCell>
                  <TableCell align="right">Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {LbproductList.map((row,index) => (
                  <TableRow key={index}>
                    <TableCell component="th" scope="row">
                      {index+1}
                    </TableCell>
                    <TableCell align="right"><img className='img' src={row.img} alt='product img' /></TableCell>
                    <TableCell align="right">{row.name}</TableCell>
                    <TableCell align="right">{row.category}</TableCell>
                    {/* <TableCell align="right">{row._id}</TableCell> */}
                    <TableCell align="right" width="30%">{row.desc}</TableCell>
                    <TableCell align="right">{row.location1}</TableCell>
                    <TableCell align="right">{row.location2}</TableCell>
                    <TableCell align="right">{row.location3}</TableCell>
                    <TableCell align="right">
                    <Box className="actionBtn">
                    <IconButton onClick={() => handleDelete(row._id)}> <DeleteForeverIcon style={{ color: 'red' }} /></IconButton>
                    <IconButton onClick={() => handlUpdate(row._id)}> <EditIcon style={{ color: '#046380' }} /></IconButton>
                  </Box>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

        </Box>

      </Box>




    </Box>
  )
}

export default AllLocalBusinesses
