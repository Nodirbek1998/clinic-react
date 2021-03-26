import axios from "axios";
import { GET_ERRORS, GET_TOKEN } from "../actions/Types";
import jwt_decode from "jwt-decode";
import setJWToken from "../utils/setJWToken";

export const getToken = (login, history) => async (dispatch) => {
  try {
    const res = await axios.post("api/auth/login", login);
    const token = await res.data.body;
    localStorage.setItem("jwtToken", token);
    setJWToken(token);
    const decode = await jwt_decode(token);
    dispatch(setCurrentUser(decode));
  } catch (errors) {
    console.log(errors);
    dispatch({
      type: GET_ERRORS,
      payload: errors.response.data,
    });
  }
};
export const setCurrentUser = (decode) => {
  return {
    type: GET_TOKEN,
    payload: decode,
  };
};

export const logout = () => (dispatch) => {
  // Remove token from localStorage
  localStorage.removeItem("jwtToken");
  // Remove auth header from future request
  setJWToken(false);
  // Set current user to {} which will set isAuthenticated to false
  dispatch(setCurrentUser({}));
};
