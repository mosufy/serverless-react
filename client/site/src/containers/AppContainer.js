import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import App from './../components/App';
import { toggleLoginModal } from "../actions/modalActions";
import { login } from "../actions/authActions";

class AppContainer extends Component {
  render() {
    return <App {...this.props} />;
  }
}

const mapStateToProps = state => {
  return {
    showLoginModal: state.modal.loginModal,
    formStatus: state.form,
  }
};

const mapDispatchToProps = dispatch => {
  return {
    handleLoginModalOnClick() {
      dispatch(toggleLoginModal());
    },
    handleLoginOnSubmit(formValues) {
      dispatch(login(formValues));
    }
  }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AppContainer));
