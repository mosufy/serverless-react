import React, { Component } from 'react';
import { connect } from 'react-redux';

import App from './../components/App';
import { toggleRegisterInterestModal } from "../actions/modalActions";

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
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
