'use strict';

const expect = require('chai').expect;
const uuid = require('uuid');

describe('webStatusCodeErrors tests', function () {
  const webStatusCodeErrors = require('./../../src/httpStatusCodeErrors');
  let expectedMessage = null;
  let error = null;

  beforeEach(function () {
    expectedMessage = `the message ${uuid.v4()}`;
  });

  it('should provide stack', function () {
    const TheHttpStatusError = webStatusCodeErrors.HttpStatusError;

    try {
      throw new TheHttpStatusError(expectedMessage, 1);
    } catch (err) {
      expect(err).instanceOf(TheHttpStatusError);
      expect(err.message).equal(expectedMessage);
      expect(err.statusCode).equal(1);

      const expectedContains = `${TheHttpStatusError.name}: ${expectedMessage}\n    at Context.<anonymous> (`;

      const props = Object.getOwnPropertyNames(err);
      expect(props).includes('statusCode')
        .includes('name')
        .includes('message')
        .includes('stack');

      expect(err.stack).contains(expectedContains);
    }
  });

  it('should resolve HttpStatusError', function () {
    const expectedStatusCode = 987654312;
    error = new webStatusCodeErrors.HttpStatusError(expectedMessage, expectedStatusCode);
    expect(error.message).to.equal(expectedMessage);
    expect(error.statusCode).to.equal(expectedStatusCode);
  });

  it('should resolve bad request', function () {
    error = new webStatusCodeErrors.BadRequestHttpStatusError(expectedMessage);
    expect(error.message).to.equal(expectedMessage);
    expect(error.statusCode).to.equal(400);
  });

  it('should resolve unauthorized', function () {
    error = new webStatusCodeErrors.UnauthorizedHttpStatusError(expectedMessage);
    expect(error.message).to.equal(expectedMessage);
    expect(error.statusCode).to.equal(401);
  });

  it('should resolve paymentRequired', function () {
    error = new webStatusCodeErrors.PaymentRequiredHttpStatusError(expectedMessage);
    expect(error.message).to.equal(expectedMessage);
    expect(error.statusCode).to.equal(402);
  });

  it('should resolve forbidden', function () {
    error = new webStatusCodeErrors.ForbiddenHttpStatusError(expectedMessage);
    expect(error.message).to.equal(expectedMessage);
    expect(error.statusCode).to.equal(403);
  });

  it('should resolve notFound', function () {
    error = new webStatusCodeErrors.NotFoundHttpStatusError(expectedMessage);
    expect(error.message).to.equal(expectedMessage);
    expect(error.statusCode).to.equal(404);
  });

  it('should resolve methodNotAllowed', function () {
    error = new webStatusCodeErrors.MethodNotAllowedHttpStatusError(expectedMessage);
    expect(error.message).to.equal(expectedMessage);
    expect(error.statusCode).to.equal(405);
  });

  it('should resolve notAcceptable', function () {
    error = new webStatusCodeErrors.NotAcceptableHttpStatusError(expectedMessage);
    expect(error.message).to.equal(expectedMessage);
    expect(error.statusCode).to.equal(406);
  });

  it('should resolve proxyAuthenticationRequired', function () {
    error = new webStatusCodeErrors.ProxyAuthenticationRequiredHttpStatusError(expectedMessage);
    expect(error.message).to.equal(expectedMessage);
    expect(error.statusCode).to.equal(407);
  });

  it('should resolve requestTimeout', function () {
    error = new webStatusCodeErrors.RequestTimeoutHttpStatusError(expectedMessage);
    expect(error.message).to.equal(expectedMessage);
    expect(error.statusCode).to.equal(408);
  });

  it('should resolve conflict', function () {
    error = new webStatusCodeErrors.ConflictHttpStatusError(expectedMessage);
    expect(error.message).to.equal(expectedMessage);
    expect(error.statusCode).to.equal(409);
  });

  it('should resolve gone', function () {
    error = new webStatusCodeErrors.GoneHttpStatusError(expectedMessage);
    expect(error.message).to.equal(expectedMessage);
    expect(error.statusCode).to.equal(410);
  });

  it('should resolve lengthRequired', function () {
    error = new webStatusCodeErrors.LengthRequiredHttpStatusError(expectedMessage);
    expect(error.message).to.equal(expectedMessage);
    expect(error.statusCode).to.equal(411);
  });

  it('should resolve preconditionFailed', function () {
    error = new webStatusCodeErrors.PreconditionFailedHttpStatusError(expectedMessage);
    expect(error.message).to.equal(expectedMessage);
    expect(error.statusCode).to.equal(412);
  });

  it('should resolve payloadTooLarge', function () {
    error = new webStatusCodeErrors.PayloadTooLargeHttpStatusError(expectedMessage);
    expect(error.message).to.equal(expectedMessage);
    expect(error.statusCode).to.equal(413);
  });

  it('should resolve uriTooLong', function () {
    error = new webStatusCodeErrors.UriTooLongHttpStatusError(expectedMessage);
    expect(error.message).to.equal(expectedMessage);
    expect(error.statusCode).to.equal(414);
  });

  it('should resolve unsupportedMediaType', function () {
    error = new webStatusCodeErrors.UnsupportedMediaType(expectedMessage);
    expect(error.message).to.equal(expectedMessage);
    expect(error.statusCode).to.equal(415);
  });

  it('should resolve requestedRangeNotSatisfiable', function () {
    error = new webStatusCodeErrors.RequestedRangeNotSatisfiableHttpStatusError(expectedMessage);
    expect(error.message).to.equal(expectedMessage);
    expect(error.statusCode).to.equal(416);
  });

  it('should resolve expectationFailed', function () {
    error = new webStatusCodeErrors.ExpectationFailedHttpStatusError(expectedMessage);
    expect(error.message).to.equal(expectedMessage);
    expect(error.statusCode).to.equal(417);
  });

  it('should resolve IAmATeapotHttpStatusError', function () {
    error = new webStatusCodeErrors.IAmATeapotHttpStatusError(expectedMessage);
    expect(error.message).to.equal(expectedMessage);
    expect(error.statusCode).to.equal(418);
  });

  it('should resolve misdirectedRequest', function () {
    error = new webStatusCodeErrors.MisdirectedRequestHttpStatusError(expectedMessage);
    expect(error.message).to.equal(expectedMessage);
    expect(error.statusCode).to.equal(421);
  });

  it('should resolve webDavUnprocessableEntity', function () {
    error = new webStatusCodeErrors.WebDavUnprocessableEntityHttpStatusError(expectedMessage);
    expect(error.message).to.equal(expectedMessage);
    expect(error.statusCode).to.equal(422);
  });

  it('should resolve webDavLocked', function () {
    error = new webStatusCodeErrors.WebDavLockedHttpStatusError(expectedMessage);
    expect(error.message).to.equal(expectedMessage);
    expect(error.statusCode).to.equal(423);
  });

  it('should resolve webDavFailedDependency', function () {
    error = new webStatusCodeErrors.WebDavFailedDependencyHttpStatusError(expectedMessage);
    expect(error.message).to.equal(expectedMessage);
    expect(error.statusCode).to.equal(424);
  });

  it('should resolve tooEarly', function () {
    error = new webStatusCodeErrors.TooEarlyHttpStatusError(expectedMessage);
    expect(error.message).to.equal(expectedMessage);
    expect(error.statusCode).to.equal(425);
  });

  it('should resolve upgradeRequired', function () {
    error = new webStatusCodeErrors.UpgradeRequiredHttpStatusError(expectedMessage);
    expect(error.message).to.equal(expectedMessage);
    expect(error.statusCode).to.equal(426);
  });

  it('should resolve preconditionRequired', function () {
    error = new webStatusCodeErrors.PreconditionRequiredHttpStatusError(expectedMessage);
    expect(error.message).to.equal(expectedMessage);
    expect(error.statusCode).to.equal(428);
  });

  it('should resolve tooManyRequests', function () {
    error = new webStatusCodeErrors.TooManyRequestsHttpStatusError(expectedMessage);
    expect(error.message).to.equal(expectedMessage);
    expect(error.statusCode).to.equal(429);
  });

  it('should resolve requestHeaderFieldsTooLarge', function () {
    error = new webStatusCodeErrors.RequestHeaderFieldsTooLargeHttpStatusError(expectedMessage);
    expect(error.message).to.equal(expectedMessage);
    expect(error.statusCode).to.equal(431);
  });

  it('should resolve unavailableForLegalReasons', function () {
    error = new webStatusCodeErrors.UnavailableForLegalReasonsHttpStatusError(expectedMessage);
    expect(error.message).to.equal(expectedMessage);
    expect(error.statusCode).to.equal(451);
  });

  it('should resolve internalServerError', function () {
    error = new webStatusCodeErrors.InternalServerErrorHttpStatusError(expectedMessage);
    expect(error.message).to.equal(expectedMessage);
    expect(error.statusCode).to.equal(500);
  });

  it('should resolve notImplemented', function () {
    error = new webStatusCodeErrors.NotImplementedHttpStatusError(expectedMessage);
    expect(error.message).to.equal(expectedMessage);
    expect(error.statusCode).to.equal(501);
  });

  it('should resolve badGateway', function () {
    error = new webStatusCodeErrors.BadGateway(expectedMessage);
    expect(error.message).to.equal(expectedMessage);
    expect(error.statusCode).to.equal(502);
  });

  it('should resolve serviceUnavailable', function () {
    error = new webStatusCodeErrors.ServiceUnavailableHttpStatusError(expectedMessage);
    expect(error.message).to.equal(expectedMessage);
    expect(error.statusCode).to.equal(503);
  });

  it('should resolve gatewayTimeout', function () {
    error = new webStatusCodeErrors.GatewayTimeoutHttpStatusError(expectedMessage);
    expect(error.message).to.equal(expectedMessage);
    expect(error.statusCode).to.equal(504);
  });

  it('should resolve httpVersionNotSupported', function () {
    error = new webStatusCodeErrors.HttpVersionNotSupportedHttpStatusError(expectedMessage);
    expect(error.message).to.equal(expectedMessage);
    expect(error.statusCode).to.equal(505);
  });

  it('should resolve variantAlsoNegotiates', function () {
    error = new webStatusCodeErrors.VariantAlsoNegotiatesHttpStatusError(expectedMessage);
    expect(error.message).to.equal(expectedMessage);
    expect(error.statusCode).to.equal(506);
  });

  it('should resolve insufficientStorage', function () {
    error = new webStatusCodeErrors.InsufficientStorageHttpStatusError(expectedMessage);
    expect(error.message).to.equal(expectedMessage);
    expect(error.statusCode).to.equal(507);
  });

  it('should resolve webDavLoopDetected', function () {
    error = new webStatusCodeErrors.WebDavLoopDetectedHttpStatusError(expectedMessage);
    expect(error.message).to.equal(expectedMessage);
    expect(error.statusCode).to.equal(508);
  });

  it('should resolve notExtended', function () {
    error = new webStatusCodeErrors.NotExtendedHttpStatusError(expectedMessage);
    expect(error.message).to.equal(expectedMessage);
    expect(error.statusCode).to.equal(510);
  });

  it('should resolve networkAuthenticationRequired', function () {
    error = new webStatusCodeErrors.NetworkAuthenticationRequiredHttpStatusError(expectedMessage);
    expect(error.message).to.equal(expectedMessage);
    expect(error.statusCode).to.equal(511);
  });
});
