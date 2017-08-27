const graphql = require('graphql');

const GraphQLNonNull = graphql.GraphQLNonNull;
const GraphQLString = graphql.GraphQLString;
const GraphQLList = graphql.GraphQLList;
const GraphQLInputObjectType = graphql.GraphQLInputObjectType;

const model = require('../../model/order');
const OrderType = require('../types/order');

const OrderInputType = new GraphQLInputObjectType({
  name: 'OrderInputType',
  fields: () => ({
    orderId: {
      type: new GraphQLNonNull(GraphQLString),
    },
    time: {
      type: GraphQLString,
    },
    uid: {
      type: GraphQLString,
    },
    addressId: {
      type: GraphQLString,
    },
    status: {
      type: GraphQLString,
    },
    itemList: {
      type: GraphQLList,
    },
  }),
});

module.exports = {
  createOrder: {
    type: OrderType,
    description: 'Create the new order',
    args: {
      order: { type: OrderInputType },
    },
    resolve: (value, { order }) => model.create(order),
  },
  updateOrder: {
    type: OrderType,
    description: 'update current order',
    args: {
      order: { type: OrderInputType },
    },
    resolve: (value, { order }) => model.update(order.orderId, order),
  },
  deleteOrder: {
    type: OrderType,
    description: 'Delete the order',
    args: {
      orderId: {
        type: new GraphQLNonNull(GraphQLString),
      },
    },
    resolve: (value, { orderId }) => model.delete(orderId),
  },
};
