import React, { useState } from "react";
import { Box, Typography } from '@mui/material'
import IconButton from '@mui/material/IconButton';
import AddLocationIcon from '@mui/icons-material/AddLocation';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import ViewCompactIcon from '@mui/icons-material/ViewCompact';
import AddLocalBusinesses from './addLocalBusinesses/AddLocalBusinesses'
import AllLocalBusinesses from './AllLocalBusinesses/AllLocalBusinesses'
import Business from "../../../pages/LocalBusinesses/Business";

const LocalBusinessesAd = () => {
  const [page, setPage] = useState("AllLocalBusinesses");

  const handleClick = (pageName) => {
    setPage(pageName);
  };

  return (
    <Box sx={{display:"inline"}}>
  
      <IconButton onClick={() => handleClick('AddLocalBusinesses')}>
        <Typography sx={{color:"#046380"}}>Add Local Business Product</Typography>
      <AddLocationIcon style={{color:"#046380"}}/>
      </IconButton>

      <IconButton onClick={() => handleClick('AllLocalBusinesses')}>
        <Typography sx={{color:"#046380"}}>Viwe All Business Products</Typography>
      <ViewCompactIcon style={{color:"#046380"}}/>
      </IconButton>

      <IconButton onClick={() => handleClick('Business')}>
        <Typography sx={{color:"#046380"}}>User View</Typography>
      <SupervisorAccountIcon style={{color:"#046380"}}/>
      </IconButton>
      <Box>
        {page === "AddLocalBusinesses" && <AddLocalBusinesses/>}
        {page === "AllLocalBusinesses" && <AllLocalBusinesses/>}
        {page === "Business" && <Business/>}
      </Box>
    </Box>
  )
}

export default LocalBusinessesAd;
