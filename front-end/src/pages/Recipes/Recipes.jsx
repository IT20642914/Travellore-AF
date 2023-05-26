import React, { useState,useEffect } from "react";
import FNHSearchPropertyCard from "../../Components/FNHRecipoCard/index";
import { Grid } from "@mui/material";
import { Recipe } from "../../constants/index";
import styles from "./style.module.scss";
import FNHText from "../../Components/FNHText/index";
import { Box } from "@mui/system";
import AllFilltersIcon from "../../assets/icon/AllFilltersIcon";
import DateIcon from "../../assets/icon/DateIcon";
import { useDispatch,useSelector } from 'react-redux';
import { getAllRecipes, setRecipes } from '../../Redux/actions/recipeAction';
import axios from 'axios';

const Recipes = () => {
  const [nameFilter, setNameFilter] = useState("");
  const [ingredientsFilter, setingredientsFilter] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");

 const dispatch = useDispatch();
  const RecipeList = useSelector((state) => state.recipes.recipes);
  
useEffect(() => {
  axios
    .get("http://localhost:9090/api/recipe")
    .then((response) => {
      const recipes = response.data;
      dispatch(setRecipes(recipes));
    })
    .catch((error) => {
      console.log("Error fetching recipes:", error);
    });
  dispatch(getAllRecipes());
}, [dispatch]);

console.log("RecipeList", RecipeList);

  return (
    <Grid className={styles.SerchlistGrid}>
      {/* SearchBar and Filter Grid Start*/}

      <Box className={styles.HeaderText}>
        <FNHText
          text="Find Your Food Recipes..."
          color="#046380"
          textAlign="left"
          variant="h6"
        />
      </Box>

      <Grid
        sx={{
          justifyContent: "center",
          justifyItems: "center",
          alignItems: "center",
        }}
        className={styles.barGird}
      >
        <Grid className={styles.inputGrid}>{/* <FNHLiconInput /> */}</Grid>

        <Grid container className={styles.FilterGrid}>
          <Grid item>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                justifyItems: "center",
                alignItems: "center",
              }}
            >
              <AllFilltersIcon fill="#1460BA" width="25" height="25" />
              <input
                type="text"
                placeholder="Filter by name"
                value={nameFilter}
                onChange={(e) => setNameFilter(e.target.value)}
                style={{
                  padding: "8px",
                  border: "1px solid #1460BA",
                  borderRadius: "4px",
                  fontSize: "16px",
                  width: "100%",
                  margin: "16px",
                }}
              />
            </Box>
          </Grid>
          <Grid item>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                justifyItems: "center",
                alignItems: "center",
              }}
            >
              <DateIcon fill="#1460BA" width="25" height="25" />
              <input
                type="text"
                placeholder="Filter by ingredients"
                value={ingredientsFilter}
                onChange={(e) => setingredientsFilter(e.target.value)}
                style={{
                  padding: "8px",
                  border: "1px solid #1460BA",
                  borderRadius: "4px",
                  fontSize: "16px",
                  width: "100%",
                  margin: "16px",
                }}
              />
            </Box>
          </Grid>
          <Grid item>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                justifyItems: "center",
                alignItems: "center",
              }}
            >
              <AllFilltersIcon fill="#1460BA" width="25" height="25" />
              <input
                type="text"
                placeholder="Filter by category"
                value={categoryFilter}
                onChange={(e) => setCategoryFilter(e.target.value)}
                style={{
                  padding: "8px",
                  border: "1px solid #1460BA",
                  borderRadius: "4px",
                  fontSize: "16px",
                  width: "100%",
                  margin: "16px",
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </Grid>
      {/* SearchBar and Filter Grid End*/}

      <Grid className={styles.DataGrid}>
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
              text="Food Recipes"
              color="#1460BA"
              textAlign="left"
              variant="h6"
            />
          </Box>

          <Grid container spacing={7} sx={{ justifyContent: "center" }}>
            {RecipeList &&
              RecipeList.filter((recipe) => {
                return (
                  recipe.name
                    .toLowerCase()
                    .includes(nameFilter.toLowerCase()) &&
                  recipe.ingredients.includes(ingredientsFilter) &&
                  recipe.category
                    .toLowerCase()
                    .includes(categoryFilter.toLowerCase())
                );
              }).map((recipe) => (
                <Grid item key={recipe.id}>
                  <FNHSearchPropertyCard
                    propertyId={recipe._id}
                    name={recipe.name}
                    ingredients={recipe.ingredients}
                    recipeCate={recipe.category}
                    backgroundImage={recipe.image}
                    recipeDetails={recipe.description}
                  />
                </Grid>
              ))}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Recipes;
