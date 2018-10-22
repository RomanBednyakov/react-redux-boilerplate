import React from "react";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import { createBrowserHistory } from "history";
import { Provider } from "react-redux";
import App from "../containers/App";
import store from "./store";

const history = createBrowserHistory();
const Root = () => {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Switch>
          <Route path="/home" component={App} />
          <Redirect to="/home" exact />
        </Switch>
      </Router>
    </Provider>
  );
};
export default Root;
