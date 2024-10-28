// console.log("Zdravo BOM-e");

// console.log(document);

// console.log(document.body);

// console.log(window);

// window.alert("Zdravo opet BOM-e!");

// var vrednost = window.prompt("Zdravo opet BOM-e!");
// console.log(vrednost);

// console.log(window.location);
// window.location.href = "https://google.com"
// console.log(window.screen);

// console.log(window.history.go(1));

// var a = "Dragan";
// console.log(window);

// console.log(window.screen.height);
// console.log(window.screen.availHeight);
// console.log(window.localStorage);
localStorage.setItem("theme", "dark");
// console.log(localStorage.getItem("theme"));

if (localStorage.getItem("theme") === "light") {
  // window.document.body.classList.toggle("light");
  //   window.document.body.classList.add("light");
  document.body.className = "light";
} else {
  // window.document.body.classList.toggle("dark");
  //   window.document.body.classList.add("dark");
  document.body.className = "dark";
}

var body = document.body;
var dugme = document.createElement("button");
dugme.textContent = "Promeni temu";

function whenButtonClicked() {
  console.log("Button is Clicked!");
  if (localStorage.getItem("theme") === "light") {
    localStorage.setItem("theme", "dark");
    body.className = "dark";
  } else {
    localStorage.setItem("theme", "light");
    body.className = "light";
  }
}

dugme.addEventListener("click", whenButtonClicked);

body.prepend(dugme);
