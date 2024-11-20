const URL = "https://673c4f8796b8dcd5f3f963e6.mockapi.io/api/v1/post";
const SUBSCRIPTIONS_URL =
  "https://673c4f8796b8dcd5f3f963e6.mockapi.io/api/v1/subscriptions";

const inputAuthor = document.querySelector("#author");
const inputTitle = document.querySelector("#title");
const inputDesc = document.querySelector("#desc");
const inputText = document.querySelector("#text");
const submitButton = document.querySelector("button");

submitButton.addEventListener("click", () => {
  const payload = {
    createdAt: new Date().getTime(),
    description: inputDesc.value,
    title: inputTitle.value,
    text: inputText.value,
    createdBy: inputAuthor.value,
  };
  fetch(URL, {
    method: "POST",
    body: JSON.stringify(payload),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => {
      // ZNAMO DA JE REQUEST PROSAO KAKO TREBA
      // -> POKUPIMO NAJSVEZIJE PODATKE SA BE
      // FETCH -> GET -> GET ALL POSTS
      //   getAllPosts();
    })
    .catch((err) => console.log(err));

  // NIJE DOBRO!!!!!!! POZVACE getAllPosts I U SLUCAJU DA API REQUEST NE PRODJE KAKO TREBA, SERVER NE RADI ITD -> NEPOTREBAN API CALL
  //   getAllPosts();
});

// const getAllPosts = () => {
//   fetch(URL)
//     .then((res) => res.json())
//     .then((res) => console.log(res));
// };

// -------------- FETCH PONAVLJANJE -----------------------
// CRUD (create read update delete)

// GET -> (read) -> cita i vraca sve podatke iz baze podataka
// POST -> (create) -> dodaje novi entite u bazu padataka
// PUT, PATCH -> (update) -> azurira postojeci podatak iz baze podataka
// DELETE -> (dete) -> brise postojeci podatak iz baze podataka

// POST
// fetch("TVMAZE.COM/SHOWS", {
//   method: "POST",
//   body: JSON.stringify({
//     name: "ana",
//     age: 30,
//   }),
//   headers: {
//     "Content-Type": "application/json",
//   },
// })
//   .then((res) => res.json())
//   .then((res) => console.log(res));

// PUT, PATCH
const obj = {
  createdAt: 1732099996719,
  title: "Title",
  description: "Description",
  text: "Malo veci Post Text",
  createdBy: "Marki",
  id: "60",
};

// PUT
// fetch(`${URL}/${obj.id}`, {
//   method: "PUT",
//   body: JSON.stringify({
//     ...obj,
//     createdBy: "Marko",
//   }),
//   headers: {
//     "Content-Type": "application/json",
//   },
// })
//   .then((res) => res.json())
//   .then((data) => console.log(data));

// PATCH
// fetch(`${URL}/${obj.id}`, {
//   method: "PATCH",
//   body: JSON.stringify({
//     createdBy: "Marko",
//   }),
//   headers: {
//     "Content-Type": "application/json",
//   },
// })
//   .then((res) => res.json())
//   .then((data) => console.log(data));

const user = {
  email: "charlie@example.com",
  name: "Charlie Brown",
  isSubscribed: true,
  id: "3",
};

// PUT SUBSCRIBED
// fetch(`${SUBSCRIPTIONS_URL}/${user.id}`, {
//   method: "PUT",
//   body: JSON.stringify({
//     ...user,
//     isSubscribed: !user.isSubscribed,
//   }),
//   headers: {
//     "Content-Type": "application/json",
//   },
// })
//   .then((res) => res.json())
//   .then(() => console.log());

// DELETE
// fetch(`${SUBSCRIPTIONS_URL}/${user.id}`, {
//     method: "DELETE",
//   })
//     .then((res) => res.json())
//     .then(() => console.log());
