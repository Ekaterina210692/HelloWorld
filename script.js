

// Домашнее задание №5

// Игра 1

function guessNumber() {
  const guessRandomNumber = Math.floor(Math.random() * 100) + 1;
  const operations = ['умножил на 3', 'прибавил 6'];
  const operationIndex = Math.floor(Math.random() * operations.length);
  let resultNumber;

  if (operationIndex === 0) {
    resultNumber = guessRandomNumber * 3;
  } else {
    resultNumber = guessRandomNumber + 6;
  }

  const guess = parseInt(prompt(`Я загадал число, ${operations[operationIndex]} и получил ${resultNumber}. Угадай моё число от 1 до 100`), 10);

  if (isNaN(guess) || guess < 1 || guess > 100) {
    console.log("Пожалуйста, введите число от 1 до 100.");
  } else if (guess === guessRandomNumber) {
    console.log("Поздравляю, ты угадал!");
  } else {
    console.log(`Попробуй ещё раз. Я загадал число ${guessRandomNumber}.`);
  }
}
console.log(guessNumber());


// // // Домашнее задание №6

// // // Игра 2

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateTask() {
  const num1 = getRandomInt(1, 10);
  const num2 = getRandomInt(1, 10);
  const operators = ['+', '-', '*', '/'];
  const operator = operators[getRandomInt(0, operators.length - 1)];

  let task;
  let result;

  switch (operator) {
    case '+':
      task = `${num1} + ${num2}`;
      result = num1 + num2;
      break;
    case '-':
      task = `${num1} - ${num2}`;
      result = num1 - num2;
      break;
    case '*':
      task = `${num1} * ${num2}`;
      result = num1 * num2;
      break;
    case '/':
      task = `${num1} / ${num2}`;
      result = num1 / num2;
      break;
  }

  return { task, result };
}

function playGame() {
  const { task, result } = generateTask();
  const userAnswer = prompt(`Решите задачу: ${task}`);

  if (userAnswer === null) {
    console.log('Игра отменена.');
    return;
  }

  const parsedUserAnswer = parseFloat(userAnswer);

  if (parsedUserAnswer === result) {
    console.log('Правильно!');
  } else {
    console.log(`Неправильно. Правильный ответ: ${result}`);
  }
}

// Задание 1

const numbs = [1, 5, 4, 10, 0, 3];
for (let i = 0; i < numbs.length; i++) {
  console.log(numbs[i]);
  if (numbs[i] === 10) {
    break;
  }
}

// Задание 2

const num = [1, 5, 4, 10, 0, 3];
const index = num.indexOf(4);
console.log(index);

// Задание 3

let arr = [1, 3, 5, 10, 20];
arr = arr.join(' ');
console.log(arr);

// Задание 4

let multidimensionalArray = [];

for (let i = 0; i < 3; i++) {
  multidimensionalArray[i] = [];
  for (let j = 0; j < 3; j++) {
    multidimensionalArray[i][j] = 1;
  }
}

console.log(multidimensionalArray);

// Задание 5

let array = [1, 1, 1];
array.push(2, 2, 2);
console.log(array);

// Задание 6

const sortFilt = [9, 8, 7, 'a', 6, 5];
sortFilt.sort();
const filteredArr = sortFilt.filter((item) => item !== 'a');
console.log(filteredArr);

// Задание 7

let guessNumb = [9, 8, 7, 6, 5];
let numb = prompt('угадай число')
if (guessNumb.includes(Number(numb))) {
  alert('«Угадал»');
} else {
  console.log('«Не угадал»');

}

// Задание 8

const string = ['abcdef'];
const reversedString = string[0].split('').reverse().join('');
console.log(reversedString);

// Задание 9

const arra = [[1, 2, 3], [4, 5, 6]];
const mergedArra = array.flat();
console.log(mergedArra);

// Задание 10

const newArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < newArr.length; i++) {
  if (newArr[i = 1]) {
    console.log(newArr[i] + newArr[i + 1]);
  }
}

// Задание 11

function integers(arr) {
  return arr.map(item => item ** 2);
}

console.log(integers([1, 2, 3]));

// Задание 12

function getLength(arr) {
  return arr.map(item => item.length);
}
console.log(getLength(['добро', 'зло']));

// Задание 13

function negativeValues(array) {
  return array.filter(item => item < 0);

}
console.log(negativeValues([1, 2, 3, -4, 5, -6, 7, 8, 9, 10]));

// Задание 14 

function random() {
  return Math.floor(Math.random() * 10);
}

const arr1 = [];
for (let i = 0; i < 10; i++) {
  arr.push(random());
}
const evenArr = [];
for (let i = 0; i < arr1.length; i++) {
  if (arr1[i] % 2 === 0) {
    evenArr.push(arr1[i]);
  };

}
console.log(evenArr);

// Задание 15 

function random() {
  return Math.floor(Math.random() * 10);
}

const arr2 = [];
for (let i = 0; i < 3; i++) {
  arr.push(random());
}

console.log(arr2);
console.log(arr2.reduce((a, b) => a + b) / arr2.length);

//Домашнее задание №7

