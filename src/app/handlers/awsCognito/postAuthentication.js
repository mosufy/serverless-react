export const handler = (event, context) => {
  insertAuthLog(event)
    .then(() => context.done(null, event))
    .catch(err => context.fail(JSON.stringify(err)));
};

const insertAuthLog = (event) => {
  return new Promise((resolve) => {
    console.log(`User.id ${event.request.userAttributes.sub} AUTHENTICATED`);
    resolve();
  });
};