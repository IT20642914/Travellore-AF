import { authActionTypes } from "../actionTypes/authActionTypes";

const initialState = {
    accessKey: null,
    isLoggedIn: false ,
  };
  
  // export const accessKey = (state = initialState, {type,payload}) => {
  //   switch (type) {
  //     case authActionTypes.SET_ACCESS_KEY:
  //       return {
  //         ...state,
  //         accessKey: payload,
  //       };
  //     default:
  //       return state;
  //   }
  // };

  export const loginReducer = (state = { isLoggedIn: false }, {type,payload}) => {
    switch (type) {
      case authActionTypes.LOG_IN:
        return {
          ...state,
          isLoggedIn: true,
          accessKey: payload.accessToken,
          IsAdmin:payload.IsAdmin,
          username:payload.username,
          refeshtoken:payload.refeshtoken,
        };
        case authActionTypes.LOG_OUT:
          return {
            ...state,
            isLoggedIn:false,
            accessKey: null,
            IsAdmin:null,
            username:null,
            refeshtoken:null,
          };
          case authActionTypes.CHECK_AUTH:
            return {
              ...state,
            ...payload
            };
      default:
        return state;
    }
  };
  