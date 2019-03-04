import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import "./app.scss";
import { connect } from "react-redux";
import { calendarSelectors } from "../../redux/modules/calendar";
import Home from "../home/index";

const mapStateToProps = state => {
  return {
    isAuth: calendarSelectors.getIsAuth(state)
  };
};
class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route path="/home" component={Home} />
        <Route
          path="/*"
          render={() => {
            if (this.props.isAuth === true) {
              return <Redirect to="/home" />;
            } else if (this.props.isAuth === false) {
              return <Redirect to="/home" />;
            }
            return <div />;
          }}
        />
      </Switch>
    );
  }
}
export default connect(mapStateToProps)(App);
