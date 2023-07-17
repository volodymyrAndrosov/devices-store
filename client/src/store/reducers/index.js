import userReducer from "./user";
import deviceReducer from "./device";
import brandReducer from "./brands";
import typeReducer from "./types";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  USER: userReducer,
  DEVICES: deviceReducer,
  BRANDS: brandReducer,
  TYPES: typeReducer,
});

export default allReducers;
