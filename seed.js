var db = require('./models');

var dogsList = [
  {
    dogName:"Carl",
    breed: "Labrador",
    isBig:true,
    isSocialized:true,
    human:"Carl Captinator",
    imgDog: "http://www.urdogs.com/wp-content/uploads/2016/06/Pomsky.jpg"
  },
  {
    dogName:"Lady Loveley",
    breed: "Pitbull",
    isBig:false,
    isSocialized:false,
    human:"Lamar Looperton",
    imgDog: "https://s-media-cache-ak0.pinimg.com/originals/d0/e0/bc/d0e0bcfd52abf2c93a6647c97dccee32.jpg"
  },
  {
    dogName:"Reggie",
    breed: "Golden Retriever",
    isBig:true,
    isSocialized:true,
    human:"Archy Posapolis",
    imgDog: "https://s-media-cache-ak0.pinimg.com/736x/1e/57/01/1e5701fcc5664b71ce6fdfb7bc619c91.jpg"
  },
  {
    dogName:"CoCo",
    breed: "Rotwieller",
    isBig:true,
    isSocialized:false,
    human:"Lamar Looperton",
    imgDog: "https://s-media-cache-ak0.pinimg.com/736x/82/b5/42/82b542ced27fcefc0935373e7c7db113.jpg"
  },
  {
    dogName:"Goofy",
    breed: "Poodle",
    isBig:true,
    isSocialized:true,
    human:"Chris Crunch",
    imgDog: "http://rcysl.com/wp-content/uploads/2017/01/Cute-Dogs-In-High-Quality.jpg"
  },
  {
    dogName:"Archy",
    breed: "Bermiese Mountain dog",
    isBig:true,
    isSocialized:false,
    human:"Jean Jammerly",
    imgDog: "https://s-media-cache-ak0.pinimg.com/736x/50/56/1a/50561ab9123eadcf9554dfe75ff61b08.jpg"
  },
  {
    dogName:"Tommy",
    breed: "Pug",
    isBig:true,
    isSocialized:true,
    human:"Archy Posapolis",
    imgDog: "https://s-media-cache-ak0.pinimg.com/originals/0a/35/bf/0a35bf594916465aa8375cc731dd7d06.jpg"
  },
  {
    dogName:"Goober",
    breed: "Mountain dog",
    isBig:false,
    isSocialized:false,
    human:"Ali Angel",
    imgDog: "http://www.reshareit.com/wp-content/uploads/Dogs-That-Look-Like-Teddy-Bears-3.jpg"
  },
  {
    dogName:"Fluffertonz",
    breed: "Squishy puppy",
    isBig:true,
    isSocialized:true,
    human:"Jean Jammerly",
    imgDog: "http://barkingroyalty.com/wp-content/uploads/2015/12/Beagle-puppy.jpg?x30644"
  },
  {
    dogName:"Flubber",
    breed: "Greyhound",
    isBig:false,
    isSocialized:true,
    human:"Justin Pineapple",
    imgDog: "https://i.ytimg.com/vi/opKg3fyqWt4/hqdefault.jpg"
  },
  {
    dogName:"Tiny Tim",
    breed: "Sheepdog",
    isBig:false,
    isSocialized:false,
    human:"Megan Monopoly",
    imgDog: "http://www.zastavki.com/pictures/originals/2013/Animals___Dogs_Surly_basset_hound_in_the_grass_049558_.jpg"
  },
  {
    dogName:"Meebles",
    breed: "Bermiese Mountain dog",
    isBig:true,
    isSocialized:true,
    human:"Justin Pineapple",
    imgDog: "http://iheartdogs.com/wp-content/uploads/2015/01/Screenshot-2015-01-17-16.15.29.png"
  }
];
var ownersList = [
  {
    ownerName:"Archy Posapolis",
    gender:"Male",
    age:45,
    email:"jenny@yahoo.com",
    imgOwner: "http://media.istockphoto.com/photos/happy-guy-picture-id488153142?k=6&m=488153142&s=170667a&w=0&h=FNm2sISSXsiHbepxFDIGl2M29tDOtWvZkDruq-d2nws="
  },
  {
    ownerName:"Chris Crunch",
    gender:"Male",
    age:32,
    email:"Chris@google.com",
    imgOwner: "https://static1.squarespace.com/static/5740bcafc2ea51b89d738739/5741f7749f7266bf7c1fce40/5741fa9720c647f663688121/1463941811125/Crowd+at+4th+Ave+Street+fair.jpg?format=1000w"
  },
  {
    ownerName:"Kashif Da Killa",
    gender:"Male",
    age:27,
    email:"Johny@google.com",
    imgOwner: "https://static.pexels.com/photos/101584/pexels-photo-101584.jpeg"
  },
  {
    ownerName:"Roman Russia",
    gender:"Male",
    age:12,
    email:"Roman@hotmail.com",
    imgOwner: "http://vb.elmstba.com/imgcache/almstba.com_1351889786_775.jpg"
  },
  {
    ownerName:"Lamar Looperton",
    gender:"Male",
    age:22,
    email:"Lamar@hotmail.com",
    imgOwner: "https://metrouk2.files.wordpress.com/2016/12/johnny-igaz.jpg"
  },
  {
    ownerName:"Carl Captinator",
    gender:"Male",
    age:34,
    email:"Carl@hotmail.com",
    imgOwner: "http://i2.cdn.cnn.com/cnnnext/dam/assets/130319142114-bruno-mars-mugshot-2010-vert-horizontal-large-gallery.jpg"
  },
  {
    ownerName:"Jean Jammerly",
    gender:"Female",
    age:32,
    email:"Tommy@hotmail.com",
    imgOwner: "https://s-media-cache-ak0.pinimg.com/736x/e6/45/38/e645388aea99ae36181e9decd7804ac0.jpg"
  },
  {
    ownerName:"Ali Angel",
    gender:"Male",
    age:22,
    email:"Ali@hotmail.com",
    imgOwner: "http://media02.hongkiat.com/people-who-changed-the-internet/Bram-Cohen-Bit-Torrent.jpg"
  },
  {
    ownerName:"Justin Pineapple",
    gender:"Male",
    age:34,
    email:"Tommy@hotmail.com",
    imgOwner: 'http://i2.cdn.cnn.com/cnnnext/dam/assets/130403131726-tattoos-gucci-mane-horizontal-large-gallery.jpg'
  },
  {
    ownerName:"Megan Monopoly",
    gender:"Female",
    age:42,
    email:"Megan@hotmail.com",
    imgOwner: "http://static1.businessinsider.com/image/50805aa1eab8ea9f4f000001-900-675/wizard-of-oz-judy-garland-dorothy.jpg"
  }
];

db.Owner.remove({}, function(err, owners){
  console.log("removed owners "+ owners);
  //creating new instances of owners from ownerslist
  db.Owner.create(ownersList, function (err, owners){
    if(err){
      return console.log("error creating" +err);
    }
    console.log("created "  +ownersList.length + " owners: " + owners);

    db.Dog.remove({}, function (err, dogs){
      console.log("removed all dogs");
      //going through each obj in dogsList and seting attr
      dogsList.forEach(function(dogData){
        var dog = new db.Dog({
          dogName: dogData.dogName,
          breed: dogData.breed,
          isBig: dogData.isBig,
          isSocialized: dogData.isSocialized,
          imgDog: dogData.imgDog,
        });
        console.log("owner found is HEREEE ", dogData.human);
        //pairing the owner to its dog by checking human of dog to owners name
        db.Owner.findOne({ownerName: dogData.human}, function(err, foundOwner){
          console.log("found owner: " + foundOwner.ownerName +" for dog: " + dogData.dogName);
          if(err){
          return  console.log("error finding owner "+err);
          }
          //putting entire owner object inside dog
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
