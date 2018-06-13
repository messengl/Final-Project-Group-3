var parse = require("csv-parse/lib/sync");
var fs = require('fs');

console.log("===Starting up...");

var data = fs.readFileSync('./data/Lottery_Powerball_Winning_Numbers__Beginning_2010.csv', 'utf-8');

console.log("===Parsing...");

var records = parse(data, {cast: true, column: true, trim: true});
console.log(records[0], records [1]);

