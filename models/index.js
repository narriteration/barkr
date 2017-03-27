  var mongoose = require('mongoose');
  mongoose.Promise = global.Promise;

  // mongoose.connect(process.env.mongolab-slippery-43458 || "mongodb://localhost/barkr")


  // mongoose.connect( process.env.MONGODB || "YOUR CURRENT LOCALHOST DB CONNECTION STRING HERE" );


  module.exports.Dog = require('./dog.js')
  module.exports.Owner = require('./owner.js')
