const hapiRouter = require('hapi-router');

module.exports = {
  plugin: hapiRouter,
  options: {
    routes: './routes/*Route.js' // uses glob to include files
  },
};