import authReducer from "./reducers/authReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({ authReducer });
export default rootReducer;
