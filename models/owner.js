var mongoose = require('mongoose'),
    bcrypt = require('bcrypt');

var Schema = mongoose.Schema;
var OwnerSchema = new Schema({
  ownerName: String,
  gender: String,
  age: Number,
  imgOwner: String,
  email: String,
  passwordDigest: String
})

OwnerSchema.statics.createSecure = function (newOwner, cb) {
  var OwnerModel = this;
  // hash password user enters at sign up
  bcrypt.genSalt(function (err, salt) {
  console.log('salt: ', salt);  // changes every time
      bcrypt.hash(newOwner.password, salt, function (err, hash) {
          // create the new user (save to db) with hashed password
          OwnerModel.create({
              email: newOwner.email,
              passwordDigest: hash,
              ownerName:newOwner.ownerName,
              gender:newOwner.gender,
              age:newOwner.age,
              imgOwner:newOwner.imgOwner
          }, cb);
      });
  });
};





var Owner = mongoose.model('Owner', OwnerSchema);

module.exports = Owner;
