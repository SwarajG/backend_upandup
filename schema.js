const graphql = require('graphql');
const GraphQLSchema = graphql.GraphQLSchema;
const GraphQLObjectType = graphql.GraphQLObjectType;
const GraphQLString = graphql.GraphQLString;
const GraphQLInt = graphql.GraphQLInt;
const GraphQLList = graphql.GraphQLList;
const GraphQLInputObjectType = graphql.GraphQLInputObjectType;

const model = require('./model');

const PersonType = new GraphQLObjectType({
  name: 'Person',
  description: 'description for the person',
  fields: () => ({
    name: {
      type: GraphQLString,
       resolve: (person) => person.name,
    },
    surname: {
      type: GraphQLString,
      resolve: (person) => person.surname,
    },
    age: {
      type: GraphQLInt,
      resolve: (person) => person.age,
    }
  })
});

const QueryType = new GraphQLObjectType({
  name: 'Query',
  description: 'Default query',
  fields: () => ({
    users: {
      type: new GraphQLList(PersonType),
      resolve: () => model.getAllUsers().then((response) => response),
    },
    user: {
      type: PersonType,
      resolve: () => model.getAllUsers().then((response) => response[0]),
    }
  })
});

const UserInputType = new GraphQLInputObjectType({
  name: 'UserInputType',
  fields: () => ({
    name: { type: GraphQLString },
    surname: { type: GraphQLString },
    age: { type: GraphQLInt }
  })
});

const MutationType = new GraphQLObjectType({
  name: 'UserMutation',
  description: 'This will be the user\'s mutation',
  fields: () => ({
    createUser: {
      type: PersonType,
      description: 'This will create the new user',
      args: {
        user: { type: UserInputType }
      },
      resolve: (value, { user }) => model.createNewUser(user)
    }
  }),
});

module.exports = new GraphQLSchema({
  query: QueryType,
  mutation: MutationType,
})
