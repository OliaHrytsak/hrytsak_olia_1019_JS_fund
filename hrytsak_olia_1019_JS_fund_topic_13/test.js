//витягуємо масив користувачів з бекенду за допомогою Promise
// fetch("https://jsonplaceholder.typicode.com/users")
// .then((response) => response.json())
// .then((data) => console.log(data));

////витягуємо масив користувачів з бекенду за допомогою async/await
// async function fetchData() {
//   let response = await fetch("https://jsonplaceholder.typicode.com/users");
//   let data = await response.json();
//   console.log(data);
// }
// fetchData();

////// цей же масив, але вибираємо лише імена користувачів
// async function fetchData() {
//   let response = await fetch("https://jsonplaceholder.typicode.com/users");
//   let data = await response.json();

//   let names = data.map(user => user.name);
//   console.log(names);
// }
// fetchData();

//"POST"
// const data = {
//   title: "name",
//   body: "content",
//   userId: 1,
// };
// fetch("./settings.json", {
//   method: "POST",
//   body: JSON.stringify(data),
//   headers: {
//     "Content-type": "application/json; charset=UTF-8",
//   },
// })
//   .then((response) => response.json())
//   .then((json) => console.log(json));

let url = 'https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits';
let response = await fetch(url);

let commits = await response.json(); // read response body and parse as JSON

console.log(commits[0].author.login);

