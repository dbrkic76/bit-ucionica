const BASE_URL = "https://rickandmortyapi.com/api";

const buttonContent = `<?xml version="1.0" encoding="utf-8"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
<svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.15" fill-rule="evenodd" clip-rule="evenodd" d="M8 10V20H17.3604C18.3138 20 19.1346 19.3271 19.3216 18.3922L20.5216 12.3922C20.7691 11.1547 19.8225 10 18.5604 10H14L16.4258 6.36138C17.1929 5.2106 16.5885 3.64714 15.2467 3.31169L15.1992 3.2998C14.4642 3.11607 13.6886 3.36333 13.1956 3.9385L8 10Z" fill="#000000"/>
<path d="M8 10V20M8 10L4 9.99998V20L8 20M8 10L13.1956 3.93847C13.6886 3.3633 14.4642 3.11604 15.1992 3.29977L15.2467 3.31166C16.5885 3.64711 17.1929 5.21057 16.4258 6.36135L14 9.99998H18.5604C19.8225 9.99998 20.7691 11.1546 20.5216 12.3922L19.3216 18.3922C19.1346 19.3271 18.3138 20 17.3604 20L8 20" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>Like`

const fetchData = () => {
  fetch(`${BASE_URL}/character`)
    .then((res) => res.json())
    .then((data) => renderData(data.results));
};
const renderData = (arr) => {
  arr.forEach((charObj, index) => {                   // za svaki element niza!!!!!!!!
    const div = document.createElement("div");        // pravi "div" (kartica)
    div.classList.add("card")                         // dodaje klasu div-u (kartici)
    const img = document.createElement("img");        // pravi "sliku"
    img.setAttribute("src", charObj.image);           // src za img
    div.append(img);                                  // dodaje sliku div-u (kartici)
    const h2 = document.createElement("h2");          // pravi h2 za ime
    h2.innerText = charObj.name;                      // "uzima" ime iz niza
    div.append(h2);                                   // dodaje ime div-u (kartici)
    const button = document.createElement("button");  // pravi "dugme"
    clickedIndexes = JSON.parse(localStorage.getItem("clickedIndexes")) || []
    if (clickedIndexes.includes(index)){
      button.classList.add("green-background")
    }
    button.innerHTML = buttonContent;                 // dodaje text dugmetu
    button.addEventListener("click", event => {       // menja boju...
      toggleColor(event.target);                      // ...dugmeta na klik
      clickedIndexes = JSON.parse(localStorage.getItem("clickedIndexes")) || []   // provera sta je kliknuti u local Storage
      if(clickedIndexes.indexOf(index) === -1) {      // da li index NIJE u nizu clickedIndexes?
        clickedIndexes.push(index)                    // 
      } else { 
        clickedIndexes = clickedIndexes.filter((value) => {return value!== index}) // izbaci iz niza vec postojecu vrednost
      }
      
      // const set = new Set(...clickedIndexes)
      // const arr = new Array(...set)
      localStorage.setItem("clickedIndexes", JSON.stringify(clickedIndexes))
      
    })
    // button.classList.add("green-background")
    div.append(button);                               // dodaje dugme div-u (kartici)
    document.querySelector(".container").append(div); // dodaje div (karticu) "parent elementu" (u ovom slucaju napravljen blanko u HTML fajlu)
  });
};

fetchData();

const toggleColor = htmlElement => {
  htmlElement.classList.toggle("green-background")
}
