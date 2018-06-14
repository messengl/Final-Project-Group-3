module.exports = {

function mycsvRead(file){
	console.log("===Starting up...");
	var data = fs.readFileSync(file, 'utf-8');
	console.log("===Parsing...");
	var records = parse(data, {cast: true, column: true, trim: true});
	return data;
}
	}