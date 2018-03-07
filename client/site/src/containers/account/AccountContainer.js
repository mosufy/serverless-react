import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Account from "../../components/account/Account";

class AccountContainer extends Component {
  render() {
    return <Account {...this.props} />;
  }
}

const mapStateToProps = state => {
  return {
    //
  }
};

const mapDispatchToProps = dispatch => {
  return {
    //
  }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AccountContainer));
