import AwsCognito from "../repositories/AwsCognito";

export const customMessage = (event, context) => {
  let awsCognito = new AwsCognito();

  // Return result to Cognito
  context.done(null, awsCognito.setCustomMessage(event));
};