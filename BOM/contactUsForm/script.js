const wrapper = document.querySelector(".wrapper");
const innerWrapper = document.querySelector(".innerWrapper");

const title = document.createElement("h1");
title.innerHTML = "Contact Us Today!";
wrapper.prepend(title);

const firstName = document.createElement("h3");
const firstNameInput = document.createElement("input");
// const firstNameIcon = document.createElement("img");
firstName.innerHTML = "First Name&nbsp&nbsp&nbsp";
firstNameInput.type = "text";
// firstNameIcon.src = "images/user.png";
// firstNameIcon.alt = "userIcon";
firstNameInput.placeholder = "First Name";
innerWrapper.append(firstName);
firstName.append(firstNameInput);
// firstNameInput.append(firstNameIcon);

const lastName = document.createElement("h3");
const lastNameInput = document.createElement("input");
lastName.innerHTML = "Last Name&nbsp&nbsp&nbsp";
lastNameInput.type = "text";
lastNameInput.placeholder = "Last Name";
innerWrapper.append(lastName);
lastName.append(lastNameInput);

const email = document.createElement("h3");
const emailInput = document.createElement("input");
email.innerHTML = "E-Mail&nbsp&nbsp&nbsp";
emailInput.type = "email";
emailInput.placeholder = "E-Mail Address";
innerWrapper.append(email);
email.append(emailInput);

const phone = document.createElement("h3");
const phoneInput = document.createElement("input");
phone.innerHTML = "Phone #&nbsp&nbsp&nbsp";
phoneInput.type = "text";
phoneInput.placeholder = "(845)555-1212";
innerWrapper.append(phone);
phone.append(phoneInput);

const address = document.createElement("h3");
const addressInput = document.createElement("input");
address.innerHTML = "Address&nbsp&nbsp&nbsp";
addressInput.type = "text";
addressInput.placeholder = "address";
innerWrapper.append(address);
address.append(addressInput);

const city = document.createElement("h3");
const cityInput = document.createElement("input");
city.innerHTML = "City&nbsp&nbsp&nbsp";
cityInput.type = "text";
cityInput.placeholder = "city";
innerWrapper.append(city);
city.append(cityInput);

const state = document.createElement("h3");
const stateInput = document.createElement("select");
const stateOpt1 = document.createElement("option");
const stateOpt2 = document.createElement("option");
const stateOpt3 = document.createElement("option");
const stateOpt4 = document.createElement("option");
const stateOpt5 = document.createElement("option");
const stateOpt6 = document.createElement("option");
const stateOpt7 = document.createElement("option");
const stateOpt8 = document.createElement("option");
const stateOpt9 = document.createElement("option");
const stateOpt10 = document.createElement("option");
const stateOpt11 = document.createElement("option");
const stateOpt12 = document.createElement("option");
const stateOpt13 = document.createElement("option");
const stateOpt14 = document.createElement("option");
const stateOpt15 = document.createElement("option");

state.innerHTML = "State&nbsp&nbsp&nbsp";
stateInput.type = "select";
stateOpt1.innerHTML = "Please select your country";
stateOpt2.innerHTML = "Serbia";
stateOpt3.innerHTML = "Italy";
stateOpt4.innerHTML = "Greece";
stateOpt5.innerHTML = "Germany";
stateOpt6.innerHTML = "Netherlands";
stateOpt7.innerHTML = "Belgium";
stateOpt8.innerHTML = "Bulgaria";
stateOpt9.innerHTML = "Romania";
stateOpt10.innerHTML = "Croatia";
stateOpt11.innerHTML = "Slovenia";
stateOpt12.innerHTML = "Sweden";
stateOpt13.innerHTML = "Norway";
stateOpt14.innerHTML = "Ireland";
stateOpt15.innerHTML = "Hungary";

innerWrapper.append(state);
state.append(stateInput);
stateInput.append(
  stateOpt1,
  stateOpt2,
  stateOpt3,
  stateOpt4,
  stateOpt5,
  stateOpt6,
  stateOpt7,
  stateOpt8,
  stateOpt9,
  stateOpt10,
  stateOpt11,
  stateOpt12,
  stateOpt13,
  stateOpt14,
  stateOpt15
);

const zipCode = document.createElement("h3");
const zipCodeInput = document.createElement("input");
zipCode.innerHTML = "ZIP Code&nbsp&nbsp&nbsp";
zipCodeInput.type = "text";
zipCodeInput.placeholder = "Zip Code";
innerWrapper.append(zipCode);
zipCode.append(zipCodeInput);

const domainName = document.createElement("h3");
const domainNameInput = document.createElement("input");
domainName.innerHTML = "Website or domain name&nbsp&nbsp&nbsp";
domainNameInput.type = "text";
domainNameInput.placeholder = "Website or domain name";
innerWrapper.append(domainName);
domainName.append(domainNameInput);

const hostingYesNo = document.createElement("h3");
const hostingYesInput = document.createElement("input");
const hostingNoInput = document.createElement("input");
const hostingYesLabel = document.createElement("span");
const hostingNoLabel = document.createElement("span");
hostingYesNo.innerHTML = "Do you have hosting?&nbsp&nbsp&nbsp";
hostingYesInput.type = "radio";
hostingYesInput.name = "radio";
hostingYesLabel.innerHTML = "yes";
hostingNoLabel.innerHTML = "no";
hostingNoInput.type = "radio";
hostingNoInput.name = "radio";
innerWrapper.append(hostingYesNo);
hostingYesNo.append(hostingYesLabel);
hostingYesNo.append(hostingYesInput);
hostingYesNo.append(hostingNoLabel);
hostingYesNo.append(hostingNoInput);

const projectDesc = document.createElement("h3");
const projectDescInput = document.createElement("textarea");
projectDesc.innerHTML = "Project Description&nbsp&nbsp&nbsp";
projectDesc.setAttribute("position", "absolute");
projectDescInput.type = "textarea";
projectDescInput.setAttribute("cols", "30");
projectDescInput.setAttribute("rows", "5");
projectDescInput.style.maxWidth = "250px";
projectDescInput.setAttribute("placeholder", "Describe your project");
innerWrapper.append(projectDesc);
projectDesc.append(projectDescInput);

const sendButton = document.createElement("button");
sendButton.innerHTML = "Send";
innerWrapper.append(sendButton);

sendButton.onclick = (event) => {
  event.preventDefault();
  const objData = {
    firstName: firstNameInput.value,
    lastName: lastNameInput.value,
    email: emailInput.value,
    phone: phoneInput.value,
    address: addressInput.value,
    city: cityInput.value,
    state: stateInput.value,
    zipCode: zipCodeInput.value,
    domainName: domainNameInput.value,
    projectDesc: projectDescInput.value,
  };
  if (hostingYesInput.checked) {
    objData.hostingYesNo = "YES";
  }
  if (hostingNoInput.checked) {
    objData.hostingYesNo = "NO";
  }

  console.log(objData);
};
