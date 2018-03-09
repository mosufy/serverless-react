import uuid from 'uuid';

import { put, get } from "../../db";
import config from "../../../config";
import { tableAuthLogsActions } from "../../../constants";

export const handler = (event, context) => {
  insertAuthLog(event)
    .then(() => context.done(null, event))
    .catch(err => context.fail(JSON.stringify(err)));
};

const insertAuthLog = (event) => {
  return dbGetUser(event.request.userAttributes.sub)
    .then(res => {
      let datetimenow = Date.now();

      let data = {
        id: uuid.v1(),
        user_id: res.Item.id,
        action: tableAuthLogsActions.LOGIN,
        created_at: datetimenow,
      };

      return dbInsertAuthLog(data);
    })
};

const dbInsertAuthLog = (data) => {
  let params = Object.assign({
    TableName: config.dynamodb.AUTHLOGS_TABLE,
  }, {
    Item: data,
  });

  return put(params);
};

const dbGetUser = (userId) => {
  let params = {
    TableName: config.dynamodb.USERS_TABLE,
    Key: {
      id: userId,
    },
  };

  return get(params);
};