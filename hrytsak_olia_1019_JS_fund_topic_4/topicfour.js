//task-1

function sumSliceArray(arr, first, second) {
    if (typeof first !== 'number' || typeof second !== 'number') {
        throw new Error("Enter numbers, please!");
    } else if (first >= arr.length || second >= arr.length) {
        throw new Error("Your numbers are bigger than the array length!");
    }
    return arr.slice(first, second + 1).reduce((acc, curr) => acc + curr, 0);
}
try {
    const result = sumSliceArray([1, 2, 3, 4, 5, 6], 2, 3);
    console.log(result);
} catch (error) {
    console.log(error.stack);
}

//task-2

// function checkAge() {
//     try {
//         let userrName = prompt("What is your name?");
//         let userAge = +prompt("Enter your age!");
//         let userrStatus = prompt("What is your status(адмін, модератор, користувач)?");
//         if (userAge < 18 || userAge > 70) {
//             throw new RangeError("Wrong age!");
//         } else if (isNaN(userAge) || userrName === "" || userrStatus === "") {
//             throw new Error("The field is empty! Please enter your age/name/status!")
//         } else if (userrStatus !== "адмін" && userrStatus !== "модератор" && userrStatus !== "користувач") {
//             throw new EvalError("Please enter your status!")
//         }
//     } catch (error) {
//         alert(error.message);
//         console.log(error.stack);
//     } finally {
//         alert("You have access to watch the movie!")
//     }

// }

// checkAge();

//task-3

// function calcRectangleArea(width, height) {
//     if (typeof width !== 'number' || typeof height !== 'number') {
//         throw new TypeError('You entered the wrong number.');
//     }
//     return width * height;
// }
// let rectangleWidth = prompt('Enter width of rectangle!');
// let rectangleHeight = prompt('Enter height of rectangle!');
// try {
//     let rectangleArea = calcRectangleArea(rectangleWidth, rectangleHeight)
//     console.log(rectangleArea);

// } catch (error) {
//     alert(error.message);
//     console.log(error.stack);
// }

// task-4

// class MonthException extends Error {
//     constructor(message) {
//         super(message);
//         this.name = "MonthException";
//         this.message = message;
//     }
// }

// function showMonthName(month) {
//     try {
//         const numberOfMonth = parseInt(month);
//         if (numberOfMonth > 12 || numberOfMonth < 1 || isNaN(numberOfMonth)) {
//             throw new MonthException("Incorrect month number.");
//         }
//         const monthNames = [
//             'January', 'February', 'March', 'April', 'May', 'June',
//             'July', 'August', 'September', 'October', 'November', 'December'
//         ];
//         return monthNames[numberOfMonth - 1];

//     } catch (error) {
//         console.log(error.name);
//         console.log(error.message);
//         console.log(error.stack);

//     }
// }

// let month = prompt("Enter number of month.")
// console.log(showMonthName(month));

//task-5


function showUsers(ids) {
    const users = [];

    function showUser(id) {
        if (id < 0) {
            throw new Error(`ID must not be negative: ${id}`);
        }

        const user = {
            id: id
        };

        return user;
    }

    for (let i = 0; i < ids.length; i++) {
        const id = ids[i];

        try {
            const user = showUser(id);
            users.push(user);
        } catch (error) {
            console.error(error.name);
            console.error(error.message);
        }
    }

    return users;
}

const ids = [7, -12, 44, 22];
console.log(showUsers(ids));
