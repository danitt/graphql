import { GraphQLNonNull, GraphQLString } from 'graphql'
import User from './user.model';
import { UserType } from './type'

export const UserMutations = () => {
	return {
		createUser: {
			type: UserType,
			args: {
				name: {
					description: 'Unique username',
					type: new GraphQLNonNull(GraphQLString)
				}
			},
			resolve: async function (root, { name }, context, info) {
				const user = await User.create({ name })
				return user
			}
		}
	}
}
