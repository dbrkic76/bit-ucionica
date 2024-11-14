const URL = "https://api.chucknorris.io/jokes/random";
const dugme = document.querySelector("button");
const joke = document.querySelector("h1");

function getChuckJoke() {
  // Prvo pravimo request putem fetch() metode
  // .then sluzi da razresimo Promise, koji ce fetch da vrati.
  // promise se ce se razresiti te kkada dobijemo pravu informaciju (objekat, niz, niz objekate...)
  // u prvom then-u dobicemo informaciju u json formatu
  // da bismo razresili i preveli iz json u JS koristimo metodu .json()
  // na zalost .json() nam takodje vraca promise ali barem znamo da vise nema json formata
  // na kraju,  poslednjem .then mogu da dohvatim pravu info sa kojom mogu da radi
  // catch nam sluzi da uhvati grezsku koja se u medjuvremenu dogodila
  const response = fetch(URL)
    .then((res) => res.json())
    .then((data) => showJoke(data))
    .catch((error) => console.log(error));
}
function showJoke(data) {
  console.log(data);
  joke.textContent = data.value;
}

dugme.addEventListener("click", getChuckJoke);
