import express from "express";
import {
  createRecipe,
  deleteRecipe,
  getRecipe,
  getRecipes,
  updateRecipe,
} from "../controllers/recipe.controller.js";
import { verifyToken } from "../middleware/jwt.js";
const router = express.Router();

//create new Recipe route
router.post("/", verifyToken, createRecipe);

//creat delete Recipe route
router.delete("/:id", verifyToken, deleteRecipe);

//create retrive Recipe route
router.get("/single/:id", getRecipe);

//createget all Recipe route
router.get("/", getRecipes);

//createget all Recipe route
router.put("/:id", verifyToken, updateRecipe);

export default router;
