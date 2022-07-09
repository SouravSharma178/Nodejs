// in this tutorial we will learn about modules and executions
// further we will also learn about read and write operations on files

// Asynchronous or non-blocking
// - line by line execution not guaranteed
// - callbacks will fire

// Global modules are modules which do not need to get imported
// Non-global modules are the ones which need to be imported explicitely

// this syntax here explains the following
// we are importing the entire fs module in the object fs
// now with this object we would be able to access all the methods that are in the module fs

// Synchronous or blocking
// - line by line execution

const fs = require("fs");
// this will create a hello.txt file with the text like and subscribe
fs.writeFileSync("hello.txt", "like and subscribe");
// this will give us the directory name
console.log("The directory name is", __dirname);
// this will give us the file name
console.log("The file name is", __filename);
