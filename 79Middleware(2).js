// we can also apply middleware to selected pages
const express = require("express");
const app = express();
const reqFilter = require("./79.1Middledata");
// here we are taking all the features of the instance express in our variable route
const route = express.Router();

// using route we are going to call  a function use and pass reqFilter as a parameter
route.use(reqFilter);
app.get("/", (res, resp) => {
  resp.send("Welcome to Home page");
});
// here we have applied this filter only to the users page
// this is one way of doing this
// app.get("/users",reqFilter,(res, resp) => {
//   resp.send("Welcome to Users page");

// });

// THE ANOTHER AND BETTER WAY OF DOING THIS IS AS FOLLOWS
// WE WILL SIMPLY ADD A ROUTE
route.get("/users", (res, resp) => {
  resp.send("Welcome to Users page");
});
// then we would have to write this as well
app.use("/", route);
app.listen(3000);
