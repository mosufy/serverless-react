import stripePackage from 'stripe';

import { response, error } from "../../common";
import config from '../../../config';
import cache from '../../cache';

const CACHE_KEY_PLANS = 'cache_key_plans';

export const handler = (event, context, callback) => {
  return listPlans()
    .then(res => callback(null, response(event, res)))
    .catch(err => callback(null, error(event, err)));
};

const stripe = stripePackage(config.stripe.SECRET_KEY);

const listPlans = () => {
  return new Promise((resolve, reject) => {
    let plans = cache.get(CACHE_KEY_PLANS);

    if (plans === undefined) {
      return stripe.plans.list({}, (err, plans) => {
        if (err) reject(err);
        else {
          cache.set(CACHE_KEY_PLANS, plans);
          resolve(plans);
        }
      });
    } else {
      return resolve(plans);
    }
  });
};