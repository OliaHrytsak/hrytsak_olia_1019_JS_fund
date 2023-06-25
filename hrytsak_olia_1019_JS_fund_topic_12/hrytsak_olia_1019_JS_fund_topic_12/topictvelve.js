//тест
// console.log("hello");

// const fs = require("fs");
// fs.readFile("./text.txt", "utf8", function (err, data) {
//   console.log(data);
// });

//////////////task - 1

// let http = require("http");
// let os = require("os");
// let path = require("path");
// http
//   .createServer(function (require, response) {
//     response.writeHead(200, { "Content-Type": "text/html" });
//     response.write(`<h2>System information</h2>`);
//     const username = os.userInfo().username;
//     response.write(`Current user name: ${username} <br>`);
//     const osType = os.type();
//     response.write(`OS type: ${osType} <br>`);
//     const systemWorkType = os.platform();
//     response.write(`System Work Type: ${systemWorkType} <br>`);
//     const currentWorkDir = process.cwd();
//     response.write(`Current Work Directory: ${currentWorkDir} <br>`);
//     const currentFileName = path.basename(__filename);
//     response.write(`Current File Name: ${currentFileName} <br>`);
//     response.end();
//   })
//   .listen(5000);

/////////////task - 2
// let http = require('http');
// let dt = require('./personalmodule.js');

// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   let date = dt.myDateTime();
//   let greeting = dt.greeting();
//   let name = "Olha";
//   res.write(`Date of request: ${date} <br>`);
//   res.write(`${greeting} ${name}! <br>`);
//   res.end();
// }).listen(8080);


/////////////task - 3

/*Створіть просту програму на Node.js, яка записує у файл текстову інформацію, яку користувач вводить з адресного рядка, а потім зчитує цей файл та виводить вміст на екран.

Створити змінну, яка зберігатиме шлях до файлу, у який буде записана інформація.
Використовуючи модуль fs (file system), створити функцію, яка дозволить записувати інформацію в файл.
Використовуючи модуль http, створити сервер, який буде прослуховувати запити з адресного рядка та передавати отриману інформацію функції writeToTextFile().
Для зчитування даних з файлу, використовуйте модуль fs та функцію readFile()
Для того, щоб вивести зчитану інформацію на екран, додайте відповідну логіку до серверу.*/

const http = require('http');
const fs = require('fs');
const url = require('url');

const file = './userName.txt';

http.createServer(function (req, res) {
  const parsedUrl = url.parse(req.url, true);

  if (parsedUrl.pathname === '/save') {
    const userName = parsedUrl.query.userName;

    if (userName) {
      fs.writeFile(file, userName, function (err) {
        if (err) {
          console.error('An error occurred while writing to the file:', err);
          res.writeHead(500, { 'Content-Type': 'text/plain' });
          res.end('Server error');
        } else {
          console.log('The username was successfully saved to the file:', file);
          res.writeHead(200, { 'Content-Type': 'text/plain' });
          res.end('Data saved successfully');
        }
      });
    } else {
      res.writeHead(400, { 'Content-Type': 'text/plain' });
      res.end('Invalid username');
    }
  } else {
    // Відповідь на інші запити
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('404 Not Found');
  }
}).listen(8081);

console.log('The server is running');