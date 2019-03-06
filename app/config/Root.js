import React from "react";
import { createBrowserHistory } from "history";
import { Provider } from "react-redux";
import store from "./store";
import { Route, Router, Switch } from "react-router-dom";
import App from "../domains/App/index";

const history = createBrowserHistory();
const Root = () => {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Switch>
          <Route path="/" component={App} />
        </Switch>
      </Router>
    </Provider>
  );
};
export default Root;
