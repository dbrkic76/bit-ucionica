// let a;
// console.log(a);
// // let a = 5;

// if(1){
//     let a = 5;
//     console.log(a)
// }

// function provera() {
//     return a
// }

// provera()
// console.log(a)

for (let i = 0; i < 2; i++) {
  console.log(i);
}

try {
  console.log(i);
} catch (error) {
  console.log("ne mozes da pozoves i van block scope-a");
}

const b = 7;
// b = 6;
// console.log(b)

let niz = [1, 2, 3];
Object.freeze(niz);

// niz.push(4)
console.log(niz);

let ime = "martin";
let prezime = "potkonjak";

var celoIme = `${ime} ${prezime}`;
// celoIme = ime + " " + prezime

ime += celoIme;
ime += `ahsdhasbdhba`;
console.log(ime);
console.log("martin" + " " + "potkonjak"); // concatenation

// const f = () => console.log(1)

let fruit = "apple";

const obj = {
  name: "voce",
  number: 8,
  // fruit: "apple", // ovako smo do sada
  fruit,
  // multiply: function(n){
  //     return this.number * n;
  // }, // ovako smo do sada
  times(n) {
    return this.number * n;
  },
};
// console.log(obj.multiply(2))

console.log(Math.round(Math.random() * 90) + 10);
var a = 5;
console.log(a.toInteger(3));
