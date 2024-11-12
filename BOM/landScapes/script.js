const { element } =
  require("prop-types")[
    // ZADATAK Od niza objekata napraviti kartice (div) koje imaju img,h1 i p tag u sebi i sve to staviti u body:
    ({
      title: "Beautiful Landscape",
      text: "A stunning view of mountains during sunset.",
      imageUrl: "https://picsum.photos/seed/picsum1/600/400",
    },
    {
      title: "Cityscape at Night",
      text: "A vibrant city illuminated under the night sky.",
      imageUrl: "https://picsum.photos/seed/picsum2/600/400",
    },
    {
      title: "Forest Path",
      text: "A serene path through a lush green forest.",
      imageUrl: "https://picsum.photos/seed/picsum3/600/400",
    },
    {
      title: "Ocean Waves",
      text: "Waves crashing onto a sandy beach during a bright day.",
      imageUrl: "https://picsum.photos/seed/picsum4/600/400",
    },
    {
      title: "Snowy Mountains",
      text: "Snow-covered peaks shining under the winter sun.",
      imageUrl: "https://picsum.photos/seed/picsum5/600/400",
    })
  ];

niz.forEach((element) => {
  const div = document.createElement("div");
  div.className = "card"
  div.innerHTML = `<img src=${element.imageUrl} />
    <h1 class="red"> ${element.title} </h1>
    <p> ${element.text} </p>`;
  container.append(div);
  const h1 = document.querySelector("h1")
  h1.classList.toggle("red")   // iskljucio klasu
});
