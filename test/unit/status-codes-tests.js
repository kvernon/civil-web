'use strict';

const expect = require('chai').expect;

describe('when testing status codes tests', function () {
  const statusCodes = require('./../../src/statusCodes');

  it('should match Continue', function () {
    expect(statusCodes.continue).to.equal(100);
  });

  it('should match 101 Switching Protocol', function () {
    expect(statusCodes.switchingProtocol).to.equal(101);
  });

  it('should match WebDav processing', function () {
    expect(statusCodes.webDavProcessing).to.equal(102);
  });

  it('should match Early Hints', function () {
    expect(statusCodes.earlyHints).to.equal(103);
  });

  it('should match OK', function () {
    expect(statusCodes.ok).to.equal(200);
  });

  it('should match Created', function () {
    expect(statusCodes.created).to.equal(201);
  });

  it('should match Accepted', function () {
    expect(statusCodes.accepted).to.equal(202);
  });

  it('should match Non-Authoritative Information', function () {
    expect(statusCodes.nonAuthoritativeInformation).to.equal(203);
  });

  it('should match Non-Authoritative Information', function () {
    expect(statusCodes.noContent).to.equal(204);
  });

  it('should match Non-Authoritative Information', function () {
    expect(statusCodes.webDaveMutliStatus7).to.equal(207);
  });

  it('should match Non-Authoritative Information', function () {
    expect(statusCodes.webDaveMutliStatus8).to.equal(208);
  });

  it('should match Non-Authoritative Information', function () {
    expect(statusCodes.imUsed).to.equal(226);
  });

  it('should match multiple choice', function () {
    expect(statusCodes.multipleChoice).to.equal(300);
  });

  it('should match Moved Permanently', function () {
    expect(statusCodes.movedPermanently).to.equal(301);
  });

  it('should match Found', function () {
    expect(statusCodes.found).to.equal(302);
  });

  it('should match See Other', function () {
    expect(statusCodes.seeOther).to.equal(303);
  });

  it('should match Not Modified', function () {
    expect(statusCodes.notModified).to.equal(304);
  });

  it('should match permanent Redirect', function () {
    expect(statusCodes.permanentRedirect).to.equal(308);
  });

  it('should match Bad Request', function () {
    expect(statusCodes.badRequest).to.equal(400);
  });

  it('should match UnauthorizedWebError', function () {
    expect(statusCodes.unauthorized).to.equal(401);
  });

  it('should match Payment Required ', function () {
    expect(statusCodes.paymentRequired).to.equal(402);
  });

  it('should match ForbiddenWebError', function () {
    expect(statusCodes.forbidden).to.equal(403);
  });

  it('should match Not Found', function () {
    expect(statusCodes.notFound).to.equal(404);
  });

  it('should match Method Not Allowed', function () {
    expect(statusCodes.methodNotAllowed).to.equal(405);
  });

  it('should match Not Acceptable', function () {
    expect(statusCodes.notAcceptable).to.equal(406);
  });
  it('should match Proxy Authentication Required', function () {
    expect(statusCodes.proxyAuthenticationRequired).to.equal(407);
  });

  it('should match Request Timeout', function () {
    expect(statusCodes.requestTimeout).to.equal(408);
  });

  it('should match ConflictWebError', function () {
    expect(statusCodes.conflict).to.equal(409);
  });

  it('should match GoneWebError', function () {
    expect(statusCodes.gone).to.equal(410);
  });

  it('should match Length Required', function () {
    expect(statusCodes.lengthRequired).to.equal(411);
  });

  it('should match precondition Failed', function () {
    expect(statusCodes.preconditionFailed).to.equal(412);
  });

  it('should match payload Too Large', function () {
    expect(statusCodes.payloadTooLarge).to.equal(413);
  });

  it('should match URI Too Long', function () {
    expect(statusCodes.uriTooLong).to.equal(414);
  });

  it('should match unsupported Media Type', function () {
    expect(statusCodes.unsupportedMediaType).to.equal(415);
  });

  it('should match requested Range Not Satisfiable', function () {
    expect(statusCodes.requestedRangeNotSatisfiable).to.equal(416);
  });

  it('should match Expectation Failed', function () {
    expect(statusCodes.expectationFailed).to.equal(417);
  });

  it('should match I\'m a teapot', function () {
    expect(statusCodes.iAmATeapot).to.equal(418);
  });

  it('should match Misdirected Request', function () {
    expect(statusCodes.misdirectedRequest).to.equal(421);
  });

  it('should match WebDav Unprocessable Entity', function () {
    expect(statusCodes.webDavUnprocessableEntity).to.equal(422);
  });

  it('should match WebDav Locked', function () {
    expect(statusCodes.webDavLocked).to.equal(423);
  });

  it('should match WebDav Failed Dependency ', function () {
    expect(statusCodes.webDavFailedDependency).to.equal(424);
  });

  it('should match Too Early', function () {
    expect(statusCodes.tooEarly).to.equal(425);
  });

  it('should match Too Early', function () {
    expect(statusCodes.upgradeRequired).to.equal(426);
  });

  it('should match Precondition Required', function () {
    expect(statusCodes.preconditionRequired).to.equal(428);
  });

  it('should match Too Many Requests', function () {
    expect(statusCodes.tooManyRequests).to.equal(429);
  });

  it('should match Request Header Fields Too Large', function () {
    expect(statusCodes.requestHeaderFieldsTooLarge).to.equal(431);
  });

  it('should match Unavailable For Legal Reasons', function () {
    expect(statusCodes.unavailableForLegalReasons).to.equal(451);
  });

  it('should match Internal Server Error', function () {
    expect(statusCodes.internalServerError).to.equal(500);
  });

  it('should match Not Implemented', function () {
    expect(statusCodes.notImplemented).to.equal(501);
  });

  it('should match Bad Gateway', function () {
    expect(statusCodes.badGateway).to.equal(502);
  });

  it('should match Service Unavailable', function () {
    expect(statusCodes.serviceUnavailable).to.equal(503);
  });

  it('should match Gateway Timeout', function () {
    expect(statusCodes.gatewayTimeout).to.equal(504);
  });

  it('should match HTTP Version Not Supported', function () {
    expect(statusCodes.httpVersionNotSupported).to.equal(505);
  });

  it('should match Variant Also Negotiates', function () {
    expect(statusCodes.variantAlsoNegotiates).to.equal(506);
  });

  it('should match Insufficient Storage', function () {
    expect(statusCodes.insufficientStorage).to.equal(507);
  });

  it('should match web dav loop detection', function () {
    expect(statusCodes.webDavLoopDetected).to.equal(508);
  });

  it('should match Not Extended', function () {
    expect(statusCodes.notExtended).to.equal(510);
  });

  it('should match Network Authentication Required', function () {
    expect(statusCodes.networkAuthenticationRequired).to.equal(511);
  });
});
