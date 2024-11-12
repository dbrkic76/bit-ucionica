const container = document.querySelector("#container");

const display = document.createElement("h1");

display.innerHTML = "0";

container.append(display);

const button1 = document.createElement("button");
const button2 = document.createElement("button");

button1.innerHTML = "+";
button2.innerHTML = "-";

container.append(button1);
container.append(button2);

button1.addEventListener("click", () => {
  currentValue = Number(display.innerHTML);
  const newValue = addOrSub("+", currentValue);
  display.innerHTML = newValue;
});

button2.addEventListener("click", () => {
  currentValue = Number(display.innerHTML);
  const newValue = addOrSub("-", currentValue);
  if (newValue === -1) {
    currentValue = 0;
  } else {
    display.innerHTML = newValue;
  }
});

const addOrSub = (operation, currentValue) => {
  if (operation === "+") {
    return ++currentValue;
  } else if (operation === "-") {
    return --currentValue;
  } else {
    return currentValue;
  }
};
