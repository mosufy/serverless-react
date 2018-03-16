import stripePackage from 'stripe';

import { response, error } from "../../common";
import config from '../../../config';

export const handler = (event, context, callback) => {
  return createSubscription(event)
    .then(res => callback(null, response(event, res)))
    .catch(err => callback(null, error(event, err)));
};

const stripe = stripePackage(config.stripe.SECRET_KEY);

const createSubscription = (event) => {
  return new Promise((resolve, reject) => {
    return createCustomer(event)
      .then(res => {
        const requestBody = JSON.parse(event.body);
        const source = requestBody.token.id;
        const plan = requestBody.plan;

        return stripe.subscriptions.create({ // Create Stripe charge with token
          customer: res.id,
          items: [
            {
              plan,
            }
          ],
          source,
        });
      })
      .then(res => resolve(res))
      .catch(err => reject(err));
  });
};

const createCustomer = (event) => {
  const requestBody = JSON.parse(event.body);
  const email = requestBody.token.email;
  const userId = requestBody.userId;

  return stripe.customers.create({
    description: `UserId:${userId}`,
    email,
    metadata: {
      userId,
    }
  });
};