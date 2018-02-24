import React, { Component } from 'react';
import { Breadcrumb } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

class AccountBreadcrumb extends Component {
  render() {
    return (
      <Breadcrumb>
        <LinkContainer to="/account">
          <Breadcrumb.Item>Account</Breadcrumb.Item>
        </LinkContainer>
        {this.props.children}
      </Breadcrumb>
    );
  }
}

export default AccountBreadcrumb;