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

//Updating owner at /api/owners/:ownerId
function update(req, res){
  var ownerId = req.params.ownerId;
  db.Owner.findById(ownerId, function (err, found){
    console.log('owner: ' + found);
    found.ownerName = req.body.ownerName;
    found.gender = req.body.gender;
    found.age = req.body.age;
    found.email = req.body.email;
    found.imgOwner = req.body.imgOwner;
    found.save(function(err, person){
      if(err){
        console.log(err+"erororr");
      }
      console.log("yay!!" + person);
      res.json(person);
    });
  });
};

module.exports = {
  destroy:destroy,
  update:update
};