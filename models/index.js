var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/book-app");

//grab all of models here for the DB
module.exports.Dog = require('./dog.js')
module.exports.Owner = require('./owner.js')
