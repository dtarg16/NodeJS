var fs = require('fs');
var http = require('http');

var server = http.createServer(function (req, res) {
	// req, res 
	res.statusCode = 200;
	fs.readFile('index.html', function (err, data) {
		if (!err) {
		res.write(data.toString());
		res.end();
		}
	});
});
server.listen(3000);

