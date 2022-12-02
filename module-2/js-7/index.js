// 1. Створити сторінку, що показує нумерований список пісень:

const playList = [
  {
    author: "LED ZEPPELIN",
    song: "STAIRWAY TO HEAVEN",
  },
  {
    author: "QUEEN",
    song: "BOHEMIAN RHAPSODY",
  },
  {
    author: "LYNYRD SKYNYRD",
    song: "FREE BIRD",
  },
  {
    author: "DEEP PURPLE",
    song: "SMOKE ON THE WATER",
  },
  {
    author: "JIMI HENDRIX",
    song: "ALL ALONG THE WATCHTOWER",
  },
  {
    author: "AC/DC",
    song: "BACK IN BLACK",
  },
  {
    author: "QUEEN",
    song: "WE WILL ROCK YOU",
  },
  {
    author: "METALLICA",
    song: "ENTER SANDMAN",
  },
];

const app = document.querySelector(".hw");

const someList = document.createElement("div");

someList.classList.add("playlist");

const ol = document.createElement("ol");

ol.classList.add("playlist__list");

someList.appendChild(ol);

app.appendChild(someList);

for (let index = 0; index < playList.length; index++) {
  const li = document.createElement("li");
  ol.appendChild(li);
  const author = document.createElement("div");
  li.appendChild(author);
  author.classList.add("playlist__author");
  author.innerHTML = playList[index].author;
  const song = document.createElement("div");
  li.appendChild(song);
  song.classList.add("playlist__song");
  song.innerHTML = playList[index].song;
}

//2. Створити HTML-сторінку з кнопкою "Відкрити" і модальним вікном. На модальном вікні повинен бути текст і кнопка "Закрити". Спочатку модальне вікно не відображається. При кліку на кнопку "Відкрити" з'являється модальне вікно, на кнопку "Закрити" — зникає.

const button = document.getElementById("js-button");
const closeBtn = document.getElementById("js-close-btn");

const modal = document.getElementById("js-modal");
const modalBody = document.getElementById("js-modal-body");

button.addEventListener("click", () => {
  modal.classList.toggle("modal__open");
});

modal.addEventListener("click", (some) => {
  if (some.target == modalBody) {
    modal.classList.remove("modal__open");
  }
});

closeBtn.addEventListener("click", () => {
  modal.classList.remove("modal__open");
});


// 3. Створити HTML-сторінку зі світлофором і кнопкою, яка перемикає світлофор на наступний колір.

const some = document.getElementsByClassName("some__round");
const btn = document.getElementById("js-btn");

let index = 1;

btn.addEventListener("click", () => {
  changeColor();
});

function changeColor() {
  switch (index) {
    case 0: {
      some[2].classList.remove("some__round--green");
      some[0].classList.add("some__round--red");
      break;
    }
    case 1: {
      some[0].classList.remove("some__round--red");
      some[1].classList.add("some__round--orange");
      break;
    }
    case 2: {
      some[1].classList.remove("some__round--orange");
      some[2].classList.add("some__round--green");
      break;
    }
    case 3: {
      some[2].classList.remove("some__round--green");
      some[1].classList.add("some__round--orange");
      break;
    }
    case 4: {
      some[1].classList.remove("some__round--orange");
      some[0].classList.add("some__round--red");
      index = 0;
      break;
    }
  }
  index++;
}