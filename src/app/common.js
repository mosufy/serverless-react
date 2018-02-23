export const response = (event, message = 'Success', statusCode = 200) => {
  return responseFormat(event, message, statusCode)
};

export const error = (event, message = 'Fail', statusCode = 400) => {
  return responseFormat(event, message, statusCode)
};

const responseFormat = (event, message, statusCode) => {
  return {
    statusCode,
    headers: {
      "Access-Control-Allow-Origin" : "*", // Required for CORS support to work
      "Access-Control-Allow-Credentials" : true // Required for cookies, authorization headers with HTTPS
    },
    body: JSON.stringify({
      message,
      meta: event,
    }),
  }
};