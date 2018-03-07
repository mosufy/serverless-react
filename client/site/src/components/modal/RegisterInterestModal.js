import React, { Component } from 'react';
import { Modal, Alert } from "react-bootstrap";
import ButtonLoader from "react-bootstrap-button-loader";

import { minField, emailFormat, checkboxRequired } from "../../lib/formValidation";
import RegisterInterestModalForm from "./RegisterInterestModalForm";

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
      formSuccessMessage: null,
      formSubmitting: false,
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.formStatus !== this.props.formStatus) {
      if (nextProps.formStatus.alert !== null) {
        this.setState({
          formErrorMessage: nextProps.formStatus.alert.type === 'error' ? nextProps.formStatus.alert.message : null,
          formSuccessMessage: nextProps.formStatus.alert.type === 'success' ? nextProps.formStatus.alert.message : null,
          formSubmitting: false,
        })
      }
    }
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

    validateFormField(nextState, e.target.id);
    this.setState(nextState);
  }

  handleSubmit(e) {
    e.preventDefault();

    let nextState = Object.assign({}, this.state, {});

    validateFormField(nextState);
    this.setState(nextState);

    if (Object.keys(this.state.formError).length > 0) {
      this.setState({
        formErrorMessage: 'Please ensure you have entered your information correctly.',
        formSuccessMessage: null,
      })
    } else {
      this.setState({
        formErrorMessage: null,
        formSuccessMessage: null,
        formSubmitting: true,
      });
      this.props.handleModalOnSubmit(this.state.formFields);
    }
  }

  render() {
    let { showModal, handleModalOnClick } = this.props;
    let { formErrorMessage, formError, formSuccessMessage, formSubmitting } = this.state;

    return (
      <Modal show={showModal} onHide={handleModalOnClick} bsStyle="primary">
        <form onSubmit={this.handleSubmit}>
          <Modal.Header closeButton>
            <Modal.Title>Register Your Interest</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {(formSuccessMessage || formErrorMessage) &&
            <Alert bsStyle={formSuccessMessage ? 'success' : 'danger'}>{formSuccessMessage || formErrorMessage}</Alert>}

            <h4>Create an account with us to register your interest</h4>
            <p>By creating an account, you can manage your schedules and arrange to make automatic future payments!</p>

            {!formSuccessMessage &&
            <RegisterInterestModalForm formError={formError} formSubmitting={formSubmitting} handleChange={this.handleChange}/>}

          </Modal.Body>

          {!formSuccessMessage &&
          <Modal.Footer>
            <ButtonLoader type="submit" bsStyle="danger" loading={formSubmitting}>Submit</ButtonLoader>
          </Modal.Footer>}
        </form>
      </Modal>
    );
  }
}

const validateFormField = (state, formGroupName = null) => {
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
};

export default RegisterInterestModal;