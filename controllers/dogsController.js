var db = require('../models');

// GET /api/dogs
function index(req, res) {
  db.Dog.find({})
  .populate('human')
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
  .populate('human')
  .exec(function(err,foundDog){
    if(err){
      console.log("error geting by id"+err);
    }
    res.json(foundDog);
  });
};

// POST /api/dogs
function create(req, res) {
  var newDog = new db.Dog({
    dogName:req.body.dogName,
    breed: req.body.breed,
    isBig: req.body.isBig,
    isSocialized: req.body.isSocialized,
    imgDog: req.body.imgDog
  });
  db.Owner.findOne({ownerName:req.body.human}, function(err, human){
    newDog.human = human;
    newDog.save(function(err,dog){
      if(err){
        console.log("error saving " + err);
      }
      if (human === null){
        db.Owner.create({ownerName:req.body.ownerName, gender:req.body.gender, age:req.body.age, email:req.body.email, imgOwner:req.body.imgOwner}, function(err,newOwner){
          createDogAndOwner(newDog, newOwner, res)
        });
      } else {
        createDogAndOwner(newDog, human, res);
        console.log(human);
      }
    });
  });
  function createDogAndOwner(dog,owner,res){
    dog.human = owner;
    dog.save(function(err, dog){
      if (err){
        return console.log("error saving" + err);
      }
      console.log("create a new dog! " + dog);
      res.json(dog);
    });
  };
};

//PUT /api/dogs/:dogId
function update(req, res){
  var dogId = req.params.dogId;
  db.Dog.findById(dogId, function (err, foundIt){
    console.log("this that dog: " + foundIt);
    foundIt.dogName = req.body.dogName;
    foundIt.breed = req.body.breed;
    foundIt.isBig = req.body.isBig;
    foundIt.isSocialized = req.body.isSocialized;
    foundIt.imgDog = req.body.imgDog;
    db.Owner.findOne({ownerName:req.body.human}, function(err, human){
        if (human === null){
          console.log('creating new person' +human);
          console.log("name isssss" +req.body.human);
        db.Owner.create({ownerName:req.body.ownerName, gender:req.body.gender, age:req.body.age, email:req.body.email, imgOwner:req.body.imgOwner}, function(err,newPerson){
          updateDogAndOwner(foundIt, newPerson, res);
        // foundIt.human = newThang;
        // foundIt.save(function(err,doggy){
        //   res.json(foundIt);
          console.log(newPerson);
        });
      } else{
        updateDogAndOwner(foundIt, human, res);
        // foundIt.human = human;
        // foundIt.save(function(err,doggy){
        //   res.json(foundIt);
          console.log(human+"DIS DAT PERSON");
        }

        function updateDogAndOwner(dog, person, res){
          dog.human = person;
          dog.save(function(err,doggy){
            if(err){
              console.log(err+"errororrr");
            }
            console.log("good job " + person);
            res.json(dog);
          });
        };

  });
});
};


//DELETE /api/dogs/:dogId
function destroy(req, res){
  var dogId = req.params.dogId;
  db.Dog.findOneAndRemove({_id:dogId},function(err,deleteDog){
    if(err){
      console.log("error deleting" +err);
    } res.json(deleteDog);
  });
};

module.exports = {
  index:index,
  create:create,
  show:show,
  update:update,
  destroy:destroy,
};
