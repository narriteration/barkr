var express = require('express'),
bodyParser = require('body-parser');

var app = express();
var db = require('./models');

var controllers = require('./controllers');

app.use(express.static('public'));

app.use(bodyParser.urlencoded({extended: true}))

app.get('/', function(req, res) {
    res.sendFile('views/index.html', {
        root: __dirname
    });
});
app.get('/api', controllers.api.index);

app.get('/api/dogs', controllers.dog.index);

app.get('/api/dogs/:dogId', controllers.dog.show);

app.post('/api/dogs', controllers.dog.create);

app.delete('/api/dogs/:dogId', controllers.dog.destroy);

app.put('/api/dogs/:dogId', controllers.dog.update);

app.put('/api/owners/:ownerId', controllers.owner.update);

app.delete('/api/owners/:ownerId', controllers.owner.destroy);




app.listen(3000, function() {
    console.log('Barkr app listening at http://localhost:3000/');
});
