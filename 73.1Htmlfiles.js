// in this tutorial we are going to see how we can make and run static html files on our system
// the below instance of express will be used to call the other static methods of express
const express = require("express");
const path = require("path");
const filePath = path.join(__dirname, "demofiles");
// we create an instance of express to call other methods
const app = express();
// the static method here loads our static content/pages
app.use(express.static(filePath));
app.listen();

// in express if by default we name a page as index.html it becomes the default root home page

// if we want to access the other pages we need to type the syntax
//http://localhost:3000/about.html
