import Service from '../repositories/Service';
import { response } from "../common";

export const ping = (event, context, callback) => {
  let service = new Service();

  return new Promise((resolve) => {
    let resPing = service.ping();

    return service.pingDb()
      .then(resPingDb => {
        let res = {
          ping: resPing,
          pingDb: resPingDb,
        };

        callback(null, response(event, res));
        resolve();
      });
  });
};