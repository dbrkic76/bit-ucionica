const URL = "http://api.tvmaze.com/shows";
const showDetails = JSON.parse(localStorage.getItem("singleShow"));
// console.log(showDetails);
// ELEMENTI NAPRAVLJENI U HTML-U
const showDetailsName = document.querySelector(".showDetailsName");
const showDetailsImageYear = document.querySelector(".showDetailsImageYear");
const showDetailsPoster = document.querySelector(".showDetailsPoster");
const showDetailsSeasonCast = document.querySelector(".showDetailsSeasonCast");
const showDetailsSeason = document.querySelector(".showDetailsSeasons");
const showDetailsCast = document.querySelector(".showDetailsCast");
const showDetailsPlot = document.querySelector(".showDetailsPlot");

fetch(`${URL}/${showDetails.id}/seasons`)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    const showDetailsSeasonTitle = document.createElement("h3");
    showDetailsSeasonTitle.innerHTML = `Seasons (${data.length})`;
    showDetailsSeason.append(showDetailsSeasonTitle);
    const seasonsList = document.createElement("ul");
    showDetailsSeason.append(seasonsList);
    data.forEach((i) => {
      const showDetailsSeasonContent = document.createElement("li");
      showDetailsSeasonContent.textContent = `${i.premiereDate} - ${i.endDate}`;
      showDetailsSeason.append(showDetailsSeasonContent);
    });
  });

fetch(`${URL}/${showDetails.id}/cast`)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    const castList = document.createElement("ul");
    showDetailsSeason.append(castList);
    data.forEach((i) => {
      const showDetailsCastContent = document.createElement("li");
      showDetailsCastContent.textContent = i.person.name;
      showDetailsCast.append(showDetailsCastContent);
    });
  });

const showDetailsNameContent = document.createElement("h2");
showDetailsNameContent.textContent = showDetails.name;
showDetailsName.append(showDetailsNameContent);

const showDetailsPosterContent = document.createElement("img");
showDetailsPosterContent.setAttribute("src", showDetails.image.original);
showDetailsPoster.append(showDetailsPosterContent);

const showDetailsPlotTitle = document.createElement("h3");
showDetailsPlotTitle.innerHTML = "Show Details";
showDetailsPlot.append(showDetailsPlotTitle);

const showDetailsPlotContent = document.createElement("p");
showDetailsPlotContent.innerHTML = showDetails.summary;
showDetailsPlot.append(showDetailsPlotContent);

const showDetailsCastTitle = document.createElement("h3");
showDetailsCastTitle.innerHTML = "Cast";
showDetailsCast.append(showDetailsCastTitle);
