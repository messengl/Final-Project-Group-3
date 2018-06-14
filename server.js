var path = require('path');
var express = require('express');
var exphbs = require('express-handlebars');
var app = express();
var hbs = require('handlebars');
//var csvReading = require('./fileRead.js');
var parse = require("csv-parse/lib/sync");
var fs = require('fs');

hbs.registerHelper('table-cat', function(items, options) {
  var out = "<tr>";

  for(var i=0, l=items.length; i<l; i++) {
    out = out + "<th>" + options.fn(items[i]) + "</th>";
  }

  return out + "</tr>";
});



//Function to parse csv data into a 2D array
function csvRead(file){
	var data = fs.readFileSync(file, 'utf-8');
	console.log("===Parsing...");
	var records = parse(data, {
		trim: true});
	//console.log(records);
	return records;
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
	
	//Provide .csv file name according to what is searched
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

	//Get data from csv file into 2D array
	var tableData = csvRead('./data/' + tableLink + '.csv');	
		
	//Remove category row from array for main table data with <td>
	var tableRows = tableData.slice(1, tableData.length);
	console.log("Done.");
	
	console.log("Serving table...");
	//Send back site that will contain the table
	res.status(200).render('table',{
			categories: tableData[0],
			data: tableRows
		});
	console.log("Table served.");	
		
});

app.listen(3000, function (err) {
  if (!err) {
    console.log("== Server listening on port 3000");
  }
});
