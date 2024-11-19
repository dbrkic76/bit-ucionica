const postDetails = JSON.parse(localStorage.getItem("singlePost"));
console.log(postDetails);

const singleItem = document.querySelector(".singleItem");
const postCard = document.createElement("div");
const postAuthor = document.createElement("p");
const postTitle = document.createElement("h4");
const postDesc = document.createElement("p");
const postText = document.createElement("p");

postAuthor.innerHTML = `By: ${postDetails.createdBy}`;
postTitle.innerHTML = postDetails.title;
postDesc.innerHTML = postDetails.description;
postText.innerHTML = postDetails.text;

postCard.append(postTitle, postAuthor, postDesc, postText);
singleItem.append(postCard);
