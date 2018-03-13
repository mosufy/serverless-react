import * as sdk from "../lib/sdk";

export const onStripeChargeTokenCallback = (token) => {
  return (dispatch) => {
    return sdk.createCharge({
      token: token,
      charge: {
        amount: 350,
        currency: 'SGD',
      }
    })
      .then((res) => {
        dispatch({
          type: 'STORE_BILLING_SUCCESS',
          payload: {
            status: res.data.message.status,
            amount: res.data.message.amount,
            currency: res.data.message.currency,
            transaction_id: res.data.message.id,
          }
        })
      })
      .catch((err) => {
        console.log(err);
      })
  }
};

export const getPlans = () => {
  return (dispatch, getState) => {
    if (getState().billingPlans === null) {
      return sdk.getPlans()
        .then(res => dispatch({ type: 'STORE_BILLING_PLANS', payload: res.data.message }))
        .catch(err => console.log(err));
    }
  }
};

export const onStripeSubscribeTokenCallback = (token) => {
  return (dispatch, getState) => {
    dispatch({
      type: 'STORE_BILLING_PROCESSING',
      payload: {
        status: 'processing',
      }
    });

    return sdk.createSubscription({
      token: token,
      charge: {
        amount: 350,
        currency: 'SGD',
      },
      plan: getState().billingPlanSelected.planId,
      userId: getState().auth.userId,
    })
      .then((res) => {
        dispatch({
          type: 'STORE_BILLING_SUCCESS',
          payload: {
            status: res.data.message.status,
            amount: res.data.message.amount,
            currency: res.data.message.currency,
            transaction_id: res.data.message.id,
          }
        })
      })
      .catch((err) => {
        console.log(err);
        dispatch({
          type: 'STORE_BILLING_ERROR',
          payload: {
            status: 'error',
          }
        })
      })
  }
};

export const onStripeSubscribeOpened = (planId, chargeAmount, chargeCurrency) => {
  return (dispatch) => {
    dispatch({
      type: 'STORE_SELECTED_BILLING_PLAN',
      payload: {
        planId,
        charge: {
          amount: chargeAmount,
          currency: chargeCurrency,
        }
      }
    })
  }
};