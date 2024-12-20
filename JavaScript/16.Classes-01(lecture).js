////////////////////////////////////////
// KLASA PERSON
////////////////////////////////////////
class Person {
  constructor(name, surname, age) {
    this.name = name;
    this.surname = surname;
    this.age = age;
  }
  sayHi() {
    console.log("Hi");
  }
  getInfo() {
    return "Hi, my name is " + this.name;
  }
}
////////////////////////////////////////
// KLASA PROGRAMMER (NASLEDJUJE KLASU PERSON)
////////////////////////////////////////
class Programmer extends Person {
  constructor(name, surname, age, experience, language) {
    super(name, surname, age);
    this.experience = experience;
    this.language = language;
  }
  getInfo() {
    var info = super.getInfo();
    return `${info} ${this.language}`;
  }
  writeCode() {
    return `Typing in ${this.language}`;
  }
}
////////////////////////////////////////
// KLASA TESTER (NASLEDJUJE KLASU PERSON)
////////////////////////////////////////
class Tester extends Person {
  constructor(name, surname, age, position, experience) {
    super(name, surname, age);
    this.position = position;
    this.experience = experience;
  }
  test() {
    return `Bug detected by ${this.name} ${this.surname}`;
  }
}
////////////////////////////////////////
// KLASA BACKENDPROGAMMER (NASLEDJUJE KLASU PROGRAMMER)
////////////////////////////////////////
class BackendProgrammer extends Programmer {
  constructor(name, surname, age, experience, language) {
    super(name, surname, age, experience, language);
  }
}
////////////////////////////////////////
// PRAVLJENJE NEKOLIKO OBJEKATA PUTEM PRETHODNO DEFINISANIH KLASA
////////////////////////////////////////
var programmer = new Programmer("Pera", "Peric", 25, 3, "Javascript");
var tester = new Tester("Laza", "Lazic", 26, "QA", 2);
var bEProgrammer = new BackendProgrammer("Pera", "Peric", 30, 5, "C#");
////////////////////////////////////////
// ISPIS REZULTATA
////////////////////////////////////////
console.log(programmer.getInfo());
console.log(tester.getInfo());
console.log(bEProgrammer.getInfo());
