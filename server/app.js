// Import Modules
// Define nba to access stats and data API endpoints
const express    = require('express');
const nba        = require('nba.js').default;
const morgan     = require('morgan');

// Define app to initialize express
const app        = express();
const PORT       = 3000;

// Logs HTTP request and status codes
app.use(morgan('dev'));

// Defines a GET route for all teams in 2016
// Using the API from the NBA library
app.get('/teams', (req,res) =>{
  nba.data.teams({
    year: 2016
  }).then(function(data) {
    res.send(data);
  }).catch(function(err) {
    console.error(err);
  });
});

app.get('/games', (req,res) =>{
  nba.data.scoreboard({
    date: 20170405
  }).then(function(data) {
    res.send(data.games);
  }).catch(function(err) {
    console.error(err);
  });
});

// Returns a status code and handles our errors
app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  res.json({
    code: err.status,
    message: err.message
  });
  console.log(err);
  next()
})

// Will use PORT defined above for the server to listen on
app.listen(PORT, (req, res) => {
  console.log("Listening on Port:", PORT);
})