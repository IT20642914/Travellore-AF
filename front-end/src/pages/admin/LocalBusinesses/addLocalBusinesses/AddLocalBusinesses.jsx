import React from 'react'
import { Box, Typography } from '@mui/material'
import SaveAltIcon from '@mui/icons-material/SaveAlt';
const AddLocalBusinesses = () => {
  return (
    <Box sx={{ height:"50rem" ,background:"linear-gradient(to bottom, #046380 0%, #012935 100%)", borderRadius:"4rem", margin:"2rem"}}>
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
            <Typography sx={{color:"white"}} for="comment">Description:</Typography >
            <textarea
              class="form-control"
              rows="5"
              id="description"
              placeholder="add  Description"
            ></textarea>
          </Box>
       

          <Box class="form-group">
            <Typography sx={{color:"white"}} for="inputAddress">Location 1</Typography >
            <input
              type="text"
              class="form-control"
              id="ingredients"
              placeholder="Enter location1 and Contact Number"
            />
          </Box>

          <Box class="form-group">
            <Typography sx={{color:"white"}} for="inputAddress">Location 2</Typography >
            <input
              type="text"
              class="form-control"
              id="ingredients"
              placeholder="Enter location2 and Contact Number"
            />
          </Box>

          <Box class="form-group">
            <Typography sx={{color:"white"}} for="inputAddress">Location 3</Typography >
            <input
              type="text"
              class="form-control"
              id="ingredients"
              placeholder="Enter location3 and Contact Number"
            />
          </Box>
          <Box class="form-group">
            <Typography sx={{color:"white"}} for="inputAddress">Select a Pitcture</Typography >
            <input
              type="file"
              class="form-control"
              id="ingredients"
              placeholder="Select Picture"
            />
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

export default AddLocalBusinesses
