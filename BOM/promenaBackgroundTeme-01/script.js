let body = document.querySelector("body");
let buttonChange = document.querySelector("#start");
let buttonClear = document.querySelector("#stop");
const setBackground = () => {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  document.body.style.backgroundColor = "#" + randomColor;
  color.innerHTML = "#" + randomColor;
};
var id;
buttonChange.addEventListener("click", function () {
  id = setInterval(setBackground, 500);
});

buttonClear.addEventListener("click", function () {
  clearInterval(id);
});
