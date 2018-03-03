class Service {
  ping() {
    return new Promise((resolve) => {
      return resolve("Pong");
    });
  }
}

export default Service;