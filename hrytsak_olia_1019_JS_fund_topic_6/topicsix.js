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
