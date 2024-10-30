//function add(a, b, callback): This line defines a function named add
//that takes three parameters: two numbers (a and b) and a callback function.
//const sum = a + b;: This line calculates the sum of a and b and stores
//it in a variable called sum.
//callback(sum);: This line calls the callback function and passes sum to it.
//This is where we hand off control to whatever function we provided as the callback.
function add(a, b, callback) {
  const sum = a + b; // Step 1a: Add the two numbers
  callback(sum); // Step 1b: Call the callback function with the sum
}
// function multiplyByTwo(result): This line defines another function named multiplyByTwo,
//which takes one parameter called result.
// const multiplied = result * 2;: Here, we multiply result by 2 and store it
//in a variable called multiplied.
// console.log(...): This line prints the final result to the console.
function multiplyByTwo(result) {
  const multiplied = result * 2; // Step 2a: Multiply the result by 2
  console.log("The result multiplied by 2 is:", multiplied); // Step 2b: Print the result
}
// add(3, 5, multiplyByTwo);: This line calls the add function, passing in 3 and 5
// as the numbers to add, and multiplyByTwo as the callback function.
// add(3, 5, multiplyByTwo);
// Summary of Execution
// Call to add(3, 5, multiplyByTwo):
//
// The add function starts executing.
// It calculates sum = 3 + 5, which is 8.
// It calls multiplyByTwo(8).
// Inside multiplyByTwo(result):
//
// The result is 8.
// It calculates multiplied = 8 * 2, which is 16.
// It prints: "The result multiplied by 2 is: 16".
