const plusButtons = document.querySelectorAll(".plus");
const minusButtons = document.querySelectorAll(".minus");
const counters = document.querySelectorAll(".counter");

function closure() {
    var counter = 0;
    return function () {
        return counter++;
    }
}

var test = closure();
var test2 = closure();
var test3 = closure();

console.log(test())
console.log(test())
console.log(test())
console.log(test2())


console.log(test2())
console.log(test2())
console.log(test2())



