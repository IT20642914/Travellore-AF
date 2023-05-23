import React from 'react'
import { Box, Grid } from "@mui/material";
import { useParams } from "react-router-dom";
import Styles from "./styles.module.scss";
import FNHText from "../../../Components/FNHText";
import { LocalBusinesses } from '../../../constants';
import { Googlemap } from "../../../Components/map/index";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import LocationIcon from "../../../assets/icon/LocationIcon";
const LocalBusinessesDetails = () => {
  const { propertyId } = useParams();

  console.log("propertyId", propertyId)
  const property = LocalBusinesses.find((p) => p.id === Number(propertyId));
  if (!property) {
    return <div>Property not found</div>;
  }
  const {
    category,
    name,
    description,
    location1,
    location2,
    location3,
    image,



  } = property;






  return (

    <Grid
      className={Styles.DetailGrid}
    >

      <Box className={Styles.HeaderText}>
        <FNHText
          text="Find Local Products"
          fontSize='3rem'
          color="#046380"
          textAlign="left"
          variant="h6"
        />
      </Box>

      <Box sx={{ alignItems: "center", justifyContent: "center", display: "flex", borderRadius: "2rem", height: "60rem", width: "100%", margin: "4rem", background: "linear-gradient(to bottom, #046380 0%, #012935 100%)" }}>
        <Box
          sx={{
            display: { xs: "inline", sm: "flex" },
            justifyContent: "space-evenly",
            margin: "1rem 0",
            padding: "0 1rem",
          }}
        >

          <Box sx={{ display: "contents" }} >



            <Card
              sx={{
                width: "30rem",
                height: "50rem",
                borderRadius: "1rem",
                padding: "0.5rem",
              }}
            >
              <Box sx={{ margin: "1rem", justifyContent: "center", justifyItems: "center", alignItems: "center" }}>
                <FNHText
                  text={name}
                  // color="#046380"
                  textAlign="left"
                  fontWeight='900'
                  fontSize='2rem'
                /></Box>


              <Box
                sx={{
                  backgroundImage: `url(${image})`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  height: "15rem",
                  backgroundPosition: "center center",
                  position: "relative",
                  borderRadius: "1rem",
                }}
              >   </Box>


              <CardContent sx={{ padding: "0" }}>
                <Box
                  sx={{
                    backgroundColor: "transparent",
                    display: "flex",
                    justifyContent: "end",
                  }}
                >
                  <Box
                    sx={{
                      backgroundColor: "#fff",
                      borderRadius: "5rem",
                      padding: "0.25rem",
                      margin: "0.5rem",
                    }}
                  >

                  </Box>
                </Box>
              </CardContent>






              <Box
                sx={{
                  padding: "0 0.5rem 0.5rem 0",
                }}
              >



                <Box
                  sx={{
                    display: "flex",
                    height: "4rem",
                    alignItems: "center",
                    marginTop: "1rem",
                  }}
                >
                  <Box>
                    <FNHText
                      text={category}
                      color="black"
                      fontWeight="700"
                      fontSize="1.5rem"
                    />
                  </Box>
                </Box>




                <Box sx={{ display: "flex", flexDirection: "column" }}>
                  <Box
                    sx={{

                      textAlign: "start",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        textAlign: "center",
                        justifyContent: "left",
                        justifyItems: "center"
                      }}
                    >
                      <LocationIcon fill="#1460BA" width="25" height="25" />
                      <FNHText
                        color="#046380"
                        text={location1}
                        // text="location...."
                        fontWeight="700"
                        fontSize="1rem"
                      />
                      {/* mn------------------------------------------------------------------------------------------------- */}
                      <LocationIcon fill="#1460BA" width="25" height="25" />
                      <FNHText
                        color="#046380"
                        text={location2}
                        // text="location...."
                        fontWeight="700"
                        fontSize="1rem"
                      />
                       <LocationIcon fill="#1460BA" width="25" height="25" />
                      <FNHText
                        color="#046380"
                        text={location3}
                        // text="location...."
                        fontWeight="700"
                        fontSize="1rem"
                      />
                      {/* mn------------------------------------------------------------------------------------------------------- */}
                    </Box>
                    <Box sx={{ marginTop: "1rem", display: "flex" }}>
                      <FNHText
                        //  color="#046380"
                        text="description:"
                        fontWeight="900"
                        fontSize="1rem"
                      />

                      <FNHText
                        color="#046380"
                        text={description}
                        fontWeight="500"
                        fontSize="1rem"
                      />
                    </Box>
                  </Box>

                  
                </Box>
              </Box>
            </Card>



          </Box>
        </Box>




        <Grid sx={{ width: "50rem", height: "50rem" }}>
          <Googlemap
            apiKey="AIzaSyBZq5ejEeybo_1qhiWHIJlC66CZ3mrUrUI"
            zoom={12}
            center={{ lat: 6.906079, lng: 79.969628 }}
            center2={{ lat: 6.926079, lng: 79.957626 }}
          />
          {/* Maps foe that */}
        </Grid>
      </Box>
    </Grid>

  )
}

export default LocalBusinessesDetails
