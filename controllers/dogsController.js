var db = require('../models');

// GET /api/dogs
function index(req, res) {
  db.Dog.find({})
  .populate('owner')
  .exec(function(err,dogs){
    if(err){
      console.log("error getting dogs"+ err);
    }
    res.json(dogs);
  });
};

// GET /api/dogs/:dogId
function show(req,res) {
  var id = req.params.dogId;
  db.Dog.findById(id)
  .populate('owner')
  .exec(function(err,foundDog){
    if(err){
      console.log("error geting by id"+err);
    }
    res.json(foundDog);
  });
};

// POST /api/dogs
function create(req, res) {
  var newDog = {
    dogName:req.body.dogName,
    owner: req.body.owner,
    breed: req.body.breed,
    isBig: req.body.isBig,
    isSocialized: req.body.isSocialized,
    imgDog: req.body.imgDog
  }
  db.Owner.findOne({ownerName:req.body.owner}, function(err, owner){
    newDog.owner = owner;
    newDog.save(function(err,dog){
      if(err){
        console.log("error saving " + err);
      }
      if (owner === null){
        db.Owner.create({ownerName:req.body.ownerName, gender:req.body.gender, age:req.body.age, email:req.body.email, imgOwner:req.body.imgOwner}, function(err,newOwner){
          createDogAndOwner(newDog, newOwner, res)
        });
      } else {
        createDogAndOwner(newDog, owner, res);
      }
    });
  });
  function createDogAndOwner(dog,owner,res){
    dog.owner = owner;
    dog.save(function(err, dog){
      if (err){
        return console.log("error saving" + err);
      }
      console.log("create a new dog! " + dog);
    });
  };
};

//DELETE /api/dogs/:dogId
function destroy(req, res){
  var dogId = req.params.dogId;
  db.Dog.findOneAndRemove({dogId},function(err,deleteDog){
    if(err){
      console.log("error deleting" +err);
    } res.json(deleteDog;)
  });
};

module.exports = {
  index:index,
  create:create,
  show:show,
  destroy:destroy,
//  update:update,
};
