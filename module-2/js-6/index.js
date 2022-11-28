/* // ? ПИТАННЯ

1. Як виконати математечну дію в обєкті? щоб результат записався у значенні його властивості

*/

// ! ДОМАШНЄ ЗАВДАННЯ

//// Мінімум
//// 1. Створи масив «Список покупок». Кожен елемент масиву є об'єктом, який містить назву продукту, кількість і куплений він чи ні, ціну за одиницю товару, сума. Написати кілька функцій для роботи з таким масивом:

let listProduct = [
  (voda = {
    name: "voda",
    count: 2,
    both: true,
    price: 15,
  }),
  (moloko = {
    name: "moloko",
    count: 2,
    both: false,
    price: 30,
  }),
  (hlib = {
    name: "hlib",
    count: 1,
    both: true,
    price: 20,
  }),
];

listProduct[0].sum = listProduct[0].count * listProduct[0].price;
listProduct[1].sum = listProduct[1].count * listProduct[1].price;
listProduct[2].sum = listProduct[2].count * listProduct[2].price;

  listProduct.forEach((producut) => {
    console.log("producut:", producut);
  });

//// 1.1 Виводити весь список на екран таким чином, щоб спочатку йшли продукти, що ще не придбані, а потім - ті, що вже придбали.

// listProduct.sort((x, y)=>{
//   return x.both - y.both;
// })
// console.log(listProduct)

////1.2 Покупка продукту. Функція приймає назву продукту і відзначає його як придбаний.

// const newProduct = () => {
// const x = prompt("Назва продукту?");
// if (x == moloko.name && !moloko.both){
//   moloko.both = true;
// }
// else if (x == voda.name && !voda.both){
//   voda.both = true;
// }
// else if (x == hlib.name && !hlib.both){
//   hlib.both = true;
// }
// }

// newProduct();

// console.log(listProduct)

// Норма

// //2.1  Видалення продукту зі списку (видалення повинно проводитися шляхом створення нового масиву, в якому продукт, що ми шукаємо, буде відсутнім)

// const nameProduct = prompt("Назва продукту?");

// switch (nameProduct) {
//   case listProduct[0].name:
//     listProduct.splice(listProduct.indexOf(listProduct[0]), 1);
//     break;
//   case listProduct[1].name:
//     listProduct.splice(listProduct.indexOf(listProduct[1]), 1);
//     break;
//   case listProduct[2].name:
//     listProduct.splice(listProduct.indexOf(listProduct[2]), 0);
//     break;
//   default :
//   console.warn('Немає такого товара!');
// }

// console.log(listProduct);

// // 2.2 Додавання покупки в список. Враховуй, що при додаванні покупки з уже існуючим в списку продуктом, необхідно збільшувати кількість в існуючій покупці, а не додавати нову. При цьому також повинна змінитися сума, наприклад, якщо ціна за одиницю 12, а кількості товарів стало 2, то сума буде 24.
// const addProduct = prompt("Назва продукту?");

// switch (addProduct) {
//   case listProduct[0].name: {
//     listProduct[0].count++;
//     listProduct[0].sum = listProduct[0].count * listProduct[0].price;
//     break;
//   }
//   case listProduct[1].name: {
//     listProduct[1].count++;
//     listProduct[1].sum = listProduct[1].count * listProduct[1].price;
//     break;
//   }
//   case listProduct[2].name: {
//     listProduct[2].count++;
//     listProduct[2].sum = listProduct[2].count * listProduct[2].price;
//     break;
//   }
//   default: {
//     if (addProduct == null || addProduct == "") {
//       break;
//     } else {
//       const newProduct = () => {
//         listProduct.push({
//           name: addProduct,
//           count: +1,
//           both: false,
//           price: +prompt("Ціна продукту?"),
//           get sum() {
//             return this.count * this.price;
//           },
//         });
//       };
//       newProduct();
//     }
//   }
// }

// console.log(listProduct);

// // Максимум

// // 3.1 Підрахунок суми всіх продуктів (враховуючи кількість кожного) в списку.

// let sumProduct = listProduct.map((product) => {
//   return product.sum;
// });
// let result = sumProduct.reduce(function(product, next) {
// 	return product + next;
// }, 0);

// console.log("Сума всіх покупок:", result);

// // 3.2 Підрахунок суми всіх (не) придбаних продуктів.

// let listSum = listProduct.map((product) => {
//   if (!product.both)
//   return product.sum;
// });

// listSumNoBoth = listSum.filter((product) => product != undefined);

// let result = listSumNoBoth.reduce(function(product, next) {
// 	return product + next;
// }, 0);

// console.error("Сума всіх не придбаних продуктів:", result);

// // 3.3 Показання продуктів в залежності від суми, (від більшого до меншого / від меншого до більшого, в залежності від параметра функції, який вона приймає)

// let someList = () =>{
//   let symbol = prompt('">" або "<"?');
//   listProduct.sort((x, y) => {
//     if (symbol == ">") {
//       return y.sum - x.sum;
//     } else if (symbol == "<") {
//       return x.sum - y.sum;
//     } else {
//       console.warn('Має бути символ ">" або "<"');
//     }
//   });
//   listProduct.forEach((product) => {
//     console.log("product:", product);
//   });
// }
// someList();