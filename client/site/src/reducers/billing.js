const billing = (state = null, action) => {
  switch(action.type) {
    case 'STORE_BILLING_SUCCESS':
    case 'STORE_BILLING_PROCESSING':
    case 'STORE_BILLING_ERROR':
      return action.payload;
    default:
      return state;
  }
};

export default billing;