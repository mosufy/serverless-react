const config = {
  app: {
    SITE_LINK: process.env.SITELINK,
  },
  stripe: {
    SECRET_KEY: process.env.STRIPE_SECRET_KEY,
  },
  faunadb: {
    SECRET_KEY: process.env.FAUNADB_SECRET_KEY,
  }
};

export default config;