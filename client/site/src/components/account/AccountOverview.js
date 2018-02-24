import React, { Component } from 'react';
import { Breadcrumb } from 'react-bootstrap';
import AccountBreadcrumb from "../common/AccountBreadcrumb";

class AccountOverview extends Component {
  render() {
    return (
      <div>
        <AccountBreadcrumb>
          <Breadcrumb.Item active>Overview</Breadcrumb.Item>
        </AccountBreadcrumb>

        <h1>Overview</h1>
      </div>
    );
  }
}

export default AccountOverview;