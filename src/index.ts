import * as http from 'http'
import * as express from 'express'
import * as bodyParser from 'body-parser'
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express'
import { startDB, shutdownHandler } from './init'
import { logger } from './logger'
import { schema } from './schema'

// Check/Set Environment
if (!process.env.NODE_ENV) process.env.NODE_ENV = 'development'
const { NODE_ENV } = process.env


// Launch App
launch()
	.then(server => shutdownHandler(server))


async function launch(): Promise<http.Server> {
	// DB
	await startDB()
	// HTTP CONFIG
	const app = express()
	app.use(bodyParser.urlencoded({ extended: false }))
	app.use(bodyParser.json())
	// GRAPHQL ROUTES
	app.use('/graphql', bodyParser.json(), (req, res, next) =>
		graphqlExpress({ schema })(req, res, next)
	);
	if (NODE_ENV === 'development') {
		app.get('/graphiql', graphiqlExpress({
			endpointURL: '/graphql'
		}));
	}
	// START LISTENING
	return app.listen(3000, () => logger.info('✅: App startup complete, listening on 3000'))
}
