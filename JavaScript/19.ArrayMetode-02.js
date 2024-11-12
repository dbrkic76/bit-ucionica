// napraviti novi niz koji sadrzi key totalPrice (price*quantity) (iskoristiti spread operator)
// const inventory = [
//   { name: "Laptop", category: "Electronics", price: 1200, quantity: 5 },
//   { name: "Phone", category: "Electronics", price: 800, quantity: 0 },
//   { name: "Headphones", category: "Accessories", price: 150, quantity: 10 },
//   { name: "Keyboard", category: "Accessories", price: 75, quantity: 3 },
//   { name: "Mouse", category: "Accessories", price: 50, quantity: 20 },
// ];
// const inventoryNew = inventory.map((elem) => {
//   return {
//     ...elem,
//     totalPrice: elem.price * elem.quantity,
//   };
// });
// console.log(inventoryNew);

// R E D U C E
const arr = [2, 9, 0, 199, 32817, 271, 473];
// ES5 suma svih elemenata iz arr niza //
// var sum = 0;
// for (var i = 0; i < arr.length; i++) {
//   sum += arr[i];
// }
// console.log(sum);
// ES6 suma svih elementa iz arr niza
// i, arr se u ovom slucaju ne koriste
// ukoliko se acc ne zada, za acc se uzima pocetna vrednost prvog elementa niza
const reduceSum = arr.reduce((acc, elem) => {
  return acc + elem;
}, 0);
console.log(reduceSum);

// 1.iteracija acc = 0, elem = 2, callback => 2+0 = 2 (nova vrednost za sledecu iteraciju)
// 2.iteracija acc = 2, elem = 9, callback => 2+9 = 11 (nova vrednost za sledecu iteraciju)
// 3.iteracija acc = 11, elem = 0, callback => 11+0 = 11 (nova vrednost za sledecu iteraciju)
// 4.iteracija acc = 11, elem = 199, callback => 11+199 = 210 (nova vrednost za sledecu iteraciju)
// 5
// 6
// 7...
// vraca se poslednju vrednost acc-a
