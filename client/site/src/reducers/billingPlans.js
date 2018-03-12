const billingPlans = (state = null, action) => {
  switch(action.type) {
    case 'STORE_BILLING_PLANS':
      action.payload.data.sort((a, b) => a.amount - b.amount);
      return {
        ...action.payload,
        data: action.payload.data.map(plan => {
          return {
            ...plan,
            currency: plan.currency.toUpperCase(),
            amount: {
              value: plan.amount,
              display: plan.amount / 100
            },
            interval: plan.interval === 'month' ? 'Monthly' : plan.interval,
            isRecommended: plan.isRecommended === 'true',
          }
        })
      };
    default:
      return state;
  }
};

export default billingPlans;