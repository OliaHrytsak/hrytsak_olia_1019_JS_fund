// task-1!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// function compact(arr) {
//     let result = [];

//     for (let element of arr) {
//         if (!result.includes(element)) {
//             result.push(element);
//         }
//     }
//     return result;
// }

// const arr = [5, 3, 4, 5, 6, 7, 3];
// const arr2 = compact(arr);
// console.log(arr2);

// task-2!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// function createArray(start, end) {
//     let exitArr = [];
//     for (let i = start; i <= end; i++) {
//         exitArr.push(i);
//     }
//     return exitArr;
// }

// let arr = createArray(2, 9);
// console.log(arr); // [2,3,4,5,6,7,8,9]

//task-3!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// Зробила у вигляді масиву, хоча в завданні про це не йшлося. Мені так виглядає зрозуміліше і зручніше

// function showNumbers(a, b) {

//     let newArr = [];
//     for (let i = a; i <= b; i++) {
//         for (let j = 1; j < i; j++) {
//             newArr.push(i);
//         }
//     }
//     return newArr;
// }

// let arr = showNumbers(2, 7)
// console.log(arr)

//task-4!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// function randArray(k) {

//   let newArr = [];
//   for (let i = 0; i < 5; i++) {
//     newArr.push(Math.floor(Math.random() * 500));
//   }
//   return newArr;

// }

// console.log(randArray());

//task-5!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

function transformArr(arr) {
  const newArr = arr.flat();
  const stringArr = [];
  const numberArr = [];

  for (let i = 0; i < newArr.length; i++) {
    if (typeof newArr[i] === 'string') {
      stringArr.push(newArr[i]);
    } else {
      numberArr.push(newArr[i]);
    }
  }

  return { stringArr, numberArr };
}

const startArr = transformArr([5, "Limit", 12, "a", "3", 99, 2, [2, 4, 3, "33", "a", "text"], "strong", "brown"]);
console.log(startArr);

//task-6!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

function greetUpToTime() {
  const currentTime = new Date();
  const timeString = currentTime.toLocaleTimeString('uk');

  if (timeString >= '23:00:00' || timeString < '05:00:00') {
    console.log("Доброї ночі");
  } else if (timeString >= '05:00:00' && timeString < '11:00:00') {
    console.log("Доброго ранку");
  } else if (timeString >= '11:00:00' && timeString < '17:00:00') {
    console.log("Доброго дня");
  } else {
    console.log("Доброго вечора");
  }

  console.log(timeString);
}
greetUpToTime();

// те ж завдання з використанням конструкції Switch

const currentTime = new Date();
 const timeString = currentTime.toLocaleTimeString('uk')
switch (true) {
case (timeString >= '23:00:00' || timeString < '05:00:00'):
    console.log("Доброї ночі");
    break;
  case (timeString >= '05:00:00' && timeString < '11:00:00'):
    console.log("Доброго ранку");
     break;
  case (timeString >= '11:00:00' && timeString < '17:00:00'):
    console.log("Доброго дня");
    break;
  case (timeString > '17:00:00' && timeString < '23:00:00'):
    console.log("Доброго вечора");
}

console.log(timeString);