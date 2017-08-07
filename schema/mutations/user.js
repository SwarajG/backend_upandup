const graphql = require('graphql');
const GraphQLString = graphql.GraphQLString;
const GraphQLInputObjectType = graphql.GraphQLInputObjectType;

const model = require('../../model/user');
const UserType = require('../types/user');

const UserInputType = new GraphQLInputObjectType({
  name: 'UserInputType',
  fields: () => ({
    f_name: { type: GraphQLString },
    l_name: { type: GraphQLString },
  })
});

module.exports = {
  createUser: {
    type: UserType,
    description: 'Create the new user',
    args: {
      user: { type: UserInputType }
    },
    resolve: (value, { user }) => model.createNewUser(user)
  },
};
