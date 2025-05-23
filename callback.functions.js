/**
* This code demonstrates how to use callback functions in Node.js for file operations.
* The callback functions for readfile, writefile, and appendfile are the same, hence we will use the same function for all.
* @description war: write, append, read
*/

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
module.exports = {
    war
};