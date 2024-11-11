let buttonMinusFive = document.querySelector("#minusFive");
let buttonMinusOne = document.querySelector("#minusOne");
let buttonPlusOne = document.querySelector("#plusOne");
let buttonPlusFive = document.querySelector("#plusFive");
let count = document.querySelector(".result");

function decreaseFive() {
  count.innerHTML = parseInt(count.innerHTML) - 5;
}
function decreaseOne() {
  count.innerHTML = parseInt(count.innerHTML) - 1;
}
function increaseOne() {
  count.innerHTML = parseInt(count.innerHTML) + 1;
}
function increaseFive() {
  count.innerHTML = parseInt(count.innerHTML) + 5;
}
buttonMinusFive.addEventListener("click", decreaseFive);
buttonMinusOne.addEventListener("click", decreaseOne);
buttonPlusOne.addEventListener("click", increaseOne);
buttonPlusFive.addEventListener("click", increaseFive);

// 2 VARIJANTA (PRIMER ZA minus 5)  -  I FUNKCIJA I EVENT LISTENER ODJEDNOM
// buttonMinusFive.addEventListener("click", function () {
//   let newCount = parseInt(count.textContent);
//   count.textContent = newCount - 5;
// });
