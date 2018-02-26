import * as faunadb from 'faunadb';

import config from "../config";

class dbconnect {
  constructor() {
    this.q = faunadb.query;
    this.client = new faunadb.Client({ secret: config.faunadb.SECRET_KEY });
  }
}

export default dbconnect;