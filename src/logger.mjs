import { createLogger, transports, format } from "winston";
var logger;
export default logger = createLogger({
  level: 'info',
  format: format.combine(
    format.timestamp(),
    format.json()
  ),
  transports: [
    new transports.Console(),
    new transports.File({
      filename: 'logs/error.log',
      level: 'error'
    }),
    new transports.File({
      filename: 'logs/combined.log'
    }),
    new transports.File({
      filename: 'logs/combined.log',
      level: 'http'
    })
  ]
});