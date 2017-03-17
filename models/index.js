  var mongoose = require('mongoose');
  mongoose.Promise = global.Promise;
  mongoose.connect("mongodb://localhost/barkr");

  module.exports.Dog = require('./dog.js')
  module.exports.Owner = require('./owner.js')
