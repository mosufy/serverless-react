import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

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
      handleRegisterInterestModalOnClick,
    } = this.props;

    return (
      <div>
        <Navbar handleLoginButtonOnClick={handleLoginModalOnClick} auth={auth} handleLogoutOnClick={handleLogoutOnClick}/>

        <Switch>
          <Route exact path="/" component={HomeContainer}/>
          <Route path="/about" component={HomeContainer}/>
          <Route path="/auth/confirm-registration" component={AuthContainer}/>
          <ProtectedRoute path="/account" component={AccountContainer} {...this.props}/>
          <Route component={Error404Container}/>
        </Switch>

        <div className="container">
          <LoginModal showModal={showLoginModal}
                      handleModalOnClick={handleLoginModalOnClick}
                      handleModalOnSubmit={handleLoginOnSubmit}
                      handleRegisterInterestModalOnClick={handleRegisterInterestModalOnClick}
                      formStatus={formStatus}/>
          <Footer/>
        </div>
      </div>
    );
  }
}

const ProtectedRoute = ({ component: Component, ...rest }) => {
  return <Route
    {...rest}
    render={props =>
      rest.auth.isAuthenticated ? (
        <Component {...props} />
      ) : (
        <Redirect to={{
          pathname: "/",
          state: { from: props.location },
          search: "?login=true"
        }}/>
      )
    }
  />
};

export default App;