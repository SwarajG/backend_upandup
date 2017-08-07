const UserType = require('../types/user');
const model = require('../../model/user');
const graphql = require('graphql');

const GraphQLList = graphql.GraphQLList;
const GraphQLString = graphql.GraphQLString;
const GraphQLNonNull = graphql.GraphQLNonNull;

module.exports = {
  getAllUsers: {
    type: new GraphQLList(UserType),
    resolve: () => model.getAllUsers().then(response => response),
  },
  getUserByUID: {
    type: UserType,
    args: {
      uid: {
        name: 'uid',
        type: new GraphQLNonNull(GraphQLString),
      },
    },
    resolve: (_, params) => model.getUserByUID(params.uid).then(response => response),
  },
};
