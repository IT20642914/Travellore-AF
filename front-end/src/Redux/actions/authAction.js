import { authActionTypes } from "../actionTypes/authActionTypes";

export const setlogin = (accessKey,username,roles,refreshToken) => ({
    type: authActionTypes.LOG_IN,
    payload:accessKey,username,roles,refreshToken
  });
  export const setlogout = () => ({
    type: authActionTypes.LOG_OUT,
  });
  export const checkAuth = () => ({
    type: authActionTypes.CHECK_AUTH,
  });