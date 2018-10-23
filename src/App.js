import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

app.use(bodyParser.json());

Consoles = require('./models/consoles')
Companies = require('./models/companies')
//connect to mongoose
mongoose.connect('mongodb://localhost/partyup');
var db = mongoose.connection;

app.get('/', function(req, res){
    res.send('Please use /api/consoles');
});

app.get('/api/consoles', function(req, res){
    Consoles.getConsoles(function(err, consoles){
        if(err){
            throw err;
        }
        res.json(consoles);

    })

});

app.post('/api/consoles', function(req, res){
    Consoles.addConsoles(Consoles, function(err, Consoles){
        if(err){
            throw err;
        }
        res.json(Consoles);

    })


app.get('/api/consoles/:_id', function(req, res){
    Consoles.getConsolesById(req.params._id, function(err, consoles){
        if(err){
            throw err;
        }
        res.json(consoles);

    })

});

app.get('/api/companies', function(req, res){
    Companies.getCompanies(function(err, companies){
        if(err){
            throw err;
        }
        res.json(companies);

    })

});
app.post('/api/companies', function(req, res){
    Companies.addCompanie(companie, function(err, companie){
        if(err){
            throw err;
        }
        res.json(companie);

    })
})

});
app.listen(3000);
console.log('Running on port 3000');



class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
