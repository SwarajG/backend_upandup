const graphql = require('graphql');

const GraphQLObjectType = graphql.GraphQLObjectType;
const GraphQLString = graphql.GraphQLString;
const GraphQLNonNull = graphql.GraphQLNonNull;

module.exports = new GraphQLObjectType({
  name: 'User',
  description: 'user description',
  fields: () => ({
    f_name: {
      type: new GraphQLNonNull(GraphQLString),
      resolve: user => user.f_name,
    },
    l_name: {
      type: new GraphQLNonNull(GraphQLString),
      resolve: user => user.l_name,
    },
    user_pic: {
      type: new GraphQLNonNull(GraphQLString),
      resolve: user => user.user_pic,
    },
    phone_number: {
      type: new GraphQLNonNull(GraphQLString),
      resolve: user => user.phone_number,
    },
    email: {
      type: new GraphQLNonNull(GraphQLString),
      resolve: user => user.email,
    },
  }),
});
