const URL = "https://rickandmortyapi.com/api/character";
const characterCardContainer = document.querySelector("#cardGridContainer"); // #cardGridContainer je napravljen u HTML

function getCharacters() {
  fetch(URL)
    .then((response) => response.json())
    .then((data) => showCharacters(data));
}
getCharacters();

function showCharacters(data) {
  console.log(data?.results);
  const characterArray = data.results;

  characterArray.forEach((e) => {
    // CREATING ELEMENTS
    const characterCard = document.createElement("div");
    const characterName = document.createElement("h3");
    const characterPicture = document.createElement("img");
    // DODAVANJE SADRZAJA U ELEMNTE
    characterName.textContent = e.name;
    characterPicture.setAttribute("src", e.image);
    // APPEND
    characterCardContainer.append(characterCard);
    characterCard.append(characterPicture, characterName);
  });
}
showCharacters();
