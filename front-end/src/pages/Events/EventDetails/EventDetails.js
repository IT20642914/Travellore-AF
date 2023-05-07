import React from 'react'
import { Box, Grid } from "@mui/material";
import { useParams } from "react-router-dom";
import Styles from "./styles.module.scss";
import FNHText from "../../../Components/FNHText/";
import { Events } from '../../../constants';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';


const EventDetails = () => {
  const { propertyId  } = useParams();

  console.log("propertyId",propertyId)
  const property = Events.find((p) => p.id === Number(propertyId));
  if (!property) {
    return <div>Property not found</div>;
  }



  const {
    id,
    name,
    date,
    time,
    location,
    description,
    registrationLink,
    price,
    category,
    image,
  } = property;







  return (
    <Grid
    
    className={Styles.DetailGrid}
  >
  <Box
        sx={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          // height: "15rem",
          backgroundPosition: "center center",
          position: "relative",
          borderRadius: "1rem",
        }}
      >  
      
      </Box>
      
    </Grid>

  )
}

export default EventDetails
