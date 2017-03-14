var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Owner = require('./owner');

var DogSchema = new Schema({
    dogName: String,
    breed: String,
    human: [Owner.schema],
    isBig: Boolean,
    isSocialized: Boolean,
    imgDog: String

});

var Dog = mongoose.model('Dog', DogSchema);
module.exports = Dog;
