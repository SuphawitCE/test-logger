# test-logger

## Getting Started

`git clone git@github.com:SuphawitCE/test-logger.git`

`cd test-logger`

`npm install`

`node index.js`  or `npm start`

### Test for SRPALogin

Delete `phoneLoginWithOTPResponseEvent` in `logger.info({});` like this

```
logger.info({
  SRPALoginResponseEvent,
});
```
### Test for PhoneLogin

Delete `SRPALoginResponseEvent` in `logger.info({});` like this

```
logger.info({
  phoneLoginWithOTPResponseEvent,
});
```
