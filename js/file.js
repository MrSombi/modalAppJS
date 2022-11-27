// let name = "джон";
// let admin;
// admin = name;
// alert(admin);
//
// let isGreater = 4 < 1;

// alert(isGreater);

// let value = true;
// alert(typeof value);

// let result = prompt('title', []);
// let isBoss = confirm("Ты здесь главный?");
// alert(isBoss);

// let yourName = prompt('Ваше имя?');
// alert('yourName');


// "" + 1 + 0 // 1 -
// "" - 1 + 0 // Nan -
// true + false //false -
// 6 / "3" // 2 +
// "2" * "3" // 6 +
// 4 + 5 + "px" //"9px" +
// "$" + 4 + 5 //$9 -
// "4" - 2 // 2 +
// "4px" - 2 // Nan +
// "  -9  " + 5 //-9 5 +
// "  -9  " - 5 //-14 +
// null + 1 // 1 +
// undefined + 1 // 1 -
// " \t \n" - 2 // Nan -

// let a = Number(prompt("Первое число?", 1));
// let b = Number(prompt("Второе число?", 2));

// alert(a + b); // 12

// 5 > 4 //true +
// "ананас" > "яблоко" // false +
// "2" > "12" // false -
// undefined == null //true +
// undefined === null //true -
// null == "\n0\n" //true -
// null === +"\n0\n" //false +

// let name = prompt('Какое "официальное" название JavaScript?');

// if (name == 'ECMAScript') {
//   alert('Верно!');
// }
// else {
//   alert('нет бля ECMAScript')
// }

// let value = prompt('Введите число');
// if (value > 0) {
//   alert('1');
// }
// else if (value < 0) {
//   alert('-1');
// }
// else {
//   alert('0');
// }


// let result = (a + b < 4) ? 'Мало' : 'Много';

// if (age >= 14 && age <= 90) //«Включительно» означает, что значение переменной age может быть равно 14 или 90

// if (!(age >= 14 && age <= 90))
// if (age < 14 || age > 90) //age НЕ находится в диапазоне 14 и 90 включительно.

// let user = prompt('Введите логин', '');
// if (user === 'Админ') {
//   let pass = prompt('Пароль?', '')
//   if (pass === 'Я главный') {
//     alert('Здравствуйте!');
//   }
//   else if (pass === '' || pass === null) {
//     alert('Отмена');
//   }
//   else {
//     alert('Неверный пароль');
//   }
// }
// else if (user === '' || user === null) {
//   alert('Отменено');
// }
// else {
//   alert('Я вас не знаю')
// }

// let i = 0;
// while (++i < 5) alert(i);// 1/2/3/4

// let i = 0;
// while (i++ < 5) alert(i);// 0/1/2/3/4/5

// for (let i = 0; i < 5; i++) alert( i );// 0/1/2/3/4

// for (let i = 0; i < 5; ++i) alert( i );// 0/1/2/3/4

// При помощи цикла for выведите чётные числа от 2 до 10.

// for (let i = 2; i <= 10; i++) {
//   if (!(i % 2 == 0)) continue;
//   alert(i);
// }

// let i = 0;
// while (i < 3) {
//   alert(`number ${i}!`);
//   i++;
// }

// let num;
// do {
//   num = prompt("Введите число больше 100?", 0);
// } while (num <= 100 && num);

// if (browser == 'Edge') {
//   alert("You've got the Edge!");
// }
// else if (browser == 'Chrome' || 'Firefox' || 'Safari' || browser == 'Opera') {
//   alert('Okay we support these browsers too');
// }
// else {
//   alert('We hope that this page looks ok!');
// }

// const number = +prompt('Введите число между 0 и 3', '');
// switch (number) {
//   case 0:
//     alert('это ноль');
//     break;
//   case 1:
//     alert('это один');
//     break;
//   case 2:
//   case 3:
//     alert('это два или три');
//     break
// }

// function min(a, b) {
//   if (a < b) {
//     return a;
//   }
//   else {
//     return b;
//   }
// }

// function pow(x, n) {
//   let result = x;
//   for ()
// }

