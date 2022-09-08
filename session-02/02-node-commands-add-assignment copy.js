var fs = require('fs');
console.log("Hello world ...");
// 3-4 lines

var commands = {
'pwd': function () {
	console.log(process.cwd()); // current working directory
},
'ls': function (args) { // New property added here.
	fs.readdir(args[0] || process.cwd(), function (err, entries) {
		entries.forEach(function (e) {
			console.log(e);
		});
	});
},
'sum':function(args){
	console.log("sum is "+(parseInt(args[0]) +parseInt(args[1])));
}	
};


process.stdin.on('data', function (input) {
	var matches = input.toString().match(/(\w+)(.*)/);
	var command = matches[1].toLowerCase();
	var args = matches[2].trim().split(/\s+/);
	try{
		commands[command](args);	
	}catch(e){
		console.log("Error:"+e);
	}
});