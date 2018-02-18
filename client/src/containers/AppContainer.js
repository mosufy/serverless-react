import React, { Component } from 'react';
import { connect } from 'react-redux';

import App from './../components/App';
import { toggleRegisterInterestModal } from "../actions/modalActions";
import { signup } from "../actions/authActions";

class AppContainer extends Component {
  render() {
    return <App {...this.props} />;
  }
}

const mapStateToProps = state => {
  return {
    showRegisterInterestModal: state.modal.registerInterestModal,
  }
};

const mapDispatchToProps = dispatch => {
  return {
    handleRegisterInterestModalOnClick() {
      dispatch(toggleRegisterInterestModal());
    },
    handleRegisterInterestOnSubmit(formValues) {
      dispatch(signup(formValues));
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
