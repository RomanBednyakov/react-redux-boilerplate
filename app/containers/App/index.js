import React from 'react';
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
    const { flagLogin } = this.state;
    this.setState({ flagLogin: !flagLogin });
    this.props.testActionLogin(flagLogin);
  }
  toogleStateReduxRegistration() {
    const { flagRegistration } = this.state;
    this.setState({ flagRegistration: !flagRegistration });
    this.props.registrationAction(flagRegistration);
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
          Login: {stateLogin}
        </div>
        <button onClick={this.toogleStateReduxRegistration}>
          Change state redux registration !
        </button>
        <div className="app__flag">
          Registration: {stateRegistration}
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

