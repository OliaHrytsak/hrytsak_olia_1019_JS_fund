//task - 1 // не всі тести пройдено
//destructuring assignment.
let names = {
  first: "Tom",
  second: "Sam",
  third: "Ray",
  fourth: "Bob",
};

let { first: f, third: x, fifth = "Name №5" } = names;

console.log(f); // "Tom"

console.log(x); // "Ray"

console.log(fifth); // "Name №5"

//task - 2 //// тест пройдено

let data = {
  names: ["Sam", "Tom", "Ray", "Bob"],
  ages: [20, 24, 22, 26],
};

let {
  names: [, name2, , name4],
  ages: [, age2, , age4],
} = data;

console.log(name2); // "Tom"
console.log(age2); // 24
console.log(name4); // "Bob"
console.log(age4); // 26

//task - 3// тест пройдено
//Напишіть функцію mul(), яка приймає будь-яку кількість параметрів різного типу і повертає добуток параметрів типу Number.
//Якщо параметри типу Number відсутні, повертає число 0.

function mul(...numbers) {
  const filteredNumbers = numbers.filter((number) => typeof number === 'number');
  if (filteredNumbers.length > 0) {
    return filteredNumbers.reduce((a, b) => a * b, 1);
  } else {
    return 0;
  }
}

console.log(mul(1, "str", 2, 3, true)); // 6
console.log(mul(null, "str", false, true)); // 0

//task - 4//
//Змініть код використовуючи стрілкові функції, щоб в коді не використовувалися методи bind().

let server = {
  data: 0,
  convertToString(callback) {
    callback(() => {
      return this.data + "";
    });
  }
};

let client = {
  server: server,
  result: "",
  calc(data) {
    this.server.data = data;
    this.server.convertToString((callback) => {
      this.notification(callback);
    });
  },
  notification(callback) {
    this.result = callback();
  }
};

client.calc(123);
console.log(client.result); // "123"
console.log(typeof client.result); // "string"

//task - 5//
//Напишіть функцію mapBuilder (keysArray, valuesArrays), яка приймає два масиви однакової довжини. Використовуючи ці масиви, функція повинна створювати об'єкт типу Map, ключами якого є значення з першого масиву, а значеннями Map - значення з другого масиву. Після цього функція повертає даний об'єкт Map.

const mapBuilder = (keys, values) => {
  const map = new Map();
  keys.forEach((key, index) => {
    map.set(key, values[index]);
  });
  return map;
};

let keys = [1, 2, 3, 4];
let values = ["div", "span", "b", "i"];
let map = mapBuilder(keys, values);

for (const [key, value] of map) {
  map.set(key, `${key}: ${value}`);
}

console.log(map);
console.log(map.size); // 4
console.log(map.get(2)); // "span"

//task - 6


var arr = [];

for (var i = 0; i <= 2; i++) {
  arr[i] = (function (num) {
    return function () {
      console.log(num);
    };
  })(i);
}


// let arr = [];

// for (let i = 0; i <= 2; i++) {
//    arr[i] = function () {
//       console.log(i);
//    };
// }

arr[0](); 
arr[arr.length - 1](); 