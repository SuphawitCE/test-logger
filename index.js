const Logger = require("@pomelofashion/node-pmlo-logger");
const {
  SRPALoginResponseEvent,
  phoneLoginWithOTPResponseEvent,
  firebaseUserResponse,
} = require("./fixtures/mockEventPayload.json");
const { cognitoKeys } = require("./utils");

const sensitiveKeys = [...cognitoKeys];

// console.log("SRPA: ", SRPALogin);

// console.log("Phone: ", PhoneLogin);
const logger = Logger.createLogger({
  level: "debug",
  redactKeys: sensitiveKeys,
});

logger.info({
  SRPALoginResponseEvent,
  phoneLoginWithOTPResponseEvent,
  firebaseUserResponse,
});
