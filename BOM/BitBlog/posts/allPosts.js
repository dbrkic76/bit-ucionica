// - GET - https://673c4f8796b8dcd5f3f963e6.mockapi.io/api/v1/post
// - GET BY ID - https://673c4f8796b8dcd5f3f963e6.mockapi.io/api/v1/post/:id
// - POST - https://673c4f8796b8dcd5f3f963e6.mockapi.io/api/v1/post

const postList = document.querySelector(".postList");
const URL = "https://673c4f8796b8dcd5f3f963e6.mockapi.io/api/v1/post";

function getPosts() {
  fetch(URL)
    .then((response) => response.json())
    .then((data) => listPosts(data));
}
getPosts();

function listPosts(data) {
  console.log(data);
  const showPosts = data;
  showPosts.forEach((el) => {
    const postCard = document.createElement("div");
    const postAuthor = document.createElement("p");
    const postTitle = document.createElement("h4");
    const postDesc = document.createElement("p");
    const postText = document.createElement("p");
    const readMoreButton = document.createElement("button");

    postAuthor.innerHTML = `By: ${el.createdBy}`;
    postTitle.innerHTML = el.title;
    postDesc.innerHTML = el.description;
    postText.innerHTML = el.text;
    readMoreButton.innerHTML = "READ FULL ARTICLE";

    postCard.id = "singlePostCard";
    postCard.append(postTitle, postAuthor, postDesc, postText);
    postList.append(postCard);
    postCard.append(readMoreButton);
    readMoreButton.addEventListener("click", () => {
      window.open("singlePost/singlePost.html", "_self");
      localStorage.setItem("singlePost", JSON.stringify(el));
    });
  });
}
