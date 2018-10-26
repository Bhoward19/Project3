
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

app.use(bodyParser.json());

consoles = require('./models/consoles')
//connect to mongoose
mongoose.connect('mongodb://localhost/partyup');
var db = mongoose.connection;

app.get('/', function(req, res){
    res.send('Please use /api/consoles');
});

app.get('/api/consoles', function(req, res){
    consoles.getConsoles(function(err, consoles){
        if(err){
            throw err;
        }
        res.json(consoles);

    })

});

app.post('/api/consoles', function(req, res){
    consoles.addConsoles(Consoles, function(err, Consoles){
        if(err){
            throw err;
        }
        res.json(Consoles);

    })


app.get('/api/consoles/:_id', function(req, res){
    consoles.getConsolesById(req.params._id, function(err, consoles){
        if(err){
            throw err;
        }
        res.json(consoles);

    })

});



});
app.listen(3000);
console.log('Running on port 3000');

