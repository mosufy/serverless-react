import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Nav, Navbar, NavItem, NavDropdown, MenuItem } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

class Navibar extends Component {
  state = {
    displayCollapsedNavbar: false
  };

  render() {
    let { handleLoginButtonOnClick, auth, handleLogoutOnClick } = this.props;

    return (
      <Navbar collapseOnSelect className="navbar navbar-custom fixed-top">
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/" style={{ color: '#337ab7' }}>Sher Tuition</Link>
          </Navbar.Brand>
          <Navbar.Toggle/>
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem eventKey={1} href="#">About</NavItem>
            <NavItem eventKey={2} href="#">Services</NavItem>
            <NavItem eventKey={3} href="#">Contact</NavItem>
          </Nav>
          <Nav pullRight>
            {!auth.isAuthenticated ? (
              <NavItem style={{ marginTop: -10 + 'px' }}><Button bsStyle="danger" onClick={handleLoginButtonOnClick} style={{ marginBottom: -5 + 'px' }}>Login</Button></NavItem>
            ) : (
              <NavDropdown eventKey={4} title="My Account" id="basic-nav-dropdown">
                <LinkContainer to="/account/overview"><MenuItem>Overview</MenuItem></LinkContainer>
                <LinkContainer to="/account/billing"><MenuItem>Billing</MenuItem></LinkContainer>
                <LinkContainer to="/account/settings"><MenuItem>Settings</MenuItem></LinkContainer>
                <MenuItem divider/>
                <MenuItem onClick={handleLogoutOnClick}>Log Out</MenuItem>
              </NavDropdown>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      // <nav className="navbar navbar-custom fixed-top">
      //   <div className="container">
      //     <div className="navbar-header">
      //       <button type="button" className="navbar-toggle" onClick={() => this.toggleNavbar()}>
      //         <span className="sr-only">Toggle navigation</span>
      //         <span className="icon-bar"/>
      //         <span className="icon-bar"/>
      //         <span className="icon-bar"/>
      //       </button>
      //       <Link className="navbar-brand" to="/">Sher Tuition</Link>
      //     </div>
      //
      //     <div className={`collapse navbar-collapse ${displayCollapsedNavbar ? "in" : ""}`}>
      //       <ul className="nav navbar-nav">
      //         <li>
      //           <Link to="/#about" onClick={() => this.toggleNavbar()}>About</Link>
      //         </li>
      //         <li>
      //           <a href="#services" onClick={() => this.toggleNavbar()}>Services</a>
      //         </li>
      //         <li>
      //           <a href="#contact" onClick={() => this.toggleNavbar()}>Contact</a>
      //         </li>
      //         <li>
      //           <Button bsStyle="danger" onClick={handleLoginButtonOnClick}>Login</Button>
      //         </li>
      //       </ul>
      //     </div>
      //   </div>
      // </nav>
    );
  }
}

export default Navibar;