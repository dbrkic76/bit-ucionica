const URL = "https://673c4f8796b8dcd5f3f963e6.mockapi.io/api/v1/post";

const inputAuthor = document.querySelector("#author");
const inputTitle = document.querySelector("#posttitle");
const inputDesc = document.querySelector("#postdesc");
const inputText = document.querySelector("#posttext");
const submitButton = document.querySelector(".submit");

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
    .then((data) => {});
  // .catch((err) => console.log(err));
});

const getAllPosts = () => {
  fetch(URL)
    .then((res) => res.json())
    .then((res) => console.log(res));
};
