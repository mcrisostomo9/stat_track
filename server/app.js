// Import Modules
// Define nba to access stats and data API endpoints
const express    = require('express');
const nba        = require('nba.js').default;
const morgan     = require('morgan');

// Define app to initialize express
const app        = express();
const PORT       = 8000;

// Logs HTTP request and status codes
app.use(morgan('dev'));

app.get('/', (req,res) => {
  nba.data.scoreboard({date:20170324}).then(res => {
    console.log(res);
  }).catch(err => {
    console.log('error returned', err);
  })
})

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