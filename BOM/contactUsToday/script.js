const wrapper = document.querySelector(".wrapper");
const innerWrapper = document.querySelector(".innerWrapper");

const title = document.createElement("h1");
title.innerHTML = "Contact Us Today!";
wrapper.prepend(title);

const firstName = document.createElement("h3");
const firstNameInput = document.createElement("input");
firstName.innerHTML = "First Name";
firstNameInput.type = "text";
firstNameInput.placeholder = "First Name";
innerWrapper.append(firstName);
firstName.append(firstNameInput);

const lastName = document.createElement("h3");
const lastNameInput = document.createElement("input");
lastName.innerHTML = "Last Name";
lastNameInput.type = "text";
lastNameInput.placeholder = "Last Name";
innerWrapper.append(lastName);
lastName.append(lastNameInput);

const email = document.createElement("h3");
const emailInput = document.createElement("input");
email.innerHTML = "E-Mail";
emailInput.type = "email";
emailInput.placeholder = "E-Mail Address";
innerWrapper.append(email);
email.append(emailInput);

const phone = document.createElement("h3");
const phoneInput = document.createElement("input");
phone.innerHTML = "Phone #";
phoneInput.type = "text";
phoneInput.placeholder = "(845)555-1212";
innerWrapper.append(phone);
phone.append(phoneInput);

const address = document.createElement("h3");
const addressInput = document.createElement("input");
address.innerHTML = "Address";
addressInput.type = "text";
addressInput.placeholder = "address";
innerWrapper.append(address);
address.append(addressInput);

const city = document.createElement("h3");
const cityInput = document.createElement("input");
city.innerHTML = "City";
cityInput.type = "text";
cityInput.placeholder = "city";
innerWrapper.append(city);
city.append(cityInput);

const state = document.createElement("h3");
const stateInput = document.createElement("input");
state.innerHTML = "State";
stateInput.type = "select";
stateInput.placeholder = "Please select your state";
innerWrapper.append(state);
state.append(stateInput);

const zipCode = document.createElement("h3");
const zipCodeInput = document.createElement("input");
zipCode.innerHTML = "ZIP Code";
zipCodeInput.type = "text";
zipCodeInput.placeholder = "Zip Code";
innerWrapper.append(zipCode);
zipCode.append(zipCodeInput);

const domainName = document.createElement("h3");
const domainNameInput = document.createElement("input");
domainName.innerHTML = "Website or domain name";
domainNameInput.type = "text";
domainNameInput.placeholder = "Website or domain name";
innerWrapper.append(domainName);
domainName.append(domainNameInput);

const hostingYesNo = document.createElement("h3");
const hostingYesInput = document.createElement("input");
const hostingNoInput = document.createElement("input");
const hostingYesLabel = document.createElement("span");
const hostingNoLabel = document.createElement("span");
hostingYesNo.innerHTML = "Do you have hosting?";
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
const projectDescInput = document.createElement("input");
projectDesc.innerHTML = "Project Description";
projectDescInput.type = "textarea";
projectDescInput.placeholder = "ProjectDescription";
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
