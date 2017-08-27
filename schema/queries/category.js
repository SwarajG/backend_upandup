const CategoryType = require('../types/category');
const model = require('../../model/category');
const graphql = require('graphql');

const GraphQLList = graphql.GraphQLList;
const GraphQLString = graphql.GraphQLString;

module.exports = {
  getCategoryByCategoryId: {
    type: CategoryType,
    args: {
      categoryId: {
        name: 'categoryId',
        type: GraphQLString,
      },
    },
    resolve: (_, params) => model
      .getCategoryByCategoryId(params.categoryId).then(response => response),
  },
  getAllCategories: {
    type: new GraphQLList(CategoryType),
    resolve: () => model.getAllCategories().then(response => response),
  },
};
