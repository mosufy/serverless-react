import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import App from './../components/App';
import { toggleLoginModal, toggleRegisterInterestModal } from "../actions/modalActions";
import { login, logout } from "../actions/authActions";
import { dismissAlert } from "../actions/formActions";

class AppContainer extends Component {
  render() {
    return <App {...this.props} />;
  }
}

const mapStateToProps = state => {
  return {
    showLoginModal: state.modal.loginModal,
    formStatus: state.form,
    auth: state.auth,
    router: state.router,
  }
};

const mapDispatchToProps = dispatch => {
  return {
    handleLoginModalOnClick() {
      dispatch(toggleLoginModal());
      dispatch(dismissAlert());
    },
    handleLoginOnSubmit(formValues) {
      dispatch(login(formValues));
    },
    handleLogoutOnClick() {
      dispatch(logout());
    },
    handleRegisterInterestModalOnClick() {
      dispatch(toggleLoginModal(false));
      dispatch(dismissAlert());
      dispatch(toggleRegisterInterestModal());
    }
  }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AppContainer));
