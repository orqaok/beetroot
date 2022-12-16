// 1. Реалізуй клас, що описує коло. У класі повинні бути такі компоненти:

// Продемонструй роботу властивостей і методів.

export class Round {
  constructor(r) {
    this.r = r;
  }

  get radius() {
    return this.r; // 1.1  get-властивість, яке повертає радіус кола;
  }

  get diametr() {
    return this.r * 2; // 1.2 get-властивість, яке повертає діаметр кола;
  }

  set radius(radius) {
    this.r = radius; // 1.3 set-властивість, що встановлює радіус кола;
  }
  area() {
    return (Math.PI * (this.r * this.r)).toFixed(); // 1.4 метод, що обчислює площу кола;
  }
  length() {
    return this.r * Math.PI; // 1.5 метод, що обчислює довжину кола.
  }
}

const round1 = new Round(0); // 1.0 поле, що зберігає радіус кола;

document.getElementById("hw1").addEventListener("click", () => {
  round1.radius = +prompt("Вкажіть радіус кола?","10");
  if (round1.radius !== 0) {
    alert('Результат в консолі')
    console.log(
      " Радіус:",
      round1.radius,
      "\n Діаметр:",
      round1.diametr,
      "\n Площа:",
      +round1.area(),
      "\n Довжина",
      +round1.length().toFixed()
    );
  }
});
