//task - 1 //тест пройдено
/*Реалізуйте функцію getPromise(message, delay), яка приймає текстове повідомлення message 
і цілочисельне значення затримки delay (в мс) і повертає Promise, який чекає задану 
кількість часу (використовуючи аргумент delay) і завершується повідомленням message.*/

function getPromise(message, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(message);
    }, delay);
  });
}

getPromise("test promise", 2000).then(function (data) {
  console.log(data);
});

//task - 2// тести не проходить

//Реалізуйте функцію calcArrProduct(arr), яка приймає масив чисел. Функція повинна повернути Promise,
//робота якого завершується поверненням добутку елементів масиву, якщо вони є типу Numbers,
//або повідомленням "Error! Incorrect array!" у випадку, якщо хоча б 1 елемент масиву нечисловий.

function calcArrProduct(arr) {
  return new Promise((resolve, reject) => {
    const isNumber = (element) => typeof element === "number";

    if (arr.every(isNumber)) {
      resolve(
        arr.reduce((accumulator, currentValue) => accumulator * currentValue)
      );
    } else {
      reject("Error! Incorrect array!");
    }
  });
}

calcArrProduct([3, 4, 5])
  .then((result) => console.log(result))
  .catch((error) => console.log(error));
calcArrProduct([5, "user2", 7, 12])
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

//task - 3// тести не проходить

new Promise(function (resolve, reject) {
  function askNumber() {
    let number = prompt("Enter number, please!");

    if (isNaN(number)) {
      reject("You entered not a number.");
    } else {
      resolve(Number(number));
    }
  }

  askNumber();
})
  .catch(function (error) {
    console.error(error);
    return new Promise(function (resolve, reject) {
      function askNumberAgain() {
        let number = prompt("Enter number again, please!");

        if (isNaN(number)) {
          reject("Ви ввели недійсне число.");
        } else {
          resolve(Number(number));
        }
      }

      askNumberAgain();
    });
  })
  .then(function (result) {
    console.log(result);
  });

//task - 4

//Заданий цикл for, який виводить послідовність чисел від 0 до 10 з випадковим інтервалом 
//(від 0 до N мілісекунд). Використовуючи проміси потрібно змінити цикл так, щоб числа виводилися в 
//строгій послідовності від 0 до 10. Наприклад, якщо виведення нуля займає 4 секунди, а одиниці 2 секунди, 
//то одиниця повинна дочекатися виведення  нуля і тільки потім почати свій відлік (щоб дотримуватися 
  //послідовності).
//Для розв’язку задачі необзідно застосувати задану функцію delay(i, time), яка повертає проміс, 
//який резолвиться поточним значенням числа-лічильника циклу і, яке виводиться через час time мілісекунд.
//

//promise
// function delay(i, time) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log(i);
//       resolve();
//     }, time);
//   });
// }

// function showNumbers() {
//   let promise = Promise.resolve();

//   for (let i = 0; i <= 10; i++) {
//     const randomTime = Math.floor(Math.random() * 3000); 

//     promise = promise.then(() => delay(i, randomTime));
//   }
// }

// showNumbers();

//async/await
function delay(i, time) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(i);
      resolve();
    }, time);
  });
}

async function sequentialPrint() {
  for (let i = 0; i <= 10; i++) {
    const randomTime = Math.floor(Math.random() * 3000);
    await delay(i, randomTime);
  }
}

sequentialPrint();