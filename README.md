# Experimental BE boilerplate using Node + Typescript + Express + MongoDB + GraphQL

## Quick Start
npm install
npm start

## Usage
- Server listens on :3000
- available endpoints:
	+ localhost:3000/graphiql (development GUI)
	+ localhost:3000/graphql (standard graphql endpoint)

## Sample Queries
```graphql
{
	# Query
	users {
		id, name
	},
	# Mutation
	createUser(name: "dan")
}
```
