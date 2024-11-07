// OBJECT LITERALS
let fruit = "apple";
const obj = {
  name: "voce",
  number: 8,
  fruit,
  // STARI NACIN PISANJA METODA
  //  multiply() {
  //    return 8 * 9;
  //  },
  // MOZE I NA SLEDECI NACIN (OBJECT LITERALS)
  times(n) {
    return this.number * n;
  },
};
console.log(obj.times(2));
