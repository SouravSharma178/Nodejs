// in this tutorial we are going to create a common header for the pages login and profile
// for this we are going to create a common folder and create a header file inside it and then link it with the login and profile ejs pages
const express = require("express");
const path = require("path");
const app = express();
const filePath = path.join(__dirname, "demofiles");


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


app.get("/profile", (req, resp) => {
    const user = {
        name: "Sourav",
        age: 35,
        subject: "IT",
      };
  resp.render(`profile`,{user});
});
app.get("/login", (req, resp) => {
  resp.render(`login`);
});
app.listen(4000);
