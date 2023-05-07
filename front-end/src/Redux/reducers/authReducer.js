import { authActionTypes } from "../actionTypes/authActionTypes";

  export const loginReducer = (state = { isLoggedIn: false }, {type,payload}) => {
    switch (type) {
      case authActionTypes.LOG_IN:
        return {
          ...state,
          isLoggedIn: true,
          accessKey: payload.accessToken,
          IsAdmin:payload.IsAdmin,
          username:payload.username,
          ImgUrl:payload.ImgUrl,
        };
        case authActionTypes.LOG_OUT:
          return {
            ...state,
            isLoggedIn:false,
            accessKey: null,
            IsAdmin:null,
            username:null,
            ImgUrl:null,
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
  