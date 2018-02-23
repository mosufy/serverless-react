import Service from './repositories/Service';
import { response } from "./common";

export const ping = (event, context, callback) => {
  let service = new Service();

  return new Promise((resolve) => {
    callback(null, response(event, service.ping()));
    resolve();
  });
};
