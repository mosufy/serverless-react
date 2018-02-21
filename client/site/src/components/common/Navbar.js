import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
  state = {
    displayCollapsedNavbar: false
  };

  toggleNavbar() {
    this.setState({
      displayCollapsedNavbar: this.state.displayCollapsedNavbar !== true
    })
  };

  render() {
    let { displayCollapsedNavbar } = this.state;

    return (
      <nav className="navbar navbar-custom fixed-top">
        <div className="container">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle" onClick={() => this.toggleNavbar()}>
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"/>
              <span className="icon-bar"/>
              <span className="icon-bar"/>
            </button>
            <Link className="navbar-brand" to="/">Sher Tuition</Link>
          </div>

          <div className={`collapse navbar-collapse ${displayCollapsedNavbar ? "in" : ""}`}>
            <ul className="nav navbar-nav">
              <li>
                <Link to="/#about" onClick={() => this.toggleNavbar()}>About</Link>
              </li>
              <li>
                <a href="#services" onClick={() => this.toggleNavbar()}>Services</a>
              </li>
              <li>
                <a href="#contact" onClick={() => this.toggleNavbar()}>Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;