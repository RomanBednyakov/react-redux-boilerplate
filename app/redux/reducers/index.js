import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import login from './login';
import registration from './registration';

const rootReducer = combineReducers({
  login,
  registration,
  routing: routerReducer,
});

export default rootReducer;
