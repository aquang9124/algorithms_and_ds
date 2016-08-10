var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var http = require('http');
var app = express();

// set port
app.set('port', (process.env.PORT || 8000));

// configure middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, '../')));

// configure server
var server = http.createServer(app);
server.listen( app.get('port'), function() {
	console.log( `Server is now listening on ${app.get('port')}` );
} );

module.exports = app;