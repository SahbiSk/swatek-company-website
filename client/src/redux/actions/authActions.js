import api from "../../utils/api";
import { SIGN_UP, LOGIN, LOGOUT } from "../types";

export const signupUser = (name, email, password, clearance) => async (
  dispatch
) => {
  try {
    const config = { headers: { "Content-Type": "application/json" } };
    const body = { name, email, password, clearance };
    const res = await api.post("/api/v1/users/signup", body, config);
    dispatch({ type: SIGN_UP, payload: res.data });
  } catch (error) {
    console.log(error.message);
  }
};

export const loginUser = (email, password) => async (dispatch) => {
  try {
    const config = { headers: { "Content-Type": "application/json" } };
    const body = { email, password };
    const res = await api.post("/api/v1/users/login", body, config);
    dispatch({ type: LOGIN, payload: res.data });
  } catch (error) {
    console.log(error.response.data.message);
  }
};

export const logoutUser = () => async (dispatch) => {
  try {
    await api.get("/api/v1/users/logout");
    dispatch({ type: LOGOUT });
    console.log("user logged out");
  } catch (error) {
    console.log(error.response);
  }
};

export const getSecretContent = () => async () => {
  try {
    const res = await api.get("/api/v1/users/secretContent");
    console.log({ ...res });
  } catch (error) {
    console.log(error.message);
  }
};
