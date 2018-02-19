import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Home from './../components/home/Home';
import { toggleRegisterInterestModal } from "../actions/modalActions";
import { pingTest, signup } from "../actions/authActions";

class HomeContainer extends Component {
  render() {
    return <Home {...this.props} />;
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
      dispatch(pingTest());
    },
    handleRegisterInterestOnSubmit(formValues) {
      dispatch(signup(formValues));
    }
  }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(HomeContainer));
