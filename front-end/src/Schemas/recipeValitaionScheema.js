import * as yup from "yup";

export const recipeValidation = yup.object().shape({
  name: yup.string().required("Event Name is required"),
  ingredients: yup.string().required("ingredients is required"),
  desc: yup.string().required("Recipe Description is required"),
  category: yup.string().required("Recipe Category is required"),
});
