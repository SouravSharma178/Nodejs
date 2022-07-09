// in this tutorial we are going to see how we can setup dynamic routing and make dynamic web pages using expressjs
// to do this we are first going to create a folder named views and in this folder we are going to create a file/page with the extension ejs(expressjs) and then we are going to link this page with our server
// template engines are used to create dynamic web pages

const express = require("express");
const path = require("path");
const app = express();
const filePath = path.join(__dirname, "demofiles");

// this is the command to setup ejs template
// before this we are going to install the template package with npm install ejs
app.set("view engine", "ejs");
app.get("", (req, resp) => {
  resp.sendFile(`${filePath}/index.html`);
});
app.get("/help", (req, resp) => {
  resp.sendFile(`${filePath}/help.html`);
});
app.get("/about", (req, resp) => {
  resp.sendFile(`${filePath}/about.html`);
});

// here we are going to send data to our expressjs profile page
app.get("/profile", (req, resp) => {
  // first we are going to create an object
  const user = {
    name: "Sourav",
    age: 35,
    subject: "IT",
  };
  // now in our profile.ejs file we are going to pass this object
  resp.render(`profile`, { user });
});
app.listen();
