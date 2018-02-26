import { pingTest } from '../db';

class Service {
  ping() {
    return "Pong"
  }

  pingDb() {
    return new Promise(resolve => {
      return pingTest()
        .then(res => {
          resolve(res);
        })
    });
  }
}

export default Service;