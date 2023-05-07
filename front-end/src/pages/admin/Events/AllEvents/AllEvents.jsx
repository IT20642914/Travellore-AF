import React from 'react'
import { Link } from "react-router-dom";

import './events.css';
import { useNavigate } from 'react-router-dom';
// import getCurrentUser from '../../../../utils/getCurrentUser';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
// import newRequest from '../../../../utils/newRequest';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';
import IconButton from '@mui/material/IconButton';
import { Events } from '../../../../constants';
import { Box, Typography } from '@mui/material'
const AllEvents = () => {

    // const queryClient = useQueryClient();
   



    const navigate = useNavigate();
   const handleDelete =()=>{
console.log("delete")
   }
    const handlUpdate = (id) => {
      navigate("/")
    }
  return (
    <Box>
    
    <Box sx className='myProducts'>
     
        <Box sx={{background:"white"}} className='container'>
          <Box className='title'>
            <Typography color={"#046380"}  variant='h3'>all Events</Typography  >
          </Box>
          <table>
            <tr>
              <th><Typography color={"#046380"} sx={{fontWeight:"700"}} variant='h5'>Image  Of  Event</Typography  > </th>
              <th><Typography color={"#046380"} sx={{fontWeight:"700"}} variant='h5'>Date</Typography ></th>
              <th><Typography color={"#046380"} sx={{fontWeight:"700"}} variant='h5'>Category</Typography > </th>
              <th><Typography color={"#046380"} sx={{fontWeight:"700"}} variant='h5'>Description</Typography ></th>
              <th><Typography color={"#046380"} sx={{fontWeight:"700"}} variant='h5'>Action</Typography ></th>
            </tr>

            {Events.map((add) => (
              <tr key={add.id}>
                <td>
                  <img className='img' src={add.image} alt='item img' />
                </td>
                <td>{add.date}</td>
                <td>{add.category}</td>
                <td>{add.description}</td>
               
                <td>
                <Box className="actionBtn">
                <IconButton  onClick={() => handleDelete(add.id)}> <DeleteForeverIcon style={{ color: 'red' }} /></IconButton>
                <IconButton  onClick={() => handlUpdate(add.id)}> <EditIcon style={{ color: '#046380' }} /></IconButton>

                  </Box>
                </td>
              </tr>
            ))}
          </table>
        </Box>

    </Box>




    </Box>
  )
}

export default AllEvents
