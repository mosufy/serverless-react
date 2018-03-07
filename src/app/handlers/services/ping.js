import { response, error } from "../../common";

export const handler = (event, context, callback) => {
  ping()
    .then(res => callback(null, response(event, res)))
    .catch(err => callback(null, error(event, err)));
};

export const ping = () => {
  return new Promise((resolve) => {
    return resolve("Pong");
  });
};