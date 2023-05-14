//task-2
console.log("Hrytsak");

//task-3
//a)
let sonName;
let daughterName;
//b)
sonName = "Maksum";
daughterName = "Ulyana";
//c)
alert(sonName);
alert(daughterName);
//d)
sonName = daughterName;
//e)
alert(sonName);
alert(daughterName);

//task-4
let career = {
    position: "Accounter",
    experience: 10,
    courses: true,
    salary: undefined,
    assistant: null
};

console.log(career);

//task-5
let isAdult = confirm("Are you adult?");
console.log(isAdult);

//task-6
let myName;
let surname;
let stadyGroup;
let yearOfBirth;

myName = "Olia";
surname = "Hrytsak";
stadyGroup = 1019;
yearOfBirth = 1991;

let isMarried = true;

console.log(typeof stadyGroup);
console.log(typeof yearOfBirth);
console.log(typeof isMarried);
console.log(typeof myName);
console.log(typeof sonName);

let expirience = null;
let softSkills;

console.log(expirience);
console.log(softSkills);

//task-7
let userLogin = prompt("Enter your login!");
let userEemail = prompt("Enter your email!");
let userPassword = prompt("Enter your password!");

alert("Dear User, your email is " + userEemail + " your password is " + userPassword + " and your login is " + userLogin + "!");

//task-8
let secondsInAMinute = 60;
let minutesInAnHour = 60;
let secondsInAnHour = secondsInAMinute * minutesInAnHour;
alert(secondsInAnHour);

let hoursInADay = 24;
let secondsInADay = secondsInAnHour * hoursInADay;
alert(secondsInADay);

let daysInAMonth = 30;
let secondsInAMonth = secondsInADay * daysInAMonth;
alert(secondsInAMonth);

//Ускладнене завдання!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
let numberOfSeat = prompt("Enter your seat number, pleese!");

//Перевіряємо правильность введення місця
if (numberOfSeat > 54){
  numberOfSeat = prompt("Enter correct seat number, pleese!");
  alert("Your seat number is " + numberOfSeat + "!");
 }

//Визначаємо номер купе
let coupeNumber = Math.ceil(numberOfSeat / 4);

//Перевіряємо чи бічне чи ні і виводимо результат
if (numberOfSeat > 36){
   let sidePosition = true;
  alert("side seat: " + sidePosition);
} else {
  let sidePosition = false;
  alert("side seat: " + sidePosition);
}  

//Перевіряємо верхнє чи нижнє місце і виводимо купе і тип місця
  if (numberOfSeat % 2 == 0) {
  let seatType = "top seat";
    alert("Your cupe number is " + coupeNumber + " and your seat type is " + seatType + "!");  
} else {
  let seatType = "bottom seat";
   alert("Your cupe number is " + coupeNumber + " and your seat type is " + seatType + "!");  
}

