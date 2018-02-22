import chai from "chai";

import Service from '../src/repositories/Service';

let assert = chai.assert;

describe('Service tests', () => {
  let service;

  beforeEach(() => {
    service = new Service;
  });

  it('ping test', () => {
    assert.equal(service.ping(), "Pong");
  })
});