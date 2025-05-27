/**
* This code demonstrates how to use callback functions in Node.js for file operations.
* The callback functions for readfile, writefile, and appendfile are the same, hence we will use the same function for all.
* @description war: write, append, read
*/

const fs = require('fs');
const path = require('path');

function war(err, data) {
    if (err) {
        console.error(`Error: ${err}`);
        return;
    }
    if(data == undefined){
        console.log("Data: File written successfully");
    }
    else{
        console.log(`Data: ${data}`);
    }
    
}

function listener(PORT){
    return () => {
    console.log(`Server is listening on port ${PORT}`);
    }
}

function defaulthttpServer(html_path_arr, path_routes) {
    return (req, res) => {
    if (!html_path_arr || !path_routes || html_path_arr.length !== path_routes.length) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Internal Server Error: Mismatched paths and routes');
        return;
    }
    const basePath = path.join(__dirname, html_path_arr[0]);
    if (req.url == path_routes[0]) {
        fs.readFile(basePath, 'utf-8', (err, data) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Internal Server Error');
                return;
            }
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);
        });
        return;
    }
    for (let i = 1; i < path_routes.length; i++) {
        if (req.url == path_routes[i]) {
            const filePath = path.join(__dirname, html_path_arr[i]);
            fs.readFile(filePath, 'utf-8', (err, data) => {
                if (err) {
                    res.writeHead(500, { 'Content-Type': 'text/plain' });
                    res.end('Internal Server Error');
                    return;
                }
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(data);
            });
            return;
        }
    }
    // Only send 404 if no route matched
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
    };
}

module.exports = {
    war,
    listener,
    defaulthttpServer
};