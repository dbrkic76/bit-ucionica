// 1. Filtrirati sve usere koji se nalaze u Srbiji
// 2. Pronaci prvog usera ciji je country US
// 3. Proveriti da li su svi postalCodes validni - duzina veca od 5
// 4. Za svaki eleemnt niza formatirati string u sledecem formatu (console.log: Ana - Novi Sad, Serbia)
// 5. Napraviti novi niz ciji su elementi samo id i name user-a (bez location-a)
// 6. Napraviti novi niz ciji su elementi 'metgovanai' elementi niza data i userPhoneNumber po id

const data = [
  {
    id: 1,
    name: "Ana",
    location: {
      city: "Belgrade",
      country: "Serbia",
      postalCode: 11070,
    },
  },
  {
    id: 2,
    name: "John",
    location: {
      city: "New York",
      country: "US",
      postalCode: 10001,
    },
  },
  {
    id: 3,
    name: "Stefan",
    location: {
      city: "Krusevac",
      country: "Serbia",
      postalCode: 37000,
    },
  },
  {
    id: 4,
    name: "Ana",
    location: {
      city: "Novi Sad",
      country: "Serbia",
      postalCode: 21000,
    },
  },
];
const userPhoneNumbers = [
  { id: 1, phoneNumber: "0606458125" },
  { id: 2, phoneNumber: "0635268749" },
  { id: 3, phoneNumber: "0615798146" },
  { id: 4, phoneNumber: "0695646654" },
];

let serbianUser = data.filter((user, i, arr) => {
  return user.location.country === "Serbia";
});
// console.log(serbianUser);

let usUser = data.find((user) => {
  return user.location.country === "US";
});
// console.log(usUser);

letValidPostalNumber = data.every((user) => {
  return 9999 < user.location.postalCode < 100000;
});
//console.log(letValidPostalNumber);

data.forEach((user) => {
  console.log(`${user.name} - ${user.location.city}, ${user.location.country}`);
});

let newArray = data.map((user) => {
  return {
    name: user.name,
    id: user.id,
  };
});
// console.log(newArray);

let = mergedArray = data.map((user) => {
  const userPhoneNumber = userPhoneNumbers.find((phoneNumber) => {
    return user.id === phoneNumber.id;
  });
  return {
    ...user,
    phoneNumber: userPhoneNumber
      ? userPhoneNumber.phoneNumber
      : "No phone number",
  };
});
// console.log(mergedArray);
