//assignment 2 => reading the json file  which is info.json

const http = require("http");
const fs = require("fs");
const port = process.env.PORT || 8080;
const path = require("path");

http
  .createServer((req, res) => {
    if (req.url == "/") {
      res.end("Home page");
    } else if (req.url == "/readFile") {
      let data = fs.readFileSync("./info.json", "utf-8");
      console.log(data);
      res.end(data);
    } else {
      res.end("page not found");
    }
  })
  .listen(port);
