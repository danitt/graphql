import { GraphQLObjectType, GraphQLNonNull, GraphQLString } from 'graphql'
export const UserType = new GraphQLObjectType({
	name: 'User',
	description: 'List of users',
	fields: () => ({
		id: {
			type: new GraphQLNonNull(GraphQLString),
			description: 'User ID',
		},
		name: {
			type: new GraphQLNonNull(GraphQLString),
			description: 'User name',
		}
	})
})
