let initialState = {
  submitting: false,
  alert: null,
};

const form = (state = initialState, action) => {
  switch(action.type) {
    case 'SHOW_ALERT':
      return {
        submitting: false,
        alert: {
          code: action.payload.code,
          message: action.payload.message,
          type: action.payload.type,
        }
      };
    case 'DISMISS_ALERT':
      return initialState;
    default:
      return state;
  }
};

export default form;