const POST_URL = "https://673c4f8796b8dcd5f3f963e6.mockapi.io/api/v1/post";

const author = document.querySelector("input#author");
const title = document.querySelector("input#title");
const desc = document.querySelector("input#desc");
const text = document.querySelector("textarea");
const btn = document.querySelector("button");

btn.addEventListener("click", () => {
  fetch(POST_URL, {
    method: "POST",
    body: JSON.stringify({
      createdAt: new Date().getTime(),
      createdBy: author.value,
      description: desc.value,
      text: text.value,
      title: title.value,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then(
      () => (window.location.href = "../all-posts-page/all-posts-page.html")
    )
    .catch((err) => console.log(err));
});
