import { combineReducers } from "redux";
import { loginReducer } from "./authReducer";

const RootReducer =combineReducers({

    login:loginReducer,



})
export default RootReducer;

