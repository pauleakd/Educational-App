var express = require('express');
var festivalRouter = express.Router();

var FestivalQueryHelper = require('../db/festival_query_helper.js');
var dbHelper = new FestivalQueryHelper();

// index events
festivalRouter.get('/events/', function(req, res) {
  dbHelper.allEvents(function(events) {
    res.json(events);
  });
});

// create events
festivalRouter.post('/events/', function(req, res) {
  // console.log("\n \n");
  // console.log("\n \n");
  // console.log(" |==| req.body |==| ");
  // console.log(req.body);
  // console.log("\n \n");
  // console.log("\n \n");
  var event = req.body;
  dbHelper.addEvent(event, function(results) {
    res.json(results);
  });
});

// index performances
festivalRouter.get('/performances/', function(req, res) {
  dbHelper.allPerformances(function(performances) {
    res.json(performances);
  });
});

// create performances
festivalRouter.post('/performances/', function(req, res) {
  var performance = req.body;
  dbHelper.addPerformance(performance, function(results) {
    res.json(results);
  });
});

module.exports = festivalRouter;
