import React from 'react';
import { connect } from 'react-redux';
import { testAction } from '../../redux/action/index';
import { registAction } from '../../redux/action/registration';
import './app.scss';

const mapStateToProps = ({ login, registration }) => ({
  login,
  registration,
});
const mapDispatchToProps = dispatch => ({
  testAction: flag => dispatch(testAction(flag)),
  registAction: flag => dispatch(registAction(flag)),
});

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.toogleModal = this.toogleModal.bind(this);
  }

  toogleModal() {
    this.props.testAction(true);
    this.props.registAction(true);
  }

  render() {
    return (
      <div className="app">
        <button onClick={this.toogleModal}>
          sdsadasdsad
        </button>
        <div>sdsadsasad</div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

