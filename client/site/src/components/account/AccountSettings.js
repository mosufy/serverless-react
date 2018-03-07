import React, { Component } from 'react';
import { Breadcrumb } from 'react-bootstrap';

import AccountBreadcrumb from "../common/AccountBreadcrumb";

class AccountSettings extends Component {
  render() {
    return (
      <div>
        <AccountBreadcrumb>
          <Breadcrumb.Item active>Settings</Breadcrumb.Item>
        </AccountBreadcrumb>

        <h1>Settings</h1>
      </div>
    );
  }
}

export default AccountSettings;