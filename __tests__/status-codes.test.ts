'use strict';

import {StatusCodes as statusCodes} from '../src/statusCodes';

describe('when testing status codes tests', function () {
  it('should match Continue', function () {
    expect(statusCodes.continue).toEqual(100);
  });

  it('should match 101 Switching Protocol', function () {
    expect(statusCodes.switchingProtocol).toEqual(101);
  });

  it('should match WebDav processing', function () {
    expect(statusCodes.webDavProcessing).toEqual(102);
  });

  it('should match Early Hints', function () {
    expect(statusCodes.earlyHints).toEqual(103);
  });

  it('should match OK', function () {
    expect(statusCodes.ok).toEqual(200);
  });

  it('should match Created', function () {
    expect(statusCodes.created).toEqual(201);
  });

  it('should match Accepted', function () {
    expect(statusCodes.accepted).toEqual(202);
  });

  it('should match Non-Authoritative Information', function () {
    expect(statusCodes.nonAuthoritativeInformation).toEqual(203);
  });

  it('should match No Content', function () {
    expect(statusCodes.noContent).toEqual(204);
  });

  it('should match webDaveMutliStatus7', function () {
    expect(statusCodes.webDaveMutliStatus7).toEqual(207);
  });

  it('should match webDaveMutliStatus8', function () {
    expect(statusCodes.webDaveMutliStatus8).toEqual(208);
  });

  it('should match I\'m used', function () {
    expect(statusCodes.imUsed).toEqual(226);
  });

  it('should match multiple choice', function () {
    expect(statusCodes.multipleChoice).toEqual(300);
  });

  it('should match Moved Permanently', function () {
    expect(statusCodes.movedPermanently).toEqual(301);
  });

  it('should match Found', function () {
    expect(statusCodes.found).toEqual(302);
  });

  it('should match See Other', function () {
    expect(statusCodes.seeOther).toEqual(303);
  });

  it('should match Not Modified', function () {
    expect(statusCodes.notModified).toEqual(304);
  });

  it('should match permanent Redirect', function () {
    expect(statusCodes.permanentRedirect).toEqual(308);
  });

  it('should match Bad Request', function () {
    expect(statusCodes.badRequest).toEqual(400);
  });

  it('should match UnauthorizedWebError', function () {
    expect(statusCodes.unauthorized).toEqual(401);
  });

  it('should match Payment Required', function () {
    expect(statusCodes.paymentRequired).toEqual(402);
  });

  it('should match ForbiddenWebError', function () {
    expect(statusCodes.forbidden).toEqual(403);
  });

  it('should match Not Found', function () {
    expect(statusCodes.notFound).toEqual(404);
  });

  it('should match Method Not Allowed', function () {
    expect(statusCodes.methodNotAllowed).toEqual(405);
  });

  it('should match Not Acceptable', function () {
    expect(statusCodes.notAcceptable).toEqual(406);
  });
  it('should match Proxy Authentication Required', function () {
    expect(statusCodes.proxyAuthenticationRequired).toEqual(407);
  });

  it('should match Request Timeout', function () {
    expect(statusCodes.requestTimeout).toEqual(408);
  });

  it('should match ConflictWebError', function () {
    expect(statusCodes.conflict).toEqual(409);
  });

  it('should match GoneWebError', function () {
    expect(statusCodes.gone).toEqual(410);
  });

  it('should match Length Required', function () {
    expect(statusCodes.lengthRequired).toEqual(411);
  });

  it('should match precondition Failed', function () {
    expect(statusCodes.preconditionFailed).toEqual(412);
  });

  it('should match payload Too Large', function () {
    expect(statusCodes.payloadTooLarge).toEqual(413);
  });

  it('should match URI Too Long', function () {
    expect(statusCodes.uriTooLong).toEqual(414);
  });

  it('should match unsupported Media Type', function () {
    expect(statusCodes.unsupportedMediaType).toEqual(415);
  });

  it('should match requested Range Not Satisfiable', function () {
    expect(statusCodes.requestedRangeNotSatisfiable).toEqual(416);
  });

  it('should match Expectation Failed', function () {
    expect(statusCodes.expectationFailed).toEqual(417);
  });

  it('should match I\'m a teapot', function () {
    expect(statusCodes.iAmATeapot).toEqual(418);
  });

  it('should match Misdirected Request', function () {
    expect(statusCodes.misdirectedRequest).toEqual(421);
  });

  it('should match WebDav Unprocessable Entity', function () {
    expect(statusCodes.webDavUnprocessableEntity).toEqual(422);
  });

  it('should match WebDav Locked', function () {
    expect(statusCodes.webDavLocked).toEqual(423);
  });

  it('should match WebDav Failed Dependency', function () {
    expect(statusCodes.webDavFailedDependency).toEqual(424);
  });

  it('should match Too Early', function () {
    expect(statusCodes.tooEarly).toEqual(425);
  });

  it('should match Upgrade Required', function () {
    expect(statusCodes.upgradeRequired).toEqual(426);
  });

  it('should match Precondition Required', function () {
    expect(statusCodes.preconditionRequired).toEqual(428);
  });

  it('should match Too Many Requests', function () {
    expect(statusCodes.tooManyRequests).toEqual(429);
  });

  it('should match Request Header Fields Too Large', function () {
    expect(statusCodes.requestHeaderFieldsTooLarge).toEqual(431);
  });

  it('should match Unavailable For Legal Reasons', function () {
    expect(statusCodes.unavailableForLegalReasons).toEqual(451);
  });

  it('should match Internal Server Error', function () {
    expect(statusCodes.internalServerError).toEqual(500);
  });

  it('should match Not Implemented', function () {
    expect(statusCodes.notImplemented).toEqual(501);
  });

  it('should match Bad Gateway', function () {
    expect(statusCodes.badGateway).toEqual(502);
  });

  it('should match Service Unavailable', function () {
    expect(statusCodes.serviceUnavailable).toEqual(503);
  });

  it('should match Gateway Timeout', function () {
    expect(statusCodes.gatewayTimeout).toEqual(504);
  });

  it('should match HTTP Version Not Supported', function () {
    expect(statusCodes.httpVersionNotSupported).toEqual(505);
  });

  it('should match Variant Also Negotiates', function () {
    expect(statusCodes.variantAlsoNegotiates).toEqual(506);
  });

  it('should match Insufficient Storage', function () {
    expect(statusCodes.insufficientStorage).toEqual(507);
  });

  it('should match web dav loop detection', function () {
    expect(statusCodes.webDavLoopDetected).toEqual(508);
  });

  it('should match Not Extended', function () {
    expect(statusCodes.notExtended).toEqual(510);
  });

  it('should match Network Authentication Required', function () {
    expect(statusCodes.networkAuthenticationRequired).toEqual(511);
  });
});
