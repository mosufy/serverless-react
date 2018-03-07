import chai from "chai";
import chaiAsPromised from "chai-as-promised";

import { ping } from '../src/app/handlers/services/ping';

chai.use(chaiAsPromised);

let assert = chai.assert;

describe('Service tests', () => {
  it('ping test', () => {
    return assert.eventually.equal(ping(), "Pong");
  });
});