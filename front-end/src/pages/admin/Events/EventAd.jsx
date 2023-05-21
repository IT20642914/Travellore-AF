import React, { useState } from "react";
import { Box, Typography } from '@mui/material'
import AddEevent from './addEvent/AddEevent'
import AllEvents from "./AllEvents/AllEvents";
import Event from '../../../pages/Events/Event'
import IconButton from '@mui/material/IconButton';
import AddLocationIcon from '@mui/icons-material/AddLocation';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import ViewCompactIcon from '@mui/icons-material/ViewCompact';
const EventAd = () => {
  const [page, setPage] = useState("AllEvents");

  const handleClick = (pageName) => {
    setPage(pageName);
  };

  return (
    <Box sx={{display:"inline"}}>
  
      <IconButton onClick={() => handleClick('AddEevent')}>
        <Typography sx={{color:"#046380"}}>Add Events</Typography>
      <AddLocationIcon style={{color:"#046380"}}/>
      </IconButton>

      <IconButton onClick={() => handleClick('AllEvents')}>
        <Typography sx={{color:"#046380"}}>Viwe All Events</Typography>
      <ViewCompactIcon style={{color:"#046380"}}/>
      </IconButton>

      <IconButton onClick={() => handleClick('event')}>
        <Typography sx={{color:"#046380"}}>User View</Typography>
      <SupervisorAccountIcon style={{color:"#046380"}}/>
      </IconButton>
      <Box>
        {page === "AddEevent" && <AddEevent/>}
        {page === "AllEvents" && <AllEvents/>}
        {page === "event" && <Event/>}
      </Box>
    </Box>
  )
}

export default EventAd;
