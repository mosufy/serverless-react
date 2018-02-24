import stripePackage from 'stripe';

import config from '../../config';

const stripe = stripePackage(config.stripe.SECRET_KEY);

class Billing {
  createCharge(event) {
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
  }
}

export default Billing;