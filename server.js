var express = require('express');
//var enforce = require('express-sslify');
var path = require('path');
var compression = require('compression');

var port = process.env.PORT || 3001;
var app = express();

app.use(compression());
//app.use(enforce.HTTPS({ trustProtoHeader: true }));
app.use(express.static(path.join(__dirname, 'build')));

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(port);