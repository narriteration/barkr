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
          console.log("HASHHHHSHSH: " + hash);
      });
  });
};

OwnerSchema.methods.checkPassword = function (password) {
  console.log("IN CHECK PASSWORD , CHECKING ", password)
  return bcrypt.compare(password, this.passwordDigest);
};

// authenticate user (when user logs in)
OwnerSchema.statics.authenticate = function (email, password, cb) {
  // find user by email entered at log in
  // remember `this` refers to the User for methods defined on UserSchema.statics
  this.findOne({email: email}, function (err, foundOwner) {
    if(err){return console.log("AUTHENTICATE ERR: ", err);}
    console.log("FOUND OWNER: ", foundOwner);

    // throw error if can't find user
    if (!foundOwner) {
      console.log('No user with email ' + email);
      cb("Error: no user found", null);  // better error structures are available, but a string is good enough for now
    // if we found a user, check if password is correct
  } else if (foundOwner.checkPassword(password)) {
      cb(null, foundOwner);
    } else {
      cb("Error: incorrect password", null);
    }
  });
};



var Owner = mongoose.model('Owner', OwnerSchema);

module.exports = Owner;
