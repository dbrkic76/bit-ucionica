const data = JSON.parse(localStorage.getItem("post"));

const title = document.querySelector("header h1");
title.innerHTML = data.title;

const author = document.querySelector(".post-details .post-author");
author.innerHTML = `Created by: ${data.createdBy}`;

const date = document.querySelector(".post-details .post-date");
const createdDate = new Date(data.createdAt);
date.innerHTML = `Date created: ${createdDate.getDate()}/${
  createdDate.getMonth() + 1
}/${createdDate.getFullYear()}`;

const description = document.querySelector("h3");
description.innerHTML = data.description;

const text = document.querySelector(".post-text");
text.innerHTML = data.text;
