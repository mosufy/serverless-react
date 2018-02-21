export const showError = (code, message) => {
  return {
    type: 'SHOW_ALERT',
    payload: {
      code,
      message,
      type: 'error'
    }
  }
};

export const showSuccess = (message) => {
  return {
    type: 'SHOW_ALERT',
    payload: {
      code: '',
      message,
      type: 'success',
    }
  }
};

export const dismissAlert = () => {
  return {
    type: 'DISMISS_ALERT'
  }
};