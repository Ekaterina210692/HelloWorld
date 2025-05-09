

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
    const num1 = getRandomInt(1, 20);
    const num2 = getRandomInt(1, 20);
    const operators = ['+', '-', '*', '/'];
    const operator = operators[getRandomInt(0, operators.length - 1)];

    let task;
    let correctAnswer;

    switch (operator) {
        case '+':
            task = `${num1} + ${num2}`;
            correctAnswer = num1 + num2;
            break;
        case '-':
            task = `${num1} - ${num2}`;
            correctAnswer = num1 - num2;
            break;
        case '*':
            task = `${num1} * ${num2}`;
            correctAnswer = num1 * num2;
            break;
        case '/':
            task = `${num1} / ${num2}`;
            correctAnswer = num1 / num2;
            break;
    }

    return { task, correctAnswer };
}

function playGame() {
    const { task, correctAnswer } = generateTask();
    const userAnswer = prompt(`Решите задачу: ${task}`);

    if (userAnswer === null) {
        alert('Игра отменена.');
        return;
    }

    const parsedUserAnswer = parseFloat(userAnswer);

    if (parsedUserAnswer === correctAnswer) {
        document.getElementById('result').textContent = 'Правильно!';
    } else {
        document.getElementById('result').textContent = `Ошибка. Правильный ответ: ${correctAnswer}`;
    }
}
playGame();

// Задания на работу с кодом
// Задание 1
// Дан массив: [1, 5, 4, 10, 0, 3]. Создайте цикл, который будет выводить элементы массива до тех пор, пока не встретит значение 
// 10. После вывода значения 10 в консоль цикл должен прекратить свою работу.

