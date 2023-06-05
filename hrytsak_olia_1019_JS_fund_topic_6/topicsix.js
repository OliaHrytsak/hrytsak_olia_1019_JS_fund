//task-1

let listItem = document.getElementById("list");
let firstEl = listItem.children[0].innerText;
let lastEl = list.children[list.children.length - 1].innerText;
let secondEl = list.children[1].innerText;
let fourtEl = list.children[3].innerText;
let thirdEl = list.children[2].innerText;

// alert(firstEl + ", " + lastEl + ", " + secondEl + ", " + fourtEl + ", " + thirdEl);

// alert(`${firstEl}, ${lastEl}, ${secondEl}, ${fourtEl}, ${thirdEl}`)

//task-2

let tittle = document.querySelector("h1");
tittle.style.fontSize = "45px";
tittle.style.backgroundColor = "lightGreen";

let firstP = document.getElementById("myDiv").children[0];
console.log(firstP);
firstP.style.fontWeight = "bold";

let secondP = document.getElementById("myDiv").children[1];
secondP.style.color = "red";

let thirdP = document.getElementById("myDiv").children[2];
thirdP.style.textDecoration = "underline";

let fourP = document.getElementById("myDiv").children[3];
fourP.style.fontStyle = "italic";

//перетворення списку у горизонтальний рядок!!!
let myList = document.querySelector("#myList");

function makeArr() {
  let result = [];
  for (let i = 0; i < myList.children.length; i++) {
    result.push(myList.children[i].innerHTML);
  }
  return result;
}
console.log(makeArr());

function makeHorizontal() {
  let result = makeArr();
  let paragraphElement = document.createElement("p");
  paragraphElement.innerHTML = result.join("");
  myList.replaceWith(paragraphElement);
  paragraphElement.style.textIndent = "20px";
}

makeHorizontal();

//невидимий текст
let spanInvisible = document.querySelector("span");
spanInvisible.style.display = "none";

//task-3

let newDocument = document.createElement("body");

let newMain = document.createElement("main");
newMain.className = "mainClass check item";

newDocument.appendChild(newMain);

let newDiv = document.createElement("div");
newDiv.id = "myDiv";

newMain.appendChild(newDiv);

let newP = document.createElement("p");
newP.innerHTML = "First paragraph";

newDiv.appendChild(newP);

console.log(newDocument);

//task-4
// реалізувати вивід даних із полів при кліку на кнопку "Надіслати" в поле outBlock

const button = document.querySelector(".btn");
const outBlock = document.querySelector(".out");

button.addEventListener("click", function (event) {
  event.preventDefault();

  let arrInputs = document.querySelectorAll("input[data-form]");
  let formDataArray = [];

  arrInputs.forEach((input) => {
    let userValue = input.value;
    formDataArray.push(userValue);
  });

  outBlock.textContent = formDataArray.join(", ");
  
});

//task-5
/*
1) вибрати всі теги із класом circle
2) перебрати кожен елемент, і вибрати його data-anim значення
3) вибране значення додати як клас за допомогою classList до цього елемента.
4) перевірити чи застосувались анімації

- вибірка елемента із DOM дерева
- вибрати клас елемента (https://developer.mozilla.org/en-US/docs/Web/API/Element/classList)
- вибрати із data атрибута значення і занести те значення в клас елемента для якого ми вибрали поточний атрибут
*/

let circles = document.querySelectorAll(".circle");
console.log(circles);

const items = document.querySelectorAll(".items");
for (let i = 0; i < items.length; i++) {
  const item = items[i];
  const circle = item.getElementsByClassName("circle")[0];
  const dataAnim = circle.getAttribute("data-anim");
  console.log(dataAnim);
  
  items[i].classList.add(dataAnim);
}

//task-6

 // Реалізувати логіку підрахунку ціни товару по його варіаціях(шаблон наведений тут, при кліку на колір змінювати ціну товару).
// Придумати ще 2 варіації, від яких буде залежати ціна товару.

const colors = document.querySelectorAll('.color');
const outprice = document.getElementById('outprice');
const photos = document.querySelectorAll('.shoe');
const sizes = document.querySelectorAll('.size');
const deliveryTypes = document.querySelectorAll('.delivery-type');

//Підрахунок ціни, залежно від кольору товару

colors.forEach(function(color, index) {
  color.addEventListener('click', function() {
    var price = color.getAttribute('data-price');
    outprice.textContent = price;
    var photoSrc = photos[index].getAttribute('src');
    photos.forEach(function(photo) {
      photo.classList.remove('show');
    });
    photos[index].classList.add('show');
  });
});

//Підрахунок ціни, залежно від розміру товару
sizes.forEach(function(size) {
  size.addEventListener('click', function() {
    var price = size.getAttribute('data-price');
    outprice.textContent = price;
  });
});
//Підрахунок ціни, залежно від способу доставки товару
deliveryTypes.forEach(function(deliveryType) {
  deliveryType.addEventListener('click', function() {
    var deliveryPrice = deliveryType.getAttribute('data-price');
    var currentPrice = outprice.textContent;
    var totalPrice = parseFloat(currentPrice) + parseFloat(deliveryPrice);
    outprice.textContent = totalPrice.toFixed(2);
  });
});


//task-7 Ускладнене. 

var currentDate = new Date();
var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

var monthIndex = currentDate.getMonth();
var monthName = months[monthIndex];
var day = currentDate.getDate();
var dateElement = document.getElementById("date");
dateElement.textContent = (monthName + " " + day);
dateElement.style.backgroundColor = "black"
dateElement.style.color = "yellow"
dateElement.style.fontSize = "25px"
dateElement.style.fontFamily = "Orbitron";
dateElement.style.width = "250px";

const clockContainer = document.querySelector('.big__clock');
clockContainer.style.backgroundColor = "black";
clockContainer.style.color = "yellow";
clockContainer.style.fontSize = "45px";
clockContainer.style.fontFamily = "Orbitron";
clockContainer.style.width = "250px";


function updateClock() {
    clockContainer.innerText = new Date().toLocaleTimeString('uk');
}

setInterval(updateClock, 1000);