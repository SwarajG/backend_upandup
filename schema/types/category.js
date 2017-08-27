const graphql = require('graphql');

const GraphQLObjectType = graphql.GraphQLObjectType;
const GraphQLString = graphql.GraphQLString;

module.exports = new GraphQLObjectType({
  name: 'category',
  description: '',
  fields: () => ({
    name: {
      type: GraphQLString,
      resolve: category => category.name,
    },
    description: {
      type: GraphQLString,
      resolve: category => category.description,
    },
  }),
});
