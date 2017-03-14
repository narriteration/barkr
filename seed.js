var db = require('./models');

var dogsList = [
  {
    dogName:"Sparky",
    breed: "Labrador",
    isBig:true,
    isSocialized:true,
    human:"Jim Kelly",
    imgDog: "http://cdn.mysitemyway.com/etc-mysitemyway/icons/legacy-previews/icons-256/3d-transparent-glass-icons-culture/022063-3d-transparent-glass-icon-culture-book3-open.png"
  },
  {
    dogName:"Rex",
    breed: "Pitbull",
    isBig:false,
    isSocialized:false,
    human:"Jenny Smith",
    imgDog: "http://cdn.mysitemyway.com/etc-mysitemyway/icons/legacy-previews/icons-256/3d-transparent-glass-icons-culture/022063-3d-transparent-glass-icon-culture-book3-open.png"
  },
  {
    dogName:"Charlie",
    breed: "Golden Retriever",
    isBig:true,
    isSocialized:true,
    human:"Jenny Smith",
    imgDog: "http://cdn.mysitemyway.com/etc-mysitemyway/icons/legacy-previews/icons-256/3d-transparent-glass-icons-culture/022063-3d-transparent-glass-icon-culture-book3-open.png"
  }

];

var ownersList = [
  {
    ownerName:"Jenny Smith",
    gender:"Female",
    age:45,
    email:"jenny@yahoo.com",
    imgOwner: "https://www.saama.com/wp-content/uploads/2015/09/headshot_Surdak.png"
  },
  {
    ownerName:"Jim Kelly",
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

    db.Dog.remove({}, function (err, dogs){
      console.log("removed all dogs");
      dogsList.forEach(function(dogData){
        var dog = new db.Dog({
          dogName: dogData.dogName,
          breed: dogData.breed,
          isBig: dogData.isBig,
          isSocialized: dogData.isSocialized,
          imgDog: dogData.imgDog,
        });
        console.log("owner found is HEREEE ", dogData.human);
        db.Owner.findOne({ownerName: dogData.human}, function(err, foundOwner){
          console.log("found owner: " + foundOwner.ownerName +" for dog: " + dogData.dogName);
          if(err){
          return  console.log("error finding owner "+err);
          }
          dog.human = foundOwner;
          console.log('LOOKK!!!!!!' + dog.human);
          dog.save(function(err,savedDog){
            if(err){
              return console.log("err saving " + err);
            }
            console.log("saved owner: " + dog.human + " with dog: " + dog );
          });
        });
      });
    });

  });
});
