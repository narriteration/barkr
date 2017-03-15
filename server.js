var express = require('express'),
bodyParser = require('body-parser'),
mongoose = require('mongoose');

var app = express();
var db = require('./models');
// TODO: need to require /owner.js??

var controllers = require('./controllers');

app.use(express.static('public'));
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

app.get('/api/dogs/:dogId', controllers.dog.show);

app.get('/signup', function (req, res) {
  res.render('signup');
});

app.get('/login', function (req, res) {
    res.render('login');
});

// POST routes

app.post('/api/dogs', controllers.dog.create);

app.post('/api/owners', controllers.owner.create);

app.post('/owners', function (req, res) {
    db.Owner.createSecure(req.body.email, req.body.password, function(err, newOwnerCreated){
    // console.log('request body: ', req.body);
    res.json(newOwnerCreated);
    });
});

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



////////// CONNECT TO LOCAL HOST ////////////////

app.listen(3000, function() {
    console.log('Barkr app listening at http://localhost:3000/');
});
