const URL = "http://api.tvmaze.com/shows";
const showCardContainer = document.querySelector("#cardGridContainer"); // napravljen u HTML-u
const searchInput = document.querySelector("#search-field");
const searchResults = document.querySelector(".search-results");

function getShows() {
  fetch(URL)
    .then((response) => response.json())
    .then((data) => listShows(data));
}
getShows();

function listShows(data) {
  // console.log(data);
  const showArray = data.sort(
    (min, max) => max.rating.average - min.rating.average
  );
  showArray.slice(0, 50).forEach((e) => {
    // CREATING ELEMENTS FOR SHOW LIST
    const showCard = document.createElement("div");
    const showName = document.createElement("h4");
    const showImage = document.createElement("img");
    // ADDING CONTENT TO ELEMENTS
    showName.textContent = e.name;
    showImage.setAttribute("src", e.image.medium);
    showCard.id = "singleCard";
    // APPENDING ELEMENTS
    showCardContainer.append(showCard);
    showCard.append(showImage, showName);
    showCard.addEventListener("click", () => {
      window.open("showDetails.html", "_self");
      localStorage.setItem("singleShow", JSON.stringify(e));
    });
  });
}

searchInput.addEventListener("keyup", (event) => {
  // console.log('desio se keyup', event.target.value);
  const searchInput = event.target.value;
  fetch(`https://api.tvmaze.com/search/shows?q=${searchInput}`)
    .then((res) => res.json())
    .then((res) => showSearchOptions(res));
});

const showSearchOptions = (data) => {
  searchResults.innerHTML = "";
  data.forEach((show) => {
    // console.log(show);
    const searchTitle = document.createElement("p");

    searchTitle.innerHTML = show.show.name;
    searchTitle.addEventListener("click", () => {
      localStorage.setItem("singleShow", JSON.stringify(show.show));
      window.open("showDetails.html", "_self");
    });

    searchResults.append(searchTitle);
  });
};
