// eslint-disable-next-line import/prefer-default-export

import { response, error } from "./common";

export const ping = (event, context, cb) => {
  const p = new Promise((resolve) => {
    resolve('success');
  });

  p
    .then(() => cb(null, response(event, 'Pong')))
    .catch(e => cb(null, error(event, e.message)));
};
