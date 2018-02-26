import dbconnect from "./dbconnect";

export const pingTest = () => {
  const db = new dbconnect();

  return new Promise((resolve, reject) => {
    db.client.query(db.q.Concat(["Hello", "World"], " "))
      .then(res => (resolve(res)))
      .catch(err => (reject(err)));
  });
};