// in this tutorial we are going to see how to create a file using commmand line inputs
// in nodejs 'process' is a big object which hold almost everything in nodejs

console.log(process);

// this contains an array of 2 things by default
// 1.the path in which we have our nodejs installed
// 2.the path in which we are currently working
// '/usr/local/bin/node',
// '/Users/souravsmac/Desktop/FullStack/WebDevFullStack/NODEJS/63commandline.js'
console.log(process.argv);
// if we print this line it will show a very big output

const fs = require("fs");
const input = process.argv;
// input variable holds control over the process object's arguments
fs.writeFileSync(input[2], input[3]);
// now we are going to run the fs.writeFileSync where our arguments will be the file name and the text that we have to write in our file
// we are going to give the file name node 63commandline.js apple.txt 'this is a fruit'
