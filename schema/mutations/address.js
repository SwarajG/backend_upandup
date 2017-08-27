const graphql = require('graphql');

const GraphQLNonNull = graphql.GraphQLNonNull;
const GraphQLString = graphql.GraphQLString;
const GraphQLInt = graphql.GraphQLBoolean;
const GraphQLInputObjectType = graphql.GraphQLInputObjectType;

const model = require('../../model/address');
const AddressType = require('../types/address');

const AddressInputType = new GraphQLInputObjectType({
  name: 'AddressInputType',
  fields: () => ({
    userId: {
      type: new GraphQLNonNull(GraphQLString),
    },
    address: {
      type: new GraphQLNonNull(GraphQLString),
    },
    locality: {
      type: GraphQLString,
    },
    pincode: {
      type: GraphQLInt,
    },
  }),
});

module.exports = {
  create: {
    type: AddressType,
    description: 'Create the new address',
    args: {
      address: { type: AddressInputType },
    },
    resolve: (value, { address }) => model.create(address),
  },
  update: {
    type: AddressType,
    description: 'update the current address',
    args: {
      address: { type: AddressInputType },
    },
    resolve: (value, { address }) => model
      .updateAddressWithAddressId(address.addressId, address),
  },
  delete: {
    type: AddressType,
    description: 'Delete the address',
    args: {
      addressId: {
        type: new GraphQLNonNull(GraphQLString),
      },
    },
    resolve: (value, { addressId }) => model.delete(addressId),
  },
};
