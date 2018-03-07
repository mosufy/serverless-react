import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import AccountBilling from "../../components/account/AccountBilling";
import { onStripeChargeTokenCallback } from "../../actions/billingActions";

class AccountBillingContainer extends Component {
  render() {
    return <AccountBilling {...this.props} />;
  }
}

const mapStateToProps = state => {
  return {
    billing: state.billing,
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onStripeCheckoutTokenCallback(token) {
      dispatch(onStripeChargeTokenCallback(token));
    }
  }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AccountBillingContainer));
