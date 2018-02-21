import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AppContainer));
