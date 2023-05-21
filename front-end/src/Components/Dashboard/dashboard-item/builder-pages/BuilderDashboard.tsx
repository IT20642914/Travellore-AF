import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
} from "@mui/material";
import React from "react";
import BuilderDashbordIMG from "../../../../assets/images/BuilderDashbordIMG.png";
import FNHText from "../../../../components/atoms/FNHText";
import FNHBCard from "../../../../components/organisms/Builder/FNHBCard/FNHBCard";
import LeadsIcon from "../../../../assets/images/LeadsIcon.png";
import ViewsIcon from "../../../../assets/images/ViewsIcon.png";
import ImpretionIcon from "../../../../assets/images/impreicon.png";
const DashboardHome = () => {
  const userName = "John Doe";
  return (
    <Box sx={{ width: "100%", margin: "1rem" }}>
      <Box sx={{ width: "100%", display: {md:"inline",lg:"flex"} }}>
        <Box sx={{margin:{xs:"1rem",lg:"0"}}}>
        <Grid
          sx={{
            background:"red",
            width: { xs: "30rem", md: "40rem",lg:"36rem"  },
            height: "12rem",
            borderRadius: "1rem",
           
          }}
        >
          <Card
            sx={{
              display: "flex",
              background:
                "linear-gradient(323.85deg, #99C5F9 43.14%, #1460BA 99.41%, #1460BA 99.41%)",
              height: "12rem",
              borderRadius: "1rem",
              position: "relative", // Add relative positioning
            }}
          >
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <CardContent sx={{ flex: "1 0 auto" }}>
                <Box
                  sx={{
                    display: "flex",
                    marginTop: "1.2rem",
                    marginLeft: "1.2rem",
                  }}
                >
                  <FNHText
                    text="Hi, "
                    color="#ffff"
                    textAlign="center"
                    fontSize="1.5rem"
                    fontWeight="600"
                  />
                  <Box sx={{ marginLeft: "0.2rem" }}>
                    <FNHText
                      text={userName}
                      color="#ffff"
                      textAlign="center"
                      fontSize="1.5rem"
                      fontWeight="600"
                    />
                  </Box>
                  <FNHText
                    text="."
                    color="#ffff"
                    textAlign="center"
                    fontSize="1.5rem"
                    fontWeight="600"
                  />
                </Box>
                <Box sx={{ display: "flex", marginLeft: "1.2rem" }}>
                  <FNHText
                    text="Welcome back to  "
                    color="#ffff"
                    textAlign="center"
                    fontSize="1rem"
                    fontWeight="400"
                  />
                  <Box sx={{ marginLeft: "0.2rem" }}>
                    <FNHText
                      text={userName}
                      color="#ffff"
                      textAlign="center"
                      fontSize="1rem"
                      fontWeight="400"
                    />
                  </Box>
                  <Box sx={{ marginLeft: "0.2rem" }}>
                    <FNHText
                      text="!"
                      color="#ffff"
                      textAlign="center"
                      fontSize="1rem"
                      fontWeight="400"
                    />
                  </Box>
                </Box>
                <Box sx={{ margin: "1.2rem " }}>
                  <Button
                    size="medium"
                    sx={{
                      background: "white",
                      "&:hover": {
                        background: "#F0F0F0", // Specify the hover background color
                      },
                    }}
                  >
                    <FNHText
                      text="View More"
                      color="#1460BA"
                      textAlign="center"
                      fontSize="0.8rem"
                      fontWeight="600"
                    />
                  </Button>
                </Box>
              </CardContent>
              <Box
                sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}
              ></Box>
            </Box>
            <CardMedia
              component="img"
              sx={{
                width: "auto",
                height: "11rem",
                position: "absolute", // Add absolute positioning
                bottom: 0, // Align to the bottom
                right: 0, // Align to the right
              }}
              image={BuilderDashbordIMG}
              alt="Live from space album cover"
            />
          </Card>
        </Grid>
        </Box>

      <Box sx={{ display:"flex" }}>
        <Grid sx={{ marginLeft: "1.5rem", marginRight: "0.8rem", }}>
          <FNHBCard
           
            imageURL={ImpretionIcon}
            count="12.1k"
            text="impressions"
          />
        </Grid>
        <Grid sx={{ marginRight: "0.8rem" }}>
          <FNHBCard  imageURL={ViewsIcon} count="3.4k" text="Views" />
        </Grid>
        <Grid sx={{ marginRight: "0.8rem" }}>
          <FNHBCard  imageURL={LeadsIcon} count="1k" text=" Leads" />
        </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default DashboardHome;
