// the http module handles the requests and responses of the server
// this tutorial will teach us how to make a basic server
const http = require("http");
// we are listening to this server using the 4000 port
// this createserver will take two parameters which is request and response
// here response refers to the response we send from here to the client
http
  .createServer((res, resp) => {
    resp.write("hello this is sourav sharma");
    // we will now end this to indicate nodejs that it needs to stop
    resp.end();
  }).listen();
