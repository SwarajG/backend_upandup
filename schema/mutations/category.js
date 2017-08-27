const graphql = require('graphql');

const GraphQLNonNull = graphql.GraphQLNonNull;
const GraphQLString = graphql.GraphQLString;
const GraphQLInputObjectType = graphql.GraphQLInputObjectType;

const model = require('../../model/category');
const CategoryType = require('../types/category');

const CategoryInputType = new GraphQLInputObjectType({
  name: 'CategoryInputType',
  fields: () => ({
    categoryId: {
      type: new GraphQLNonNull(GraphQLString),
    },
    name: {
      type: new GraphQLNonNull(GraphQLString),
    },
    description: {
      type: GraphQLString,
    },
  }),
});

module.exports = {
  createCategory: {
    type: CategoryType,
    description: 'Create the new category',
    args: {
      category: { type: CategoryInputType },
    },
    resolve: (value, { category }) => model.create(category),
  },
  updateCategory: {
    type: CategoryType,
    description: 'update current category',
    args: {
      category: { type: CategoryInputType },
    },
    resolve: (value, { category }) => model.update(category.categoryId, category),
  },
  deleteCategory: {
    type: CategoryType,
    description: 'Delete the category',
    args: {
      categoryId: {
        type: new GraphQLNonNull(GraphQLString),
      },
    },
    resolve: (value, { categoryId }) => model.delete(categoryId),
  },
};
