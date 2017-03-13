
  var mongoose = require('mongoose');
  var Schema = mongoose.Schema;

<<<<<<< HEAD
  var Owner = require('./owner');

=======

  var Owner = require('./owner');


>>>>>>> master
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
<<<<<<< HEAD

  })
=======
  });
>>>>>>> master

  var Dog = mongoose.model('Dog', DogSchema);
  module.exports = Dog;
