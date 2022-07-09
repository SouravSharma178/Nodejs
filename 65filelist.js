// in this tutorial we will see how to show the file list in nodejs and create multiple files in a folder
const fs = require("fs");
const path = require("path");
console.log(__dirname);
console.log(__filename);
// now using this we are going to fetch the path of the folder which are going to store the files
// we will have to first create this files folder manually
const dirPath = path.join(__dirname, "files");
for (let i = 0; i < 5; i++) {
  fs.writeFileSync(dirPath + `/hello${i}.txt`, `a simple text file`);
}
fs.readdir(dirPath, (err, item) => {
  item.forEach((item) => {
    console.log(item);
  });
});

// INTERVIEW QUESTION
// can we access the other files on our system using these nodejs commands?
// Ans.No.
// Reason - when we are working on nodejs internally it creates a web server like environment and it does not know anything external to the folder./environment it is working upon.if this would have happened then any website that uses nodejs would have accessed our local files on the computer
