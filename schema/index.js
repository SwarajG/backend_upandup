const graphql = require('graphql');

const GraphQLSchema = graphql.GraphQLSchema;
const GraphQLObjectType = graphql.GraphQLObjectType;

const mutations = require('./mutations');
const queries = require('./queries');

const QueryType = new GraphQLObjectType({
  name: 'Query',
  description: 'List of all the queries',
  fields: () => ({
    users: queries.user.getAllUsers,
    user: queries.user.getUserByUID,
    address: queries.address.getAddressByAddressId,
    category: queries.category.getCategoryByCategoryId,
    outlet: queries.outlet.getOutletByOutletId,
    menuItem: queries.menuItem.getMenuItemByMenuItemId,
    order: queries.order.getOrderByOrderId,
  }),
});

const MutationType = new GraphQLObjectType({
  name: 'Mutation',
  description: 'List of all the mutations',
  fields: () => ({
    createUser: mutations.user.createUser,
    deleteUser: mutations.user.deleteUser,
  }),
});

module.exports = new GraphQLSchema({
  query: QueryType,
  mutation: MutationType,
});
