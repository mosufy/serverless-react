import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import ConfirmRegistration from './../components/auth/ConfirmRegistration';
import { confirmUser } from "../actions/authActions";

class AuthContainer extends Component {
  state = {
    isConfirming: false,
  };

  componentDidMount() {
    this.confirmUser(this.props.router.location);
  }

  render() {
    if (this.state.isConfirming) {
      return null;
    }

    return <ConfirmRegistration {...this.props} />;
  }

  confirmUser(location) {
    if (location.pathname === '/auth/confirm-registration') {
      this.setState({ isConfirming: true });

      const search = location.search;
      const username = new URLSearchParams(search).get('username');
      const confirmationCode = new URLSearchParams(search).get('confirmation-code');

      this.props.confirmUser(username, confirmationCode)
        .then(() => this.setState({ isConfirming: false }))
        .catch(() => this.setState({ isConfirming: false }));
    }
  }
}

const mapStateToProps = state => {
  return {
    router: state.router,
  }
};

const mapDispatchToProps = dispatch => {
  return {
    confirmUser(username, confirmationCode) {
      return new Promise((resolve, reject) => {
        dispatch(confirmUser(username, confirmationCode)).then(res => resolve(res)).catch(err => reject(err))
      })
    },
  }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AuthContainer));
