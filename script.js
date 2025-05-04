// //Создайте переменную a. Запишите в нее значение 10, выведите его на экран с помощью метода alert(). Затем запишите в нее же значение 20, выведите его на экран. 
// let a = 10;
// alert(a);
// a = 20;
// alert(a);

// // Создайте переменную и присвойте ей значение года выпуска первого iPhone. Выведите значение переменной на экран.
// const date = 2007;
// alert(2007);

// // Создайте переменную и присвойте ей значение имени создателя языка JavaScript. Выведите значение переменной на экран.
// const nameCreatedJS = 'Брендан Эйх';
// alert('Брендан Эйх');

// // Создайте две переменные: 10 и 2. С помощью метода alert() выведите на экран их сумму, разность, произведение и частное (результат деления).
// let A = 10;
// let b = 2;
// alert(A + b);
// alert(A - b);
// alert(A * b);
// alert(A / b);

// // Возведите 2 в 5-ю степень. Результат запишите в переменную result и выведите на экран с помощью метода alert()
// let result = 2 ** 5;
// alert(result);

// // Даны переменные: a = 9 и b = 2. Найдите остаток от деления a на b и выведите результат на экран с помощью метода alert()
// let c = 9;
// let B = 2;
// alert(c % B);

// // Перепишите код с использованием операторов присваивания и инкремента/декремента (количество строк должно остаться прежним): 
// let num = 1;
// num += 5;
// num -= 3;
// num *= 7;
// num /= 3;
// num += 1;
// num -= 1;
// alert(num);

// // Создайте переменную age, присвойте ей значение с помощью метода prompt()«Сколько вам лет?». Результат выведите с помощью alert()
// let age = prompt('Сколько вам лет?');
// alert(age);

// // Создайте объект user, у которого есть следующие свойства: name, age, isAdmin. Значения для свойств придумайте произвольные. Обратите внимание, что для свойства name значение должно быть строковым, для age — числовым, а для isAdmin — булевым
// const user = {
//   name: 'Ekaterina',
//   age: 32,
//   isAdmin: true,
// }

// // С помощью метода prompt()спросите у пользователя его имя и сохраните в переменную. С помощью метода alert() выведите на экран шаблонную строку: Привет, ИМЯ!
// let userName = prompt("Как Ваше имя?");
// alert(`Привет, ${userName}!`);

// // Дополнительное задание
// let number = prompt('Загадай число');
// let i =number;
// alert('Загаданное число умнож 2');
// alert('К полученному числу прибавь  10');
// alert('Результат раздели на 2');
// alert('Из результата отнеми число которое загадал');

// let result = ((number * 2 + 10) / 2 - number);
// alert(`Результат: ${result}`);

// // домашнее задание №3 Создайте программу проверки правильности введенного пароля по следующему алгоритму:
// let password = 'пароль';
// let input = prompt('Введите пароль');
// if (input === password) {
//   alert('Пароль введен верно');
// } else {
//   alert('Пароль введен неправильно');
// }
// // Создайте переменную с и запишите в нее любое число. Если с больше 0 и меньше 10, то выведите в консоль «Верно», иначе выведите «Неверно».Проверьте работу скрипта при значении переменной c, равной 0,10,−3, 2.

// let с = Number(prompt('Введите число'));
// if (с > 0 && с < 10) {
//   alert('«Верно»');
// } else {
//   alert('«Неверно»');
// }

// // Создайте две переменные — d и e, запишите в них любые числа. Если одна из переменных больше 100, выведите в консоль «Верно», иначе выведите «Неверно».

// let d = Number(prompt('Введите первое число'));
// let e = Number(prompt('Введите второе число'));

// if (d > 100 || e > 100) {
//   console.log(`Верно`);
// } else {
//   console.log(`Неверно`);
// }

// // Исправьте код с помощью преобразования типов, чтобы на экран выводилось число 5, а не строка '23'.

// let a = '2';
// let b = '3';
// // Код выше изменять менять нельзя. Чтобы решить задачу исправьте код ниже:
// alert(+a + +b);

// // задание 5 написать программу

// let monthNumber = Number(prompt('Введите номер месяца'));
// switch (monthNumber) {
//   case 1:
//   case 2:
//   case 12:
//     console.log('Зима');
//     break;
//   case 3:
//   case 4:
//   case 5:
//     console.log('Весна');
//     break;
//   case 6:
//   case 7:
//   case 8:
//     console.log('Лето');
//     break;
//   case 9:
//   case 10:
//   case 11:
//     console.log('Осень');
//     break;
//   default:
//     if (monthNumber > 12) {
//       console.log('Номер месяца больше 12, программа не работает');
//     }
// }

// // дополнительное задание 1

// let evenOddNumbers = Number(prompt('Пожалуйста, введите любое число'));

// if (evenOddNumbers % 2 === 0) {
//   alert("Число чётное");
// } else {
//   alert("Число нечётное");
// }

// // дополнительное задание 2

