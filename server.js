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


// create owner
//app.post('/api/dogs/:dogId/owner', controllers.owner.create);




app.listen(3000, function() {
    console.log('Barkr app listening at http://localhost:3000/');
});
