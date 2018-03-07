import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import App from './../components/App';
import { toggleLoginModal } from "../actions/modalActions";
import { login, currentUser, logout } from "../actions/authActions";

class AppContainer extends Component {
  componentDidMount() {
    this.props.getCurrentUser();
  }

  render() {
    if (this.props.auth.isLoading) return null;
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
    },
    handleLoginOnSubmit(formValues) {
      dispatch(login(formValues));
    },
    getCurrentUser() {
      dispatch(currentUser());
    },
    handleLogoutOnClick() {
      dispatch(logout());
    }
  }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AppContainer));
