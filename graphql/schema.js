const graphql = require('graphql');
const PaintingType = require('./paintingType');
const models = require('./../models');

const {
		GraphQLObjectType,
		GraphQLString,
		GraphQLSchema
} = graphql;

const RootQuery = new GraphQLObjectType({
		name: 'RootQueryType',
		fields: {
				painting: {
						type: PaintingType,
						args: { id: { type: GraphQLString } },
						resolve(parent, args){
								return models.Painting.findById(args.id)
						}
				}
		}
});

module.exports = new GraphQLSchema({
		query: RootQuery
});