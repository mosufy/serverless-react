const config = {
  app: {
    SITE_LINK: process.env.SITE_LINK,
  },
  stripe: {
    SECRET_KEY: process.env.STRIPE_SECRET_KEY,
  },
  faunadb: {
    SECRET_KEY: process.env.FAUNADB_SECRET_KEY,
  },
  dynamodb: {
    USER_TABLE: process.env.DYNAMODB_TABLE_USER,
  }
};

export default config;