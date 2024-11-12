const container = document.querySelector(".container");

const list = document.createElement("ul");
const list_item_1 = document.createElement("li");
const list_item_2 = document.createElement("li");
const list_item_3 = document.createElement("li");
const list_img = document.createElement("img");
const checkBox1 = document.createElement("input");
const checkBox2 = document.createElement("input");
const checkBox3 = document.createElement("input");

list.innerHTML = "Manhattan";
list_item_1.innerHTML = "2.5 oz of Bourbon";
list_item_2.innerHTML = "1 oz of sweet Vermouth";
list_item_3.innerHTML = "2 dashes of bitter";
list_img.src = "manhattan-recipe.jpg";
checkBox1.setAttribute("type", "checkbox"); // moglo i checkBox1.type = "checkbox"
checkBox2.setAttribute("type", "checkbox");
checkBox3.setAttribute("type", "checkbox");

container.append(list);
list.append(list_item_1, list_item_2, list_item_3);
container.append(list_img);
list_item_1.prepend(checkBox1);
list_item_2.prepend(checkBox2);
list_item_3.prepend(checkBox3);
