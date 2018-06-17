const { graphqlHapi, graphiqlHapi } = require('apollo-server-hapi');

const schema = require('../graphql/schema');

module.exports = [{
  plugin: graphiqlHapi,
  options: {
    path: '/graphiql',
    graphiqlOptions: {
      endpointURL: '/graphql'
    },
    route: {
      cors: true
    }
  }
}, {
  plugin: graphqlHapi,
  options: {
    path: '/graphql',
    graphqlOptions: {
      schema
    },
    route: {
      cors: true
    }
  }
}];