import React,{ useState } from 'react'
import FNHSearchPropertyCard from "../../Components/FNHSearchPropertyCard/index"
import {  Grid } from "@mui/material";
import {Events}  from "../../constants/index";
import styles from "./style.module.scss";
import FNHText from "../../Components/FNHText/index";
import { Box } from "@mui/system";
import {Googlemap} from "../../Components/map/index";
const Event = () => {
  const [nameFilter, setNameFilter] = useState("");
  const [dateFilter, setDateFilter] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");



  return (
    <Grid className={styles.SerchlistGrid} >
    {/* SearchBar and Filter Grid Start*/}

    <Box className={styles.HeaderText}>
      <FNHText
        text="Find Your Events.Today"
        color="#046380"
        textAlign="left"
        variant="h6"
      />
    </Box>

    <Grid   className={styles.barGird} >

       <Grid   className={styles.inputGrid}>
        {/* <FNHLiconInput /> */}
      </Grid>
   
        <Grid  container className={styles.FilterGrid}>
        <Grid item>
  <input
    type="text"
    placeholder="Filter by name"
    value={nameFilter}
    onChange={(e) => setNameFilter(e.target.value)}
  />
</Grid>
<Grid item>
  <input
    type="text"
    placeholder="Filter by date"
    value={dateFilter}
    onChange={(e) => setDateFilter(e.target.value)}
  />
</Grid>
<Grid item>
  <input
    type="text"
    placeholder="Filter by category"
    value={categoryFilter}
    onChange={(e) => setCategoryFilter(e.target.value)}
  />
</Grid>
        </Grid>
    

    </Grid>
    {/* SearchBar and Filter Grid End*/}

    <Grid  className={styles.DataGrid} >
      <Grid
        sx={{
      
          minHeight: "20rem",
          minWidth: "65%",
          display: "flex",
          flexDirection: "column",
           backgroundColor: "#EDF2F3",
          borderRadius: "1rem",
          margin: "1rem 0",
        }}
        xs={7}
        sm={7}
        md={7}
        lg={7}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            minHeight: "3rem",
            margin: "1rem 0",
            padding: "0 1rem",
          }}
        >
          <FNHText
            text="Events"
            color="#1460BA"
            textAlign="left"
            variant="h6"
          />
        </Box>

       

        <Grid container spacing={7} sx={{ justifyContent: "center" }}>
              {Events.filter((event) => {
  return (
    event.name.toLowerCase().includes(nameFilter.toLowerCase()) &&
    event.date.includes(dateFilter) &&
    event.category.toLowerCase().includes(categoryFilter.toLowerCase())
  );
}).map((event, index) => (
               
                <Grid item  key={index}>
                
                  <FNHSearchPropertyCard
                    propertyId={event.id}
                    name={event.name}
                    date={event.date}
                    eventTopic={event.category}
                    eventType={event.eventType}
                    price={event.price}
                    time={event.time}
                    backgroundImage={event.image}
                    eventDetails={event.description}
                    address={event.address}
                    location={event.location}
                  />
                </Grid>
               
              ))
              }
            </Grid>
     
        </Grid>
        <Grid className={styles.mapGrid}>
         <Googlemap 
           apiKey="AIzaSyBZq5ejEeybo_1qhiWHIJlC66CZ3mrUrUI"
            zoom={12}
           center={{ lat: 6.906079, lng:  79.969628  }}
           center2={{ lat: 6.926079, lng:  79.957626  }}
         />
          {/* Maps foe that */}
        </Grid>
    
    </Grid>
    
  </Grid>
  
);
};

export default Event