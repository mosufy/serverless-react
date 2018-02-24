import React, { Component } from 'react';
import { Breadcrumb } from 'react-bootstrap';

import AccountBreadcrumb from "../common/AccountBreadcrumb";

class AccountBilling extends Component {
  render() {
    return (
      <div>
        <AccountBreadcrumb>
          <Breadcrumb.Item active>Billing</Breadcrumb.Item>
        </AccountBreadcrumb>

        <h1>Billing</h1>
      </div>
    );
  }
}

export default AccountBilling;