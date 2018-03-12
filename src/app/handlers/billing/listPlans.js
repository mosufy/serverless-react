import stripePackage from 'stripe';

import { response, error } from "../../common";
import config from '../../../config';

export const handler = (event, context, callback) => {
  return listPlans()
    .then(res => callback(null, response(event, res)))
    .catch(err => callback(null, error(event, err)));
};

const stripe = stripePackage(config.stripe.SECRET_KEY);

const listPlans = () => {
  return new Promise((resolve, reject) => {
    return stripe.plans.list({}, (err, plans) => {
      if (err) reject(err);
      else resolve(plans);
    });
  });
};