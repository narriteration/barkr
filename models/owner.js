var mongoose = require('mongoose'),
  Schema = mongoose.Schema;





  var OwnerSchema = new Schema({
    ownerName:String,
    isSingle: Boolean,
    gender:String,
    age:Number,
    imgOwner:String,
    email:String
  });

  var Owner = mongoose.model('Owner', OwnerSchema);

  module.exports = Owner;
