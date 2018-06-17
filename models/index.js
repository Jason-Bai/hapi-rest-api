const mongoose = require('mongoose');
const Painting = require('./painting');

const connect = () => {
  mongoose.connect('mongodb://localhost:27017/hapi-api');
  mongoose.connection.once('open', () => {
    console.log('connected to mongodb');
  });
};

// db
connect();

exports.Painting = Painting;