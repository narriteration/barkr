  var mongoose = require('mongoose');
  mongoose.Promise = global.Promise;

  mongolab-slippery-43458
  mongoose.connect(process.env.mongolab-slippery-43458 || "mongodb://localhost/barkr")

  module.exports.Dog = require('./dog.js')
  module.exports.Owner = require('./owner.js')
