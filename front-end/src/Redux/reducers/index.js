import { combineReducers } from "redux";
import { loginReducer } from "./authReducer";
import eventReducer from "./eventReducer";

const RootReducer =combineReducers({

    login:loginReducer,
    events:eventReducer,



})
export default RootReducer;

