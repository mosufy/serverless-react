import * as faunadb from 'faunadb';

import config from "../config";

const q = faunadb.query, client = new faunadb.Client({ secret: config.faunadb.SECRET_KEY }), ref = faunadb.Ref;

export const pingTest = () => {
  return new Promise((resolve, reject) => {
    client.query(q.Concat(["Hello", "World"], " "))
      .then(res => (resolve(res)))
      .catch(err => (reject(err)));
  });
};

export const insertUser = (userData) => {
  return new Promise((resolve, reject) => {
    client.query(q.Create(q.Class('User'), { data: userData }))
      .then(res => (resolve(res)))
      .catch(err => (reject(err)));
  });
};

export const getUser = () => {
  return new Promise((resolve, reject) => {
    client.query(q.Paginate(q.Match(q.Index("User_username"), "asd")))
      .then(res => (resolve(res)))
      .catch(err => (reject(err)));
  });
};