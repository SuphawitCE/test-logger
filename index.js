const Logger = require("@pomelofashion/node-pmlo-logger");

const phoneLoginWithOTPResponseEvent = {
  request: {
    userAttributes: {
      phone_number: "062342123",
      user_name: "testLogger",
    },
  },
};

const sensitiveKeys = [
  "user_name",
  "*.user_name",
  "phoneLoginWithOTPResponseEvent.request.userAttributes.user_name",
];

const logger = Logger.createLogger({
  level: "debug",
  redactKeys: sensitiveKeys,
});

logger.info({ phoneLoginWithOTPResponseEvent });
