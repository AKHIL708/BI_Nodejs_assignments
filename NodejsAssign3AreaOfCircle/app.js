const http = require("http");
const port = process.env.PORT || 8080;
const url = require("url");

http
  .createServer((req, res) => {

    const object = url.parse(req.url, true).query.object;
    const radius = url.parse(req.url, true).query.radius;
    if(req.url = object == "circle"){
      res.end(
        `Area of Circle for radius(${radius}) = ${Math.PI * radius * radius}`
      );
    }else if(req.url = object == "sphere"){
    res.end(
      `volume of sphere for radius(${radius}) = ${4/3 * Math.PI * radius * radius * radius}`
    )
    }else{
      res.end("pass the correct params")
    }
    // res.end(
    //   `Area of Circle for radius(${radius}) = ${Math.PI * radius * radius}`
    // );
  })
  .listen(port);

//   localhost:8080/calculate/?object=circle&radius=5   this is the query param for the calculating the area of circle can
// type directly on thunder client or can also send directly on browser just copy paste the above link and can change the
// value of the radius too
