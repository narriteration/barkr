
  var mongoose = require('mongoose');
  var Schema = mongoose.Schema;

  var Owner = require('./owner');

  var DogSchema = new Schema({
    dogName: String,
    breed: String,
    owner:{
      type:Schema.Types.ObjectId,
      ref: "Owner"
    },
    isBig: Boolean,
    isSocialized: Boolean,
    imgDog:String

  })

  var Dog = mongoose.model('Dog', DogSchema);
  module.exports = Dog;
