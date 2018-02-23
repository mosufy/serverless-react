import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Navbar from "./common/Navbar";
import HomeContainer from "../containers/HomeContainer";
import AuthContainer from "../containers/AuthContainer";
import Error404Container from "../containers/Error404Container";
import Footer from "./common/Footer";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>

        <Switch>
          <Route exact path="/" component={HomeContainer}/>
          <Route path="/about" component={HomeContainer}/>
          <Route path="/auth/confirm-registration" component={AuthContainer}/>
          <Route component={Error404Container}/>
        </Switch>

        <div className="container">
          <Footer/>
        </div>
      </div>
    );
  }
}

export default App;