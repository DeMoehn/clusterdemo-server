var express = require('express');
var exec = require('child_process').exec;
var cors = require('cors');

var app = express();
app.use(cors());

var startCmd = 'sudo service couchdb start';
var stopCmd = 'sudo service couchdb stop';
var flashCmd = 'echo "Flash" | sudo node flasher.js';

app.get('/', function(req, res) {
  res.send('Welcome, use /stop, /start or /flash to interact with CouchDB');
});

app.get('/stop', function(req, res) {
  exec(stopCmd, function(error, stdout, stderr) {
    res.send(stdout);
  });
});

app.get('/start', function(req, res) {
  exec(startCmd, function(error, stdout, stderr) {
    res.send(stdout);
  });
});

app.get('/flash', function(req, res) {
  exec(flashCmd, function(error, stdout, stderr) {
    res.send(stdout);
  });
});

app.listen(process.env.PORT || 4730, function() {
  console.log('Listening on http://127.0.0.1:4730');
});
