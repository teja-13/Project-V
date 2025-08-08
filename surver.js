const http = require('http');
const fs = require('fs');
const path = require('path');

// Folder where your HTML, JS, CSS are located
const baseDir = 'C:/Project-V';

const server = http.createServer((req, res) => {
    // Default to index.html if no file is specified
    let filePath = req.url === '/' ? path.join(baseDir, 'index.html') : path.join(baseDir, req.url);

    // Get the file extension to determine content type
    const extname = String(path.extname(filePath)).toLowerCase();
    const mimeTypes = {
        '.html': 'text/html',
        '.js': 'application/javascript',
        '.css': 'text/css',
        '.json': 'application/json',
        '.png': 'image/png',
        '.jpg': 'image/jpg',
        '.gif': 'image/gif',
        '.svg': 'image/svg+xml'
    };

    const contentType = mimeTypes[extname] || 'application/octet-stream';

    fs.readFile(filePath, (error, content) => {
        if (error) {
            if (error.code === 'ENOENT') {
                // File not found
                res.writeHead(404, { 'Content-Type': 'index.html' });
                res.end('<h1>404 Not Found</h1>', 'utf-8');
            } else {
                // Other server error
                res.writeHead(500);
                res.end(`Server Error: ${error.code}`);
            }
        } else {
            // Success
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(content, 'utf-8');
        }
    });
});

server.listen(8088, () => {
    console.log('Server is running at http://localhost:8088');
});

