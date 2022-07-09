// whenever we have to make changes in requests and responses,check for user authentication and block our websites in specific countries/places we use middlewares

// Trivia question -> if we want to make changes in the requests and responses,then why don't we make changes in the routes instead of learning these middlewares?

// the reason is since we have lots of routes on our website,we would have to update our code everytime but by creating a middleware we would have to this only once

const express = require("express");
const app = express();

// without writing next(); our pages will keep on buffering

const reqFilter = (req, resp, next) => {
  if (!req.query.age) {

    // once we have written resp.send then we cannot write next();
    resp.send("Please provide your age");
  } else if (req.query.age < 18) {
    resp.send("You are under aged");
  } else if (req.query.age >= 18) {
    next();
  }
};
app.use(reqFilter);

app.get("/", (res, resp) => {
  resp.send("Welcome to Home page");
});

app.get("/users", (res, resp) => {
  resp.send("Welcome to Users page");
});
app.listen();

// in this tutorial we are applying middleware accross all the routes,also called as application level middleware
