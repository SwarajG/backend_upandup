const graphql = require('graphql');

const GraphQLObjectType = graphql.GraphQLObjectType;
const GraphQLString = graphql.GraphQLString;
const GraphQLInt = graphql.GraphQLInt;

module.exports = new GraphQLObjectType({
  name: 'menuItem',
  description: 'Description for the menuItem',
  fields: () => ({
    name: {
      type: GraphQLString,
      resolve: menuItem => menuItem.name,
    },
    price: {
      type: GraphQLInt,
      resolve: menuItem => menuItem.price,
    },
    picture: {
      type: GraphQLString,
      resolve: menuItem => menuItem.picture,
    },
    description: {
      type: GraphQLString,
      resolve: menuItem => menuItem.description,
    },
    status: {
      type: GraphQLString,
      resolve: menuItem => menuItem.status,
    },
    categoryId: {
      type: GraphQLString,
      resolve: menuItem => menuItem.categoryId,
    },
  }),
});
