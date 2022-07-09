// in this tutorial we will make a basic api and verify it using postman

// to make an api we will first create an object using http

const http = require("http");
const data = require("./62.3basicapidata");

http.createServer((req, resp) => {
    // now we will write the header first using the resp.writeHead

    // the syntax of the header says that:

    // first write the code with which we want to send the api/information,which we do usually by 200 value,404 is used for error and 500 is for no data on the server

    // second we will write the type of file/data we want to send

    resp.writeHead(200, { "Content-Type": "applicationjson" });
    // we will stringfy the JSON data as want that in a string format
    resp.write(JSON.stringify(data));
    resp.end();
  }).listen();
