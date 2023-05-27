const createError = require('http-errors');
const { createRecipe, deleteRecipe } = require('../src/controllers/recipe.controller'); // Replace with your actual controller file
const Recipe = require('../src/model/recipe.model'); // Replace with your actual recipe model

describe('createRecipe', () => {
  beforeEach(() => {
    // Mock req and res objects
    req = {
      isAdmin: true,
      userId: 'adminUserId',
      body: {
        // Provide necessary properties for the new recipe
      },
    };
    res = {
      status: jest.fn(() => res),
      json: jest.fn(),
    };
    next = jest.fn();
    Recipe.prototype.save = jest.fn();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should create a new recipe when called by an admin', async () => {
    await createRecipe(req, res, next);

    expect(Recipe.prototype.save).toHaveBeenCalledTimes(1);
    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalledTimes(1);
    // You can add more assertions based on the expected behavior
  });

  it('should return a 403 error when called by a non-admin user', async () => {
    req.isAdmin = false;

    await createRecipe(req, res, next);

    expect(next).toHaveBeenCalledTimes(1);
    expect(next).toHaveBeenCalledWith(createError(403, 'Only admin can create a Recipe!'));
    expect(Recipe.prototype.save).not.toHaveBeenCalled();
    expect(res.status).not.toHaveBeenCalled();
    expect(res.json).not.toHaveBeenCalled();
  });

  it('should return a 409 error when a duplicate userId is detected', async () => {
    const mockError = new Error();
    mockError.code = 11000;
    mockError.keyPattern = { userId: 1 };
    mockError.keyValue = { userId: 'duplicateUserId' };

    Recipe.prototype.save.mockRejectedValueOnce(mockError);

    await createRecipe(req, res, next);

    expect(Recipe.prototype.save).toHaveBeenCalledTimes(1);
    expect(res.status).toHaveBeenCalledWith(409);
    expect(res.json).toHaveBeenCalledWith({
      error: `User with userId ${mockError.keyValue.userId} already has a recipe.`,
    });
    expect(next).not.toHaveBeenCalled();
  });

  it('should handle other errors and pass them to the error handling middleware', async () => {
    const mockError = new Error();

    Recipe.prototype.save.mockRejectedValueOnce(mockError);

    await createRecipe(req, res, next);

    expect(Recipe.prototype.save).toHaveBeenCalledTimes(1);
    expect(next).toHaveBeenCalledTimes(1);
    expect(next).toHaveBeenCalledWith(mockError);
    expect(res.status).not.toHaveBeenCalled();
    expect(res.json).not.toHaveBeenCalled();
  });
});

describe('deleteRecipe', () => {
  beforeEach(() => {
    // Mock req and res objects
    req = {
      params: {
        id: 'recipeId',
      },
      userId: 'userId',
    };
    res = {
      status: jest.fn(() => res),
      send: jest.fn(),
    };
    next = jest.fn();
    Recipe.findByIdAndDelete = jest.fn();
    Recipe.findById = jest.fn();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should delete the recipe when called by the owner', async () => {
    const mockRecipe = {
      userId: 'userId',
    };

    Recipe.findById.mockResolvedValueOnce(mockRecipe);

    await deleteRecipe(req, res, next);

    expect(Recipe.findById).toHaveBeenCalledTimes(1);
    expect(Recipe.findById).toHaveBeenCalledWith(req.params.id);
    expect(Recipe.findByIdAndDelete).toHaveBeenCalledTimes(1);
    expect(Recipe.findByIdAndDelete).toHaveBeenCalledWith(req.params.id);
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.send).toHaveBeenCalledWith('Recipe has been deleted!');
    expect(next).not.toHaveBeenCalled();
  });

  it('should return a 403 error when called by a non-owner', async () => {
    const mockRecipe = {
      userId: 'anotherUserId',
    };

    Recipe.findById.mockResolvedValueOnce(mockRecipe);

    await deleteRecipe(req, res, next);

    expect(Recipe.findById).toHaveBeenCalledTimes(1);
    expect(Recipe.findById).toHaveBeenCalledWith(req.params.id);
    expect(Recipe.findByIdAndDelete).not.toHaveBeenCalled();
    expect(next).toHaveBeenCalledTimes(1);
    expect(next).toHaveBeenCalledWith(createError(403, 'You can Delete your Recipe only!'));
    expect(res.status).not.toHaveBeenCalled();
    expect(res.send).not.toHaveBeenCalled();
  });

  it('should handle errors and pass them to the error handling middleware', async () => {
    const mockError = new Error();

    Recipe.findById.mockRejectedValueOnce(mockError);

    await deleteRecipe(req, res, next);

    expect(Recipe.findById).toHaveBeenCalledTimes(1);
    expect(Recipe.findById).toHaveBeenCalledWith(req.params.id);
    expect(Recipe.findByIdAndDelete).not.toHaveBeenCalled();
    expect(next).toHaveBeenCalledTimes(1);
    expect(next).toHaveBeenCalledWith(mockError);
    expect(res.status).not.toHaveBeenCalled();
    expect(res.send).not.toHaveBeenCalled();
  });
});
