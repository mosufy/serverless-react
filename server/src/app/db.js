import AWS from 'aws-sdk';
import isEmpty from 'lodash.isempty';

const dynamo = new AWS.DynamoDB.DocumentClient();

export const get = (params) => {
  return new Promise((resolve, reject) => {
    dynamo.get(params, (err, data) => {
      if (err) return reject(err);
      else return resolve(data);
    });
  });
};

export const query = (params) => {
  return new Promise((resolve, reject) => {
    dynamo.query(params, (err, data) => {
      if (err) return reject(err);
      else return resolve(data);
    });
  });
};

export const put = (params) => {
  return new Promise((resolve, reject) => {
    dynamo.put(params, (err, data) => {
      if (err) return reject(err);
      else return resolve(isEmpty(data) ? params : data);
    });
  });
};