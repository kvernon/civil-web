const statusCodes = require('./statusCodes');

const HttpStatusError = class HttpStatusError extends Error {
  /**
     *
     * @param {string} message
     * @param {number} statusCode
     */
  constructor(message, statusCode) {
    super(message);
    this.name = this.constructor.name;
    this.statusCode = statusCode || -1;
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, this.constructor);
    } else {
      this.stack = (new Error(message)).stack;
    }
  }
};

module.exports.HttpStatusError = HttpStatusError;

module.exports.BadRequestHttpStatusError = class BadRequestHttpStatusError extends HttpStatusError {
  constructor(message) {
    super(message, statusCodes.badRequest);
  }
};

module.exports.UnauthorizedHttpStatusError = class UnauthorizedHttpStatusError extends HttpStatusError {
  constructor(message) {
    super(message, statusCodes.unauthorized);
  }
};

module.exports.PaymentRequiredHttpStatusError = class PaymentRequiredHttpStatusError extends HttpStatusError {
  constructor(message) {
    super(message, statusCodes.paymentRequired);
  }
};

module.exports.ForbiddenHttpStatusError = class ForbiddenHttpStatusError extends HttpStatusError {
  constructor(message) {
    super(message, statusCodes.forbidden);
  }
};

module.exports.NotFoundHttpStatusError = class NotFoundHttpStatusError extends HttpStatusError {
  constructor(message) {
    super(message, statusCodes.notFound);
  }
};

module.exports.MethodNotAllowedHttpStatusError = class MethodNotAllowedHttpStatusError extends HttpStatusError {
  constructor(message) {
    super(message, statusCodes.methodNotAllowed);
  }
};

module.exports.NotAcceptableHttpStatusError = class NotAcceptableHttpStatusError extends HttpStatusError {
  constructor(message) {
    super(message, statusCodes.notAcceptable);
  }
};

module.exports.ProxyAuthenticationRequiredHttpStatusError = class ProxyAuthenticationRequiredHttpStatusError extends HttpStatusError {
  constructor(message) {
    super(message, statusCodes.proxyAuthenticationRequired);
  }
};
module.exports.RequestTimeoutHttpStatusError = class RequestTimeoutHttpStatusErrorHttpStatusError extends HttpStatusError {
  constructor(message) {
    super(message, statusCodes.requestTimeout);
  }
};
module.exports.ConflictHttpStatusError = class ConflictHttpStatusErrorHttpStatusError extends HttpStatusError {
  constructor(message) {
    super(message, statusCodes.conflict);
  }
};

module.exports.GoneHttpStatusError = class GoneHttpStatusErrorHttpStatusError extends HttpStatusError {
  constructor(message) {
    super(message, statusCodes.gone);
  }
};

module.exports.LengthRequiredHttpStatusError = class LengthRequiredHttpStatusError extends HttpStatusError {
  constructor(message) {
    super(message, statusCodes.lengthRequired);
  }
};

module.exports.PreconditionFailedHttpStatusError = class PreconditionFailedHttpStatusError extends HttpStatusError {
  constructor(message) {
    super(message, statusCodes.preconditionFailed);
  }
};

module.exports.PayloadTooLargeHttpStatusError = class PayloadTooLargeHttpStatusError extends HttpStatusError {
  constructor(message) {
    super(message, statusCodes.payloadTooLarge);
  }
};

module.exports.UriTooLongHttpStatusError = class UriTooLongHttpStatusError extends HttpStatusError {
  constructor(message) {
    super(message, statusCodes.uriTooLong);
  }
};

module.exports.UnsupportedMediaType = class UnsupportedMediaTypeHttpStatusError extends HttpStatusError {
  constructor(message) {
    super(message, statusCodes.unsupportedMediaType);
  }
};

module.exports.RequestedRangeNotSatisfiableHttpStatusError = class RequestedRangeNotSatisfiableHttpStatusError extends HttpStatusError {
  constructor(message) {
    super(message, statusCodes.requestedRangeNotSatisfiable);
  }
};
module.exports.ExpectationFailedHttpStatusError = class RequestedRangeNotSatisfiableHttpStatusError extends HttpStatusError {
  constructor(message) {
    super(message, statusCodes.expectationFailed);
  }
};

module.exports.IAmATeapotHttpStatusError = class IAmATeapotHttpStatusError extends HttpStatusError {
  constructor(message) {
    super(message, statusCodes.iAmATeapot);
  }
};

