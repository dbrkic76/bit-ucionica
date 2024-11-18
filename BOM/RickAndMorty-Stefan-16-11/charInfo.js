
const charData = JSON.parse(localStorage.getItem("charDetails"))

console.log(charData);

const img = document.querySelector("img")
img.src = charData.image

document.querySelector("#name").innerHTML +=charData.name