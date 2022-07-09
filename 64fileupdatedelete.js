// in this tutorial we will see how we can create and delete files using command line in nodejs
// let us understand the syntax here
// we are saying that if our second argument is add then make a file which we give as input by the third argument and the text which we give as the fourth argument
const fs = require("fs");
const input = process.argv;
if (input[2] == "add") {
  // we will use the command node 63commandline.js add data.txt 'this is a fruit'
  fs.writeFileSync(input[3], input[4]);
  console.log("added");
} else if (input[2] == "remove") {
  // we will use the command node 63commandline.js remove data.txt
  fs.unlinkSync(input[3]);
  console.log("removed");
} else {
  console.log("invalid file");
}
