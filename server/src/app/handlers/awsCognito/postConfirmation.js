import { put } from "../../db";
import config from "../../../config";

export const handler = (event, context) => {
  insertUser(event)
    .then(() => context.done(null, event))
    .catch(err => context.fail(JSON.stringify(err)));
};

const insertUser = (event) => {
  let datetimenow = Date.now();

  let userData = {
    userPoolId: event.userPoolId,
    userName: event.userName,
    email: event.request.userAttributes.email,
    firstName: event.request.userAttributes.given_name,
    lastName: event.request.userAttributes.family_name,
    emailVerified: event.request.userAttributes.email_verified === 'true',
    id: event.request.userAttributes.sub,
    created_at: datetimenow,
    updated_at: datetimenow,
  };

  return dbInsertUser(userData);
};

const dbInsertUser = (userData) => {
  let params = Object.assign({
    TableName: config.dynamodb.USERS_TABLE,
  }, {
    Item: userData,
  });

  return put(params);
};