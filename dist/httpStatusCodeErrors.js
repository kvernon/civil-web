"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NetworkAuthenticationRequiredHttpStatusError = exports.NotExtendedHttpStatusError = exports.WebDavLoopDetectedHttpStatusError = exports.InsufficientStorageHttpStatusError = exports.VariantAlsoNegotiatesHttpStatusError = exports.HttpVersionNotSupportedHttpStatusError = exports.GatewayTimeoutHttpStatusError = exports.ServiceUnavailableHttpStatusError = exports.BadGatewayHttpStatusError = exports.NotImplementedHttpStatusError = exports.InternalServerErrorHttpStatusError = exports.UnavailableForLegalReasonsHttpStatusError = exports.RequestHeaderFieldsTooLargeHttpStatusError = exports.TooManyRequestsHttpStatusError = exports.PreconditionRequiredHttpStatusError = exports.UpgradeRequiredHttpStatusError = exports.TooEarlyHttpStatusError = exports.WebDavFailedDependencyHttpStatusError = exports.WebDavLockedHttpStatusError = exports.WebDavUnprocessableEntityHttpStatusError = exports.MisdirectedRequestHttpStatusError = exports.IAmATeapotHttpStatusError = exports.ExpectationFailedHttpStatusError = exports.RequestedRangeNotSatisfiableHttpStatusError = exports.UnsupportedMediaTypeHttpStatusError = exports.UriTooLongHttpStatusError = exports.PayloadTooLargeHttpStatusError = exports.PreconditionFailedHttpStatusError = exports.LengthRequiredHttpStatusError = exports.GoneHttpStatusError = exports.ConflictHttpStatusError = exports.RequestTimeoutHttpStatusError = exports.ProxyAuthenticationRequiredHttpStatusError = exports.NotAcceptableHttpStatusError = exports.MethodNotAllowedHttpStatusError = exports.NotFoundHttpStatusError = exports.ForbiddenHttpStatusError = exports.PaymentRequiredHttpStatusError = exports.UnauthorizedHttpStatusError = exports.BadRequestHttpStatusError = exports.HttpStatusError = void 0;
const statusCodes_1 = require("./statusCodes");
class HttpStatusError extends Error {
    constructor(message, statusCodes) {
        super(message);
        this.name = this.constructor.name;
        this.statusCode = statusCodes || -1;
        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(this, this.constructor);
        }
        else {
            this.stack = (new Error(message)).stack;
        }
    }
}
exports.HttpStatusError = HttpStatusError;
class BadRequestHttpStatusError extends HttpStatusError {
    constructor(message) {
        super(message, statusCodes_1.StatusCodes.badRequest);
    }
}
exports.BadRequestHttpStatusError = BadRequestHttpStatusError;
class UnauthorizedHttpStatusError extends HttpStatusError {
    constructor(message) {
        super(message, statusCodes_1.StatusCodes.unauthorized);
    }
}
exports.UnauthorizedHttpStatusError = UnauthorizedHttpStatusError;
class PaymentRequiredHttpStatusError extends HttpStatusError {
    constructor(message) {
        super(message, statusCodes_1.StatusCodes.paymentRequired);
    }
}
exports.PaymentRequiredHttpStatusError = PaymentRequiredHttpStatusError;
class ForbiddenHttpStatusError extends HttpStatusError {
    constructor(message) {
        super(message, statusCodes_1.StatusCodes.forbidden);
    }
}
exports.ForbiddenHttpStatusError = ForbiddenHttpStatusError;
class NotFoundHttpStatusError extends HttpStatusError {
    constructor(message) {
        super(message, statusCodes_1.StatusCodes.notFound);
    }
}
exports.NotFoundHttpStatusError = NotFoundHttpStatusError;
class MethodNotAllowedHttpStatusError extends HttpStatusError {
    constructor(message) {
        super(message, statusCodes_1.StatusCodes.methodNotAllowed);
    }
}
exports.MethodNotAllowedHttpStatusError = MethodNotAllowedHttpStatusError;
class NotAcceptableHttpStatusError extends HttpStatusError {
    constructor(message) {
        super(message, statusCodes_1.StatusCodes.notAcceptable);
    }
}
exports.NotAcceptableHttpStatusError = NotAcceptableHttpStatusError;
class ProxyAuthenticationRequiredHttpStatusError extends HttpStatusError {
    constructor(message) {
        super(message, statusCodes_1.StatusCodes.proxyAuthenticationRequired);
    }
}
exports.ProxyAuthenticationRequiredHttpStatusError = ProxyAuthenticationRequiredHttpStatusError;
class RequestTimeoutHttpStatusError extends HttpStatusError {
    constructor(message) {
        super(message, statusCodes_1.StatusCodes.requestTimeout);
    }
}
exports.RequestTimeoutHttpStatusError = RequestTimeoutHttpStatusError;
class ConflictHttpStatusError extends HttpStatusError {
    constructor(message) {
        super(message, statusCodes_1.StatusCodes.conflict);
    }
}
exports.ConflictHttpStatusError = ConflictHttpStatusError;
class GoneHttpStatusError extends HttpStatusError {
    constructor(message) {
        super(message, statusCodes_1.StatusCodes.gone);
    }
}
exports.GoneHttpStatusError = GoneHttpStatusError;
class LengthRequiredHttpStatusError extends HttpStatusError {
    constructor(message) {
        super(message, statusCodes_1.StatusCodes.lengthRequired);
    }
}
exports.LengthRequiredHttpStatusError = LengthRequiredHttpStatusError;
class PreconditionFailedHttpStatusError extends HttpStatusError {
    constructor(message) {
        super(message, statusCodes_1.StatusCodes.preconditionFailed);
    }
}
exports.PreconditionFailedHttpStatusError = PreconditionFailedHttpStatusError;
class PayloadTooLargeHttpStatusError extends HttpStatusError {
    constructor(message) {
        super(message, statusCodes_1.StatusCodes.payloadTooLarge);
    }
}
exports.PayloadTooLargeHttpStatusError = PayloadTooLargeHttpStatusError;
class UriTooLongHttpStatusError extends HttpStatusError {
    constructor(message) {
        super(message, statusCodes_1.StatusCodes.uriTooLong);
    }
}
exports.UriTooLongHttpStatusError = UriTooLongHttpStatusError;
class UnsupportedMediaTypeHttpStatusError extends HttpStatusError {
    constructor(message) {
        super(message, statusCodes_1.StatusCodes.unsupportedMediaType);
    }
}
exports.UnsupportedMediaTypeHttpStatusError = UnsupportedMediaTypeHttpStatusError;
class RequestedRangeNotSatisfiableHttpStatusError extends HttpStatusError {
    constructor(message) {
        super(message, statusCodes_1.StatusCodes.requestedRangeNotSatisfiable);
    }
}
exports.RequestedRangeNotSatisfiableHttpStatusError = RequestedRangeNotSatisfiableHttpStatusError;
class ExpectationFailedHttpStatusError extends HttpStatusError {
    constructor(message) {
        super(message, statusCodes_1.StatusCodes.expectationFailed);
    }
}
exports.ExpectationFailedHttpStatusError = ExpectationFailedHttpStatusError;
class IAmATeapotHttpStatusError extends HttpStatusError {
    constructor(message) {
        super(message, statusCodes_1.StatusCodes.iAmATeapot);
    }
}
exports.IAmATeapotHttpStatusError = IAmATeapotHttpStatusError;
class MisdirectedRequestHttpStatusError extends HttpStatusError {
    constructor(message) {
        super(message, statusCodes_1.StatusCodes.misdirectedRequest);
    }
}
exports.MisdirectedRequestHttpStatusError = MisdirectedRequestHttpStatusError;
class WebDavUnprocessableEntityHttpStatusError extends HttpStatusError {
    constructor(message) {
        super(message, statusCodes_1.StatusCodes.webDavUnprocessableEntity);
    }
}
exports.WebDavUnprocessableEntityHttpStatusError = WebDavUnprocessableEntityHttpStatusError;
class WebDavLockedHttpStatusError extends HttpStatusError {
    constructor(message) {
        super(message, statusCodes_1.StatusCodes.webDavLocked);
    }
}
exports.WebDavLockedHttpStatusError = WebDavLockedHttpStatusError;
class WebDavFailedDependencyHttpStatusError extends HttpStatusError {
    constructor(message) {
        super(message, statusCodes_1.StatusCodes.webDavFailedDependency);
    }
}
exports.WebDavFailedDependencyHttpStatusError = WebDavFailedDependencyHttpStatusError;
class TooEarlyHttpStatusError extends HttpStatusError {
    constructor(message) {
        super(message, statusCodes_1.StatusCodes.tooEarly);
    }
}
exports.TooEarlyHttpStatusError = TooEarlyHttpStatusError;
class UpgradeRequiredHttpStatusError extends HttpStatusError {
    constructor(message) {
        super(message, statusCodes_1.StatusCodes.upgradeRequired);
    }
}
exports.UpgradeRequiredHttpStatusError = UpgradeRequiredHttpStatusError;
class PreconditionRequiredHttpStatusError extends HttpStatusError {
    constructor(message) {
        super(message, statusCodes_1.StatusCodes.preconditionRequired);
    }
}
exports.PreconditionRequiredHttpStatusError = PreconditionRequiredHttpStatusError;
class TooManyRequestsHttpStatusError extends HttpStatusError {
    constructor(message) {
        super(message, statusCodes_1.StatusCodes.tooManyRequests);
    }
}
exports.TooManyRequestsHttpStatusError = TooManyRequestsHttpStatusError;
class RequestHeaderFieldsTooLargeHttpStatusError extends HttpStatusError {
    constructor(message) {
        super(message, statusCodes_1.StatusCodes.requestHeaderFieldsTooLarge);
    }
}
exports.RequestHeaderFieldsTooLargeHttpStatusError = RequestHeaderFieldsTooLargeHttpStatusError;
class UnavailableForLegalReasonsHttpStatusError extends HttpStatusError {
    constructor(message) {
        super(message, statusCodes_1.StatusCodes.unavailableForLegalReasons);
    }
}
exports.UnavailableForLegalReasonsHttpStatusError = UnavailableForLegalReasonsHttpStatusError;
class InternalServerErrorHttpStatusError extends HttpStatusError {
    constructor(message) {
        super(message, statusCodes_1.StatusCodes.internalServerError);
    }
}
exports.InternalServerErrorHttpStatusError = InternalServerErrorHttpStatusError;
class NotImplementedHttpStatusError extends HttpStatusError {
    constructor(message) {
        super(message, statusCodes_1.StatusCodes.notImplemented);
    }
}
exports.NotImplementedHttpStatusError = NotImplementedHttpStatusError;
class BadGatewayHttpStatusError extends HttpStatusError {
    constructor(message) {
        super(message, statusCodes_1.StatusCodes.badGateway);
    }
}
exports.BadGatewayHttpStatusError = BadGatewayHttpStatusError;
class ServiceUnavailableHttpStatusError extends HttpStatusError {
    constructor(message) {
        super(message, statusCodes_1.StatusCodes.serviceUnavailable);
    }
}
exports.ServiceUnavailableHttpStatusError = ServiceUnavailableHttpStatusError;
class GatewayTimeoutHttpStatusError extends HttpStatusError {
    constructor(message) {
        super(message, statusCodes_1.StatusCodes.gatewayTimeout);
    }
}
exports.GatewayTimeoutHttpStatusError = GatewayTimeoutHttpStatusError;
class HttpVersionNotSupportedHttpStatusError extends HttpStatusError {
    constructor(message) {
        super(message, statusCodes_1.StatusCodes.httpVersionNotSupported);
    }
}
exports.HttpVersionNotSupportedHttpStatusError = HttpVersionNotSupportedHttpStatusError;
class VariantAlsoNegotiatesHttpStatusError extends HttpStatusError {
    constructor(message) {
        super(message, statusCodes_1.StatusCodes.variantAlsoNegotiates);
    }
}
exports.VariantAlsoNegotiatesHttpStatusError = VariantAlsoNegotiatesHttpStatusError;
class InsufficientStorageHttpStatusError extends HttpStatusError {
    constructor(message) {
        super(message, statusCodes_1.StatusCodes.insufficientStorage);
    }
}
exports.InsufficientStorageHttpStatusError = InsufficientStorageHttpStatusError;
class WebDavLoopDetectedHttpStatusError extends HttpStatusError {
    constructor(message) {
        super(message, statusCodes_1.StatusCodes.webDavLoopDetected);
    }
}
exports.WebDavLoopDetectedHttpStatusError = WebDavLoopDetectedHttpStatusError;
class NotExtendedHttpStatusError extends HttpStatusError {
    constructor(message) {
        super(message, statusCodes_1.StatusCodes.notExtended);
    }
}
exports.NotExtendedHttpStatusError = NotExtendedHttpStatusError;
class NetworkAuthenticationRequiredHttpStatusError extends HttpStatusError {
    constructor(message) {
        super(message, statusCodes_1.StatusCodes.networkAuthenticationRequired);
    }
}
exports.NetworkAuthenticationRequiredHttpStatusError = NetworkAuthenticationRequiredHttpStatusError;
