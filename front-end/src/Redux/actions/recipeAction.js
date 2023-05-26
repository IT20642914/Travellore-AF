import { recipeActionType } from "../actionTypes/recipeActionType";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
export const insertRecipe = (newRecipeData) => {
  return {
    type: recipeActionType.ADD_RECIPE,
    payload: {
      newRecipeData,
    },
  };
};

export const updateRecipe = (recipeID, updatedRecipeData) => {
  console.log("recipeID,updatedRecipeData", recipeID, updatedRecipeData);
  return {
    type: recipeActionType.UPDATE_RECIPE,
    payload: {
      recipeID,
      updatedRecipeData,
    },
  };
};

export const deleteRecipe = (recipeID, accessKey) => {
  console.log("deletRecipeAction", recipeID, accessKey);

  return async (dispatch) => {
    try {
      // Send the delete request to the API
      await axios.delete(`http://localhost:9090/api/recipe/${recipeID}`, {
        headers: {
          Authorization: `Bearer ${accessKey}`, // Include the token in the headers
        },
      });
      // Dispatch the action to update the state
      dispatch({
        type: "DELETE_RECIPE",
        payload: {
          recipeID,
        },
      });
    } catch (error) {
      // Handle any errors
      console.log("Error deleting recipe:", error);
    }
  };
};
export const getAllRecipes = () => {
  console.log("getAllRecipes from recipeAction");
  return {
    type: recipeActionType.GET_ALL_RECIPE,
  };
};

export const setRecipes = (recipes) => {
  console.log("getAllRecipes from recipeAction");
  return {
    type: recipeActionType.SET_RECIPE_AXIOS,
    payload: {
      recipes,
    },
  };
};
