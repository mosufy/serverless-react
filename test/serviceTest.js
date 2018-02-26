import chai from "chai";

import Service from '../src/app/repositories/Service';

import config from '../src/config';

let assert = chai.assert;

describe('Service tests', () => {
  let service;

  beforeEach(() => {
    service = new Service;
  });

  it('ping test', () => {
    assert.equal(service.ping(), "Pong");
  });

  // TODO: unit testing for fauna db
  // it('pingDb test', (done) => {
  //   service.pingDb().then(res => {
  //     assert.equal(res, 'Hello World');
  //     done();
  //   })
  // });
});