module.exports.MisdirectedRequestHttpStatusError = class MisdirectedRequestHttpStatusError extends HttpStatusError {
  constructor(message) {
    super(message, statusCodes.misdirectedRequest);
  }
};

module.exports.WebDavUnprocessableEntityHttpStatusError = class WebDavUnprocessableEntityHttpStatusError extends HttpStatusError {
  constructor(message) {
    super(message, statusCodes.webDavUnprocessableEntity);
  }
};

module.exports.WebDavLockedHttpStatusError = class WebDavLockedHttpStatusError extends HttpStatusError {
  constructor(message) {
    super(message, statusCodes.webDavLocked);
  }
};

module.exports.WebDavFailedDependencyHttpStatusError = class WebDavFailedDependencyHttpStatusError extends HttpStatusError {
  constructor(message) {
    super(message, statusCodes.webDavFailedDependency);
  }
};

module.exports.TooEarlyHttpStatusError = class TooEarlyHttpStatusError extends HttpStatusError {
  constructor(message) {
    super(message, statusCodes.tooEarly);
  }
};

module.exports.UpgradeRequiredHttpStatusError = class UpgradeRequiredHttpStatusError extends HttpStatusError {
  constructor(message) {
    super(message, statusCodes.upgradeRequired);
  }
};

module.exports.PreconditionRequiredHttpStatusError = class PreconditionRequiredHttpStatusError extends HttpStatusError {
  constructor(message) {
    super(message, statusCodes.preconditionRequired);
  }
};

module.exports.TooManyRequestsHttpStatusError = class TooManyRequestsHttpStatusError extends HttpStatusError {
  constructor(message) {
    super(message, statusCodes.tooManyRequests);
  }
};
module.exports.RequestHeaderFieldsTooLargeHttpStatusError = class RequestHeaderFieldsTooLargeHttpStatusError extends HttpStatusError {
  constructor(message) {
    super(message, statusCodes.requestHeaderFieldsTooLarge);
  }
};

module.exports.UnavailableForLegalReasonsHttpStatusError = class UnavailableForLegalReasonsHttpStatusError extends HttpStatusError {
  constructor(message) {
    super(message, statusCodes.unavailableForLegalReasons);
  }
};

module.exports.InternalServerErrorHttpStatusError = class InternalServerErrorHttpStatusError extends HttpStatusError {
  constructor(message) {
    super(message, statusCodes.internalServerError);
  }
};

module.exports.NotImplementedHttpStatusError = class NotImplementedHttpStatusError extends HttpStatusError {
  constructor(message) {
    super(message, statusCodes.notImplemented);
  }
};

module.exports.BadGateway = class BadGatewayHttpStatusError extends HttpStatusError {
  constructor(message) {
    super(message, statusCodes.badGateway);
  }
};

module.exports.ServiceUnavailableHttpStatusError = class ServiceUnavailableHttpStatusError extends HttpStatusError {
  constructor(message) {
    super(message, statusCodes.serviceUnavailable);
  }
};
module.exports.GatewayTimeoutHttpStatusError = class GatewayTimeoutHttpStatusError extends HttpStatusError {
  constructor(message) {
    super(message, statusCodes.gatewayTimeout);
  }
};

module.exports.HttpVersionNotSupportedHttpStatusError = class HttpVersionNotSupportedHttpStatusError extends HttpStatusError {
  constructor(message) {
    super(message, statusCodes.httpVersionNotSupported);
  }
};

module.exports.VariantAlsoNegotiatesHttpStatusError = class VariantAlsoNegotiatesHttpStatusError extends HttpStatusError {
  constructor(message) {
    super(message, statusCodes.variantAlsoNegotiates);
  }
};

module.exports.InsufficientStorageHttpStatusError = class InsufficientStorageHttpStatusError extends HttpStatusError {
  constructor(message) {
    super(message, statusCodes.insufficientStorage);
  }
};

module.exports.WebDavLoopDetectedHttpStatusError = class WebDavLoopDetectedHttpStatusError extends HttpStatusError {
  constructor(message) {
    super(message, statusCodes.webDavLoopDetected);
  }
};

module.exports.NotExtendedHttpStatusError = class NotExtendedHttpStatusError extends HttpStatusError {
  constructor(message) {
    super(message, statusCodes.notExtended);
  }
};

module.exports.NetworkAuthenticationRequiredHttpStatusError = class NetworkAuthenticationRequiredHttpStatusError extends HttpStatusError {
  constructor(message) {
    super(message, statusCodes.networkAuthenticationRequired);
  }
};
