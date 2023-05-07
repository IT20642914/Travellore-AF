import React from "react";
import { Box, Grid } from "@mui/material";
import FNHText from "../../../Components/FNHText";
import Styles from "./style.module.scss";
import { Link } from "react-router-dom";
import { grid } from "@mui/system";

const AddRecipes = () => {
  return (
    <div className="card">
      <div className="AddRecipesPage flex">
        <div className="container flex">
          <h2 >Add Recipes</h2>
          <div class="card-body">
            <form action="" className="form grid">
              <div class="form-group">
                <label for="name">Name</label>
                <input
                  type="text"
                  class="form-control"
                  id="inputName"
                  placeholder="Enter Name"
                />
              </div>

              <div class="form-group">
                <label for="category">Category</label>
                <select id="category" class="form-control">
                  <option selected>Choose...</option>
                  <option>Sinhalese</option>
                  <option>Tamil</option>
                  <option>Muslim</option>
                </select>
              </div>

              <div class="form-group">
                <label for="ingredients">Ingredients</label>
                <input
                  type="text"
                  class="form-control"
                  id="ingredients"
                  placeholder="Enter ingredients"
                />
              </div>

              <div class="form-group">
                <label for="description">Description:</label>
                <textarea
                  class="form-control"
                  rows="5"
                  id="description"
                  placeholder="How to make"
                ></textarea>
              </div>
              <div class="custom-file mb-3">
      <input type="file" class="custom-file-input" id="customFile" name="filename"/>
      <label class="custom-file-label" for="image">Choose Image</label>
    </div>

              <Link to={"/"}>
                <button type="submit" className="btn btn-primary">
                  <span>Add Recipe</span>
                </button>
              </Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddRecipes;
