//task - 1

//Тест пройдено
let regexp = /^[A-Z]/g;
function upperCase(str) {
  if (regexp.test(str)) {
    return "String starts with uppercase character";
  } else {
    return "String do not starts with uppercase character";
  }
}

console.log(upperCase("regexp"));
console.log(upperCase("RegExp"));

//task - 2

let reg = /^(\w+)\@(\w+)\.[a-z]+/;
function checkEmail(str) {
  if (reg.test(str)) {
    return "Your mail is correct!";
  } else {
    return "Your mail isn't correct!";
  }
}

console.log(checkEmail("Qmail2@gmail.com"));
console.log(checkEmail("#Qmail2@gmail.com"));

//task - 3

//Варіанти працюють але тести на mod/quiz не проходять!!!!!!
let replaseResult = "Java Script".replace(/(\w+)\s(\w+)/, "$2, $1");
console.log(replaseResult);

let regex = "Java Script";
let swappedText = regex.replace(/(\w+)\s(\w+)/, "$2, $1");
console.log(swappedText);

//task - 4

//Тести пройшли обидва варіанти
function validateCard(str) {
  if (str.match(/^([0-9]{4})-([0-9]{4})-([0-9]{4})-([0-9]{4})$/)) {
    return "Cart number is correct!";
  } else {
    return "Cart number is not correct!";
  }
}
console.log(validateCard("9999-9999-9999-9999"));
console.log(validateCard("1234-5678-12-56"));

function validateCard(str) {
  if (str.match(/^(\d{4}-){3}\d{4}$/)) {
    return "Cart number is correct!";
  } else {
    return "Cart number is not correct!";
  }
}
console.log(validateCard("9999-9999-9999-9999"));
console.log(validateCard("1234-5678-12-56"));

//task - 5

function checkEmail(str) {
  if (str.match(/^([A-Za-z0-9]+_[A-Za-z0-9]*(\-{1})?\w+)\@[a-z]+\.[a-z]+$/)) {
    return "Your mail is correct!";
  } else {
    return "Your mail isn't correct!";
  }
}
console.log(checkEmail("my_mail@gmail.com"));
console.log(checkEmail("#my_mail@gmail.com"));
console.log(checkEmail("my_ma--il@gmail.com"));

//Це перевірка мейлу із задачі в мудлі. В мене працює, а тести не проходить

function checkEmail(str) {
  if (str.match(/^[A-Za-z0-9_%+.-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/)) {
    return "Your mail is correct!";
  } else {
    return "Your mail isn't correct!";
  }
}
console.log(checkEmail("john.doe@example.com"));
console.log(checkEmail("jane_smith@example.co.uk"));
console.log(checkEmail("john.doe@example"));
console.log(checkEmail("jane_smith@examplecom"));

//task - 6

// Не проходить один тест
let RegExp = /^(?![0-9])[a-z0-9.]{2,10}\.?$/;

function checkLogin(str) {
  let isValid = RegExp.test(str);
  let numbers = str.match(/[0-9]*\.?[0-9]+/g) || [];
  return { isValid, numbers };
}

console.log(checkLogin("ee1.1ret3"));
console.log(checkLogin("ee1*1ret3"));
console.log(checkLogin("1ee1.1ret3"));

//task - 7 Ускладнене

const submitButton = document.querySelector("#createAccount");

submitButton.addEventListener("click", function (event) {
  event.preventDefault();

  const fullName = document.querySelector("#fullName").value;
  const email = document.querySelector("#email").value;
  const phone = document.querySelector("#phone").value;
  const password = document.querySelector("#password").value;
  const confirmPassword = document.querySelector("#confirmPassword").value;
  const flexCheckDefault = document.querySelector("#flexCheckDefault");

  let isValidFullName = /^[A-Z]{1}[a-z]+ [A-Z]{1}[a-z]+$/.test(fullName)
    ? "FullName is valid"
    : alert("You entered incorrect Full Name");
  let isValidEmail = /^[A-Za-z0-9_]+@gmail.com/.test(email)
    ? "Email is valid"
    : alert("You entered incorrect Email");
  let isValidPhone = /[0-9]{10}/.test(phone)
    ? "Phone is valid"
    : alert("You entered incorrect Phone");
  let isValidPassword = /[0-9A-Za-z]{10}/.test(password)
    ? "Password is valid"
    : alert("You entered incorrect Password");
  let isValidConfirmPassword =
    confirmPassword === password
      ? "ConfirmPassword is valid"
      : alert("You entered incorrect confirm password");

  flexCheckDefault.addEventListener("change", function () {
    const message = this.checked
      ? "the label is placed"
      : alert("the label isn't placed");
    console.log(message);
  });

  console.log(isValidFullName);
  console.log(isValidEmail);
  console.log(isValidPhone);
  console.log(isValidPassword);
  console.log(isValidConfirmPassword);
});
