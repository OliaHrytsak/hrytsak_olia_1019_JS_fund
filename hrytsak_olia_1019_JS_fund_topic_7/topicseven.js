// task-1

// let newWindow = window.open("", "", "width=300,height=300");
// setTimeout(function() {
//   newWindow.resizeTo(500, 500);
// }, 2000);

// setTimeout(function() {
//   newWindow.moveTo(200, 200);
// }, 4000);

// setTimeout(function() {
//   newWindow.close();
// }, 6000);

// task-2

let firstButton = document.querySelector(".first__button");
console.log(firstButton);

firstButton.onclick = function changeCSS() {
  let textElement = document.getElementById("text");
  textElement.style.color = "orange";
  textElement.style.fontSize = "20px";
  textElement.style.fontFamily = "Comic Sans MS";
};

// task-3

let secondButton = document.querySelector(".second__button");

secondButton.onclick = function changeColor() {
  document.body.style.backgroundColor = "blue";
};

let thirdButton = document.querySelector(".third__button");

thirdButton.ondblclick = function changeBackgroundColor() {
  document.body.style.backgroundColor = "pink";
};

let fourButton = document.querySelector(".four__button");

fourButton.onmousedown = function changeColor() {
  document.body.style.backgroundColor = "brown";
};
fourButton.onmouseup = function changeColor() {
  document.body.style.backgroundColor = "white";
};

let firstLink = document.querySelector(".first__link");
console.log(firstLink.innerHTML);
let buttonBlock = document.querySelector(".button__block");
firstLink.onmouseenter = function changeFonColor() {
  buttonBlock.style.backgroundColor = "yellow";
};

firstLink.onmouseleave = function changeFonColor() {
  buttonBlock.style.backgroundColor = "white";
};

// task-4

let selectButton = document.querySelector(".select__button");
let secondList = document.querySelector(".second__list");

secondList.addEventListener("change", function () {
  let selectedOptionValue = secondList.value;
  selectButton.dataset.selectedOption = selectedOptionValue;

  selectButton.addEventListener("click", function () {
    let selectedOption = secondList.querySelector(
      `[value="${selectedOptionValue}"]`
    );
    if (selectedOption) {
      selectedOption.remove();
    }
  });
});

// task-5

let liveButton = document.querySelector(".live__button");
let listOfEvents = document.querySelector(".listOfEvents");

liveButton.addEventListener("click", function () {
  let newParagraph = document.createElement("p");
  newParagraph.textContent = "I was pressed!";
  listOfEvents.appendChild(newParagraph);
});

liveButton.addEventListener("mouseover", function () {
  let newParagraph = document.createElement("p");
  newParagraph.textContent = "Mouse on me!";
  listOfEvents.appendChild(newParagraph);
});

liveButton.addEventListener("mouseout", function () {
  let newParagraph = document.createElement("p");
  newParagraph.textContent = "Mouse is not on me!";
  listOfEvents.appendChild(newParagraph);
});
