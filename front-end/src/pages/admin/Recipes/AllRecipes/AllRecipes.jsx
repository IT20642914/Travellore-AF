import React from "react";
import { Link } from "react-router-dom";

import "./recipes.css";
import { useNavigate } from "react-router-dom";
// import getCurrentUser from '../../../../utils/getCurrentUser';
//import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
// import newRequest from '../../../../utils/newRequest';
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditIcon from "@mui/icons-material/Edit";
import IconButton from "@mui/material/IconButton";
import { Recipe } from "../../../../constants";
import { Box, Typography } from "@mui/material";
import MyListingTable from "../../../admin/dashboard-item/Table/MyListingTable";
import { useDispatch, useSelector } from "react-redux";
import { deleteRecipe } from "../../../../Redux/actions/recipeAction";
const AllRecipes = () => {
  const dispatch = useDispatch();
  const RecipeList = useSelector((state) => state.recipes.recipes);
  const accessKey = useSelector((state) => state.login.accessKey);
  const navigate = useNavigate();

  const handleDelete = (id) => {
    console.log("delete", accessKey);
    dispatch(deleteRecipe(id, accessKey));
  };
  const handlUpdate = (id) => {
    // navigate("/")
  };
  return (
    <Box>
      <Box sx className="myProducts">
        <Box sx={{ background: "white" }} className="container">
          <Box className="title">
            <Typography color={"#046380"} variant="h3">
              all Recipes
            </Typography>
          </Box>
          <table>
            <tr>
              <th>
                <Typography
                  color={"#046380"}
                  sx={{ fontWeight: "700" }}
                  variant="h5"
                >
                  Image Of Recipe
                </Typography>{" "}
              </th>
              <th>
                <Typography
                  color={"#046380"}
                  sx={{ fontWeight: "700" }}
                  variant="h5"
                >
                  Name
                </Typography>
              </th>
              <th>
                <Typography
                  color={"#046380"}
                  sx={{ fontWeight: "700" }}
                  variant="h5"
                >
                  Category
                </Typography>{" "}
              </th>
              <th>
                <Typography
                  color={"#046380"}
                  sx={{ fontWeight: "700" }}
                  variant="h5"
                >
                  Ingredients
                </Typography>
              </th>
              <th>
                <Typography
                  color={"#046380"}
                  sx={{ fontWeight: "700" }}
                  variant="h5"
                >
                  Description
                </Typography>
              </th>
              <th>
                <Typography
                  color={"#046380"}
                  sx={{ fontWeight: "700" }}
                  variant="h5"
                >
                  Action
                </Typography>
              </th>
            </tr>

            {Recipe.map((add) => (
              <tr key={add.id}>
                <td>
                  <img className="img" src={add.image} alt="item img" />
                </td>
                <td>{add._id}</td>
                <td>{add.name}</td>
                <td>{add.category}</td>
                <td>{add.ingredients}</td>
                <td>{add.description}</td>

                <td>
                  <Box className="actionBtn">
                    <IconButton onClick={() => handleDelete(add._id)}>
                      {" "}
                      <DeleteForeverIcon style={{ color: "red" }} />
                    </IconButton>
                    <IconButton onClick={() => handlUpdate(add.id)}>
                      {" "}
                      <EditIcon style={{ color: "#046380" }} />
                    </IconButton>
                  </Box>
                </td>
              </tr>
            ))}
          </table>
        </Box>
      </Box>
    </Box>
  );
};

export default AllRecipes;
