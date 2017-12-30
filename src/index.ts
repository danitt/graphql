import * as express from 'express'
import * as bodyParser from 'body-parser'
import { startDB, shutdownHandler } from './init'
import { logger } from './logger'

// Check/Set Environment
if (!process.env.NODE_ENV) process.env.NODE_ENV = 'development'
const { NODE_ENV } = process.env


// Launch App
const app = express()
shutdownHandler() // handle graceful exit of app
launch()


async function launch() {
	// DB
	await startDB()
	// HTTP
	app.use(bodyParser.urlencoded({ extended: false }))
	app.use(bodyParser.json())

	logger.info('✅: App startup complete')

	//
}
