// task-1

class Circle {
  constructor(x, y, radius) {
    this.x = x;
    this.y = y;
    this.radius = radius;
  }

  calcCircleLength() {
    return 2 * this.radius * Math.PI;
  }

  static circleLength(radius) {
    return 2 * radius * Math.PI;
  }

  copyObj() {
    let circleCopy = Object.assign({}, firstCircle);
    return circleCopy;
  }

  static circleCreateParam(x, y, radius) {
    return new Circle(x, y, radius);
  }

  //формула відстані між двома точками у двовимірному просторі, яка використовує теорему Піфагора
  //Попадання у раніше задане коло статичним методом - static circleCreateParam(x, y, radius)
  hittingPointInCircle(pointX, pointY) {
    let pointDistance = Math.sqrt(
      Math.pow(pointX - this.x, 2) + Math.pow(pointY - this.y, 2)
    );
    if (pointDistance <= this.radius) {
      console.log("The point is in the middle or on the border of the circle.");
    } else {
      console.log("The point is outside the circle.")
    };
  }
//в рядок (не змогла знайти метод, що перетворює автоматично)
  toString() {
    return `Circle with center (${this.x}, ${this.y}) and radius ${this.radius}`;
  }
}
//Довжина кола для поточного об'єкта
let firstCircle = new Circle(2, 1, 2);
console.log(firstCircle);
let circumference = firstCircle.calcCircleLength();
console.log(circumference);
//Довжина кола(статичний метод)
let circumference2 = Circle.circleLength(5);
console.log(circumference2);
//Створення копії об'єкта
let secondCircle = firstCircle.copyObj();
console.log(secondCircle);
//Повеернення об'єкта кола за заданими параметрами
let thirdCircle = Circle.circleCreateParam(0, 1, 5);
console.log(thirdCircle);
//Попадання точки в коло - виклик методу
thirdCircle.hittingPointInCircle(1, 0);
thirdCircle.hittingPointInCircle(6, 7);
//Перетворення об'єкта на символьний рядок
console.log(firstCircle.toString());



//task-2

// варіант 1
function propsCount(currentObject) {
  return Object.keys(currentObject).length;
}

// варіант 2
function propsCount(currentObject) {
  let count = 0;
  for (let key in currentObject) {
    count++;
  }
  return count;
}

let mentor = {
  course: "JS Fundamental",
  duration: 3,
  direction: "web-development",
};

console.log(propsCount(mentor));

//task-3

class Person {
  constructor(name, surname) {
    this.name = name;
    this.surname = surname;
  }

  showFullName() {
    return this.name + " " + this.surname;
  }
}

const person1 = new Person("Olha", "Hrytsak");
console.log(person1);
person1.showFullName();

class Student extends Person {
  constructor(name, surname, year) {
    super(name, surname);
    this.year = year;
  }

  showFullName(middleName) {
    return super.showFullName() + " " + middleName;
  }

  showCourse() {
    const currentYear = new Date().getFullYear();
    return currentYear - this.year;
  }
}

const stud1 = new Student("Petro", "Petrenko", 2019);
console.log(stud1.showFullName("Petrovuch")); // Виведе "Petro Petrenko Petrovuch"
console.log("Current course: " + stud1.showCourse());

//task-4

class SimpleMarker {
  constructor(colour, inkPercentage) {
    this.colour = colour;
    this.inkPercentage = inkPercentage;
  }

  printMetod(str) {
    if (this.inkPercentage > 0) {
      console.log(`%cPrinting text: ${str}`, `color: ${this.colour}`);
      this.inkPercentage -= 0.5 * (str.length - 1);
    } else {
      console.log("The marker is out of ink");
    }
  }
}

class RefuelingMarker extends SimpleMarker {
  constructor(colour, inkPercentage) {
    super(colour, inkPercentage);
  }
  refillInk(str) {
    super.printMetod(str);
    if (this.inkPercentage < 100) {
      console.log(
        `Ink refilled. Current ink percentage: ${this.inkPercentage}`
      );
      let amountOfInc = 100 - this.inkPercentage;
      this.inkPercentage += amountOfInc;
      console.log(`You have just added ${amountOfInc} ink to the marker`);
    }
  }
}

const firstMarker = new SimpleMarker("green", 100);
console.log(firstMarker.inkPercentage);
firstMarker.printMetod("Hello world!");
console.log(firstMarker.inkPercentage);

const secondMarker = new RefuelingMarker("red", 75);
console.log(secondMarker.inkPercentage);
secondMarker.refillInk("Hello world!");
console.log(secondMarker.inkPercentage);

//task-5

class Worker {
  constructor(fullName, dayRate, workingDays) {
    this.fullName = fullName;
    this.dayRate = dayRate;
    this.workingDays = workingDays;
    this.#experience = 1.2;
  }

  showSalary() {
    let salary = this.dayRate * this.workingDays;
    console.log(`salary: ${salary}`);
  }

  #experience;
  getExp() {
    return this.#experience;
  }

  setExp(value) {
    this.#experience = value;
  }

  showSalaryWithExperience() {
    let salaryExp = this.dayRate * this.workingDays * this.#experience;
    console.log(`salary with experience: ${salaryExp}`);
  }

  //Публічний метод для отримання інформації про робітника та розмір ЗП

  getWorkerInfo() {
    const salaryExp = this.dayRate * this.workingDays * this.#experience;
    return {
      fullName: this.fullName,
      salaryWithExperience: salaryExp,
    };
  }

  //Метод сортування робітників за розміром ЗП(з досвідом)
  static sortBySalary(workers) {
    return workers.sort((a, b) => {
      return a.salaryWithExperience - b.salaryWithExperience;
    });
  }
}

let worker1 = new Worker("John Johnson", 20, 23);
console.log(worker1.fullName);
worker1.showSalary();
console.log(`New experience: ${worker1.getExp()}`);
worker1.showSalaryWithExperience();
worker1.setExp(1.5);
console.log(`New experience: ${worker1.getExp()}`);
worker1.showSalaryWithExperience();

let worker2 = new Worker("Tom Thomson", 48, 22);
console.log(worker2.fullName);
worker2.showSalary();
console.log(`New experience: ${worker2.getExp()}`);
worker2.showSalaryWithExperience();
worker2.setExp(1.5);
console.log(`New experience: ${worker2.getExp()}`);
worker2.showSalaryWithExperience();

let worker3 = new Worker("Andy Ander", 35, 22);
console.log(worker3.fullName);
worker3.showSalary();
console.log(`New experience: ${worker3.getExp()}`);
worker3.showSalaryWithExperience();
worker3.setExp(1.5);
console.log(`New experience: ${worker3.getExp()}`);
worker3.showSalaryWithExperience();

const workers = [];
workers.push(worker1.getWorkerInfo());
workers.push(worker2.getWorkerInfo());
workers.push(worker3.getWorkerInfo());

console.log(workers);

for (let worker of workers) {
  const workerObj = new Worker(worker.fullName, 0, 0);
  workerObj.setExp(workerObj.getExp());
  workerObj.showSalaryWithExperience();
}

const sortedWorkers = Worker.sortBySalary(workers);
console.log(sortedWorkers);
