import { combineReducers } from "redux";
import { loginReducer } from "./authReducer";
import eventReducer from "./eventReducer";
import localbusinessReducer from "./localbusinessReducer";

const RootReducer =combineReducers({

    login:loginReducer,
    events:eventReducer,
    lbproducts:localbusinessReducer,



})
export default RootReducer;

