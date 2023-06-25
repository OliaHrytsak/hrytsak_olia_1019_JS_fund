//////////////////show year and month
// const http = require('http');
// const url = require('url');

// http.createServer(function (req, res) {
//   res.writeHead(200, { 'Content-Type': 'text/html' });
 
//   const q = url.parse(req.url, true).query;
//   const txt = q.year + ' ' + q.month;
//   res.end(txt);
// }).listen(8081);

//http://localhost:8081/?year=2023&month=June

////////////////////The fs.readFile() method is used to read files on your computer.
// const http = require('http');
// const fs = require('fs');

// http.createServer(function (req, res) {
//     fs.readFile('./index.html', function(err, data) {
//       res.writeHead(200, {'Content-Type': 'text/html'});
//       res.write(data);
//       return res.end();
//     });
//   }).listen(8081);


/////////////////Create a new, empty file using the open() method:

// const fs = require('fs');
// fs.open('mynewfile2.txt', 'w', function (err, file) {
//   if (err) throw err;
//   console.log('Saved!');
// });

///////////////////////Replace the content of the file "mynewfile3.txt":

// const fs = require('fs');

// fs.writeFile('mynewfile3.txt', 'This is my text', function (err) {
//   if (err) throw err;
//   console.log('Replaced!');
// });

/////////////////////Create a Node.js file that will convert the output "Hello World!" into upper-case letters:
// let http = require('http');
// let uc = require('upper-case');
// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   res.write(uc.upperCase("Hello World!"));
//   res.end();
// }).listen(8081);

////////////////////Objects in Node.js can fire events, like the readStream object fires events when opening and closing a file:
// let fs = require('fs');
// let rs = fs.createReadStream('./demofile.txt');
// rs.on('open', function () {
//   console.log('The file is open');
// });

/*You can assign event handlers to your own events with the EventEmitter object.
In the example below we have created a function that will be executed when a "scream" event is fired.
To fire an event, use the emit() method.*/
//НЕ ЗРОЗУМІЛО
// let events = require('events');
// let eventEmitter = new events.EventEmitter();

// //Create an event handler:
// let myEventHandler = function () {
//   console.log('I hear a scream!');
// }

// //Assign the event handler to an event:
// eventEmitter.on('scream', myEventHandler);

// //Fire the 'scream' event:
// eventEmitter.emit('scream');