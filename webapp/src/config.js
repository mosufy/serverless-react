const config = {
  app: {
    ENABLE_LOGGER: process.env.REACT_APP_ENABLE_LOGGER === 'true',
    SDK_BASE_URL: process.env.REACT_APP_SDK_BASE_URL,
  },
  api_gateway: {
    X_API_KEY: process.env.REACT_APP_API_GATEWAY_X_API_KEY,
  },
  cognito: {
    USER_POOL_ID: process.env.REACT_APP_COGNITO_USER_POOL_ID,
    APP_CLIENT_ID: process.env.REACT_APP_COGNITO_APP_CLIENT_ID,
  }
};

export default config;