// let clientOS = Number(prompt('Установите приложение'));

// if (clientOS === 0) {
//   alert('Установите версию приложения для iOS по ссылке');
// } else if (clientOS === 1) {
//   alert("Установите версию приложения для Android по ссылке.");
// } else {
//   alert('Некорректный выбор. Пожалуйста, введите 0 или 1');
// }

// // дополнительное задание 3

// let clientOs = 0;
// let clientDeviceYear = 2015;

// if (clientDeviceYear < 2015 && clientOs === 0) {
//   console.log('Установите облегченную версию приложения для iOS по ссылке');
// } else if (clientOs === 0) {
//   console.log('Установите при любой другой ОС по ссылке');
// } else {
//   console.log('Установите облегчённую версию приложения для Android по ссылке');
// }

// hw-4 
// Задание 1. Выведите в консоль 2 раза слово «Привет».

// let i =0;
// while (i < 2) {
//   alert('привет')
//   i++
// }

// // Задание 2. Выведите в консоль цифры от 1 до 5.

// let i =1;
// do {
//   console.log(i);
//   i++;
// } while (i<=5);

// // Заданий 3. Выведите в консоль числа от 7 до 22

// let i =7;
// do {
//   console.log(i);
//   i++;
// } while (i<=22);

// Задание 4. 

// let i = prompt('Введи имя работника');
// const obj = {
//   "Коля": '200',
//   "Вася": '300',
//   "Петя": '400'
// };
// for (let name in obj) {
//   console.log(`${name} — зарплата ${obj[name]} долларов`);
// }

// Задание 5.

// let n = 1000;
// let num = 0;

// while (n >= 50) {
//   n = n / 2;
//   num++;
// }
// console.log('Результат:', n);
// console.log('Количество итераций:', num);

// // Задание 6

// const firstFriday = 4;
// const daysInMonth = 31;

// let currentDate = firstFriday;
// while (currentDate <= daysInMonth) {
//   alert(`Сегодня пятница, ${currentDate}-е число. Необходимо подготовить отчёт.`);
//   currentDate += 7;
// }


// // Домашнее задание №5

// function guessNumber() {
//     const guessRandomNumber = Math.floor(Math.random() * 100) + 1;
//     const guess = parseInt(prompt("Загадай число от 1 до 100"), 10);

//     if (isNaN(guess) || guess < 1 || guess > 100) {
//         document.getElementById('result').textContent = "Пожалуйста, введите число от 1 до 100.";
//     } else if (guess === guessRandomNumber) {
//         document.getElementById('result').textContent = "Поздравляю, ты угадал!";
//     } else if (guess < guessRandomNumber) {
//         document.getElementById('result').textContent = "Попробуй больше.";
//     } else {
//         document.getElementById('result').textContent = "Попробуй меньше.";
//     }
// }
// console.log(guessNumber());

// // Задания на работу с кодом Задание 1

// function min(a, b) {
//     if (a > b) {
//         return b;
//     } else {
//         return a;
//     }
// }
// console.log(min(8, 4));
// console.log(min(6, 6));

// // Задание 2

// function isEven(number) {
//     if (number % 2 === 0) {
//         return 'Число четное';
//     } else {
//         return 'Число нечетное';
//     }
// }

// console.log(isEven(4));
// console.log(isEven(7));

// // Задание 3 

// function squareNumber(number) {
//     return number **2;
// }
// console.log(squareNumber(12));

// // Задание 4
// let age = +prompt('Сколько Вам лет?');

// function checkAge(number) {
//      alert(number < 0 ? 'Вы ввели неправильное значение' : number > 0 && number <= 12 ? 'Привет, друг!' : 'Добро пожаловать!');
// }
// console.log(checkAge(parseInt(age)));

// // Задание 5

// function multiply(a, b) {
//     if (isNaN(a) || isNaN(b)) {
//       return 'Одно или оба значения не являются числом';
//     } else {
//       return a * b;
//     }
//   }
//   console.log(multiply(5, 4));
//   console.log(multiply('привет', 4));

// // Задание 6

// function checkNumber() {
//     let guessNumber = Number(prompt('Введите любое число'));
//     if (isNaN(guessNumber)) {
//         return 'Переданный параметр не является числом';
//     } else {
//         return `n в кубе равняется ${guessNumber ** 3}`;
//     }
// }

// console.log(checkNumber(10));

// // Здание 7 

// function circle1(radius) {
//     const perimeter = 2 * Math.PI * radius;
//     const area = Math.PI * radius ** 2;
//     return { perimeter, area };
//   }
// console.log(circle1(1));

// function circle2(radius) {
//     const perimeter = 2 * Math.PI * radius;
//     const area = Math.PI * radius ** 2;
//     return { perimeter, area };
//   }
// console.log(circle2(3));


let word = 'привет=как=дела';
word = word.split('=');
console.log(word);
word = word.soft();
console.log(word);
word = word.join(' ');
console.log(word);


