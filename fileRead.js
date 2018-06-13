var csv = require("csv");
var http = require("http");
var obj = csv();

function MyCSV(Fone, Ftwo, Fthree) {
    this.FieldOne = Fone;
    this.FieldTwo = Ftwo;
    this.FieldThree = Fthree;
}; 

var data = [];

obj.from.path('./data/Lottery_Powerball_Winning_Numbers__Beginning_2010.csv').to.arrar(function(data){
	for(var i = 0; i < data.length; i++){
		data.push(new MyCSV(data[index][0]));
	}
	console.log(data);
});

