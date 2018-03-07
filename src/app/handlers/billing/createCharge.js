import stripePackage from 'stripe';

import { response, error } from "../../common";
import config from '../../../config';

export const handler = (event, context, callback) => {
  return createCharge(event)
    .then(res => {
      callback(null, response(event, res));
    })
    .catch(err => {
      console.log('err', err);
      callback(null, error(event, err));
    });
};

const stripe = stripePackage(config.stripe.SECRET_KEY);

const createCharge = (event) => {
  const requestBody = JSON.parse(event.body);
  const token = requestBody.token.id;
  const amount = requestBody.charge.amount;
  const currency = requestBody.charge.currency;

  return new Promise((resolve, reject) => {
    return stripe.charges.create({ // Create Stripe charge with token
      amount,
      currency,
      description: 'Serverless Stripe Test charge',
      source: token,
    })
      .then(res => {
        resolve(res);
      })
      .catch(err => {
        reject(err);
      });
  });
};