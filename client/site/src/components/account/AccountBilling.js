import React, { Component } from 'react';
import { Breadcrumb, Clearfix, Row, Col, Panel } from 'react-bootstrap';
import StripeCheckout from 'react-stripe-checkout';
import ButtonLoader from "react-bootstrap-button-loader";
import Loading from 'react-loading-animation';

import AccountBreadcrumb from "../common/AccountBreadcrumb";
import config from "../../config";
import { getCurrentUser } from "../../lib/aws";

class AccountBilling extends Component {
  render() {
    const { billing, billingPlans, onStripeSubscribeTokenCallback, onStripeSubscribeOpened } = this.props;

    return (
      <div>
        <AccountBreadcrumb>
          <Breadcrumb.Item active>Billing</Breadcrumb.Item>
        </AccountBreadcrumb>

        <h1>Billing</h1>
        <hr/>

        <h2>Available Services</h2>
        <p>The following tuition services are available.</p>

        <Clearfix>&nbsp;</Clearfix>

        {billingPlans === null ? <Loading/> :
          <Row>
            {billingPlans.data.map(plan => (
              <Col md={4} key={plan.id}>
                <Panel bsStyle="primary">
                  {plan.metadata.isRecommended &&
                  <Panel.Heading>
                    <Panel.Title style={{ textAlign: 'center' }}>RECOMMENDED</Panel.Title>
                  </Panel.Heading>
                  }
                  <Panel.Body>
                    <h4>{plan.nickname}</h4>
                    <p><strong>Amount</strong>: {plan.currency} {plan.amount.display}<br/>
                      <strong>Billing Cycle</strong>: {plan.interval}
                    </p>

                    {billing !== null ?
                      (
                        <div>
                          <ButtonLoader bsStyle={billing.status === 'active' ? "success" : (billing.status === 'error' ? "danger" : "primary")} loading={billing.status === 'processing'}>{billing.status === 'active' ? "You have an active subscription" : (billing.status === 'error' ? "Error occurred. Please refresh." : "Processing...")}</ButtonLoader>
                        </div>
                      ) : (
                        <StripeCheckout
                          token={onStripeSubscribeTokenCallback}
                          stripeKey={config.stripe.CLIENT_KEY}
                          name="SherTuition"
                          description={plan.nickname}
                          amount={plan.amount.value}
                          currency={plan.currency}
                          email={getCurrentUser().username}
                          allowRememberMe={true}
                          opened={() => onStripeSubscribeOpened(plan.id, plan.amount.value, plan.currency)}
                          panelLabel="Subscribe for"
                        />
                      )
                    }

                  </Panel.Body>
                </Panel>
              </Col>
            ))}
          </Row>
        }
      </div>
    );
  }
}

export default AccountBilling;