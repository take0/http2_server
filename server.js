const http2 = require('http2');
const fs    = require('fs');
const port  = 8080;

const server = http2.createSecureServer({
    key:  fs.readFileSync('./cert/localhost-privkey.pem'),
    cert: fs.readFileSync('./cert/localhost-cert.pem')
});
server.on('error', (err) => console.error(err));
server.on('socketError', (err) => console.error(err));

server.on('stream', (stream, headers) => {
	stream.respond({
	    'content-type': 'text/html',
	    ':status': 200
	});
	stream.end('<h1>Hello HTTP/2!</h1>');
});

server.listen(port);
console.log("server started : https://locahost:" + port);
