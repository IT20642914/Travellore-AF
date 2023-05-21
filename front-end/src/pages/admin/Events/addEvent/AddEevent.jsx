import React from 'react'
import { Box, Typography } from '@mui/material'
import SaveAltIcon from '@mui/icons-material/SaveAlt';
const AddEevent = () => {
  return (
    <Box sx={{ height:"50rem" ,background:  "linear-gradient(323.85deg, #012935.14%, #046380 99.41%, #012935 99.41%)", borderRadius:"4rem", margin:"2rem"}}>
       <Box className="RecipesPage flex">


      <Box sx={{marginTop:"1rem", paddingTop:"2rem"}} className="container flex">
        <form action="" className="form grid">
          <Box class="form-group">
            <Typography sx={{color:"white"}} for="Title">Category</Typography >
            <input
              type="text"
              class="form-control"
              id="inputTitle"
              placeholder="Enter Category"
            />
          </Box>

          <Box class="form-group">
            <Typography sx={{color:"white"}} for="Title">Name</Typography >
            <input
              type="text"
              class="form-control"
              id="inputTitle"
              placeholder="Enter Name"
            />
          </Box>

          <Box class="form-group">
            <Typography sx={{color:"white"}} for="Title">Date</Typography >
            <input
              type="text"
              class="form-control"
              id="inputTitle"
              placeholder="Enter Date"
            />
          </Box>

       

          <Box class="form-group">
            <Typography sx={{color:"white"}} for="inputAddress">location</Typography >
            <input
              type="text"
              class="form-control"
              id="ingredients"
              placeholder="Enter location"
            />
          </Box>
          <Box class="form-group">
            <Typography sx={{color:"white"}} for="inputAddress">Price</Typography >
            <input
              type="text"
              class="form-control"
              id="ingredients"
              placeholder="Enter Price"
            />
          </Box>
          <Box class="form-group">
            <Typography sx={{color:"white"}} for="inputAddress">Select a Pitcture</Typography >
            <input
              type="file"
              class="form-control"
              id="ingredients"
              placeholder="Enter Price"
            />
          </Box>

          <Box class="form-group">
            <Typography sx={{color:"white"}} for="comment">Description:</Typography >
            <textarea
              class="form-control"
              rows="5"
              id="description"
              placeholder="add  Description"
            ></textarea>
          </Box>

       
            <button type="submit" className="btn flex">
            <SaveAltIcon  style={{ color:"white"}}/>
          <Typography sx={{color:"white"}} for="comment"> Add Details</Typography >
            </button>
          
        </form>
      </Box>
    </Box>

    </Box>
  )
}

export default AddEevent
