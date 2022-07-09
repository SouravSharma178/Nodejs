// the package.json is a file that keeps all the details of our project's code,version,types of commands used,the packages in our project
// to make our very own package.json file we will just type npm init in the terminal
// the packages that we install are mentioned in the dependencies section in our package.json file
// when someone sees this package and the dependencies they can simply install all the packages in the respective project by typing npm install
// once the packages are installed then a folder called node modules are installed
// the package.json file must not be lost or else we will lose our entire project details

const colors = require('colors');
console.log(colors.red('sourav'));


// INTERVIEW QUESTION:
// IS NODEJS single threaded or multi-threaded
// Ans.It is single threaded as it runs only one command at a time and it is asynchronus