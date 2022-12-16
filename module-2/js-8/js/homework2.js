export class Marker {
  constructor(color, batery) {
    if (color) {
      this.color = color;
    }
    this.batery = batery;
  }
  get colorMarker() {
    return this.color;
  }
  set colorMarker(colorHTML) {
    this.color = colorHTML;
  }
}

document.getElementById("hw2").addEventListener("click", () => {

const addColor = prompt("Колір?", "red");

let num = () => {
  while (true) {
    num = prompt("Скільки чорнил в маркері в %? (максимум 100)", "1");
    if (num === null || num == 0) {
      alert("Маркер пустий!");
      break;
    }
    if (num < 101 && num.trim() !== "") {
      break;
    }
    alert("Не вірне значення!");
  }
};
num();

const addText = prompt("Введіть текст:", "Some text 12345");

const batery = num * 2;

const count = 0;
for (let index = 0; index < batery; index++) {
  if (addText[index] == " ") count;
}
addText.substring(0, batery + count);
let countFix = 0;
for (let index = 0; index < batery + countFix; index++) {
  if (addText[index] == " ") ++countFix;
}

document.getElementById("js-text2").innerHTML = `${
  "<span id='js-color'>" +
  addText.substring(0, batery + countFix) +
  "</span>" +
  addText.substring(batery + countFix)
}`;

document.getElementById("js-color").style.color = addColor;
});