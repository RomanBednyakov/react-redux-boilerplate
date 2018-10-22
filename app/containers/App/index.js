import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getMonthCalendar } from "../../redux/action/calendar";
import "./app.scss";

const mapStateToProps = ({ calendar }) => ({
  calendar
});
const mapDispatchToProps = dispatch => ({
  getMonthCalendar: (year, month) => dispatch(getMonthCalendar(year, month))
});

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="app-wrapper">
        <span>HI</span>
        <span>HI</span>
      </div>
    );
  }
}
App.propTypes = {
  getMonthCalendar: PropTypes.func.isRequired,
  calendar: PropTypes.shape({
    eventForMonth: PropTypes.array.isRequired
  }).isRequired
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
