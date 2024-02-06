'use strict';

import * as idx from '../src/index';

describe('index unit tests tests', function () {
  it('should contain statusCodes', async function () {
    const statusCodes = (await import('../src/statusCodes')).StatusCodes;
    expect(idx.StatusCodes).toEqual(statusCodes);
  });

  it('should contain HttpStatusError', async function () {
    expect(idx.HttpStatusError).toEqual((await import('../src/httpStatusCodeErrors')).HttpStatusError);
  });

  it('should contain BadRequestHttpStatusError', async function () {
    expect(idx.BadRequestHttpStatusError).toEqual((await import('../src/httpStatusCodeErrors')).BadRequestHttpStatusError);
  });

  it('should contain InternalServerErrorHttpStatusError', async function () {
    expect(idx.InternalServerErrorHttpStatusError).toEqual((await import('../src/httpStatusCodeErrors')).InternalServerErrorHttpStatusError);
  });
});
