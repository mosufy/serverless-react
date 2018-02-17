import React, { Component } from 'react';

class Featurette extends Component {
  render() {
    let {imgSrc, pullDirection, heading, subHeading, text} = this.props;

    return (
      <div className="featurette">
        <img className={`featurette-image img-circle img-responsive pull-${pullDirection}`} src={imgSrc} alt=""/>
        <h2 className="featurette-heading">{heading} <span className="text-muted">{subHeading}</span></h2>
        <p className="lead">{text}</p>
      </div>
    );
  }
}

export default Featurette;