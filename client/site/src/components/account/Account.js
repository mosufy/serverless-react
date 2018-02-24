import React, { Component } from 'react';

import { Switch, Route } from 'react-router-dom';
import AccountOverviewContainer from "../../containers/account/AccountOverviewContainer";
import AccountBillingContainer from "../../containers/account/AccountBillingContainer";
import AccountSettingsContainer from "../../containers/account/AccountSettingsContainer";

class Account extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <Switch>
            <Route exact path="/account" component={AccountOverviewContainer}/>
            <Route path="/account/overview" component={AccountOverviewContainer}/>
            <Route path="/account/billing" component={AccountBillingContainer}/>
            <Route path="/account/settings" component={AccountSettingsContainer}/>
          </Switch>
        </div>
      </div>
    );
  }
}

export default Account;