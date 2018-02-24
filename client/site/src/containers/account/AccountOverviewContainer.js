import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import AccountOverview from "../../components/account/AccountOverview";

class AccountOverviewContainer extends Component {
  render() {
    return <AccountOverview {...this.props} />;
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AccountOverviewContainer));
