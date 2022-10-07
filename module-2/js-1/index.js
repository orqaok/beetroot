// Норма
// 1.

let f_name = prompt("Ім'я?");

alert(`Привіт, ${f_name}`);

let age = prompt(`Скілки тобі років? ${f_name}`);

// 2.

let today = new Date().getFullYear();

let born = prompt("Рік народження?");

let yearsNow = today - born;

alert(`Ого, це тобі ${yearsNow} років`);

// 3.

let square = +prompt("Доважана однієї сторони квадрата, в см?");

let parameter = square + square + square + square;

if (parameter > 0) {
  alert(`Параметр твого квадрта: ${parameter} см.`);
}

// Максимум
// 1.

let circle = +prompt("Радіус кола, в см?");

let circleArea = Math.round(Math.PI * circle * circle);

if (circleArea > 0) {
  alert(`Радіус твого кола: ${circleArea} см.`);
}

// 2.

let distance = +prompt("Відстань від твого міста до Київа?");

if (distance > 0) {
  let time = +prompt("Скільки часу маєш на дорогу, в годинах?");

  if (time > 0) {
    let speed = Math.round(distance / time);

    alert(`Тобі треба їхати зі шивдкістю: ${speed}км./год.`);
  } else {
    alert(`Маєш купу часу щоб проїхати ${distance} км.`);
  }
}

// 3.

let dollar = 40;

let uah = +prompt("Скільки маєш гривень?");

let kurs = (uah / dollar).toFixed(2);

if (kurs <= 0) {
  alert(`Це: 0$, не густо.`);
} else {
  alert(`Це: ${kurs}$`);
}
