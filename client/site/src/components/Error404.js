import React, { Component } from 'react';
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

class Error404 extends Component {
  render() {
    return (
      <div className="container" style={{ textAlign: 'center' }}>
        <h1 className="headline" style={{
          fontSize: 200 + 'px',
          fontWeight: 900,
          paddingTop: 100 + 'px',
          paddingBottom: 0
        }}>404</h1>

        <p>Oops... Looks like you were brought here by accident!</p>

        <Link to="/">
          <Button>Back to Site</Button>
        </Link>

      </div>
    );
  }
}

export default Error404;