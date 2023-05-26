import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import AddRecipe from "./addRecipe/AddRecipe";
import AllRecipes from "./AllRecipes/AllRecipes";
import Recipe from "../../../pages/Recipes/Recipes";
import IconButton from "@mui/material/IconButton";
import AddLocationIcon from "@mui/icons-material/AddLocation";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import ViewCompactIcon from "@mui/icons-material/ViewCompact";

const RecipeAd = () => {
  const [page, setPage] = useState("AllRecipes");

  const handleClick = (pageName) => {
    setPage(pageName);
  };

  return (
    <Box sx={{ display: "inline" }}>
      <IconButton onClick={() => handleClick("AddRecipe")}>
        <Typography sx={{ color: "#046380" }}>Add Recipes</Typography>
        <AddLocationIcon style={{ color: "#046380" }} />
      </IconButton>

      <IconButton onClick={() => handleClick("AllRecipes")}>
        <Typography sx={{ color: "#046380" }}>Viwe All Recipes</Typography>
        <ViewCompactIcon style={{ color: "#046380" }} />
      </IconButton>

      <IconButton onClick={() => handleClick("recipe")}>
        <Typography sx={{ color: "#046380" }}>User View</Typography>
        <SupervisorAccountIcon style={{ color: "#046380" }} />
      </IconButton>
      <Box>
        {page === "AddRecipe" && <AddRecipe />}
        {page === "AllRecipes" && <AllRecipes />}
        {page === "recipe" && <Recipe />}
      </Box>
    </Box>
  );
};

export default RecipeAd;
