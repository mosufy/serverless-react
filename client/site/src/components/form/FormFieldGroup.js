import React from 'react';
import { FormControl, FormGroup, ControlLabel, HelpBlock } from "react-bootstrap";

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

export default FieldGroup;