const MenuItemType = require('../types/menuItem');
const model = require('../../model/menuItem');
const graphql = require('graphql');

const GraphQLList = graphql.GraphQLList;
const GraphQLString = graphql.GraphQLString;

module.exports = {
  getMenuItemByMenuItemId: {
    type: MenuItemType,
    args: {
      menuItemId: {
        name: 'menuItemId',
        type: GraphQLString,
      },
    },
    resolve: (_, params) => model
      .getMenuItemByMenuItemId(params.menuItemId).then(response => response),
  },
  getMenuItemByCategoryId: {
    type: MenuItemType,
    args: {
      categoryId: {
        name: 'categoryId',
        type: GraphQLString,
      },
    },
    resolve: (_, params) => model
      .getMenuItemByCategoryId(params.categoryId).then(response => response),
  },
  getAllMenuItems: {
    type: new GraphQLList(MenuItemType),
    resolve: () => model.getAllMenuItems().then(response => response),
  },
};
