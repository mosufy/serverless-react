import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import AccountBilling from "../../components/account/AccountBilling";

class AccountBillingContainer extends Component {
  render() {
    return <AccountBilling {...this.props} />;
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AccountBillingContainer));
