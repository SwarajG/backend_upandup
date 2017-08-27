const graphql = require('graphql');

const GraphQLNonNull = graphql.GraphQLNonNull;
const GraphQLString = graphql.GraphQLString;
const GraphQLInputObjectType = graphql.GraphQLInputObjectType;

const model = require('../../model/outlet');
const OutletType = require('../types/outlet');

const OutletInputType = new GraphQLInputObjectType({
  name: 'OutletInputType',
  fields: () => ({
    outletId: {
      type: new GraphQLNonNull(GraphQLString),
    },
    name: {
      type: new GraphQLNonNull(GraphQLString),
    },
    description: {
      type: GraphQLString,
    },
    locality: {
      type: GraphQLString,
    },
    address: {
      type: GraphQLString,
    },
  }),
});

module.exports = {
  createOutlet: {
    type: OutletType,
    description: 'Create the new outlet',
    args: {
      outlet: { type: OutletInputType },
    },
    resolve: (value, { outlet }) => model.create(outlet),
  },
  updateOutlet: {
    type: OutletType,
    description: 'update current outlet',
    args: {
      outlet: { type: OutletInputType },
    },
    resolve: (value, { outlet }) => model.update(outlet.outletId, outlet),
  },
  deleteCategory: {
    type: OutletType,
    description: 'Delete the outlet',
    args: {
      outletId: {
        type: new GraphQLNonNull(GraphQLString),
      },
    },
    resolve: (value, { outletId }) => model.delete(outletId),
  },
};
