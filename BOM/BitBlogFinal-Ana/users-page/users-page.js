const USERS_URL =
  "https://673c4f8796b8dcd5f3f963e6.mockapi.io/api/v1/subscriptions";
const subSection = document.querySelector(".sub-section div");
const unsubSection = document.querySelector(".unsub-section div");

const getUsers = () => {
  fetch(USERS_URL)
    .then((res) => res.json())
    .then((res) => createLayout(res));
};

getUsers();

const createLayout = (users) => {
  subSection.innerHTML = "";
  unsubSection.innerHTML = "";

  const subsribedUsers = users.filter((user) => user.isSubscribed);
  const unsubsribedUsers = users.filter((user) => !user.isSubscribed);

  subsribedUsers.forEach((user) => createUserCard(user));
  unsubsribedUsers.forEach((user) => createUserCard(user));
};

const createUserCard = (user) => {
  const userWrapper = document.createElement("div");
  const detailsWrapper = document.createElement("div");
  const userName = document.createElement("h3");
  const userEmail = document.createElement("a");
  const userBtn = document.createElement("button");

  userName.innerHTML = user.name;
  userEmail.href = `mailto:${user.email}`;
  userEmail.innerHTML = user.email;
  userBtn.innerHTML = user.isSubscribed ? "-" : "+";
  userBtn.addEventListener("click", () => {
    changeUserSubscription(user);
  });

  detailsWrapper.append(userName, userEmail);
  userWrapper.append(detailsWrapper, userBtn);
  (user.isSubscribed ? subSection : unsubSection).append(userWrapper);
};

const changeUserSubscription = (user) => {
  fetch(`${USERS_URL}/${user.id}`, {
    method: "PUT",
    body: JSON.stringify({
      ...user,
      isSubscribed: !user.isSubscribed,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then(() => getUsers());
};
