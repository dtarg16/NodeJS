const http = require('http'); //module

let reqCount = 0; 

const server = http.createServer( (req, res) => {
	console.log(">> new request received:"+req.url + " count:"+reqCount++);
	res.statusCode = 200;
	res.write('Hello World! count :'+reqCount);
	res.end();
});

server.listen(3000);


// apache benchmark
// ab -n 10000 -c 100 http://localhost:3000/