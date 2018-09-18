import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { testActionLogin } from '../../redux/action/login';
import { registrationAction } from '../../redux/action/registration';
import './app.scss';

const mapStateToProps = ({ login, registration }) => ({
  login,
  registration,
});
const mapDispatchToProps = dispatch => ({
  testActionLogin: flag => dispatch(testActionLogin(flag)),
  registrationAction: flag => dispatch(registrationAction(flag)),
});

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      flagLogin: false,
      flagRegistration: false,
    };
    this.toogleStateReduxLogin = this.toogleStateReduxLogin.bind(this);
    this.toogleStateReduxRegistration = this.toogleStateReduxRegistration.bind(this);
  }

  toogleStateReduxLogin() {
    this.setState({ flagLogin: !this.props.login.testActionLogin });
    this.props.testActionLogin(!this.props.login.testActionLogin);
  }

  toogleStateReduxRegistration() {
    this.setState({ flagRegistration: !this.props.registration.testActionRegistration });
    this.props.registrationAction(!this.props.registration.testActionRegistration);
  }

  render() {
    const stateLogin = this.state.flagLogin ? 'true' : 'false';
    const stateRegistration = this.state.flagRegistration ? 'true' : 'false';
    return (
      <div className="app">
        <button onClick={this.toogleStateReduxLogin}>
          Change state redux login !
        </button>
        <div className="app__flag">
          Login: { stateLogin }
        </div>
        <button onClick={this.toogleStateReduxRegistration}>
          Change state redux registration !
        </button>
        <div className="app__flag">
          Registration: { stateRegistration }
        </div>
      </div>
    );
  }
}

App.propTypes = {
  testActionLogin: PropTypes.func.isRequired,
  registrationAction: PropTypes.func.isRequired,
  login: PropTypes.shape({
    testActionLogin: PropTypes.bool.isRequired,
  }).isRequired,
  registration: PropTypes.shape({
    testActionRegistration: PropTypes.bool.isRequired,
  }).isRequired,
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
