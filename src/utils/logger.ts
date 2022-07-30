import winston from 'winston';
import config from '@/config';

let LoggerInstance;

if (process.env.NODE_ENV !== 'development') {
  LoggerInstance = winston.createLogger({
    level: config.logs.level, // これ以下のレベルは出力しない
    levels: winston.config.npm.levels, // レベルのプライオリティの設定
    format: winston.format.combine(
      winston.format.timestamp({
        format: 'YYYY-MM-DD HH:mm:ss',
      }),
      winston.format.errors({ stack: true }),
      winston.format.splat(),
      winston.format.json(),
    ),
    transports: [new winston.transports.Console()],
  });
} else {
  LoggerInstance = winston.createLogger({
    level: config.logs.level, // これ以下のレベルは出力しない
    levels: winston.config.npm.levels, // レベルのプライオリティの設定
    format: winston.format.combine(
      winston.format.timestamp({
        format: 'YYYY-MM-DD HH:mm:ss',
      }),
      winston.format.errors({ stack: true }),
      winston.format.cli(),
      winston.format.printf(info => `[${info.timestamp}] ${info.level} ${info.message}`),
    ),
    transports: [new winston.transports.Console()],
  });
}

export default LoggerInstance;
