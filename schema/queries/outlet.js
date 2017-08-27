const OutletType = require('../types/outlet');
const model = require('../../model/outlet');
const graphql = require('graphql');

const GraphQLList = graphql.GraphQLList;
const GraphQLString = graphql.GraphQLString;

module.exports = {
  getOutletByOutletId: {
    type: OutletType,
    args: {
      outletId: {
        name: 'outletId',
        type: GraphQLString,
      },
    },
    resolve: (_, params) => model
      .getOutletByOutletId(params.outletId).then(response => response),
  },
  getAllOutlets: {
    type: new GraphQLList(OutletType),
    resolve: () => model.getAllOutlets().then(response => response),
  },
};
