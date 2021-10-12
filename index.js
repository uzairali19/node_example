// var rect = require("./rectangle.js");

// function solveRect(l, b) {
//   console.log("Solving for rectangle with l = " + l + " and b = " + b);
//   rect(l, b, (err, rectangle) => {
//     if (err) {
//       console.log("ERROR: ", err.message);
//     } else {
//       console.log(
//         "The area of the rectangle of dimensions l = " +
//           l +
//           " and b = " +
//           b +
//           " is " +
//           rectangle.area()
//       );
//       console.log(
//         "The perimeter of the rectangle of dimensions l = " +
//           l +
//           " and b = " +
//           b +
//           " is " +
//           rectangle.perimeter()
//       );
//     }
//   });
//   console.log("This statement after the call to rect()");
// }

// solveRect(2, 4);
// solveRect(1, 3);
// solveRect(3, 8);
// solveRect(7, 2);
// solveRect(-4, 6);
// solveRect(8, 4);
// solveRect(3, 4);

// HTTP Server using only node and http module

// const http = require("http");
// const fs = require("fs");
// const path = require("path");

// const hostname = "localhost";
// const port = 3000;

// const server = http.createServer((req, res) => {
//   console.log("Request for " + req.url + " by method " + req.method);

//   if (req.method == "GET") {
//     var fileUrl;
//     if (req.url == "/") fileUrl = "/index.html";
//     else fileUrl = req.url;

//     var filePath = path.resolve("./public" + fileUrl);
//     const fileExt = path.extname(filePath);
//     if (fileExt == ".html") {
//       fs.exists(filePath, (exists) => {
//         if (!exists) {
//           res.statusCode = 404;
//           res.setHeader("Content-Type", "text/html");
//           res.end(
//             "<html><body><h1>Error 404: " +
//               fileUrl +
//               " not found</h1></body></html>"
//           );
//           return;
//         }
//         res.statusCode = 200;
//         res.setHeader("Content-Type", "text/html");
//         fs.createReadStream(filePath).pipe(res);
//       });
//     } else {
//       res.statusCode = 404;
//       res.setHeader("Content-Type", "text/html");
//       res.end(
//         "<html><body><h1>Error 404: " +
//           fileUrl +
//           " not a HTML file</h1></body></html>"
//       );
//     }
//   } else {
//     res.statusCode = 404;
//     res.setHeader("Content-Type", "text/html");
//     res.end(
//       "<html><body><h1>Error 404: " +
//         req.method +
//         " not supported</h1></body></html>"
//     );
//   }
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });

// Express server

const express = require('express');
const http = require('http');
const morgan = require('morgan');

const hostname = 'localhost';
const port = 3000;
const bodyParser = require('body-parser');

const app = express();
app.use(morgan('dev'));
app.use(bodyParser.json());

app.all('/dishes', (req, res, next) => {
  res.statusCode = 200;
  res.setHeader('Content-type', 'text/plain');
  next();
});

app.get('/dishes', (req, res, next) => {
  res.end('Will send all the dishes');
});

app.post('/dishes', (req, res, next) => {
  res.end(
    'Will add the information to the request body' +
      req.body.name +
      'With details:' +
      req.body.description
  );
});

app.put('/dishes', (req, res, next) => {
  res.statusCode = 403;
  res.end('PUT is not supported on dishes');
});

app.delete('/dishes', (req, res, next) => {
  res.end('Deleting all the dishes');
});

app.get('/dishes/:dishId', (req, res, next) => {
  res.end('Will send all the dishes' + req.params.dishId);
});

app.post('/dishes/:dishId', (req, res, next) => {
  res.statusCode = 403;
  res.end(
    'Will not add the information to the request body' + req.params.dishId
  );
});

app.put('/dishes/:dishId', (req, res, next) => {
  res.write('PUT is supported on dishes' + req.params.dishId + '/n');
  res.end('PUT is updated all dishes' + req.params.dishId);
});

app.delete('/dishes/:dishId', (req, res, next) => {
  res.end('Deleting the dish' + req.params.dishId);
});

app.use(express.static(__dirname + '/public'));

app.use((req, res, next) => {
  res.statusCode = 200;
  res.setHeader('Content-type', 'text/html');
  res.end('<html><body><h1>Hello World</h1></body></html>');
});

const server = http.createServer(app);

server.listen(port, hostname, () => {
  console.log(`server running at http://${hostname}:${port}`);
});
