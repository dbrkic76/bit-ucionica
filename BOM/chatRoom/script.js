let sendButton = document.querySelector("#newMessageSend");
let messageInput = document.querySelector("#newMessageField");
let messages = document.querySelector("#messageSpace");

const sendMessage = () => {
  let message = messageInput.value;
  let sentMessage = document.createElement("p");
  sentMessage.innerText = message;
  if (message.trim().length > 0) {
    messages.append(sentMessage);
  }
  messageInput.value = "";
};
sendButton.addEventListener("click", sendMessage);
