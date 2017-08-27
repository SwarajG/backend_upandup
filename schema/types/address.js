const graphql = require('graphql');

const GraphQLObjectType = graphql.GraphQLObjectType;
const GraphQLString = graphql.GraphQLString;
const GraphQLInt = graphql.GraphQLInt;

module.exports = new GraphQLObjectType({
  name: 'address',
  description: '',
  fields: () => ({
    userId: {
      type: GraphQLString,
      resolve: address => address.userId,
    },
    address: {
      type: GraphQLString,
      resolve: address => address.name,
    },
    locality: {
      type: GraphQLString,
      resolve: address => address.locality,
    },
    pincode: {
      type: GraphQLInt,
      resolve: address => address.pincode,
    },
  }),
});
