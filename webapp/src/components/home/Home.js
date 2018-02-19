import React, { Component } from 'react';

import Featurette from "./Featurette";
import Hero from "./Hero";

import Featurette1Img from "../../assets/img/featurette1.jpg";
import Featurette2Img from "../../assets/img/featurette2.jpg";
import Featurette3Img from "../../assets/img/featurette3.jpg";
import RegisterInterestModal from "../modal/RegisterInterestModal";

class Home extends Component {
  render() {
    let { showRegisterInterestModal, handleRegisterInterestModalOnClick, handleRegisterInterestOnSubmit } = this.props;

    return (
      <div>
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

          <RegisterInterestModal showModal={showRegisterInterestModal}
                                 handleModalOnClick={handleRegisterInterestModalOnClick}
                                 handleRegisterInterestOnSubmit={handleRegisterInterestOnSubmit}/>

        </div>
      </div>
    );
  }
}

export default Home;