import { GraphQLObjectType, GraphQLSchema } from 'graphql'
import { UserQueries } from './model/queries'
import { UserMutations } from './model/mutations'

export const schema = new GraphQLSchema({
	query: new GraphQLObjectType({
		name: 'RootQuery',
		fields: () => UserQueries()
	}),
	mutation: new GraphQLObjectType({
		name: 'RootMutation',
		fields: () => UserMutations()
	})
})
