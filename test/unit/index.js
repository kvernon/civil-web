'use strict';

const expect = require('chai').expect;

const index = require('./../../src/index');

describe('index unit tests tests', function () {
  it('should contain statusCodes', function () {
    expect(index.statusCodes).to.deep.equal(require('./../../src/statusCodes'));
  });

  it('should contain errors', function () {
    expect(index.HttpStatusError).to.deep.equal(require('./../../src/httpStatusCodeErrors').HttpStatusError);
  });

  it('should contain errors', function () {
    expect(index.BadRequestHttpStatusError).to.deep.equal(require('./../../src/httpStatusCodeErrors').BadRequestHttpStatusError);
  });

  it('should contain errors', function () {
    expect(index.InternalServerErrorHttpStatusError).to.deep.equal(require('./../../src/httpStatusCodeErrors').InternalServerErrorHttpStatusError);
  });
});
