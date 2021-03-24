import { SIGN_UP, LOGOUT, LOGIN } from "../types";

const INITIAL_STATE = {
  token: null,
  user: {},
  id: "",
  name: "",
  email: "",
  clearance: "",
  loggedOn: false,
};

const authReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case SIGN_UP:
      return {
        ...state,
        token: payload.token,
        user: payload.user,
        loggedOn: true,
        id: payload.user._id,
        email: payload.user.email,
        clearance: payload.user.clearance,
      };
    case LOGIN:
      return {
        ...state,
        token: payload.token,
        user: payload.user,
        loggedOn: true,
        id: payload.user._id,
        email: payload.user.email,
        clearance: payload.user.clearance,
      };
    case LOGOUT:
      return INITIAL_STATE;

    default:
      return state;
  }
};
export default authReducer;
