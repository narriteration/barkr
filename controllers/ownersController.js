var db = require('../models');

//DELETE /api/owners/:ownerId
function destroy(req, res){
  var ownerId = req.params.ownerId;
  db.Owner.findOneAndRemove({_id:ownerId},function(err,deleteOwner){
    if(err){
      console.log("error deleting" +err);
    } res.json(deleteOwner);
  });
};

//
function index(req, res){
  db.Owner.find({}, function (err, users){
    res.json(users);
  });
};

//POST /api/owners
function create(req, res){
  var newOwner = {
    ownerName: req.body.ownerName,
    gender: req.body.gender,
    age:req.body.age,
    imgOwner:req.body.imgOwner,
    email:req.body.email,
    password:req.body.password,
  };

  db.Owner.createSecure(newOwner, function handleNewOwner(err, succ){
    if (err){
      console.log("error saving" + err);
      alert("Oops, there was an error saving your profile: ", err);
    }
    console.log("saved " + succ.passwordDigest);
    res.json(succ);
    alert("Hooray! You successfully created your barkr profile!");

  });
}


function show(req, res){
  //var ownerId = req.params.ownerId;
  // find all dogs who have owner id under human attribute
  db.Dog.find({human: ownerId}, function(err, dogs){
    // if success, render a view with all dogs.
    res.send({dogs: dogs});
  });
}


//Updating owner at /api/owners/:ownerId
function update(req, res){
  var ownerId = req.params.ownerId;
  db.Owner.findById(ownerId, function (err, found){
    console.log('owner: ' + found);
    found.ownerName = req.body.ownerName;
    found.gender = req.body.gender;
    found.age = req.body.age;
    found.email = found.email;
    found.imgOwner = found.imgOwner;
    found.password = found.password;
    found.save(function(err, person){
      if(err){
        console.log("There was an error updating your profile: ", err);
      }
      console.log("Successfully updated profile: ", person);
      res.json(person);
      alert("Hooray! You successfully updated your barkr profile, " + found.ownerName);
    });
  });
};

// Export all modules
module.exports = {
  destroy:destroy,
  update:update,
  create:create,
  index:index,
  show:show
};
