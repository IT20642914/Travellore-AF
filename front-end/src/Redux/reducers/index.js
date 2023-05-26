import { combineReducers } from "redux";
import { loginReducer } from "./authReducer";
import eventReducer from "./eventReducer";
import localbusinessReducer from "./localbusinessReducer";
import recipeReducer from "./recipeReducer";

const RootReducer = combineReducers({
  login: loginReducer,
  events: eventReducer,
  lbproducts: localbusinessReducer,
  recipes: recipeReducer,
});
export default RootReducer;

