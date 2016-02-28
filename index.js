'use strict';

var express = require('express');
var bodyParser = require('body-parser');

var app = express();
// parse application/json
app.use(bodyParser.json());
app.set('json spaces', 2);

app.use(express.static(__dirname + '/public'));
app.use('/api', require('./lib/api'));

process.env['DEBUG'] = 'http,express:*';
app.listen(process.env.PORT || 3000);
