import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class Featurette extends Component {
  render() {
    let {imgSrc, pullDirection, heading, subHeading, text, handleButtonClick} = this.props;

    return (
      <div className="featurette">
        <img className={`featurette-image img-circle img-responsive pull-${pullDirection}`} src={imgSrc} alt=""/>
        <h2 className="featurette-heading">{heading} <span className="text-muted">{subHeading}</span></h2>
        <p className="lead">{text}</p>
        <Button bsStyle="danger" bsSize="large" onClick={handleButtonClick}>Register Interest</Button>
      </div>
    );
  }
}

export default Featurette;