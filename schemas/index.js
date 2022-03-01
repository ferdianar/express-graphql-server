const graphql = require("graphql")
const { GraphQLObjectType, GraphQLSchema, GraphQLInt, GraphQLString, GraphQLList } = graphql
const UsersData = require("../mock_users.json")
const UserTypes = require("./types/UserTypes")

const RootQuery = new GraphQLObjectType({
    name: "RootQueryTypes",
    fields: {
        GetAllUsers: {
            type: new GraphQLList(UserTypes),
            args: {
                id: {
                    type: GraphQLInt
                }
            },
            resolve(parent, args) {
                return UsersData
            }
        }
    }
})

const Mutation = new GraphQLObjectType({
    name: "Mutation",
    fields: {
        createUsers: {
            type: UserTypes,
            args: {
                firstName: {
                    type: GraphQLString
                },
                lastName: {
                    type: GraphQLString
                },
                email: {
                    type: GraphQLString
                },
                password: {
                    type: GraphQLString
                }
            },
            resolve(parent, args) {
                UsersData.push({ id: UsersData.length + 1, firstName: args.firstName, lastName: args.lastName, email: args.email, password: args.password })
                return args
            }
        }
    }
})

module.exports = new GraphQLSchema({ query: RootQuery, mutation: Mutation })