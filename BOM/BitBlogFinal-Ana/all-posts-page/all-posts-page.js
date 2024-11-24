const POST_URL = "https://673c4f8796b8dcd5f3f963e6.mockapi.io/api/v1/post";

const main = document.querySelector("main");

fetch(POST_URL)
  .then((res) => res.json())
  .then((data) => generatePostCards(data));

const generatePostCards = (posts) => {
  posts.reverse().forEach((post) => {
    const postWrapper = document.createElement("div");
    const postTitle = document.createElement("h2");
    const postDesc = document.createElement("p");
    const postAuthor = document.createElement("p");

    postTitle.innerHTML = post.title;
    postDesc.innerHTML = post.description;
    postAuthor.innerHTML = post.createdBy;
    postAuthor.className = "post-author";
    postWrapper.className = "post";
    postTitle.addEventListener("click", () => {
      localStorage.setItem("post", JSON.stringify(post));
      window.location.href = "../single-post-page/single-post-page.html";
    });

    postWrapper.append(postTitle, postAuthor, postDesc);
    main.append(postWrapper);
  });
};
