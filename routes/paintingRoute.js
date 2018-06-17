
const Joi = require('joi');
const models = require('../models');

module.exports = [{
  path: '/api/v1/paintings',
  method: 'GET',
  config: {
    description: 'Get all the paintings',
    tags: ['api', 'v1', 'painting']
  },
  handler: function (request, reply) {
    return models.Painting.find({});
  },
}, {
  path: '/api/v1/paintings',
  method: 'POST',
  config: {
    description: 'Get a specific painting by ID.',
    tags: ['api', 'v1', 'painting'],
    notes: ['create a painting'],
    plugins: {
      'hapi-swagger': {
        payloadType: 'form'
      }
    },
    validate: {
      payload: {
        name: Joi.string()
          .required()
          .description('the name of painting'),

        url: Joi.string()
          .required()
          .description('the url of painting'),

        techniques: Joi.array()
          .required()
          .default([])
          .description('the array techniques of painting'),
      }
    },
  },
  handler: function (req, reply) {
    const { name, url, techniques } = req.payload;
    const painting = new models.Painting({
      name,
      url,
      techniques,
    });
    return painting.save();
  },
}]