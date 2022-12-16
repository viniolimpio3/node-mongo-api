const http = require('http');

const port = 3333;

const server = http.createServer((req, res) => {
    res.writeHead(200, {"Content-Type": "text/plain"});
    res.end('Teste curso node')
})

server.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`)
})