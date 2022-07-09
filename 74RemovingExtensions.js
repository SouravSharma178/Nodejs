// in this tutorial we are going to see how we can remove extensions from pages
// this is done for security pusposes
const express = require("express");
const path = require("path");
const dataPath = path.join(__dirname, "demofiles");
const app = express();
app.get("", (req, resp) => {
  resp.sendFile(`${dataPath}/index.html`);
});
app.get("/aboutme", (req, resp) => {
  resp.sendFile(`${dataPath}/about.html`);
});
// now here we will use the * operator to make sure that a default page gets loaded if a wrong url is types
app.get("*", (req, resp) => {
  resp.sendFile(`${dataPath}/help.html`);
});
// this page will be displayed if any wrong url is typed
app.listen();
