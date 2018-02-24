import Billing from '../repositories/Billing';
import { response, error } from "../common";

export const createCharge = (event, context, callback) => {
  let billing = new Billing();

  return billing.createCharge(event)
    .then(res => {
      callback(null, response(event, res));
    })
    .catch(err => {
      console.log('err', err);
      callback(null, error(event, err));
    });
};
