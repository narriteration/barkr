var db = require('./models');

var dogsList = [
  {
    dogName:"Sparky",
    breed: "Labrador",
    owner:"Jim Kelly",
    isBig:true,
    isSocialized:true,
    imgDog: "http://cdn.mysitemyway.com/etc-mysitemyway/icons/legacy-previews/icons-256/3d-transparent-glass-icons-culture/022063-3d-transparent-glass-icon-culture-book3-open.png"
  },
  {
    dogName:"Rex",
    breed: "Pitbull",
    owner:"Jenny Smith",
    isBig:false,
    isSocialized:false,
    imgDog: "http://cdn.mysitemyway.com/etc-mysitemyway/icons/legacy-previews/icons-256/3d-transparent-glass-icons-culture/022063-3d-transparent-glass-icon-culture-book3-open.png"
  }
];

var ownersList = [
  {
    ownername:"Jenny Smith",
    gender:"Female",
    age:45,
    email:"jenny@yahoo.com",
    imgOwner: "https://www.saama.com/wp-content/uploads/2015/09/headshot_Surdak.png"
  },
  {
    ownername:"Jim Kelly",
    gender:"Male",
    age:32,
    email:"Jim@google.com",
    imgOwner: "https://www.saama.com/wp-content/uploads/2015/09/headshot_Surdak.png"
  }
];

db.Owner.remove({}, function(err, owners){
  console.log("removed owners "+ owners);
  db.Owner.create(ownersList, function (err, owners){
    if(err){
      return console.log("error creating" +err);
    }
    console.log("created "  +ownersList.length + " owners: " + owners);
  });
});
