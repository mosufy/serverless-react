import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Home from './../components/home/Home';
import { toggleLoginModal, toggleRegisterInterestModal } from "../actions/modalActions";
import { signup } from "../actions/authActions";

class HomeContainer extends Component {
  componentDidMount() {
    const { showLogin } = this.props.location.state || { showLogin: false };

    if (showLogin) {
      this.props.showLoginModal();
    }
  }

  render() {
    return <Home {...this.props} />;
  }
}

const mapStateToProps = state => {
  return {
    showRegisterInterestModal: state.modal.registerInterestModal,
    formStatus: state.form,
  }
};

const mapDispatchToProps = dispatch => {
  return {
    handleRegisterInterestModalOnClick() {
      dispatch(toggleRegisterInterestModal());
    },
    handleRegisterInterestOnSubmit(formValues) {
      dispatch(signup(formValues));
    },
    showLoginModal() {
      dispatch(toggleLoginModal(true));
    }
  }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(HomeContainer));
