import { CognitoUserPool, CognitoUserAttribute, CognitoUser } from "amazon-cognito-identity-js";

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
  attributeList.push(setCognitoUserAttribute('email', email));

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

export const confirmCognitoUser = (username, confirmationCode) => {
  const userPool = cognitoUserPool();
  const userData = {
    Username: username,
    Pool: userPool
  };

  const cognitoUser = new CognitoUser(userData);

  return new Promise((resolve, reject) => {
    cognitoUser.confirmRegistration(confirmationCode, true, function (err, result) {
      if (err) {
        reject(err);
      } else {
        console.log(err);
        resolve(result);
      }
    });
  });
};