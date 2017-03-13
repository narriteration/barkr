var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

  var Owner = require('./owner');


  var OwnerSchema = new Schema({
    name:String,
    isSingle: Boolean,
    gender:String,
    age:Number,
    imgUrl:String,
    email:String
  })

  var Owner = mongoose.model('Owner', OwnerSchema);

  module.exports = Owner;
