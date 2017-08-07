const UserType = require('../types/user');
const model = require('../../model/user');
const graphql = require('graphql');

const GraphQLList = graphql.GraphQLList;

module.exports = {
  getAllUsers: {
    type: new GraphQLList(UserType),
    resolve: () => model.getAllUsers().then(response => response),
  },
};
