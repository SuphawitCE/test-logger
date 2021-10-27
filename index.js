const Logger = require("@pomelofashion/node-pmlo-logger");
const {
  SRPALoginResponseEvent,
  phoneLoginWithOTPResponseEvent,
} = require("./fixtures/mockEventPayload.json");
const { SRPALogin } = require("./utils/SRPALogin");
const { PhoneLogin } = require("./utils/PhoneLogin");

const sensitiveKeys = [...SRPALogin, ...PhoneLogin];

const logger = Logger.createLogger({
  level: "debug",
  redactKeys: sensitiveKeys,
});

logger.info({
  SRPALoginResponseEvent,
  phoneLoginWithOTPResponseEvent,
});
