var path = require('path');
var express = require('express');
var exphbs = require('express-handlebars');
var app = express();
//var csvReading = require('./fileRead.js');
var parse = require("csv-parse/lib/sync");
var fs = require('fs');

//Function to parse csv data into a 2D array
function csvRead(file){
	var data = fs.readFileSync(file, 'utf-8');
	console.log("===Parsing...");
	var records = parse(data, {columns: true,
		trim: true});
	console.log(records);
	return data;
}



app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars')

app.use(express.static('public'));

app.get('/', function(req,res,next){
		res.status(200).render('index');
});

app.get('/index', function(req, res, next){
	res.status(200).render('index');
});

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
	var tableLink;
	
	if(req.params.data == 'titanic')
		tableLink = 'titanic';
	if(req.params.data == 'death')
		tableLink = 'deathRate';
	if(req.params.data == 'birth')
		tableLink = 'birthRate';
	if(req.params.data == 'scorecards')
		tableLink = 'scorecards';
	if(req.params.data == 'lottery')
		tableLink = 'lottery';

	var tableData = csvRead('./data/' + tableLink + '.csv');	
		
	res.status(200).render('table',{
			categories: tableData[0],
			data: tableData
		});
		
  //res.send();
});

app.listen(3000, function (err) {
  if (!err) {
    console.log("== Server listening on port 3000");
  }
});
