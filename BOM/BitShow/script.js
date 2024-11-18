const URL = "http://api.tvmaze.com/shows";
const showCardContainer = document.querySelector("#cardGridContainer"); // napravljen u HTML-u

function getShows() {
  fetch(URL)
    .then((response) => response.json())
    .then((data) => listShows(data));
}
getShows();

function listShows(data) {
  console.log(data);
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
      window.open("showDetails.html");
      localStorage.setItem("singleShow", JSON.stringify(e));
    });
  });
}
