const { GraphQLNonNull, GraphQLString, GraphQLList } = require('graphql');
import User from './user.model'
import { UserType } from './type'

export const UserQueries = () => {
	return {
		user: {
			type: UserType,
			args: {
				id: {
					description: 'ID of user',
					type: new GraphQLNonNull(GraphQLString)
				}
			},
			resolve: async function (root, { userId }, context, info) {
				const user = await User.findById({ userId })
				return user
			}
		},
		users: {
			type: new GraphQLList(UserType),
			resolve: async function (root, { limit = 20 }, context, info) {
				const users = await User.find().limit(limit)
				return users
			}
		},
		userSearch: {
			type: new GraphQLList(UserType),
			args: {
				query: {
					description: 'Fuzzy-matched name of user',
					type: new GraphQLNonNull(GraphQLString)
				}
			},
			resolve: async function (root, { query = '' }, context, info) {
				const user = await User.find({ name: { $regex: query, $options: 'i' } })
				return user
			}
		}
	}
}
