const Logger = require("@pomelofashion/node-pmlo-logger");
const {
  SRPALoginResponseEvent,
  phoneLoginWithOTPResponseEvent,
} = require("./fixtures/mockEventPayload.json");
const { SRPALogin, PhoneLogin } = require("./utils/SRPALogin");

const sensitiveKeys = [...SRPALogin, ...PhoneLogin];

console.log("SRPA: ", SRPALogin);

console.log("Phone: ", PhoneLogin);
const logger = Logger.createLogger({
  level: "debug",
  redactKeys: sensitiveKeys,
});

logger.info({
  SRPALoginResponseEvent,
  phoneLoginWithOTPResponseEvent,
});
