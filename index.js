/**
 * @description This script starts from index.js and uses the callback.functions.js file (or requires it) 
 * and cleanly and neatly helps the user to include these callback functions in inside functions such as readFile, writeFile, etc.
 * @author Heymun Pareek
 * @date 24th May 2025
 * @version 1.0.0
 * @license MIT
 */

/**
 * For fs module covering functions such as readFile, writeFile, appendFile, etc.
 */

const fs = require('fs');
const http = require('http');
const cfns = require('./callback.functions.js');
const path = require('path');

/**
* * @description example 1
    fs.writeFile('./test.txt', "Hello World!", cfns.war);
    fs.readFile("./test.txt", "utf-8", cfns.war);
    fs.appendFile("./test.txt", "Hello World!", cfns.war);
    fs.readFile("./test.txt", "utf-8", cfns.war);
*/
/**
 * @description example 2
 * @param {number} PORT - The port number on which the server will listen.
 */

html_path_arr = ['./html_files/index1.html', './html_files/index2.html'];
routes_arr = ['/','/about'];

const server = http.createServer(cfns.defaulthttpServer(html_path_arr, routes_arr));
server.listen(3000, cfns.listener(3000));

