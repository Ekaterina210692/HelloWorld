

// // Домашнее задание №5

// // Игра 1

// function guessNumber() {
//     const guessRandomNumber = Math.floor(Math.random() * 100) + 1;
//     const operations = ['умножил на 3', 'прибавил 6'];
//     const operationIndex = Math.floor(Math.random() * operations.length);
//     let resultNumber;

//     if (operationIndex === 0) {
//         resultNumber = guessRandomNumber * 3;
//     } else {
//         resultNumber = guessRandomNumber + 6;
//     }

//     const guess = parseInt(prompt(`Я загадал число, ${operations[operationIndex]} и получил ${resultNumber}. Угадай моё число от 1 до 100`), 10);

//     if (isNaN(guess) || guess < 1 || guess > 100) {
//         console.log("Пожалуйста, введите число от 1 до 100.");
//     } else if (guess === guessRandomNumber) {
//         console.log("Поздравляю, ты угадал!");
//     } else {
//         console.log(`Попробуй ещё раз. Я загадал число ${guessRandomNumber}.`);
//     }
// }
// console.log(guessNumber());


// // Домашнее задание №6

// // Игра 2

// function getRandomInt(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// function generateTask() {
//     const num1 = getRandomInt(1, 20);
//     const num2 = getRandomInt(1, 20);
//     const operators = ['+', '-', '*', '/'];
//     const operator = operators[getRandomInt(0, operators.length - 1)];

//     let task;
//     let correctAnswer;

//     switch (operator) {
//         case '+':
//             task = `${num1} + ${num2}`;
//             correctAnswer = num1 + num2;
//             break;
//         case '-':
//             task = `${num1} - ${num2}`;
//             correctAnswer = num1 - num2;
//             break;
//         case '*':
//             task = `${num1} * ${num2}`;
//             correctAnswer = num1 * num2;
//             break;
//         case '/':
//             task = `${num1} / ${num2}`;
//             correctAnswer = num1 / num2;
//             break;
//     }

//     return { task, correctAnswer };
// }

// function playGame() {
//     const { task, correctAnswer } = generateTask();
//     const userAnswer = prompt(`Решите задачу: ${task}`);

//     if (userAnswer === null) {
//         alert('Игра отменена.');
//         return;
//     }

//     const parsedUserAnswer = parseFloat(userAnswer);

//     if (parsedUserAnswer === correctAnswer) {
//         document.getElementById('result').textContent = 'Правильно!';
//     } else {
//         document.getElementById('result').textContent = `Ошибка. Правильный ответ: ${correctAnswer}`;
//     }
// }
// playGame();

// Задания на работу с кодом
// Задание 1
// Дан массив: [1, 5, 4, 10, 0, 3]. Создайте цикл, который будет выводить элементы массива до тех пор, пока не встретит значение 
// 10. После вывода значения 10 в консоль цикл должен прекратить свою работу.

const numbs = [1, 5, 4, 10, 0, 3];
for (let i = 0; i < numbs.length; i++) {
    console.log(numbs[i]);
    if (numbs[i] === 10) {
        break;
    }
}

// Задание 2
// Дан массив: [1, 5, 4, 10, 0, 3]. Найдите индекс значения 4 в этом массиве.


const num = [1, 5, 4, 10, 0, 3];
const index = num.indexOf(4);
console.log(index);

// Задание 3
// Дан массив чисел: [1, 3, 5, 10, 20]. С помощью метода join выведите элементы массива через пробел (пустую строку ' ').

let arr = [1, 3, 5, 10, 20];
arr = arr.join(' ');
console.log(arr);


// Задание 4
// С помощью вложенных циклов создайте многомерный массив вида: [[1, 1, 1], [1, 1, 1], [1, 1, 1]].

let multidimensionalArray = [];

for (let i = 0; i < 3; i++) {
    multidimensionalArray[i] = [];
    for (let j = 0; j < 3; j++) {
        multidimensionalArray[i][j] = 1;
    }
}

console.log(multidimensionalArray);

// Задание 5
// Дан массив: [1, 1, 1]. Добавьте в конец массива значения 2, 2, 2.

let array = [1, 1, 1];
array.push(2, 2, 2);
console.log(array);

// Задание 6
// Дан массив: [9, 8, 7, 'a', 6, 5]. С помощью метода sort отсортируйте массив и удалите букву 'a' из массива. Затем выведите массив.

const sortFilt = [9, 8, 7, 'a', 6, 5];
sortFilt.sort();
const filteredArr = sortFilt.filter((item) => item !== 'a');
console.log(filteredArr);

// Задание 7
// Дан массив: [9, 8, 7, 6, 5]. Попросите пользователя угадать число с помощью метода prompt. 
// Если значение, которое ввел пользователь, есть в массиве, выведите в alert «Угадал», в противном случае — «Не угадал».

let guessNumb = [9, 8, 7, 6, 5];
let numb = prompt('угадай число')
if (guessNumb.includes(Number(numb))) {
    alert('«Угадал»');
} else {
    alert('«Не угадал»');

}

// Задание 8
// Дана строка: 'abcdef'. Выведите в консоль 'fedcba'.

const string = ['abcdef'];
const reversedString = string[0].split('').reverse().join('');
console.log(reversedString);

// Задание 9
// Дан массив: [[1, 2, 3],[4, 5, 6]]. Выведите в консоль массив вида: [1, 2, 3, 4, 5, 6].

const arra = [[1, 2, 3], [4, 5, 6]];
const mergedArra = [...arra[0], ...arra[1]];
console.log(mergedArra);

// Задание 10

const newArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < newArr.length; i++) {
    if (newArr[i = 1]) {
        console.log(newArr[i] + newArr[i + 1]);
    }
}