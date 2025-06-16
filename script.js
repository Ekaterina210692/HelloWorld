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


// Домашнее задание №6

// Игра 2

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
const mergedArra = [...arra[0], ...arra[1]];
console.log(mergedArra);

// Задание 10

const newArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < newArr.length; i++) {
    if (newArr[i] === 1) {
        console.log(newArr[i] + newArr[i + 1]);
        break;
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
    arr1.push(random());
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
    arr2.push(random());
}

console.log(arr2);
console.log(arr2.reduce((a, b) => a + b) / arr2.length);

//Домашнее задание №7

// Игра 3

function reverseText() {
    const inputText = prompt("Введите текст:");
    if (inputText) {
        const reversedText = inputText.split('').reverse().join('');
        alert(reversedText);
    } else {
        alert("Вы не ввели текст.");
    }
}

// Игра 4

let correctCount = 0;

function loadQuestion() {

    const quiz = [
        {
            question: "Какой цвет небо?",
            options: ["1.Красный", "2.Синий", "3.Зеленый"],
            correctAnswer: 2
        },
        {
            question: "Сколько дней в неделе?",
            options: ["1.Шесть", "2.Семь", "3.Восемь"],
            correctAnswer: 2
        },
        {
            question: "Сколько у человека пальцев на одной руке?",
            options: ["1.Четыре", "2.Пять", "3.Шесть"],
            correctAnswer: 2
        }
    ];

    quiz.forEach((question, index) => {
        let questionText = `${question.question}\n`;
        question.options.forEach((option, optionIndex) => {
            questionText += `${optionIndex + 1}. ${option}\n`;
        });

        const userAnswer = prompt(questionText);

        if (userAnswer === null) {
            alert(`Вы завершили игру досрочно`);
            return;
        }

        if (parseInt(userAnswer) === question.correctAnswer) {
            correctCount++;
        }
    });

    alert(`Вы правильно ответили на ${correctCount} вопросов из ${quiz.length}`);
}

// Работа с кодом
// задание 1

const js = prompt('Весит груша нельзя скушать?');

const jsAnswer = 'лампочка';

if (js.toLocaleUpperCase() === jsAnswer.toLocaleUpperCase()) {
    console.log('Правильно!');
} else {
    console.log('Упс, ошибка попробуй еще');
}

// задание 2

function printProducts() {
    const products = ['хлеб', 'молоко', 'сыр', 'огурцы', 'помидоры', 'кефир'];
    const bakeryProduct = 'хлеб';

    products.forEach(product => {
        if (product.toLowerCase().includes(bakeryProduct.toLowerCase())) {
            console.log(product);
        }
    });
}

// задание 3

let num3 = 32.58884;
console.log(Math.ceil(num3));
console.log(Math.floor(num3));
console.log(Math.round(num3));


// задание 4

const Numbering = [52, 53, 49, 77, 21, 32];
const minNumb = Math.min(...Numbering);

console.log(minNumb);

const max = Math.max(...Numbering);

console.log(max);

// задание 5

function random() {
    const randomNum = Math.random() * 10 + 1;

    console.log(randomNum);
}

// задание 6

function randomArray(Numbeer) {
    return Array.from({ length: Math.floor(Numbeer / 2) }, () => (Math.random() * Numbeer));
}
console.log(randomArray(10));

// задание 7

function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const randomNumbe = getRandomInteger(1, 10);
console.log(randomNumbe);

// задание 8

function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const result = getRandomInteger(41.345, 43.4533);
console.log(result);

const randomNumber = Math.random() * 10;
const resultCeil = Math.ceil(randomNumber);
console.log(`Случайное число: ${randomNumber}, ${resultCeil}`);

// задание 9

const date = new Date();
console.log(date);

// задание 10

const currentDate = new Date();

currentDate.setDate(currentDate.getDate() + 73);

console.log(currentDate);

// задание 11

function russDateFormat() {
    const now = new Date();
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
    };
    const day = now.getDate();
    const monthName = month[now.toLocaleString('en-US', { month: 'long' }).toString()];
    const year = now.getFullYear();
    const dayOfWeek = dayWeek[now.toLocaleString('en-US', { weekday: 'long' }).toString()];

    console.log(`Дата: ${day} ${monthName} ${year} — это ${dayOfWeek}.`);
}

russDateFormat();

// Домашнее задание №8 
// Игра 5

function rockPaperScissors() {
    const userChoice = prompt('Сыграем? В камень, ножницы, бумага');
    if (userChoice === null) {
        console.log('Игра отменена.');
        return;
    }
    const lowerCaseChoice = userChoice.toLowerCase();
    const choices = ["камень", "ножницы", "бумага"];

    if (!choices.includes(lowerCaseChoice)) {
        alert('Некорректный выбор. Пожалуйста, введите "камень", "ножницы" или "бумага".');
        return;
    }

    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    console.log('Выбор компьютера: ' + computerChoice);

    setTimeout(() => {
        console.log('result');
    });

    if (lowerCaseChoice === computerChoice) {
        alert('Ничья! Вы оба выбрали ' + lowerCaseChoice);
    } else if ((lowerCaseChoice === 'камень' && computerChoice === 'ножницы') ||
        (lowerCaseChoice === 'ножницы' && computerChoice === 'бумага') ||
        (lowerCaseChoice === 'бумага' && computerChoice === 'камень')) {
        alert('Вы выиграли! ' + lowerCaseChoice + ' побеждает ' + computerChoice);
    } else {
        alert('Вы проиграли! ' + computerChoice + ' побеждает ' + lowerCaseChoice);
    }
}
// задание 1

const people = [
    { name: 'Глеб', age: 29 },
    { name: 'Анна', age: 17 },
    { name: 'Олег', age: 7 },
    { name: 'Оксана', age: 47 }
];

people.sort((a, b) => a.age - b.age);

console.log(people);

// задание 2

function isPositive(num) {
    return num > 0;
}

function isMale(person) {
    return person.gender === 'male';
}

function filter(array, ruleFunction) {
    const result = [];
    for (let i = 0; i < array.length; i++) {
        if (ruleFunction(array[i])) {
            result.push(array[i]);
        }
    }
    return result;
}

console.log(filter([3, -4, 1, 9], isPositive));

const peoples = [
    { name: 'Глеб', gender: 'male' },
    { name: 'Анна', gender: 'female' },
    { name: 'Олег', gender: 'male' },
    { name: 'Оксана', gender: 'female' }
];

console.log(filter(peoples, isMale));

// задание 3

const intervalId = setInterval(() => {
    console.log('today');
}, 3000);

setTimeout(() => {
    clearInterval(intervalId);
    console.log('30 секунд прошло');
}, 30000);

// задание 4
function delayForSecond(callback) {
    setTimeout(() => {
        callback();
    }, 1000);
}
delayForSecond(() => {
    console.log('Привет, Глеб!');
});

// задание 5

function delayForSecond(cb) {
    setTimeout(() => {
        console.log('Прошла одна секунда');
        if (cb) { cb(); }
    }, 1000)
}

function sayHi(name) {
    console.log(`Привет, ${name}!`); 4
}

delayForSecond(() => sayHi('Глеб'));

// Игра № 6

function randomColorGenerator() {
        const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
        document.getElementById('color').style.backgroundColor = randomColor;
        console.log('Сгенерированный цвет: ', randomColor);
        document.getElementById('result').textContent = `Сгенерированный цвет: ${randomColor}`;
      }