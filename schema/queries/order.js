const OrderType = require('../types/order');
const model = require('../../model/order');
const graphql = require('graphql');

const GraphQLList = graphql.GraphQLList;
const GraphQLString = graphql.GraphQLString;

module.exports = {
  getOrderByOrderId: {
    type: OrderType,
    args: {
      orderId: {
        name: 'orderId',
        type: GraphQLString,
      },
    },
    resolve: (_, params) => model
      .getOrderByOrderId(params.orderId).then(response => response),
  },
  getOrderByAddressId: {
    type: OrderType,
    args: {
      addressId: {
        name: 'addressId',
        type: GraphQLString,
      },
    },
    resolve: (_, params) => model
      .getOrderByAddressId(params.addressId).then(response => response),
  },
  getOrderByUid: {
    type: OrderType,
    args: {
      uid: {
        name: 'uid',
        type: GraphQLString,
      },
    },
    resolve: (_, params) => model
      .getOrderByUid(params.uid).then(response => response),
  },
  getAllOrders: {
    type: new GraphQLList(OrderType),
    resolve: () => model.getAllOrders().then(response => response),
  },
};
