// in this tutorial we are going to apply route-level middlewares
// to do that we are first going to remove the app.use(reqFilter)
const express = require("express");
const app = express();
const reqFilter = (req, resp, next) => {
  if (!req.query.age) {
    resp.send("Please provide your age");
  } else if (req.query.age < 18) {
    resp.send("You are under aged");
  } else if (req.query.age >= 18) {
    next();
  }
};
// we are going to remove this
// app.use(reqFilter);
app.get("/",(res, resp) => {
  resp.send("Welcome to Home page");
});
// here we have applied this filter only to the users page
app.get("/users",reqFilter,(res, resp) => {
  resp.send("Welcome to Users page");
});
app.listen();

