import Recipe from "../model/recipe.model.js";
import createError from "../utils/createError.js";

// http://localhost:9090/api/recipe
//create a new Recipe for admin
export const createRecipe = async (req, res, next) => {
  if (!req.isAdmin)
    return next(createError(403, "Only admin can create a Recipe!"));

  const newRecipe = new Recipe({
    userId: req.userId,
    ...req.body,
  });
  console.log("userid controller", req.userId);

  try {
    const savedRecipe = await newRecipe.save();
    res.status(201).json(savedRecipe);
  } catch (err) {
    next(err);
  }
};

//create delete function for admin' Recipe
export const deleteRecipe = async (req, res, next) => {
  try {
    const recipe = await Recipe.findById(req.params.id);

    console.log(req.params.id);
    if (recipe.userId !== req.userId)
      return next(createError(403, "You can Delete your Recipe only!"));
    await Recipe.findByIdAndDelete(req.params.id);
    res.status(200).send("Recipe has been deleted!");
  } catch (err) {
    next(err);
  }
};

//get seleted add from Add model
export const getRecipe = async (req, res, next) => {
  try {
    const recipe = await Recipe.findById(req.params.id);
    if (!recipe) return next(createError(404, "Recipe Not Found!"));
    res.status(200).send(recipe);
  } catch (err) {
    next(err);
  }
};

//get ads acoording to filtering
export const getRecipes = async (req, res, next) => {
  const q = req.query;
  const filters = {
    ...(q.userId && { userId: q.userId }),
    ...(q.cat && { cat: q.cat }),
    ...((q.min || q.max) && {
      price: {
        ...(q.min && { $gt: q.min }),
        ...(q.max && { $lt: q.max }),
      },
    }),
    ...(q.search && { title: { $regex: q.search, $options: "i" } }),
  };
  try {
    const recipe = await Recipe.find(filters).sort({ [q.sort]: -1 });
    res.status(200).send(recipe);
  } catch (err) {
    next(err);
  }
};

//create update selected Recipe
export const updateRecipe = async (req, res) => {
  try {
    const recipeId = req.params.id;

    // Find Recipe by ID and update Recipe details
    const updatedRecipe = await Recipe.findByIdAndUpdate(
      recipeId,
      {
        $set: req.body,
      },
      { new: true }
    );

    if (!updatedRecipe) {
      return res.status(404).json({ error: "Recipe is not found" });
    }

    return res.json({
      message: "Recipe details updated successfully",
      recipe: updatedRecipe,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Server error" });
  }
};
