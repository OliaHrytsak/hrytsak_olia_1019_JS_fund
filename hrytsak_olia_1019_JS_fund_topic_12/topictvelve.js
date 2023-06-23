//тест
console.log("hello");

const fs = require("fs");
fs.readFile("./text.txt", "utf8", function (err, data) {
  console.log(data);
});

//////////////task - 1

let http = require("http");
let os = require("os");
let path = require("path");
http
  .createServer(function (require, response) {
    response.writeHead(200, { "Content-Type": "text/html" });
    response.write(`<h2>System information</h2>`);
    const username = os.userInfo().username;
    response.write(`Current user name: ${username} <br>`);
    const osType = os.type();
    response.write(`OS type: ${osType} <br>`);
    const systemWorkType = os.platform();
    response.write(`System Work Type: ${systemWorkType} <br>`);
    const currentWorkDir = process.cwd();
    response.write(`Current Work Directory: ${currentWorkDir} <br>`);
    const currentFileName = path.basename(__filename);
    response.write(`Current File Name: ${currentFileName} <br>`);
    response.end();
  })
  .listen(5000);

/////////////task - 2
// let http = require('http');
// let dt = require('./personalmodule.js');

// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   let date = dt.myDateTime();
//   let greeting = dt.greeting();
//   let name = "Olha";
//   res.write("Date of request: " + date + "<br>");
//   res.write(greeting + " " + name + "!<br>");
//   res.end();
// }).listen(8080);
