///task - 1

/*На основі AJAX технології напишіть клієнтську частину аплікації (HTML+JavaScript), в якій при 
натисненні на кнопку надсилається асинхронний GET-запит на сервер, сервер обробляє запит 
і надсилає його на HTML-сторінку оновлюючи вміст кнопки так як показано в прикладі. */

const button = document.querySelector(".button");

button.addEventListener("click", function () {
  async function changeButton() {
    let response = await fetch(
      "http://worldtimeapi.org/api/timezone/Europe/Kyiv"
    );
    let data = await response.json();
    let datetime = data.datetime;
    console.log(datetime);
    button.textContent = "Your vote is accepted:" + " " + datetime;
  }
  changeButton();
});

///task - 2
/*На основі AJAX технології напишіть клієнтську частину аплікації (HTML+JavaScript), в якій 
при натисненні на кнопку надсилається асинхронний GET-запит на сервер, завантажується файл books.json 
і з нього виводяться всі назви авторів у вигляді списку на HTML-сторінку.*/

async function fetchData() {
  try {
    const response = await fetch(
      "https://my-json-server.typicode.com/dmitrijt9/book-api-mock/authors"
    );
    const data = await response.json();

    function getFullName() {
      const authorsName = data.map((author) => author.name);
      const authorsSurname = data.map((author) => author.surname);
      const autorsList = document.querySelector(".authors_list");
      let fullNames = [];

      for (let i = 0; i < authorsName.length; i++) {
        let fullName = authorsName[i] + " " + authorsSurname[i];
        fullNames.push(fullName);
        autorsList.innerHTML += `<li data="${i + 1}">${fullName}</li>`;
      }

      return fullNames;
    }

    console.log(getFullName());
  } catch (error) {
    console.log(error);
  }
}

fetchData();

///task - 3
/*при кожному завантаженні сторінки робити запит до API та рендерити базову інформацію 
  про користувача (аватар, ім`я, вік, стать, країна, логін, пароль, пошта).*/

const avatar = document.querySelector(".avatar");
const userName = document.querySelector(".name");
const age = document.querySelector(".age");
const gender = document.querySelector(".gender");
const country = document.querySelector(".country");
const login = document.querySelector(".login");
const password = document.querySelector(".password");
const email = document.querySelector(".email");


async function changeUser() {
  let response = await fetch("https://randomuser.me/api/");
  let data = await response.json();
  let info = data.results[0];
  console.log(info);

  let img = document.createElement("img");
  img.src = info.picture.medium;
  avatar.innerHTML = "";
  avatar.appendChild(img);

  let fullName = info.name.title + " " + info.name.first + " " + info.name.last
  userName.innerHTML = "Full name:" + " " + fullName;

  age.innerHTML = "Age:" + " " + info.dob.age;

  gender.innerHTML = "Gender:" + " " + info.gender;

  country.innerHTML = "Country:" + " " + info.location.country;

  login.innerHTML = "Login:" + " " + info.login.salt;

  password.innerHTML = "Password:" + " " + info.login.password;

  email.innerHTML ="Email:" + " " + info.email;



}
changeUser();
