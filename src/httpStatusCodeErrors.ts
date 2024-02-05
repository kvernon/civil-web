import {StatusCodes} from './statusCodes';

export class HttpStatusError extends Error {
  public statusCode: number;

  constructor(message: string, statusCodes: number) {
    super(message);
    this.name = this.constructor.name;
    this.statusCode = statusCodes || -1;

    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, this.constructor);
    } else {
      this.stack = (new Error(message)).stack;
    }
  }
}

export class BadRequestHttpStatusError extends HttpStatusError {
  constructor(message: string) {
    super(message, StatusCodes.badRequest);
  }
}

export class UnauthorizedHttpStatusError extends HttpStatusError {
  constructor(message: string) {
    super(message, StatusCodes.unauthorized);
  }
}

export class PaymentRequiredHttpStatusError extends HttpStatusError {
  constructor(message: string) {
    super(message, StatusCodes.paymentRequired);
  }
}

export class ForbiddenHttpStatusError extends HttpStatusError {
  constructor(message: string) {
    super(message, StatusCodes.forbidden);
  }
}

export class NotFoundHttpStatusError extends HttpStatusError {
  constructor(message: string) {
    super(message, StatusCodes.notFound);
  }
}

export class MethodNotAllowedHttpStatusError extends HttpStatusError {
  constructor(message: string) {
    super(message, StatusCodes.methodNotAllowed);
  }
}

export class NotAcceptableHttpStatusError extends HttpStatusError {
  constructor(message: string) {
    super(message, StatusCodes.notAcceptable);
  }
}

export class ProxyAuthenticationRequiredHttpStatusError extends HttpStatusError {
  constructor(message: string) {
    super(message, StatusCodes.proxyAuthenticationRequired);
  }
}
export class RequestTimeoutHttpStatusError extends HttpStatusError {
  constructor(message: string) {
    super(message, StatusCodes.requestTimeout);
  }
}
export class ConflictHttpStatusError extends HttpStatusError {
  constructor(message: string) {
    super(message, StatusCodes.conflict);
  }
}

export class GoneHttpStatusError extends HttpStatusError {
  constructor(message: string) {
    super(message, StatusCodes.gone);
  }
}

export class LengthRequiredHttpStatusError extends HttpStatusError {
  constructor(message: string) {
    super(message, StatusCodes.lengthRequired);
  }
}

export class PreconditionFailedHttpStatusError extends HttpStatusError {
  constructor(message: string) {
    super(message, StatusCodes.preconditionFailed);
  }
}

export class PayloadTooLargeHttpStatusError extends HttpStatusError {
  constructor(message: string) {
    super(message, StatusCodes.payloadTooLarge);
  }
}

export class UriTooLongHttpStatusError extends HttpStatusError {
  constructor(message: string) {
    super(message, StatusCodes.uriTooLong);
  }
}

export class UnsupportedMediaTypeHttpStatusError extends HttpStatusError {
  constructor(message: string) {
    super(message, StatusCodes.unsupportedMediaType);
  }
}

export class RequestedRangeNotSatisfiableHttpStatusError extends HttpStatusError {
  constructor(message: string) {
    super(message, StatusCodes.requestedRangeNotSatisfiable);
  }
}
export class ExpectationFailedHttpStatusError extends HttpStatusError {
  constructor(message: string) {
    super(message, StatusCodes.expectationFailed);
  }
}

export class IAmATeapotHttpStatusError extends HttpStatusError {
  constructor(message: string) {
    super(message, StatusCodes.iAmATeapot);
  }
}

export class MisdirectedRequestHttpStatusError extends HttpStatusError {
  constructor(message: string) {
    super(message, StatusCodes.misdirectedRequest);
  }
}

export class WebDavUnprocessableEntityHttpStatusError extends HttpStatusError {
  constructor(message: string) {
    super(message, StatusCodes.webDavUnprocessableEntity);
  }
}

export class WebDavLockedHttpStatusError extends HttpStatusError {
  constructor(message: string) {
    super(message, StatusCodes.webDavLocked);
  }
}

export class WebDavFailedDependencyHttpStatusError extends HttpStatusError {
  constructor(message: string) {
    super(message, StatusCodes.webDavFailedDependency);
  }
}

export class TooEarlyHttpStatusError extends HttpStatusError {
  constructor(message: string) {
    super(message, StatusCodes.tooEarly);
  }
}

export class UpgradeRequiredHttpStatusError extends HttpStatusError {
  constructor(message: string) {
    super(message, StatusCodes.upgradeRequired);
  }
}

export class PreconditionRequiredHttpStatusError extends HttpStatusError {
  constructor(message: string) {
    super(message, StatusCodes.preconditionRequired);
  }
}

export class TooManyRequestsHttpStatusError extends HttpStatusError {
  constructor(message: string) {
    super(message, StatusCodes.tooManyRequests);
  }
}
export class RequestHeaderFieldsTooLargeHttpStatusError extends HttpStatusError {
  constructor(message: string) {
    super(message, StatusCodes.requestHeaderFieldsTooLarge);
  }
}

export class UnavailableForLegalReasonsHttpStatusError extends HttpStatusError {
  constructor(message: string) {
    super(message, StatusCodes.unavailableForLegalReasons);
  }
}

export class InternalServerErrorHttpStatusError extends HttpStatusError {
  constructor(message: string) {
    super(message, StatusCodes.internalServerError);
  }
}

export class NotImplementedHttpStatusError extends HttpStatusError {
  constructor(message: string) {
    super(message, StatusCodes.notImplemented);
  }
}

export class BadGatewayHttpStatusError extends HttpStatusError {
  constructor(message: string) {
    super(message, StatusCodes.badGateway);
  }
}

export class ServiceUnavailableHttpStatusError extends HttpStatusError {
  constructor(message: string) {
    super(message, StatusCodes.serviceUnavailable);
  }
}
export class GatewayTimeoutHttpStatusError extends HttpStatusError {
  constructor(message: string) {
    super(message, StatusCodes.gatewayTimeout);
  }
}

export class HttpVersionNotSupportedHttpStatusError extends HttpStatusError {
  constructor(message: string) {
    super(message, StatusCodes.httpVersionNotSupported);
  }
}

export class VariantAlsoNegotiatesHttpStatusError extends HttpStatusError {
  constructor(message: string) {
    super(message, StatusCodes.variantAlsoNegotiates);
  }
}

export class InsufficientStorageHttpStatusError extends HttpStatusError {
  constructor(message: string) {
    super(message, StatusCodes.insufficientStorage);
  }
}

export class WebDavLoopDetectedHttpStatusError extends HttpStatusError {
  constructor(message: string) {
    super(message, StatusCodes.webDavLoopDetected);
  }
}

export class NotExtendedHttpStatusError extends HttpStatusError {
  constructor(message: string) {
    super(message, StatusCodes.notExtended);
  }
}

export class NetworkAuthenticationRequiredHttpStatusError extends HttpStatusError {
  constructor(message: string) {
    super(message, StatusCodes.networkAuthenticationRequired);
  }
}
