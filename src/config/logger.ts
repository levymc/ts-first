import winston from 'winston';
import bunyan from 'bunyan';
import pino from 'pino';
import dotenv from 'dotenv'

dotenv.config()

const LOGGER = process.env.LOGGER || 'pino'

function createLogger(loggerName: string) {
    switch (loggerName) {
        case 'winston':
            return winston.createLogger({
                level: 'info',
                format: winston.format.combine(
                    winston.format.timestamp(),
                    winston.format.json()
                ),
                transports: [
                    new winston.transports.Console(),
                    new winston.transports.File({ filename: 'winstonLog.log' }),
                ],
        })
        case 'bunyan':
            return bunyan.createLogger({
                name: 'my-app',
                level: 'info',
                streams: [
                { stream: process.stdout, level: 'info' },
                { path: 'bunyanLog.log' },
                ],
            });
            case 'pino':
                return pino({
                    level: 'info',
                    base: null,
                    formatters: {
                        level: (label) => ({ level: label }),
                        msg: (msg: string) => ({ msg: msg }),
                  },
                });
        default:
        throw new Error(`Logger ${loggerName} não suportado.`)
    }
}

const logger = createLogger(LOGGER)

export default logger
