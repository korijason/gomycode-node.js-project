// Task: Create a server and respond to requests

const http = require('http');

// Create the server
const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('<h1>Hello Node!!!!</h1>\n');
});

// Server listens on port 3000
const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
