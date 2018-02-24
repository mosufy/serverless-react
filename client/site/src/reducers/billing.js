const billing = (state = null, action) => {
  switch(action.type) {
    case 'STORE_BILLING_SUCCESS':
      return action.payload;
    default:
      return state;
  }
};

export default billing;