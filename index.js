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
const cfns = require('./callback.functions.js');

/**
* * @description example 1
    fs.writefile('./test.txt', "Hello World!", cfns.war);
    fs.readFile("./test.txt", "utf-8", cfns.war);
    fs.appendFile("./test.txt", "Hello World!", cfns.war);
    fs.readFile("./test.txt", "utf-8", cfns.war);
*/

