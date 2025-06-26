
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
        alert("Пожалуйста, введите число от 1 до 100.");
    } else if (guess === guessRandomNumber) {
        alert("Поздравляю, ты угадал!");
    } else {
        alert(`Попробуй ещё раз. Я загадал число ${guessRandomNumber}.`);
    }
}

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
        alert('Игра отменена.');
        return;
    }

    const parsedUserAnswer = parseFloat(userAnswer);

    if (parsedUserAnswer === result) {
        alert('Правильно!');
    } else {
        alert(`Неправильно. Правильный ответ: ${result}`);
    }
}

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

// Игра 5

function rockPaperScissors() {
    const userChoice = prompt('Сыграем? В камень, ножницы, бумага');
    if (userChoice === null) {
        alert(`Игра отменена.`);
        return;
    }
    const lowerCaseChoice = userChoice.toLowerCase();
    const choices = ["камень", "ножницы", "бумага"];

    if (!choices.includes(lowerCaseChoice)) {
        alert('Некорректный выбор. Пожалуйста, введите "камень", "ножницы" или "бумага".');
        return;
    }

    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    alert('Выбор компьютера: ' + computerChoice);

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
// Игра № 6

function randomColorGenerator() {
        const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
        document.getElementById('color').style.backgroundColor = randomColor;
        console.log('Сгенерированный цвет: ', randomColor);
      }