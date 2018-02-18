import React, { Component } from 'react';
import { Modal, Row, Col, FormControl, FormGroup, Checkbox, ControlLabel, HelpBlock, Alert } from "react-bootstrap";
import ButtonLoader from "react-bootstrap-button-loader";

import { minField, emailFormat, checkboxRequired } from "../../utils/formValidation";

class RegisterInterestModal extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      formFields: {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        agree: false,
      },
      formError: {},
      formErrorMessage: null,
      formSubmitting: false,
    };
  }

  handleChange(e) {
    if (e.target.type === 'checkbox') {
      e.target.value = e.target.checked;
    }

    let nextState = Object.assign({}, this.state, {
      formFields: {
        ...this.state.formFields,
        [e.target.id]: e.target.value
      }
    });

    this.validateFormField(nextState, e.target.id);
    this.setState(nextState);
  }

  handleSubmit(e) {
    e.preventDefault();

    let nextState = Object.assign({}, this.state, {});

    this.validateFormField(nextState);
    this.setState(nextState);

    if (Object.keys(this.state.formError).length > 0) {
      this.setState({
        formErrorMessage: 'Please ensure you have entered your information correctly.'
      })
    } else {
      this.setState({
        formErrorMessage: null,
        formSubmitting: true,
      });
      this.props.handleRegisterInterestOnSubmit(this.state.formFields);
    }
  }

  render() {
    let { showModal, handleModalOnClick } = this.props;
    let { formError, formErrorMessage, formSubmitting } = this.state;

    return (
      <Modal show={showModal} onHide={handleModalOnClick} bsStyle="primary">
        <form onSubmit={this.handleSubmit}>
          <Modal.Header closeButton>
            <Modal.Title>Register Your Interest</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {formErrorMessage && <Alert bsStyle="danger">{formErrorMessage}</Alert>}

            <h4>Create an account with us to register your interest</h4>
            <p>By creating an account, you can manage your schedules and arrange to make automatic future payments!</p>

            <p>&nbsp;</p>

            <Row className="show-grid">
              <Col xs={12} md={6}>
                <FieldGroup id="firstName" type="text" label="First Name" placeholder="Enter First Name"
                            onChange={this.handleChange}
                            validationError={formError.firstName}
                            disabled={formSubmitting}/>
              </Col>
              <Col xs={12} md={6}>
                <FieldGroup id="lastName" type="text" label="Last Name" placeholder="Enter Last Name"
                            onChange={this.handleChange}
                            validationError={formError.lastName}
                            disabled={formSubmitting}/>
              </Col>
            </Row>

            <Row className="show-grid">
              <Col xs={12} md={6}>
                <FieldGroup id="email" type="text" label="Email" placeholder="Enter Email"
                            onChange={this.handleChange}
                            validationError={formError.email}
                            disabled={formSubmitting}/>
              </Col>
              <Col xs={12} md={6}>
                <FieldGroup id="password" type="text" label="Password" placeholder="Enter Password"
                            onChange={this.handleChange}
                            validationError={formError.password}
                            disabled={formSubmitting}/>
              </Col>
            </Row>

            <Checkbox id="agree"
                      onChange={this.handleChange}
                      validationState={formError.agree === undefined || formError.agree === null ? null : 'error'}
                      disabled={formSubmitting}>
              By submitting this form, I agree to the Terms of Service.
              {formError.agree !== undefined && formError.agree !== null && <HelpBlock>{formError.agree}</HelpBlock>}
            </Checkbox>

          </Modal.Body>
          <Modal.Footer>
            <ButtonLoader type="submit" bsStyle="danger" loading={formSubmitting}>Submit</ButtonLoader>
          </Modal.Footer>
        </form>
      </Modal>
    );
  }

  validateFormField(state, formGroupName = null) {
    let validateFields = [];
    let res = null;

    if (formGroupName === null) {
      validateFields = Object.keys(state.formFields);
    } else {
      validateFields.push(formGroupName);
    }

    for (let i = 0; i < validateFields.length; i++) {
      formGroupName = validateFields[i];
      const formValue = state.formFields[validateFields[i]];

      switch (formGroupName) {
        case 'firstName':
        case 'lastName':
          res = minField(formValue, 3);
          break;
        case 'password':
          res = minField(formValue, 6);
          break;
        case 'email':
          res = emailFormat(formValue);
          break;
        case 'agree':
          res = checkboxRequired(formValue);
          break;
        default:
          res = null;
      }

      if (res !== null) {
        state.formError[formGroupName] = res;
      } else {
        delete state.formError[formGroupName];
      }
    }
  }
}

const FieldGroup = ({ id, label, validationError, ...props }) => {
  validationError = validationError === undefined ? null : validationError;

  return (
    <FormGroup controlId={id} validationState={validationError !== null ? "error" : validationError}>
      <ControlLabel>{label}</ControlLabel>
      <FormControl {...props} />
      {validationError !== null && <HelpBlock>{validationError}</HelpBlock>}
    </FormGroup>
  );
};

export default RegisterInterestModal;