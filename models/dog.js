
  var mongoose = require('mongoose');
  var Schema = mongoose.Schema;

  var Dog = require('./dog');

  var DogSchema = new Schema({
    dogName: String,
    breed: String,
    owner:{
      type:Schema.Types.ObjectId,
      ref: "Owner"
    },
    isBig: Boolean,
    isSocialized: Boolean,
    imgUrl:String

  })

  var Dog = mongoose.model('Dog', DogSchema);
  module.exports = Dog;
