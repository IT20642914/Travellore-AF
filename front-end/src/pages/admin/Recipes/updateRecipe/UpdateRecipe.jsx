import { useState, useEffect } from "react";
import { Box, Typography, IconButton, Button } from "@mui/material";
import SaveAltIcon from "@mui/icons-material/SaveAlt";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { recipeValidation } from "../../../../Schemas/recipeValitaionScheema";
import { toast } from "react-toastify";
import { useFormik } from "formik";
import upload from "../../../../utils/upload";
import { Form } from "react-bootstrap";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import { updateRecipe } from "../../../../Redux/actions/recipeAction";

const UpdateRecipe = () => {
  const RecipeList = useSelector((state) => state.recipes.recipes);

  const { recipeId } = useParams();
  console.log("RecipeList1", RecipeList);
  const accessKey = useSelector((state) => state.login.accessKey);
  const [file, setFile] = useState(null);
  const dispatch = useDispatch();
  const recipe = RecipeList.find((p) => p._id === recipeId);

  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleBlur,
    handleSubmit,
    handleChange,
  } = useFormik({
    initialValues: {
      name: recipe.name,
      ingredients: recipe.date,
      category: recipe.category,
      img: recipe.img,
      desc: recipe.desc,
    },
    validationSchema: recipeValidation,
    onSubmit: async (values) => {
      values.img = await upload(file);

      console.log("updated values", values);
      dispatch(updateRecipe(recipeId, values, accessKey));
    },
  });
  if (!recipe) {
    return <div>recipe not found</div>;
  }

  return (
    <Box
      sx={{
        height: "74rem",
        background:
          "linear-gradient(323.85deg, #012935.14%, #046380 99.41%, #012935 99.41%)",
        borderRadius: "4rem",
        margin: "2rem",
      }}
    >
      <Box
        sx={{ marginTop: "1rem", paddingTop: "2rem" }}
        className="container flex"
      >
        <Form onSubmit={handleSubmit}>
          <Form.Group className="my-3" controlId="name">
            <Typography sx={{ color: "white" }} htmlFor="name">
              Recipe Name
            </Typography>
            <Form.Control
              type="name"
              placeholder="Enter recipe Name"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
              className={errors.name && touched.name ? "input-error" : ""}
            />
            {errors.name && touched.name && (
              <p className="error">{errors.name}</p>
            )}
          </Form.Group>

          <Form.Group className="my-3" controlId="category">
            <Typography sx={{ color: "white" }} htmlFor="category">
              Enter Category
            </Typography>
            <Form.Control
              type="category"
              placeholder="Enter Category"
              value={values.category}
              onChange={handleChange}
              onBlur={handleBlur}
              className={
                errors.category && touched.category ? "input-error" : ""
              }
            />
            {errors.category && touched.category && (
              <p className="error">{errors.category}</p>
            )}
          </Form.Group>

          <Form.Group className="my-3" controlId="ingredients">
            <Typography sx={{ color: "white" }} htmlFor="ingredients">
              Enter Ingredients
            </Typography>
            <Form.Control
              type="text"
              placeholder="Enter ingredients"
              value={values.ingredients}
              onChange={handleChange}
              onBlur={handleBlur}
              className={
                errors.ingredients && touched.ingredients ? "input-error" : ""
              }
            />
            {errors.ingredients && touched.ingredients && (
              <p className="error">{errors.ingredients}</p>
            )}
          </Form.Group>

          <Form.Group className="my-3" controlId="desc">
            <Typography sx={{ color: "white" }} htmlFor="desc">
              Enter description
            </Typography>
            <Form.Control
              id="desc"
              type="desc"
              placeholder="Enter description"
              value={values.desc}
              onChange={handleChange}
              onBlur={handleBlur}
              className={errors.desc && touched.desc ? "input-error" : ""}
            />
            {errors.desc && touched.desc && (
              <p className="error">{errors.desc}</p>
            )}
          </Form.Group>

          <Form.Group className="my-3" controlId="profile">
            <Box sx={{ display: "inline-block" }}>
              <Typography sx={{ color: "white" }} htmlFor="image">
                Select a Picture
              </Typography>
              <IconButton aria-label="upload picture" component="label">
                <input
                  hidden
                  accept="image/*"
                  onChange={(e) => setFile(e.target.files[0])}
                  type="file"
                />
                <AddPhotoAlternateIcon
                  sx={{ width: "5rem", color: "white", height: "5rem" }}
                />
              </IconButton>
            </Box>
          </Form.Group>

          {isSubmitting}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{
              background: "#046380",
              mt: 3,
              mb: 2,
              "&:hover": {
                backgroundColor: "#014935",
              },
            }}
          >
            <SaveAltIcon style={{ color: "white" }} />
            Update Details
          </Button>
        </Form>
      </Box>
    </Box>
  );
};

export default UpdateRecipe;
