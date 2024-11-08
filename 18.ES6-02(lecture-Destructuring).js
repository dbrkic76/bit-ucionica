const sandwich = {
  bread: "Italian",
  meat: "Tuna",
  cheese: "Swiss",
};
const { bread, meat } = sandwich;
// const bread = sandwich.bread;
// const meat = sandwich.meat;
console.log((bread, meat));
const test = { ...sandwich };
////////////////////////////////////////////////////////////////////////////////////////////////
// const sandwich = {
//   bread: "Italian",
//   meat: "Tuna",
//   cheese: "Swiss",
// };

// const { bread, meat } = sandwich;
// // const bread = sandwich.bread;
// // const meat = sandwich.meat;
// console.log(bread, meat);
// const test = { ...sandwich };

// const companies = ["Apple", "Google", "Microsoft"];
// const [firstCompany, secondCompany] = companies;
// console.log(firstCompany);

// const regularPerson = {
//   name: "John",
//   surname: "Snow",
// };

// function showName({ name }) {
//   console.log(name);
// }

// showName(regularPerson);

// const [, , lastCompany] = companies;
// console.log(lastCompany);

// const numberArray = [1, 2, 3, 4];
// function iterate(element) {}
// numberArray.forEach((element) => {
//   console.log(element);
// });

// for (var i = 0; i < numberArray.length; i++) {
//   var element = numberArray[i];
// }

// const testFunction = (element) => console.log(element);
// const peaks = ["Tallac", "Ralston", "Rose"];
// const canyons = ["Ward", "Blackwood"];
// const joinedArray = [...peaks, ...canyons];
// // console.log(joinedArray);

// const [first, second, ...rest] = joinedArray;
// console.log(first);
// console.log(second);
// console.log(rest);

// const morning = {
//   breakfast: "Ham and eggs",
//   lunch: "Burger",
// };

// const dinner = "Fish";

// const meals = {
//   ...morning,
//   dinner,
// };

// console.log(meals);
