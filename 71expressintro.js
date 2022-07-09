// in this tutorial we are going to see the tutorial of express js
// express js is a framework of nodejs and allows us to write less lines of code and build APIs
// we have already install express on cmd line using npm install express
// here we will create basic routes using expressjs
const express = require("express");

// we have put all the features of express class in our app instance
const app = express();

// here we use the get method when we have to load our pages
// request is sent by the client's browser and response is sent by the server

app.get("", (req, resp) => {
  // to use this command we are going to type in the browser the request
  //http://localhost:4000/?name=sourav
  console.log("Data sent by the browser ===> ", req.query.name);
  resp.send("Welcome " + req.query.name);
});
app.get("/help", (req, resp) => {
  resp.send("This is our help page");
});
app.get("/aboutus", (req, resp) => {
  resp.send("This is our about us page");
});
app.listen();
