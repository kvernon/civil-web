# Civil Web
![Test](https://raw.githubusercontent.com/kvernon/http-status-codes/master/test/badge.png?sanitize=true)
[![Wallaby.js](https://img.shields.io/badge/wallaby.js-configured-green.svg)](https://wallabyjs.com)

_Sometimes you have to fight your own wars on the web! Anyway, this is a small library for http web error and statuses._

This yet another http web status code and http web error codes library. It's simple and clean and comprised of two parts:

1. statusCodes: these are the numbers for http status codes. Sure you could have numbers only, but at least you have some meaning to them now! 
2. HttpStatusError: These are your extended `Error` objects, which are extended from `HttpStatusError` in here. If you need some specific type of error simply preprend the name in front. For example, you need `I am a teapot`, it's `IAmATeapotHttpStatusError`!

All items are based off of [Mozilla's response docs](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status), and deprecated items are removed.

> Note: if you need deprecated errors, you can do so with the `HttpStatusError` object

## Install it!
`npm i -S civil-web`

## Use it!

Yes, these are horrible examples, but hopefully they at least show you that you have meaningful status codes, meaningful error, and a way to create custom http status errors!

> Also note, that I'm **not** going to check if your status code is w/n a range. I assume you want to be the leader of your own destiny, so here you go, and I hope you enjoy! :)

```javascript
const {HttpStatusError, BadRequestHttpStatusError, statusCodes} = require('civil-web');

const goingPlaces = function(value){
 if (typeof value === 'object' ) throw new BadRequestHttpStatusError('why did you pass an object?');

 return { statusCode: statusCodes.ok };  
};

const custom = function(value){
 if (value === 'we are jumping!' ) throw new HttpStatusError(2019, 'why did you pass an object?');

 return { statusCode: statusCodes.ok };  
};

goingPlaces({foo:  'this isn\'t happening'});
custom('we are jumping!');
```

## Lists of supported items

### StatusCodes
|Status Name|Status Code|Error Type|
|:---|---:|---:|
|-|-|HttpStatusError|
|continue|100|-|
|switchingProtocol|101|-|
|webDavProcessing|102|-|
|earlyHints|103|-|
|ok|200|-|
|created|201|-|
|accepted|202|-|
|nonAuthoritativeInformation|203|-|
|noContent|204|-|
|webDaveMutliStatus7|207|-|
|webDaveMutliStatus8|208|-|
|imUsed|226|-|
|multipleChoice|300|-|
|movedPermanently|301|-|
|found|302|-|
|seeOther|303|-|
|notModified|304|-|
|permanentRedirect|308|-|
|badRequest|400|BadRequestHttpStatusError|
|unauthorized|401|UnauthorizedHttpStatusError|
|paymentRequired|402|PaymentRequiredHttpStatusError|
|forbidden|403|ForbiddenHttpStatusError|
|notFound|404|NotFoundHttpStatusError|
|methodNotAllowed|405|MethodNotAllowedHttpStatusError|
|notAcceptable|406|NotAcceptableHttpStatusError|
|proxyAuthenticationRequired|407|ProxyAuthenticationRequiredHttpStatusError|
|requestTimeout|408|RequestTimeoutHttpStatusError|
|conflict|409|ConflictHttpStatusError|
|gone|410|GoneHttpStatusError|
|lengthRequired|411|LengthRequiredHttpStatusError|
|preconditionFailed|412|PreconditionFailedHttpStatusError|
|payloadTooLarge|413|PayloadTooLargeHttpStatusError|
|uriTooLong|414|UriTooLongHttpStatusError|
|unsupportedMediaType|415|UnsupportedMediaTypeHttpStatusError|
|requestedRangeNotSatisfiable|416|RequestedRangeNotSatisfiableHttpStatusError|
|expectationFailed|417|ExpectationFailedHttpStatusError|
|iAmATeapot|418|IAmATeapotHttpStatusError|
|misdirectedRequest|421|MisdirectedRequestHttpStatusError|
|webDavUnprocessableEntity|422|WebDavUnprocessableEntityHttpStatusError|
|webDavLocked|423|WebDavLockedHttpStatusError|
|webDavFailedDependency|424|WebDavFailedDependencyHttpStatusError|
|tooEarly|425|TooEarlyHttpStatusError|
|upgradeRequired|426|UpgradeRequiredHttpStatusError|
|preconditionRequired|428|PreconditionRequiredHttpStatusError|
|tooManyRequests|429|TooManyRequestsHttpStatusError|
|requestHeaderFieldsTooLarge|431|RequestHeaderFieldsTooLargeHttpStatusError|
|unavailableForLegalReasons|451|UnavailableForLegalReasonsHttpStatusError|
|internalServerError|500|InternalServerErrorHttpStatusError|
|notImplemented|501|NotImplementedHttpStatusError|
|badGateway|502|BadGatewayHttpStatusError|
|serviceUnavailable|503|ServiceUnavailableHttpStatusError|
|gatewayTimeout|504|GatewayTimeoutHttpStatusError|
|httpVersionNotSupported|505|HttpVersionNotSupportedHttpStatusError|
|variantAlsoNegotiates|506|VariantAlsoNegotiatesHttpStatusError|
|insufficientStorage|507|InsufficientStorageHttpStatusError|
|webDavLoopDetected|508|WebDavLoopDetectedHttpStatusError|
|notExtended|510|NotExtendedHttpStatusError|
|networkAuthenticationRequired|511|NetworkAuthenticationRequiredHttpStatusError|


