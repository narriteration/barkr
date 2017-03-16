var express = require('express'),
bodyParser = require('body-parser'),
mongoose = require('mongoose'),
session = require('express-session');

var app = express();
var db = require('./models');
var Owner = require('./models/owner');

var controllers = require('./controllers');

app.use(express.static('public'));

app.use(session({
  saveUninitialized: true,
  resave: true,
  secret: 'pinkRhinosAndBedbugs',
  cookie: { maxAge: 30 * 60 * 1000 } // 30 minute cookie lifespan (in milliseconds)
}));

app.set('view engine', 'ejs')

app.use(bodyParser.urlencoded({extended: true}))
app.set('view engine', 'ejs');
mongoose.createConnection('mongodb://localhost/barkr');


// GET routes

app.get('/', function(req, res) {
    res.sendFile('views/splashPage.html', {
        root: __dirname
    });
});
app.get('/api', controllers.api.index);

app.get('/api/dogs', controllers.dog.index);

app.get('/api/owners', controllers.owner.index);

//app.get('/api/owners/:ownerId', controllers.owner.show)

app.get('/api/owners', function(req, res){
  res.redirect('/sessions');
});
// // db.Owner.findOne({email: req.body.email}, function(err, foundOne){
// console.log("LOGIN : ", req.body.email);
// console.log("PASSWORD: ", req.body.password);
//     db.Owner.authenticate(req.body.email, req.body.password, function(err, owner){
//     console.log("sessions: " , owner);
//     req.session.ownerId = owner._id; // correct?
//     //res.json(owner);
//     res.redirect('/profile');


app.get('/api/dogs/:dogId', controllers.dog.show);

// app.get('/api/dogs/friendly', controllers.dog.showFriendly);
// SIGNUP ROUTE

app.get('/signup', function (req, res) {
  res.render('signup');
});

app.get('/login', function (req, res) {
    res.render('login');
});

// show user profile page
app.get('/profile', function (req, res) {
  // find the user currently logged in

  db.Owner.findOne({_id: req.session.ownerId}, function (err, currentOwner) {
    console.log("current user is: ",currentOwner);
    res.render('profile.ejs', {owner: currentOwner});
    // $('#profileDiv').append(currentOwner.age);
  });
});


//
// app.get('/dogs', function (req,res){
//   var id = req.session.ownerId;
//   db.Dog.find({human: id}, function(err, dogs){
//     res.render('profile.ejs', {dogs:dogs})
//  });
// });

// POST routes

app.post('/api/dogs', controllers.dog.create);

app.post('/api/owners', function create(req, res){
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
    }
    console.log("saved " + succ.passwordDigest);


    db.Owner.authenticate(newOwner.email, newOwner.password, function(err, owner){
      req.session.ownerId = owner._id; // correct?
      //res.json(owner);
      res.redirect('/profile');
      console.log("sessions: owner herehehrh!!!!!!!!LOOK " , owner);
    });

  });
});



app.post('/sessions', function (req, res) {
    // db.Owner.findOne({email: req.body.email}, function(err, foundOne){
    console.log("LOGIN : ", req.body.email);
    console.log("PASSWORD: ", req.body.password);
        db.Owner.authenticate(req.body.email, req.body.password, function(err, owner){
        req.session.ownerId = owner._id; // correct?
        //res.json(owner);
        res.redirect('/profile');
        console.log("sessions: OOOK HWRERE!!!! " , owner);
      });
});



// DELETE routes

app.delete('/api/dogs/:dogId', controllers.dog.destroy);

app.delete('/api/owners/:ownerId', controllers.owner.destroy);

// PUT  routes

app.put('/api/dogs/:dogId', controllers.dog.update);

app.put('/api/owners/:ownerId', controllers.owner.update);


// Sign up route - creates a new user with a secure password
app.post('/owner', controllers.owner.create);
app.delete('/api/owners/:ownerId', controllers.owner.destroy);





app.listen(3000, function() {
    console.log('Barkr app listening at http://localhost:3000/');
});
