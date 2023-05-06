import { authActionTypes } from "../actionTypes/authActionTypes";

export const setlogin = (accessKey,username,IsAdmin,refreshToken) => ({
    type: authActionTypes.LOG_IN,
    payload:accessKey,username,IsAdmin,refreshToken
  });
  export const setlogout = () => ({
    type: authActionTypes.LOG_OUT,
  });
  export const checkAuth = () => ({
    type: authActionTypes.CHECK_AUTH,
  });