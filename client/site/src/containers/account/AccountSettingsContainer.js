import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import AccountSettings from "../../components/account/AccountSettings";

class AccountSettingsContainer extends Component {
  render() {
    return <AccountSettings {...this.props} />;
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AccountSettingsContainer));
