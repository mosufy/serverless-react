import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Navbar from "./common/Navibar";
import HomeContainer from "../containers/HomeContainer";
import AuthContainer from "../containers/AuthContainer";
import Error404Container from "../containers/Error404Container";
import AccountContainer from "../containers/account/AccountContainer";
import Footer from "./common/Footer";
import LoginModal from "../components/modal/LoginModal";

class App extends Component {
  render() {
    let {
      showLoginModal,
      handleLoginModalOnClick,
      handleLoginOnSubmit,
      formStatus,
      auth,
      handleLogoutOnClick,
    } = this.props;

    return (
      <div>
        <Navbar handleLoginButtonOnClick={handleLoginModalOnClick} auth={auth} handleLogoutOnClick={handleLogoutOnClick}/>

        <Switch>
          <Route exact path="/" component={HomeContainer}/>
          <Route path="/about" component={HomeContainer}/>
          <Route path="/auth/confirm-registration" component={AuthContainer}/>
          <Route path="/account" component={AccountContainer}/>
          <Route component={Error404Container}/>
        </Switch>

        <div className="container">
          <LoginModal showModal={showLoginModal}
                      handleModalOnClick={handleLoginModalOnClick}
                      handleModalOnSubmit={handleLoginOnSubmit}
                      formStatus={formStatus}/>
          <Footer/>
        </div>
      </div>
    );
  }
}

export default App;