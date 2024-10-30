// greet is a function that takes a name and logs a greeting.
// processUserInput is a function that takes another function (a callback) as an argument.
// When processUserInput is called, it asks the user for their name and then calls the
//callback function (greet) with that name.
// So, the callback (greet) isn't called until the user provides their name.
//This allows for more flexible and modular code, as you can decide what
//happens after an event (like user input) at runtime.
//
//                EXAMPLE 1
function greet(name) {
  console.log("Hello, " + name + "!");
}

function processUserInput(callback) {
  var name = prompt("Please enter your name.");
  callback(name);
}
processUserInput(greet);
//
//
// In this case, I've named the parameter anyNameYouLike instead of callback.
//The name doesn't affect the functionality; it's just a way to refer to the function
//passed in when you call processUserInput.
//
//                EXAMPLE 2
function processUserInput(anyNameYouLike) {
  var name = prompt("Please enter your name.");
  anyNameYouLike(name);
}

function greet(name) {
  console.log("Hello, " + name + "!");
}

processUserInput(greet);
