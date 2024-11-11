var hero = {
  name: "Superman",
  sayName: function () {
    return "Hi I am " + this.name;
  },
};

function Hero(name, occupation = "Ninja") {
  this.name = name;
  this.occupation = occupation;
  this.whoYouAre = function () {
    return `I am ${this.name} and my occupation is ${this.occupation}`;
  };
}

var hero1 = new Hero("Leonardo");
var hero2 = new Hero("Donatello");

// console.log(hero1.whoYouAre());
// console.log(hero2.whoYouAre());
//console.log(this);
var hero3 = Hero("Raffaelo");
// console.log(hero3);
// var name = 'test'

// this.a = 1;
// console.log(this.a);
console.log(hero instanceof Hero);
console.log(hero1 instanceof Hero);

function factory(name) {
  return {
    name: name,
  };
}

var person = factory("Leonardo");
console.log(person);

var a = 1;

function changePrimitive(param) {
  param = 3;
}

console.log(a);
changePrimitive(a);
console.log(a);
function changeObject(inputObject) {
  inputObject.name = "Donatello";
}

changeObject(person);
console.log(person);
var person1 = factory("Donatello");
console.log(person1 == person);
console.log(JSON.stringify(person1));
console.log(JSON.stringify(person) == JSON.stringify(person1));
