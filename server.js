var express = require('express'),
bodyParser = require('body-parser'),
mongoose = require('mongoose');

var app = express();
var db = require('./models');
var Owner = require('./models/owner');

var controllers = require('./controllers');

app.use(express.static('public'));

app.set('view engine', 'ejs')

app.use(bodyParser.urlencoded({extended: true}))
app.set('view engine', 'ejs');
mongoose.createConnection('mongodb://localhost/barkr');


// GET routes

app.get('/', function(req, res) {
    res.sendFile('views/index.html', {
        root: __dirname
    });
});
app.get('/api', controllers.api.index);

app.get('/api/dogs', controllers.dog.index);

app.get('/api/owners', controllers.owner.index);

app.get('/api/dogs/:dogId', controllers.dog.show);
// SIGNUP ROUTE

app.get('/signup', function (req, res) {
  res.render('signup');
});

app.get('/login', function (req, res) {
    res.render('login');
});

// POST routes

app.post('/api/dogs', controllers.dog.create);

app.post('/api/owners', controllers.owner.create);

app.post('/sessions', function (req, res) {
    var ownerEmail = db.Owner.email
    console.log(ownerEmail);
    res.send("new session initated for: ", ownerEmail);
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
