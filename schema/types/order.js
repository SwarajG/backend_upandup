const graphql = require('graphql');

const menuItem = require('./menuItem');

const GraphQLObjectType = graphql.GraphQLObjectType;
const GraphQLList = graphql.GraphQLList;
const GraphQLString = graphql.GraphQLString;

module.exports = new GraphQLObjectType({
  name: 'order',
  description: 'Description about the orders',
  fields: () => ({
    time: {
      type: GraphQLString,
      resolve: order => order.time,
    },
    userId: {
      type: GraphQLString,
      resolve: order => order.userId,
    },
    addressId: {
      type: GraphQLString,
      resolve: order => order.addressId,
    },
    orderStatus: {
      type: GraphQLString,
      resolve: order => order.orderStatus,
    },
    itemList: {
      type: new GraphQLList(menuItem),
      resolve: order => order.itemList,
    },
  }),
});
