import React, { Component } from 'react';

import { Button, Grid, Row, Col, Panel } from "react-bootstrap";

class ConfirmRegistration extends Component {
  render() {
    return (
      <div className="container">
        <Grid style={{ marginTop: 100 + 'px', marginBottom: 100 + 'px' }}>
          <Row className="show-grid text-center">
            <Col md={6} mdOffset={3}>
              <Panel style={{ borderColor: "#ffffff" }}>
                <Panel.Body style={{ marginTop: 50 + 'px', marginBottom: 50 + 'px' }}>
                  <p>Thank you for confirming your registration.</p>
                  <Button bsStyle="danger">Login to Continue</Button>
                </Panel.Body>
              </Panel>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default ConfirmRegistration;