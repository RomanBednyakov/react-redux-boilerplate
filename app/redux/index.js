import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import { calendar } from "./modules";

const rootReducer = combineReducers({
  calendar,
  routing: routerReducer
});

export default rootReducer;
