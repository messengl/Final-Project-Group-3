var path = require('path');
var express = require('express');
var exphbs = require('express-handlebars');
var app = express();

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars')

app.use(express.static('public'));

app.get('/bar/:data', function (req, res, next) {
  res.send();
});

app.get('/pie/:data', function (req, res, next) {
  res.send();
});

app.get('/scatter/:data', function (req, res, next) {
  res.send();
});

app.get('/table/:data', function (req, res, next) {
	
	
	
  res.send();
});

app.listen(3000, function (err) {
  if (!err) {
    console.log("== Server listening on port 3000");
  }
});
