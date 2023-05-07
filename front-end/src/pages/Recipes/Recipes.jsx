import React, { useState } from "react";
import FNHSearchPropertyCard from "../../Components/FNHRecipoCard/index";
import { Grid } from "@mui/material";
import { Recipe } from "../../constants/index";
import styles from "./style.module.scss";
import FNHText from "../../Components/FNHText/index";
import { Box } from "@mui/system";
const Recipes = () => {
  const [nameFilter, setNameFilter] = useState("");
  const [ingredientsFilter, setingredientsFilter] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");

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

      <Grid className={styles.barGird}>
        <Grid className={styles.inputGrid}>{/* <FNHLiconInput /> */}</Grid>

        <Grid container className={styles.FilterGrid}>
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
              placeholder="Filter by ingredients"
              value={ingredientsFilter}
              onChange={(e) => setingredientsFilter(e.target.value)}
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
            {Recipe.filter((recipe) => {
              return (
                recipe.name.toLowerCase().includes(nameFilter.toLowerCase()) &&
                recipe.ingredients.includes(ingredientsFilter) &&
                recipe.category
                  .toLowerCase()
                  .includes(categoryFilter.toLowerCase())
              );
            }).map((recipe, index) => (
              <Grid item key={index}>
                <FNHSearchPropertyCard
                  propertyId={recipe.id}
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
