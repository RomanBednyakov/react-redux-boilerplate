import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import calendar from "./calendar";

const rootReducer = combineReducers({
  calendar,
  routing: routerReducer
});

export default rootReducer;
