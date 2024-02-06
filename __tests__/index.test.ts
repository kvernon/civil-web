import {
  StatusCodes,
  HttpStatusError,
  InternalServerErrorHttpStatusError,
  BadRequestHttpStatusError
} from '../src/index';

describe('index unit tests tests', function () {
  it('should contain statusCodes', async function () {
    expect(StatusCodes).toEqual((await import('../src/statusCodes')).StatusCodes);
  });

  it('should contain HttpStatusError', async function () {
    expect(HttpStatusError).toEqual((await import('../src/httpStatusCodeErrors')).HttpStatusError);
  });

  it('should contain BadRequestHttpStatusError', async function () {
    expect(BadRequestHttpStatusError).toEqual((await import('../src/httpStatusCodeErrors')).BadRequestHttpStatusError);
  });

  it('should contain InternalServerErrorHttpStatusError', async function () {
    expect(InternalServerErrorHttpStatusError).toEqual((await import('../src/httpStatusCodeErrors')).InternalServerErrorHttpStatusError);
  });
});
