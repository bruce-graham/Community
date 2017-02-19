'use strict';

var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();
var request = require('request');
var apiHelpers = require('./apihelpers.js');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(express.static(path.join(__dirname, '../public')));

var port = process.env.PORT || 8080;

app.listen(port, function() {
    console.log('Listening on port:' + port);
});

app.get('/', function(req,res){
  console.log("get happened")
})

app.get('/api/neighborhoods/searchbycity/:city/:state', function(req, res) {
  var city = req.params.city;
  var state = req.params.state;
  apiHelpers.getZillowHoods(city, state, function(err, hoods) {
    if(err) {
      res.sendStatus(404);
    } else {
      res.json(hoods);
    }
  });
});

module.exports = app;
