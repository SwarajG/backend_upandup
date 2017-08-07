const graphql = require('graphql');
const GraphQLSchema = graphql.GraphQLSchema;
const GraphQLObjectType = graphql.GraphQLObjectType;
const GraphQLList = graphql.GraphQLList;

const mutations = require('./mutations');
const queries = require('./queries');

const QueryType = new GraphQLObjectType({
  name: 'Query',
  description: 'List of all the queries',
  fields: () => ({
    users: queries.user.getAllUsers,
  })
});

const MutationType = new GraphQLObjectType({
  name: 'Mutation',
  description: 'List of all the mutations',
  fields: () => ({
    createUser: mutations.user.createUser,
  })
});

module.exports = new GraphQLSchema({
  query: QueryType,
  mutation: MutationType,
})