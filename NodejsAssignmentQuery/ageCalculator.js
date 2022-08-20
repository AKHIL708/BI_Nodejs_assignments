const http = require("http");
const url = require("url");
const getage = require("findage");

http
  .createServer((req, res) => {
    const name = url.parse(req.url, true).query.name;
    const year = url.parse(req.url, true).query.year;
    const month = url.parse(req.url, true).query.month;
    const day = url.parse(req.url, true).query.day;

    console.log(getage.fullAge("07/15/2002"));
    // res.writeHead(200, { "Content-Type": "text/html" });
    res.end(
      ` Hi ${name} -> your currently  ${getage.fullAge(
        `${month}/${day}/${year}`
      )} Old .`
    );
  })
  .listen(8080);

// Use this link for the query params {link to get the result} -> method is GET ==> localhost:8080/?year=2002&month=03&day=30&name=Ramya
