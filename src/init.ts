import * as mongoose from 'mongoose'
import { logger } from './logger'

export async function startDB() {
	// Start DB Connection
	await new Promise((resolve: any, reject: any) => {
		mongoose.connect('mongodb://localhost/graphql', {
			useMongoClient: true
		}, err => {
			if (err) {
				if (err.message === 'Trying to open unclosed connection.') return
				else reject('💻 DB Connection Error', err)
			}
			logger.info('️️️⚙️: MDB connection opened')
			resolve()
		})
	})
}

export function shutdownHandler() {
	function exitHandler() {
		mongoose.connection.close(err => {
			if (err) logger.warn('Error closing mdb connection')
			logger.info('⚙️: MDB connection closed')
			logger.info('✅: App shutdown complete')
		})
	}
	process.on('exit', exitHandler)
	process.on('SIGINT', exitHandler)
	process.on('SIGUSR1', exitHandler)
	process.on('SIGUSR2', exitHandler)
}
