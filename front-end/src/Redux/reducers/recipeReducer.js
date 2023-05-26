import { recipeActionType } from "../actionTypes/recipeActionType";

const initialState = {
  recipes: [],
};

const recipeReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case recipeActionType.ADD_RECIPE:
      return {
        ...state,
        recipes: [...state.recipes, payload.newRecipeData],
      };
    case recipeActionType.UPDATE_RECIPE:
      return {
        ...state,
        recipes: state.recipes.map((recipe) => {
          if (recipe.id === payload.recipeID) {
            return {
              ...recipe,
              ...payload.updatedRecipeData,
            };
          }
          return recipe;
        }),
      };
    case recipeActionType.DELETE_RECIPE:
      return {
        ...state,
        recipes: state.recipes.filter(
          (recipe) => recipe._id !== payload.recipeID
        ),
      };
    case recipeActionType.GET_ALL_RECIPE:
      console.log("Fetching recipes from reducer");
      return { state };

    case recipeActionType.SET_RECIPE_AXIOS:
      return {
        recipes: payload.recipes,
      };
    default:
      return state;
  }
};

export default recipeReducer;
