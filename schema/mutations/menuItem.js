const graphql = require('graphql');

const GraphQLNonNull = graphql.GraphQLNonNull;
const GraphQLString = graphql.GraphQLString;
const GraphQLInputObjectType = graphql.GraphQLInputObjectType;

const model = require('../../model/menuItem');
const MenuItemType = require('../types/menuItem');

const MenuItemInputType = new GraphQLInputObjectType({
  name: 'MenuItemInputType',
  fields: () => ({
    categoryId: {
      type: new GraphQLNonNull(GraphQLString),
    },
    name: {
      type: new GraphQLNonNull(GraphQLString),
    },
    price: {
      type: new GraphQLNonNull(GraphQLString),
    },
    description: {
      type: GraphQLString,
    },
    picture: {
      type: GraphQLString,
    },
    status: {
      type: GraphQLString,
    },
  }),
});

module.exports = {
  createMenuItem: {
    type: MenuItemType,
    description: 'Create the new menuItem',
    args: {
      menuItem: { type: MenuItemInputType },
    },
    resolve: (value, { menuItem }) => model.create(menuItem),
  },
  updateMenuItem: {
    type: MenuItemType,
    description: 'update current category',
    args: {
      category: { type: MenuItemInputType },
    },
    resolve: (value, { menuItem }) => model.update(menuItem.menuItemId, menuItem),
  },
  deleteMenuItem: {
    type: MenuItemType,
    description: 'Delete the menuItem',
    args: {
      categoryId: {
        type: new GraphQLNonNull(GraphQLString),
      },
    },
    resolve: (value, { menuItemId }) => model.delete(menuItemId),
  },
};
