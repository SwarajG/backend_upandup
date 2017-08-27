const AddressType = require('../types/address');
const model = require('../../model/address');
const graphql = require('graphql');

const GraphQLList = graphql.GraphQLList;
const GraphQLString = graphql.GraphQLString;

module.exports = {
  getAddressByAddressId: {
    type: AddressType,
    args: {
      addressId: {
        name: 'addressId',
        type: GraphQLString,
      },
    },
    resolve: (_, params) => model
      .getAddressByAddressId(params.addressId).then(response => response),
  },
  getAddressByUID: {
    type: AddressType,
    args: {
      uid: {
        name: 'uid',
        type: GraphQLString,
      },
    },
    resolve: (_, params) => model.getAddressByUID(params.uid).then(response => response),
  },
  getAllAddresses: {
    type: new GraphQLList(AddressType),
    resolve: () => model.getAllAddresses().then(response => response),
  },
};
