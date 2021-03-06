import React, { Component } from 'react';
import { Breadcrumb, Clearfix, Button } from 'react-bootstrap';
import StripeCheckout from 'react-stripe-checkout';

import AccountBreadcrumb from "../common/AccountBreadcrumb";

class AccountBilling extends Component {
  render() {
    const { onStripeCheckoutTokenCallback, billing } = this.props;

    return (
      <div>
        <AccountBreadcrumb>
          <Breadcrumb.Item active>Billing</Breadcrumb.Item>
        </AccountBreadcrumb>

        <h1>Billing</h1>

        <p>You are not currently subscribed to our services. Click the Pay with Card button below to subscribe to our service.</p>

        <h2>Available Services</h2>
        <p>The following tuition services are available.</p>

        <Clearfix>&nbsp;</Clearfix>

        <h4>Weekly Tuition - Primary School Level</h4>
        <p><strong>Amount</strong>: SGD 350 / month<br/>
          <strong>Billing Cycle</strong>: Monthly
        </p>

        {billing !== null && billing.status === 'succeeded' ?
          (
            <div>
              <Button bsStyle="success">Subscription Paid</Button>
            </div>
          ) : (
            <StripeCheckout
              token={onStripeCheckoutTokenCallback}
              stripeKey="pk_test_g8oJNFsyvXFjLCm6tE6gkZL9"
              name="SherTuition"
              description="Improving Life Together"
              amount={35000}
              currency="SGD"
              email="mosufy+asd@gmail.com"
              allowRememberMe={false}
            />
          )}
      </div>
    );
  }
}

export default AccountBilling;