// Игра 3

function reverseText() {
  const inputText = prompt('Введите текст, который нужно перевернуть');
  if (inputText !== null) {
    const reversedText = inputText.split('').reverse().join('');
    document.getElementById('result').textContent = reversedText.toLowerCase();
  }
}

// Игра 4

const quiz = [
  {
    question: "Какой цвет небо?",
    options: ["1. Красный", "2. Синий", "3. Зеленый"],
    correctAnswer: 2
  },
  {
    question: "Сколько дней в неделе?",
    options: ["1. Шесть", "2. Семь", "3. Восемь"],
    correctAnswer: 2
  },
  {
    question: "Сколько у человека пальцев на одной руке?",
    options: ["1. Четыре", "2. Пять", "3. Шесть"],
    correctAnswer: 2
  }
];

let currentQuestionIndex = 0;
let score = 0;

function loadQuestion() {
  const question = quiz[currentQuestionIndex].question;
  const options = quiz[currentQuestionIndex].options;
  let promptMessage = `${question}\n\n`;
  options.forEach((option, index) => {
    promptMessage += `${index + 1}. ${option}\n`;
  });

  const selectedOption = prompt(promptMessage);
  if (selectedOption !== null) {
    const chosenIndex = parseInt(selectedOption) - 1;
    checkAnswer(options[chosenIndex]);
  } else {
    console.log("Игра завершена. Вы не ответили на все вопросы.");
    showFinalScore();
  }
}

function checkAnswer(selectedOption) {
  score = selectedOption === quiz[currentQuestionIndex].correctAnswer ? score + 1 : score;
  currentQuestionIndex++;
  currentQuestionIndex < quiz.length ? loadQuestion() : showFinalScore();
}

function showFinalScore() {
  console.log(`Вы правильно ответили на ${score} вопросов.`);
}

loadQuestion();

// Работа с кодом
// задние 1

const js = prompt('Весит груша нельзя скушать?');

const jsAnswer = 'лампочка';

if (js.toLocaleUpperCase() === jsAnswer.toLocaleUpperCase()) {
  console.log('Правильно!');
} else {
  console.log('Упс, ошибка попробуй еще');
}

// задние 2

function printProducts() {
  const products = ['хлеб', 'молоко', 'сыр', 'огурцы', 'помидоры', 'кефир'];
  const bakeryProduct = 'хлеб';

  products.forEach(product => {
    if (product.toLowerCase().includes(bakeryProduct.toLowerCase())) {
      console.log(product);
    }
  });
}

// задние 3

Math.ceil(32.58884);
console.log(33);
Math.floor(32.58884);
console.log(32);
Math.round(32.58884);
console.log(33);

// задние 4

const Numbering = [52, 53, 49, 77, 21, 32];

const minNumb = Math.min(...Numbering);
console.log(minNumb);

const max = Math.max(...Numbering);
console.log(max);

// задние 5

function random() {
  const randomNum = Math.random() * 10 + 1;

  if (randomNum >= 1 && randomNum <= 10) {
    console.log(randomNum);
  } else {
    console.log('Попробуй еще');
  }
}

// задние 6

function randomArray(maxNumber) {
  const arrayLength = Math.floor(maxNumber / 2);
  const emptyArray = [];

  for (let i = 0; i < arrayLength; i++) {
    const randomNumber = Math.floor(Math.random() * (maxNumber + 1));
    emptyArray.push(randomNumber);
  }

  return emptyArray;
}

// задние 7

function integers() {
  const integetsNumb = [41, 42];
  const minNumb = Math.min(...Numbering);
  console.log(minNumb);

  const max = Math.max(...Numbering);
  console.log(max)

}

// задние 8

function getRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const result = getRandomInteger(41.345, 43.4533);
console.log(result);

const randomNumber = Math.random() * 10;
const resultCeil = Math.ceil(randomNumber);
console.log(`Случайное число: ${randomNumber}, ${resultCeil}`);

// задние 9

const Date = new Date();


// задние 10

const currentDate = new Date();

currentDate.setDate(currentDate.getDate() + 73);

console.log(currentDate);

// pflfybt 11

function russDateFormat() {
  const now = new Date;
  const month = {
    "January": "января",
    "February": "февраля",
    "March": "марта",
    "April": "апреля",
    "May": "мая",
    "June": "июня",
    "July": "июля",
    "August": "августа",
    "September": "сентября",
    "October": "октября",
    "November": "ноября",
    "December": "декабря"
  }

  const dayWeek = {
    "Monday": "понедельник",
    "Tuesday": "вторник",
    "Wednesday": "среда",
    "Thursday": "четверг",
    "Friday": "пятница",
    "Saturday": "суббота",
    "Sunday": "воскресенье"
  }
  console.log("now");
};
const day = now.getDate();
const monthName = month[now.toLocaleString('en-US', { month: 'long' }).toString()];
const year = now.getFullYear();
const dayOfWeek = dayWeek[now.toLocaleString('en-US', { weekday: 'long' }).toString()];

console.log(`Дата: ${day} ${monthName} ${year} — это ${dayOfWeek}.`);
