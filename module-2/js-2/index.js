// Мінімум

// 1

let test1 = 0.1
let test2 = 0.2

console.log((test1 + test2).toFixed(1))

// 2

let test3 = Number("1") + 2;

console.log(test3)

// 3

const test4 = 820;
let test5 = +prompt(`На скільки флешка ГБ?`);
let test6 = test5 * 1024;

if (test5 > 0)
alert(`На флешку ${test5}ГБ, поміститься файлів: ${Math.floor(test6 / test4)} шт.`)

// Норма

// 1

let test7 = +prompt("Скільки гривень маєш в гаманці?");
if (test7 > 0) {
  let test8 = +prompt("Скільки гривень коштує шоколадка?");
  if (test8 > 0) {
    if (test7 >= test8) {
      alert(`Класс це шоколадок ${Math.floor(test7 / test8)} шт. і ${test7 % test8} грн. залишиться`);
    } else {
      alert("Тобі не хватить на шоколадку");
    }
  } else {
    alert("0 грн, не може бути");
  }
} else {
  alert("Збирай гроші ще");
}

// 2

let test11 = +prompt("Введіть тризначне число");
let test12 = test11 % 10;
let test13 = Math.floor(test11 / 10) % 10;
let test14 = Math.floor(Math.floor(test11 / 10) / 10);

alert(String("Твоє число задом наперед: " + test12 + test13 + test14));

// Максимум

// 1

let test15 = +prompt("Сумма яку вкласти в банк на 2 місяці під 5% річних");

let test16 = test15 / 100 * 5 / 12 * 2;

alert(`Твій нарахований % за 2 місяці ${(test16).toFixed(2)} грн.` );

// 2

// 0 повертає знайдете хибне значення
// 2 повертає перше правдиве значення
// 3 спочатку очислює 2 && 0 потім 0 || 3 поветає перше правдиве.
console.log( 2 && 0 || 3)
