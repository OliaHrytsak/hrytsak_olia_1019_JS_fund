//task-1
let a = 5;
let b = 15;
let c = 25;

console.log(a < b < c);

//task-2
let x = 1;
let y = 2;

let res1 = String(x) + String(y);
console.log(res1);
console.log(typeof res1);

let res2 = Boolean(x) + String(y)
console.log(res2);
console.log(typeof res2);

let res3 = x < y;
console.log(res3);
console.log(typeof res3);

let res4 = x + y;
console.log(res4);
console.log(typeof res4);

//task-3

let isAdult = +prompt("How old are you?");

if (isAdult >= 18) {
    alert("You are Adult!");
} else {
    alert("You are too young!");
}
//варіант з тернарним оператором
let conclusion = (isAdult >= 18) ? alert("You are Adult!") : alert("You are too young!");

//task-4
// let arr = [4, 5, 2, 1, 6, 5, 3, 5, 2, 5]
// let data =

//     console.log(arr)

//task-5

let d = parseFloat(prompt("enter the length of the side D!"));
let e = parseFloat(prompt("enter the length of the side E!"));
let f = parseFloat(prompt("enter the length of the side F!"));

if (isNaN(d) || isNaN(e) || isNaN(f)) {
    alert("Incorrect data")
}

//Площа трикутника за методом Герона (відомі три сторони)
let semiperimeter = (d + e + f) / 2;
let area = Math.sqrt(semiperimeter * (semiperimeter - d) * (semiperimeter - e) * (semiperimeter - f));

console.log("Area of ​​a triangle " + area.toFixed(3));

//Перевірка чи є трикутник прямокутним
if (d * d + e * e === f * f ||
    d * d + f * f === e * e ||
    e * e + f * f === a * a) {
    console.log("right triangle")
} else {
    console.log("the triangle is not right-angled")
}

//task-6

function calc(a = 2, b = 3, op = 1) {
    if (op === 1) {
        console.log(a - b);
    } else if (op === 2) {
        console.log(a * b)
    } else if (op === 3) {
        console.log(a / b);
    } else {
        console.log(a + b);
    }
}

// те ж завдання з використанням функції switch
switch (a = 2, b = 3, op = 3) {
    case 1:
        console.log(a - b);
        break;
    case 2:
        console.log(a * b);
        break;
    case 3:
        console.log(a / b);
        break;
    default:
        console.log(a + b)
}

//task-7

function findUnique(arr) {
    const uniqueSet = new Set(arr);
    return uniqueSet.size === arr.length;
}
const arr1 = [2, 3, 4, 6, 7];
console.log(findUnique(arr1));
const arr2 = [1, 1, 2, 2, 4, 5];
console.log(findUnique(arr2)); 