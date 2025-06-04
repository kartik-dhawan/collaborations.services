import winston from "winston";
import os from "os";
import path from "path";
import { fileURLToPath } from "url";

const logFormat = winston.format.printf(
  (info) =>
    `${info.timestamp} ${info.level} [${info.service}] [${info.label}] - ${info.message} `
); // define a log format, the `info` parameter contains all the keys we pass in `fillExcept` of winston.format.metadata

const __filename = fileURLToPath(import.meta.url);

const baseLogger = winston.createLogger({
  levels: {
    error: 1,
    warn: 2,
    info: 3,
  },
  // combines the formatting techniques: label, timestamp & any extra metadata we might want to provide
  format: winston.format.combine(
    winston.format.label({
      label: path.basename(__filename) ?? "[unknown path]", // @TODO: find a way to print file name
    }), // adds a default `label` key to log object
    winston.format.timestamp({ format: "YYYY-MM-DD HH:mm:ss" }), // formats & sets the timestamp - adds a default `timestamp` key to log object
    winston.format.metadata({
      fillExcept: ["message", "level", "timestamp", "label", "service"], // all these keys, it accepts as metadata when we call the logger function
    })
  ),
  transports: [
    new winston.transports.Console({
      level: "info", // log info, warn, and error
      format: winston.format.combine(winston.format.colorize(), logFormat),
      eol: os.EOL,
      stderrLevels: ["error"], // only errors → stderr; others → stdout
    }),
  ],
  exitOnError: false,
});

/**
 *
 * stdin (standard input) – file descriptor 0
 *
 * stdout (standard output) – file descriptor 1
 *
 * stderr (standard error) – file descriptor 2
 */

const logger = {
  common: baseLogger.child({ service: "common-services" }),
  user: baseLogger.child({ service: "user-management-service" }),
  collab: baseLogger.child({ service: "collaborations" }),
};

export default logger;
