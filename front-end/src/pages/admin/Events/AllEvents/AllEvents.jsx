import React from 'react'
import { Link } from "react-router-dom";

import './events.css';
import { useNavigate } from 'react-router-dom';
// import getCurrentUser from '../../../../utils/getCurrentUser';
//import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
// import newRequest from '../../../../utils/newRequest';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';
import IconButton from '@mui/material/IconButton';
import { Events } from '../../../../constants';
import { Box, Typography } from '@mui/material'
import MyListingTable from '../../../admin/dashboard-item/Table/MyListingTable'
import { useDispatch,useSelector } from 'react-redux';
import { deleteEvent } from '../../../../Redux/actions/eventAction';
const AllEvents = () => {
  const dispatch = useDispatch();
  
  const EventList = useSelector((state) => state.events.events);
  const accessKey = useSelector((state) => state.login.accessKey);
    const navigate = useNavigate();
console.log(EventList)
   const handleDelete = (id) => {
  console.log("delete",accessKey);
 dispatch(deleteEvent(id,accessKey));
};
    const handlUpdate = (id) => {
      // navigate("/")
    }
  return (
    <Box>
    
    <Box className='myProducts'>
     
        <Box sx={{background:"white"}} className='container'>
          <Box className='title'>
            <Typography color={"#046380"}  variant='h3'>all Events</Typography  >
          </Box>
          <table>
            <tbody>
            <tr>
              <th><Typography color={"#046380"} sx={{fontWeight:"700"}} variant='h5'>Image  Of  Event</Typography  > </th>
              <th><Typography color={"#046380"} sx={{fontWeight:"700"}} variant='h5'>Date</Typography ></th>
              <th><Typography color={"#046380"} sx={{fontWeight:"700"}} variant='h5'>Category</Typography > </th>
              <th><Typography color={"#046380"} sx={{fontWeight:"700"}} variant='h5'>Description</Typography ></th>
              <th><Typography color={"#046380"} sx={{fontWeight:"700"}} variant='h5'>Action</Typography ></th>
            </tr>

            {EventList.map((add) => (
              <tr key={add.id}>
                <td>
                  <img className='img' src={add.img} alt={add.image} />
                </td>
           
                <td>{add.date}</td>
                <td>{add.category}</td>
                <td>{add.description}</td>
               
                <td>
                <Box className="actionBtn">
                <IconButton  onClick={() => handleDelete(add._id)}> <DeleteForeverIcon style={{ color: 'red' }} /></IconButton>
                <IconButton  onClick={() => handlUpdate(add.id)}> <EditIcon style={{ color: '#046380' }} /></IconButton>

                  </Box>
                </td>
              </tr>
            ))}
            </tbody>
          </table>
        </Box>
 

    </Box>




    </Box>
  )
}

export default AllEvents
