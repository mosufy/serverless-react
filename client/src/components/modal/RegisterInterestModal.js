import React, { Component } from 'react';
import { Modal, Button } from "react-bootstrap";

class RegisterInterestModal extends Component {
  render() {
    let { showModal, handleModalOnClick } = this.props;

    return (
      <Modal show={showModal} onHide={handleModalOnClick} bsStyle="primary">
        <Modal.Header closeButton>
          <Modal.Title>Register Your Interest</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Create an account with us to register your interest</h4>
          <p>By creating an account, you can manage your schedules and arrange to make automatic future payments!</p>

          <hr/>

          <p>By submitting this form, I agree to the Terms of Service.</p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleModalOnClick}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default RegisterInterestModal;