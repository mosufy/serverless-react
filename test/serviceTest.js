import chai from './Test';
import { ping } from '../src/app/handlers/services/ping';
import { response, error } from "../src/app/common";

let assert = chai.assert;

describe('Service tests', () => {
  it('ping test', () => {
    return assert.eventually.equal(ping(), "Pong");
  });

  it('success response test default message', () => {
    assert.include(response(null), {
      statusCode: 200,
      body: JSON.stringify({
        message: "Success",
        meta: null,
      })
    });
  });

  it('success response test custom message and status code', () => {
    assert.include(response(null, "Passed", 201), {
      statusCode: 201,
      body: JSON.stringify({
        message: "Passed",
        meta: null,
      })
    });
  });

  it('failed response test default message', () => {
    assert.include(error(null), {
      statusCode: 400,
      body: JSON.stringify({
        message: "Fail",
        meta: null,
      })
    });
  });

  it('failed response test custom message and status code', () => {
    assert.include(error(null, "Failed", 401), {
      statusCode: 401,
      body: JSON.stringify({
        message: "Failed",
        meta: null,
      })
    });
  });
});