const graphql = require('graphql');

const GraphQLObjectType = graphql.GraphQLObjectType;
const GraphQLString = graphql.GraphQLString;

module.exports = new GraphQLObjectType({
  name: 'User',
  description: 'user description',
  fields: () => ({
    f_name: {
      type: GraphQLString,
      resolve: user => user.f_name,
    },
    l_name: {
      type: GraphQLString,
      resolve: user => user.l_name,
    },
    user_pic: {
      type: GraphQLString,
      resolve: user => user.user_pic,
    },
    phone_number: {
      type: GraphQLString,
      resolve: user => user.phone_number,
    },
    email: {
      type: GraphQLString,
      resolve: user => user.email,
    },
  }),
});
