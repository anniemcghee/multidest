var express = require('express');
var app = express();

app.use('/', express.static(__dirname + '/views'));
app.listen(3000, function() { console.log('Listening at port 3000')});
