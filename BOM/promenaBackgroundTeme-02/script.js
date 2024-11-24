const wrapper = document.getElementById("wrapper");
const toggleButton = document.getElementById("toggle");
const offButton = document.getElementById("turnoff");
const onButton = document.getElementById("turnon");

function toggleBackground() {
  var randomColor = Math.floor(Math.random() * 16777215).toString(16);
  wrapper.style.backgroundColor = "#" + randomColor;
}

toggleButton.addEventListener("click", toggleBackground);

offButton.addEventListener("click", () => {
  toggleButton.removeEventListener("click", toggleBackground);
});

onButton.addEventListener("click", () => {
  toggleButton.addEventListener("click", toggleBackground);
});
