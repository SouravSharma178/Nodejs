// in this tutorial we are going to see the tutorial of express js
const express = require("express");
const app = express();
app.get('/home',(req,resp)=>{
      console.log(req.query.data);
      resp.send("Welcome to the home page "+req.query.data+'<br><a href="/help">Go to help page</a>'+`<br><input type="text" value = "${req.query.data}"/>`);
      //http://localhost:3000/home/?data=sam
});
app.get('/help',(req,resp)=>{
     resp.send(`<a href="/home">Go to Home page</a>`);
});app.listen();
