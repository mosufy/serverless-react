export const response = (event, message = 'Success', statusCode = 200) => {
  return responseFormat(event, message, statusCode)
};

export const error = (event, message = 'Fail', statusCode = 400) => {
  return responseFormat(event, message, statusCode)
};

const responseFormat = (event, message, statusCode) => {
  return {
    statusCode,
    body: JSON.stringify({
      message,
      meta: event,
    }),
  }
};