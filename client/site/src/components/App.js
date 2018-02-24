import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Navbar from "./common/Navbar";
import HomeContainer from "../containers/HomeContainer";
import AuthContainer from "../containers/AuthContainer";
import Error404Container from "../containers/Error404Container";
import Footer from "./common/Footer";
import LoginModal from "../components/modal/LoginModal";

class App extends Component {
  render() {
    let {
      showLoginModal,
      handleLoginModalOnClick,
      handleLoginOnSubmit,
      formStatus,
    } = this.props;

    return (
      <div>
        <Navbar handleLoginButtonOnClick={handleLoginModalOnClick}/>

        <Switch>
          <Route exact path="/" component={HomeContainer}/>
          <Route path="/about" component={HomeContainer}/>
          <Route path="/auth/confirm-registration" component={AuthContainer}/>
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