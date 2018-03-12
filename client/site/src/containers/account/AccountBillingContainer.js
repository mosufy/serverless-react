import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import AccountBilling from "../../components/account/AccountBilling";
import { onStripeChargeTokenCallback, getPlans, onStripeSubscribeTokenCallback, onStripeSubscribeOpened } from "../../actions/billingActions";

class AccountBillingContainer extends Component {
  componentWillMount() {
    this.props.getPlans();
  }

  render() {
    if (this.props.billingPlans === null) return null;
    return <AccountBilling {...this.props} />;
  }
}

const mapStateToProps = state => {
  return {
    billing: state.billing,
    billingPlans: state.billingPlans,
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onStripeCheckoutTokenCallback(token) {
      dispatch(onStripeChargeTokenCallback(token));
    },
    onStripeSubscribeTokenCallback(token) {
      dispatch(onStripeSubscribeTokenCallback(token));
    },
    onStripeSubscribeOpened(planId, chargeAmount, chargeCurrency) {
      dispatch(onStripeSubscribeOpened(planId, chargeAmount, chargeCurrency));
    },
    getPlans() {
      dispatch(getPlans());
    }
  }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AccountBillingContainer));
