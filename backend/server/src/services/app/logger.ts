import winston, { Logger as WinstonLogger } from 'winston';
import path from 'path';
import moment from 'moment';
import { logger } from '@conf/logger.conf';

class Logger {
  public logger: WinstonLogger;

  constructor() {
    this.build();
  }

  private consoleFormat(info: winston.Logform.TransformableInfo): string {
    return `[${moment(info.timestamp).format('YYYY-DD-MM hh:mm:ss')}] ${info.level}: ${
      info && info.message
        ? typeof info && info.message === 'object'
          ? JSON.stringify(info.message, null, 2)
          : info.message
        : 'UNEXPECTED'
    }`;
  }

  private fileFormat(info: winston.Logform.TransformableInfo): string {
    return `[${moment(info.timestamp).format('YYYY-DD-MM hh:mm:ss')}] ${
      (info.level == 'error' ? '❗ ' : '✅ ') + info.level
    }: ${
      info && info.message
        ? typeof info && info.message === 'object'
          ? JSON.stringify(info.message, null, 2)
          : info.message
        : 'UNEXPECTED'
    }`;
  }

  private build() {
    this.logger = winston.createLogger({
      level: 'info',
      format: winston.format.json(),
      transports: [
        new winston.transports.Console({
          format: winston.format.combine(
            winston.format.colorize(),
            winston.format.timestamp(),
            winston.format.printf(this.consoleFormat),
          ),
        }),
        new winston.transports.File({
          format: winston.format.combine(winston.format.timestamp(), winston.format.printf(this.fileFormat)),
          filename: path.resolve(logger.defaultPath, 'error.log'),
          level: 'error',
        }),
        new winston.transports.File({
          format: winston.format.combine(winston.format.timestamp(), winston.format.printf(this.fileFormat)),
          filename: path.resolve(logger.defaultPath, 'node.log'),
        }),
      ],
    });
  }
}

export default new Logger().logger;
