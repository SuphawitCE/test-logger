const Logger = require("@pomelofashion/node-pmlo-logger");
const { SRPALoginResponseEvent } = require("./fixtures/mockEventPayload.json");
const { SRPALogin } = require("./utils/SRPALogin");

const sensitiveKeys = [...SRPALogin];

const logger = Logger.createLogger({
  level: "debug",
  redactKeys: sensitiveKeys,
});

logger.info({ SRPALoginResponseEvent });
