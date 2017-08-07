const graphql = require('graphql');

const GraphQLNonNull = graphql.GraphQLNonNull;
const GraphQLString = graphql.GraphQLString;
const GraphQLBoolean = graphql.GraphQLBoolean;
const GraphQLID = graphql.GraphQLID;
const GraphQLInputObjectType = graphql.GraphQLInputObjectType;

const model = require('../../model/user');
const UserType = require('../types/user');

const UserInputType = new GraphQLInputObjectType({
  name: 'UserInputType',
  fields: () => ({
    uid: {
      type: GraphQLID,
    },
    f_name: {
      type: new GraphQLNonNull(GraphQLString),
    },
    l_name: {
      type: new GraphQLNonNull(GraphQLString),
    },
    user_pic: {
      type: new GraphQLNonNull(GraphQLString),
    },
    password: {
      type: new GraphQLNonNull(GraphQLString),
    },
    is_phone_varified: {
      type: new GraphQLNonNull(GraphQLBoolean),
    },
    phone_number: {
      type: new GraphQLNonNull(GraphQLString),
    },
    email: {
      type: new GraphQLNonNull(GraphQLString),
    },
  }),
});

module.exports = {
  createUser: {
    type: UserType,
    description: 'Create the new user',
    args: {
      user: { type: UserInputType },
    },
    resolve: (value, { user }) => model.createNewUser(user),
  },
};
