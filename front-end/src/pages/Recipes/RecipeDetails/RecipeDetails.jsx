import React from "react";
import { Box, Grid } from "@mui/material";
import { useParams } from "react-router-dom";
import Styles from "./styles.module.scss";
import FNHText from "../../../Components/FNHText";
import { Recipe } from "../../../constants";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { height } from "@mui/system";
import { useDispatch, useSelector } from "react-redux";

const RecipeDetails = () => {
  const { propertyId } = useParams();
  const RecipeList = useSelector((state) => state.recipes.recipes);
  console.log(RecipeList);

  console.log("propertyId", propertyId);
  const property = RecipeList.find((p) => p._id === propertyId);
  if (!property) {
    return <div>Property not found</div>;
  }

  const { id, name, ingredients, category, image, description } = property;

  return (
    <Grid className={Styles.DetailGrid}>
      <Box className={Styles.HeaderText}>
        <FNHText
          text="Find Food Recipes"
          fontSize="3rem"
          color="#046380"
          textAlign="left"
          variant="h6"
        />
      </Box>
      <Box
        sx={{
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
          borderRadius: "2rem",
          height: "60rem",
          width: "100%",
          margin: "4rem",
          background: "linear-gradient(to bottom, #046380 0%, #012935 100%)",
        }}
      >
        <Box
          sx={{
            display: { xs: "inline", sm: "flex" },
            justifyContent: "space-evenly",
            margin: "1rem 0",
            padding: "0 1rem",
          }}
        >
          <Box sx={{ display: "contents" }}>
            <Card
              sx={{
                width: "30rem",
                height: "50rem",
                borderRadius: "1rem",
                padding: "0.5rem",
              }}
            >
              <Box
                sx={{
                  margin: "1rem",
                  justifyContent: "center",
                  justifyItems: "center",
                  alignItems: "center",
                }}
              >
                <FNHText
                  text={name}
                  // color="#046380"
                  textAlign="left"
                  fontWeight="900"
                  fontSize="2rem"
                />
              </Box>
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
              >
                {" "}
              </Box>

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
                  ></Box>
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
                        justifyItems: "center",
                      }}
                    >
                      <FNHText
                        //  color="#046380"
                        text="Ingredients:"
                        fontWeight="900"
                        fontSize="1rem"
                      />
                      <FNHText
                        color="#046380"
                        text={ingredients}
                        fontWeight="700"
                        fontSize="1rem"
                      />
                    </Box>
                    <Box sx={{ marginTop: "1rem", display: "flex" }}>
                      <FNHText
                        //  color="#046380"
                        text="Description:"
                        fontWeight="900"
                        fontSize="1rem"
                      />

                      <FNHText
                        color="black"
                        text={description}
                        fontWeight="500"
                        fontSize="1rem"
                      />
                    </Box>
                  </Box>

                  <Box sx={{ marginTop: "1rem", display: "flex" }}>
                    <Box sx={{ marginLeft: "1rem", display: "flex" }}></Box>
                  </Box>
                  <Box
                    sx={{
                      minWidth: "50%",
                      textAlign: "start",
                      margin: "0 0 0 0",
                      display: "flex",
                      alignItems: "center",
                      justifyItems: "center",
                    }}
                  ></Box>
                </Box>
              </Box>
            </Card>
          </Box>
        </Box>
      </Box>
    </Grid>
  );
};

export default RecipeDetails;
