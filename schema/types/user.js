const graphql = require('graphql');

const GraphQLObjectType = graphql.GraphQLObjectType;
const GraphQLString = graphql.GraphQLString;
const GraphQLInt = graphql.GraphQLInt;

module.exports = new GraphQLObjectType({
  name: 'User',
  description: 'user description',
  fields: () => ({
    f_name: {
      type: GraphQLString,
       resolve: (user) => user.f_name,
    },
    l_name: {
      type: GraphQLString,
      resolve: (user) => user.l_name,
    },
    age: {
      type: GraphQLInt,
      resolve: (user) => user.age,
    }
  })
});
