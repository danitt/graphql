import { GraphQLObjectType, GraphQLSchema } from 'graphql'
import { wallet } = from './fields'

export const schema = new GraphQLSchema({
	query: new GraphQLObjectType({
		name: 'RootQuery',
		fields: () => queries
	}),
	mutation: new GraphQLObjectType({
		name: 'RootMutation',
		fields: () => mutations
	})
})
