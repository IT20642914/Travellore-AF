import { recipeActionType } from "../actionTypes/recipeActionType";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { toast } from "react-toastify";
export const insertRecipe = (newRecipeData, accessKey) => {
  console.log("NEW RECIPE: ", newRecipeData, accessKey);
  return (dispatch) => {
    axios
      .post("http://localhost:9090/api/recipe", newRecipeData, {
        headers: {
          Authorization: `Bearer ${accessKey}`, // Include the token in the headers
        },
      })
      .then((response) => {
        console.log("NEW RECIPE:", newRecipeData);
        dispatch({
          type: recipeActionType.ADD_RECIPE,
          payload: {
            newRecipeData,
          },
        });
      })
      .catch((error) => {
        // Handle error
        console.error("Error inserting Recipe:", error);
      });
  };
};

export const updateRecipe = (recipeID, updatedRecipeData, accessKey) => {
  console.log(
    "recipeID,updatedRecipeData,accessKey",
    recipeID,
    updatedRecipeData,
    accessKey
  );
  const url = `http://localhost:9090/api/recipe/${recipeID}`;
  return (dispatch) => {
    axios
      .put(url, updatedRecipeData, {
        headers: {
          Authorization: `Bearer ${accessKey}`, // Assuming accessKey is the authentication token
        },
      })
      .then((response) => {
        // Handle the response if needed
        console.log("Recipe update response", response.data);
        dispatch({
          type: recipeActionType.UPDATE_RECIPE,
          payload: {
            recipeID,
            updatedRecipeData,
          },
        });
        toast.success(response.data.message, {
          position: toast.POSITION.TOP_RIGHT,
        });
      })
      .catch((error) => {
        // Handle the error if needed
        console.log("Recipe update error", error);
        const massege = error.response.data.error;
        toast.error(massege, {
          position: toast.POSITION.TOP_RIGHT,
        });

        // Dispatch an error action or perform any other necessary actions
      });
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
