import React, { Component } from 'react';

import Navbar from "./common/Navbar";
import Hero from "./home/Hero";
import Footer from "./common/Footer";
import Featurette from "./home/Featurette";

import Featurette1Img from "../assets/img/featurette1.jpg";
import Featurette2Img from "../assets/img/featurette2.jpg";
import Featurette3Img from "../assets/img/featurette3.jpg";
import RegisterInterestModal from "./modal/RegisterInterestModal";

class App extends Component {
  render() {
    let { showRegisterInterestModal, handleRegisterInterestModalOnClick } = this.props;

    return (
      <div>
        <Navbar/>
        <Hero/>

        <div className="container">

          <hr className="featurette-divider"/>

          <div id="about"/>

          <Featurette imgSrc={Featurette1Img}
                      pullDirection="right"
                      heading="One-On-One"
                      subHeading="Because Everyone Is Different"
                      text="Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo."
                      handleButtonClick={handleRegisterInterestModalOnClick}/>

          <hr className="featurette-divider"/>

          <Featurette imgSrc={Featurette2Img}
                      pullDirection="left"
                      heading="MOE Certified Tutors"
                      subHeading="Are Our Quality Assurance"
                      text="Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo."
                      handleButtonClick={handleRegisterInterestModalOnClick}/>

          <hr className="featurette-divider"/>

          <Featurette imgSrc={Featurette3Img}
                      pullDirection="right"
                      heading="This Third Heading"
                      subHeading="Will Seal the Deal"
                      text="Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo."
                      handleButtonClick={handleRegisterInterestModalOnClick}/>

          <hr className="featurette-divider"/>

          <RegisterInterestModal showModal={showRegisterInterestModal} handleModalOnClick={handleRegisterInterestModalOnClick}/>

          <Footer/>

        </div>
      </div>
    );
  }
}

export default App;