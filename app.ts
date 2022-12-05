const http = require('http');
const hostname ='127.0.0.1';
const port = 3000;
const server = http.createServer((reg,res) => {
    res.statusCode =200;
    res.setHeader('Content-Type', 'test/plain');
    res.end('Halp');
});

server.listen(port, hostname, () => {
    console.log('${hostname}:${port}')
});