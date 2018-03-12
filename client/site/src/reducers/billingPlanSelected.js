const billingPlanSelected = (state = null, action) => {
  switch(action.type) {
    case 'STORE_SELECTED_BILLING_PLAN':
      return action.payload;
    default:
      return state;
  }
};

export default billingPlanSelected;