import Service from '../repositories/Service';
import { response, error } from "../common";

export const ping = (event, context, callback) => {
  let service = new Service();

  service.ping()
     .then(res => callback(null, response(event, res)))
     .catch(err => callback(null, error(event, err)));
};