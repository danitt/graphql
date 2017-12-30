const { NODE_ENV } = process.env
import { Logger, transports as Transports } from 'winston'

let level = 'info'
const transports = []
switch (NODE_ENV) {
	case 'production':
		level = 'verbose'
		transports.push(
			new Transports.File({
				filename: 'error.log',
				level: 'error'
			})
		)
		break
	default:
	case 'development':
		level = 'verbose'
		transports.push(new Transports.Console({ colorize: true }))
		break
}

export const logger = new Logger({ level, transports })
