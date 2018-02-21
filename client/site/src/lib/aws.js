import { CognitoUserPool, CognitoUserAttribute } from "amazon-cognito-identity-js";

import config from "../config";

const cognitoUserPool = () => (
  new CognitoUserPool({
    UserPoolId: config.cognito.USER_POOL_ID,
    ClientId: config.cognito.APP_CLIENT_ID
  })
);

const setCognitoUserAttribute = (attributeKey, attributeValue) => {
  let data = {
    Name: attributeKey,
    Value: attributeValue
  };

  return new CognitoUserAttribute(data);
};

export const signupCognitoUser = (values) => {
  let { email, password, firstName, lastName } = values;
  let attributeList = [];

  const userPool = cognitoUserPool();

  attributeList.push(setCognitoUserAttribute('given_name', firstName));
  attributeList.push(setCognitoUserAttribute('family_name', lastName));

  return new Promise((resolve, reject) =>
    userPool.signUp(email, password, attributeList, null, (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    })
  );
};