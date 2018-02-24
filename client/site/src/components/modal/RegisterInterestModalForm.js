import React, { Component } from 'react';
import { Row, Col, Checkbox, HelpBlock } from "react-bootstrap";

import FieldGroup from '../form/FormFieldGroup';

export default class RegisterInterestModalForm extends Component {
  render() {
    let { formError, formSubmitting, handleChange } = this.props;

    return (
      <div>
        <p>&nbsp;</p>

        <Row className="show-grid">
          <Col xs={12} md={6}>
            <FieldGroup id="firstName" type="text" label="First Name" placeholder="Enter First Name"
                        onChange={handleChange}
                        validationError={formError.firstName}
                        disabled={formSubmitting}/>
          </Col>
          <Col xs={12} md={6}>
            <FieldGroup id="lastName" type="text" label="Last Name" placeholder="Enter Last Name"
                        onChange={handleChange}
                        validationError={formError.lastName}
                        disabled={formSubmitting}/>
          </Col>
        </Row>

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

        <Checkbox id="agree"
                  onChange={handleChange}
                  validationState={formError.agree === undefined || formError.agree === null ? null : 'error'}
                  disabled={formSubmitting}>
          By submitting this form, I agree to the Terms of Service.
          {formError.agree !== undefined && formError.agree !== null && <HelpBlock>{formError.agree}</HelpBlock>}
        </Checkbox>
      </div>
    )
  }
}