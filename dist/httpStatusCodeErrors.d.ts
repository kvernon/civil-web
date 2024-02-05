export declare class HttpStatusError extends Error {
    statusCode: number;
    constructor(message: string, statusCodes: number);
}
export declare class BadRequestHttpStatusError extends HttpStatusError {
    constructor(message: string);
}
export declare class UnauthorizedHttpStatusError extends HttpStatusError {
    constructor(message: string);
}
export declare class PaymentRequiredHttpStatusError extends HttpStatusError {
    constructor(message: string);
}
export declare class ForbiddenHttpStatusError extends HttpStatusError {
    constructor(message: string);
}
export declare class NotFoundHttpStatusError extends HttpStatusError {
    constructor(message: string);
}
export declare class MethodNotAllowedHttpStatusError extends HttpStatusError {
    constructor(message: string);
}
export declare class NotAcceptableHttpStatusError extends HttpStatusError {
    constructor(message: string);
}
export declare class ProxyAuthenticationRequiredHttpStatusError extends HttpStatusError {
    constructor(message: string);
}
export declare class RequestTimeoutHttpStatusError extends HttpStatusError {
    constructor(message: string);
}
export declare class ConflictHttpStatusError extends HttpStatusError {
    constructor(message: string);
}
export declare class GoneHttpStatusError extends HttpStatusError {
    constructor(message: string);
}
export declare class LengthRequiredHttpStatusError extends HttpStatusError {
    constructor(message: string);
}
export declare class PreconditionFailedHttpStatusError extends HttpStatusError {
    constructor(message: string);
}
export declare class PayloadTooLargeHttpStatusError extends HttpStatusError {
    constructor(message: string);
}
export declare class UriTooLongHttpStatusError extends HttpStatusError {
    constructor(message: string);
}
export declare class UnsupportedMediaTypeHttpStatusError extends HttpStatusError {
    constructor(message: string);
}
export declare class RequestedRangeNotSatisfiableHttpStatusError extends HttpStatusError {
    constructor(message: string);
}
export declare class ExpectationFailedHttpStatusError extends HttpStatusError {
    constructor(message: string);
}
export declare class IAmATeapotHttpStatusError extends HttpStatusError {
    constructor(message: string);
}
export declare class MisdirectedRequestHttpStatusError extends HttpStatusError {
    constructor(message: string);
}
export declare class WebDavUnprocessableEntityHttpStatusError extends HttpStatusError {
    constructor(message: string);
}
export declare class WebDavLockedHttpStatusError extends HttpStatusError {
    constructor(message: string);
}
export declare class WebDavFailedDependencyHttpStatusError extends HttpStatusError {
    constructor(message: string);
}
export declare class TooEarlyHttpStatusError extends HttpStatusError {
    constructor(message: string);
}
export declare class UpgradeRequiredHttpStatusError extends HttpStatusError {
    constructor(message: string);
}
export declare class PreconditionRequiredHttpStatusError extends HttpStatusError {
    constructor(message: string);
}
export declare class TooManyRequestsHttpStatusError extends HttpStatusError {
    constructor(message: string);
}
export declare class RequestHeaderFieldsTooLargeHttpStatusError extends HttpStatusError {
    constructor(message: string);
}
export declare class UnavailableForLegalReasonsHttpStatusError extends HttpStatusError {
    constructor(message: string);
}
export declare class InternalServerErrorHttpStatusError extends HttpStatusError {
    constructor(message: string);
}
export declare class NotImplementedHttpStatusError extends HttpStatusError {
    constructor(message: string);
}
export declare class BadGatewayHttpStatusError extends HttpStatusError {
    constructor(message: string);
}
export declare class ServiceUnavailableHttpStatusError extends HttpStatusError {
    constructor(message: string);
}
export declare class GatewayTimeoutHttpStatusError extends HttpStatusError {
    constructor(message: string);
}
export declare class HttpVersionNotSupportedHttpStatusError extends HttpStatusError {
    constructor(message: string);
}
export declare class VariantAlsoNegotiatesHttpStatusError extends HttpStatusError {
    constructor(message: string);
}
export declare class InsufficientStorageHttpStatusError extends HttpStatusError {
    constructor(message: string);
}
export declare class WebDavLoopDetectedHttpStatusError extends HttpStatusError {
    constructor(message: string);
}
export declare class NotExtendedHttpStatusError extends HttpStatusError {
    constructor(message: string);
}
export declare class NetworkAuthenticationRequiredHttpStatusError extends HttpStatusError {
    constructor(message: string);
}
