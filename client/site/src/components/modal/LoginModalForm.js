import React, { Component } from 'react';
import { Row, Col } from "react-bootstrap";

import FieldGroup from '../form/FormFieldGroup';

export default class LoginModalForm extends Component {
  render() {
    let { formError, formSubmitting, handleChange } = this.props;

    return (
      <div>
        <p>&nbsp;</p>

        <Row className="show-grid">
          <Col xs={12} md={6}>
            <FieldGroup id="email" type="text" label="Email" placeholder="Enter Email"
                        onChange={handleChange}
                        validationError={formError.email}
                        disabled={formSubmitting}/>
          </Col>
          <Col xs={12} md={6}>
            <FieldGroup id="password" type="password" label="Password" placeholder="Enter Password"
                        onChange={handleChange}
                        validationError={formError.password}
                        disabled={formSubmitting}/>
          </Col>
        </Row>
      </div>
    )
  }
}