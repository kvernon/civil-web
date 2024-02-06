import {v4 as uuidv4} from 'uuid';

import * as webStatusCodeErrors from '../src/httpStatusCodeErrors';

describe('webStatusCodeErrors tests', () => {
  let expectedMessage: string;
  let error = null;

  beforeEach(function () {
    expectedMessage = `the message ${uuidv4()}`;
  });

  it('should provide stack', function () {
    const httpStatusError = webStatusCodeErrors.HttpStatusError;

    try {
      throw new httpStatusError(expectedMessage, 1);
    } catch (err) {
      expect(err).toBeInstanceOf(httpStatusError);
      const e = err as webStatusCodeErrors.HttpStatusError;
      expect(e.message).toEqual(expectedMessage);
      expect(e.statusCode).toEqual(1);

      //const expectedContains = `${httpStatusError.name}: ${expectedMessage}\n    at Context.<anonymous> (`;

      //const props = Object.getOwnPropertyNames(err);

      //expect(props).includes('statusCode')
      //  .includes('name')
      //  .includes('message')
      //  .includes('stack');
//
      //expect((err as webStatusCodeErrors.HttpStatusError).stack).contains(expectedContains);
    }
  });

  it('should resolve HttpStatusError', function () {
    const expectedStatusCode = 987654312;
    error = new webStatusCodeErrors.HttpStatusError(expectedMessage, expectedStatusCode);
    expect(error.message).toEqual(expectedMessage);
    expect(error.statusCode).toEqual(expectedStatusCode);
  });

  it('should resolve bad request', function () {
    error = new webStatusCodeErrors.BadRequestHttpStatusError(expectedMessage);
    expect(error.message).toEqual(expectedMessage);
    expect(error.statusCode).toEqual(400);
  });

  it('should resolve unauthorized', function () {
    error = new webStatusCodeErrors.UnauthorizedHttpStatusError(expectedMessage);
    expect(error.message).toEqual(expectedMessage);
    expect(error.statusCode).toEqual(401);
  });

  it('should resolve paymentRequired', function () {
    error = new webStatusCodeErrors.PaymentRequiredHttpStatusError(expectedMessage);
    expect(error.message).toEqual(expectedMessage);
    expect(error.statusCode).toEqual(402);
  });

  it('should resolve forbidden', function () {
    error = new webStatusCodeErrors.ForbiddenHttpStatusError(expectedMessage);
    expect(error.message).toEqual(expectedMessage);
    expect(error.statusCode).toEqual(403);
  });

  it('should resolve notFound', function () {
    error = new webStatusCodeErrors.NotFoundHttpStatusError(expectedMessage);
    expect(error.message).toEqual(expectedMessage);
    expect(error.statusCode).toEqual(404);
  });

  it('should resolve methodNotAllowed', function () {
    error = new webStatusCodeErrors.MethodNotAllowedHttpStatusError(expectedMessage);
    expect(error.message).toEqual(expectedMessage);
    expect(error.statusCode).toEqual(405);
  });

  it('should resolve notAcceptable', function () {
    error = new webStatusCodeErrors.NotAcceptableHttpStatusError(expectedMessage);
    expect(error.message).toEqual(expectedMessage);
    expect(error.statusCode).toEqual(406);
  });

  it('should resolve proxyAuthenticationRequired', function () {
    error = new webStatusCodeErrors.ProxyAuthenticationRequiredHttpStatusError(expectedMessage);
    expect(error.message).toEqual(expectedMessage);
    expect(error.statusCode).toEqual(407);
  });

  it('should resolve requestTimeout', function () {
    error = new webStatusCodeErrors.RequestTimeoutHttpStatusError(expectedMessage);
    expect(error.message).toEqual(expectedMessage);
    expect(error.statusCode).toEqual(408);
  });

  it('should resolve conflict', function () {
    error = new webStatusCodeErrors.ConflictHttpStatusError(expectedMessage);
    expect(error.message).toEqual(expectedMessage);
    expect(error.statusCode).toEqual(409);
  });

  it('should resolve gone', function () {
    error = new webStatusCodeErrors.GoneHttpStatusError(expectedMessage);
    expect(error.message).toEqual(expectedMessage);
    expect(error.statusCode).toEqual(410);
  });

  it('should resolve lengthRequired', function () {
    error = new webStatusCodeErrors.LengthRequiredHttpStatusError(expectedMessage);
    expect(error.message).toEqual(expectedMessage);
    expect(error.statusCode).toEqual(411);
  });

  it('should resolve preconditionFailed', function () {
    error = new webStatusCodeErrors.PreconditionFailedHttpStatusError(expectedMessage);
    expect(error.message).toEqual(expectedMessage);
    expect(error.statusCode).toEqual(412);
  });

  it('should resolve payloadTooLarge', function () {
    error = new webStatusCodeErrors.PayloadTooLargeHttpStatusError(expectedMessage);
    expect(error.message).toEqual(expectedMessage);
    expect(error.statusCode).toEqual(413);
  });

  it('should resolve uriTooLong', function () {
    error = new webStatusCodeErrors.UriTooLongHttpStatusError(expectedMessage);
    expect(error.message).toEqual(expectedMessage);
    expect(error.statusCode).toEqual(414);
  });

  it('should resolve unsupportedMediaType', function () {
    error = new webStatusCodeErrors.UnsupportedMediaTypeHttpStatusError(expectedMessage);
    expect(error.message).toEqual(expectedMessage);
    expect(error.statusCode).toEqual(415);
  });

  it('should resolve requestedRangeNotSatisfiable', function () {
    error = new webStatusCodeErrors.RequestedRangeNotSatisfiableHttpStatusError(expectedMessage);
    expect(error.message).toEqual(expectedMessage);
    expect(error.statusCode).toEqual(416);
  });

  it('should resolve expectationFailed', function () {
    error = new webStatusCodeErrors.ExpectationFailedHttpStatusError(expectedMessage);
    expect(error.message).toEqual(expectedMessage);
    expect(error.statusCode).toEqual(417);
  });

  it('should resolve IAmATeapotHttpStatusError', function () {
    error = new webStatusCodeErrors.IAmATeapotHttpStatusError(expectedMessage);
    expect(error.message).toEqual(expectedMessage);
    expect(error.statusCode).toEqual(418);
  });

  it('should resolve misdirectedRequest', function () {
    error = new webStatusCodeErrors.MisdirectedRequestHttpStatusError(expectedMessage);
    expect(error.message).toEqual(expectedMessage);
    expect(error.statusCode).toEqual(421);
  });

  it('should resolve webDavUnprocessableEntity', function () {
    error = new webStatusCodeErrors.WebDavUnprocessableEntityHttpStatusError(expectedMessage);
    expect(error.message).toEqual(expectedMessage);
    expect(error.statusCode).toEqual(422);
  });

  it('should resolve webDavLocked', function () {
    error = new webStatusCodeErrors.WebDavLockedHttpStatusError(expectedMessage);
    expect(error.message).toEqual(expectedMessage);
    expect(error.statusCode).toEqual(423);
  });

  it('should resolve webDavFailedDependency', function () {
    error = new webStatusCodeErrors.WebDavFailedDependencyHttpStatusError(expectedMessage);
    expect(error.message).toEqual(expectedMessage);
    expect(error.statusCode).toEqual(424);
  });

  it('should resolve tooEarly', function () {
    error = new webStatusCodeErrors.TooEarlyHttpStatusError(expectedMessage);
    expect(error.message).toEqual(expectedMessage);
    expect(error.statusCode).toEqual(425);
  });

  it('should resolve upgradeRequired', function () {
    error = new webStatusCodeErrors.UpgradeRequiredHttpStatusError(expectedMessage);
    expect(error.message).toEqual(expectedMessage);
    expect(error.statusCode).toEqual(426);
  });

  it('should resolve preconditionRequired', function () {
    error = new webStatusCodeErrors.PreconditionRequiredHttpStatusError(expectedMessage);
    expect(error.message).toEqual(expectedMessage);
    expect(error.statusCode).toEqual(428);
  });

  it('should resolve tooManyRequests', function () {
    error = new webStatusCodeErrors.TooManyRequestsHttpStatusError(expectedMessage);
    expect(error.message).toEqual(expectedMessage);
    expect(error.statusCode).toEqual(429);
  });

  it('should resolve requestHeaderFieldsTooLarge', function () {
    error = new webStatusCodeErrors.RequestHeaderFieldsTooLargeHttpStatusError(expectedMessage);
    expect(error.message).toEqual(expectedMessage);
    expect(error.statusCode).toEqual(431);
  });

  it('should resolve unavailableForLegalReasons', function () {
    error = new webStatusCodeErrors.UnavailableForLegalReasonsHttpStatusError(expectedMessage);
    expect(error.message).toEqual(expectedMessage);
    expect(error.statusCode).toEqual(451);
  });

  it('should resolve internalServerError', function () {
    error = new webStatusCodeErrors.InternalServerErrorHttpStatusError(expectedMessage);
    expect(error.message).toEqual(expectedMessage);
    expect(error.statusCode).toEqual(500);
  });

  it('should resolve notImplemented', function () {
    error = new webStatusCodeErrors.NotImplementedHttpStatusError(expectedMessage);
    expect(error.message).toEqual(expectedMessage);
    expect(error.statusCode).toEqual(501);
  });

  it('should resolve badGateway', function () {
    error = new webStatusCodeErrors.BadGatewayHttpStatusError(expectedMessage);
    expect(error.message).toEqual(expectedMessage);
    expect(error.statusCode).toEqual(502);
  });

  it('should resolve serviceUnavailable', function () {
    error = new webStatusCodeErrors.ServiceUnavailableHttpStatusError(expectedMessage);
    expect(error.message).toEqual(expectedMessage);
    expect(error.statusCode).toEqual(503);
  });

  it('should resolve gatewayTimeout', function () {
    error = new webStatusCodeErrors.GatewayTimeoutHttpStatusError(expectedMessage);
    expect(error.message).toEqual(expectedMessage);
    expect(error.statusCode).toEqual(504);
  });

  it('should resolve httpVersionNotSupported', function () {
    error = new webStatusCodeErrors.HttpVersionNotSupportedHttpStatusError(expectedMessage);
    expect(error.message).toEqual(expectedMessage);
    expect(error.statusCode).toEqual(505);
  });

  it('should resolve variantAlsoNegotiates', function () {
    error = new webStatusCodeErrors.VariantAlsoNegotiatesHttpStatusError(expectedMessage);
    expect(error.message).toEqual(expectedMessage);
    expect(error.statusCode).toEqual(506);
  });

  it('should resolve insufficientStorage', function () {
    error = new webStatusCodeErrors.InsufficientStorageHttpStatusError(expectedMessage);
    expect(error.message).toEqual(expectedMessage);
    expect(error.statusCode).toEqual(507);
  });

  it('should resolve webDavLoopDetected', function () {
    error = new webStatusCodeErrors.WebDavLoopDetectedHttpStatusError(expectedMessage);
    expect(error.message).toEqual(expectedMessage);
    expect(error.statusCode).toEqual(508);
  });

  it('should resolve notExtended', function () {
    error = new webStatusCodeErrors.NotExtendedHttpStatusError(expectedMessage);
    expect(error.message).toEqual(expectedMessage);
    expect(error.statusCode).toEqual(510);
  });

  it('should resolve networkAuthenticationRequired', function () {
    error = new webStatusCodeErrors.NetworkAuthenticationRequiredHttpStatusError(expectedMessage);
    expect(error.message).toEqual(expectedMessage);
    expect(error.statusCode).toEqual(511);
  });
});
