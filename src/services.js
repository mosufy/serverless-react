import Service from './models/Service';
import { response, error } from "./common";

export const ping = (event, context, callback) => {
  const resp = new Promise((resolve) => resolve('success'));

  let service = new Service;

  resp
    .then(() => callback(null, response(event, service.ping())))
    .catch(e => callback(null, error(event, e.message)));
};
