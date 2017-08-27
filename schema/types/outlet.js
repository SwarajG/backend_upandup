const graphql = require('graphql');

const GraphQLObjectType = graphql.GraphQLObjectType;
const GraphQLString = graphql.GraphQLString;

module.exports = new GraphQLObjectType({
  name: 'outlet',
  description: 'Description for the outlet',
  fields: () => ({
    name: {
      type: GraphQLString,
      resolve: outlet => outlet.name,
    },
    description: {
      type: GraphQLString,
      resolve: outlet => outlet.description,
    },
    locality: {
      type: GraphQLString,
      resolve: outlet => outlet.locality,
    },
    address: {
      type: GraphQLString,
      resolve: outlet => outlet.address,
    },
  }),
});
