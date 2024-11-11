//
// Try to use built-in object methods to solve some of the problems here
//
//----------------------------------------------------------------------------------------------------
//
//
// ZADATAK 1. Write a functional expression that duplicates each element of a given array.
// Input: [2, 4, 7, 11, -2, 1]
// Output: [2, 2, 4, 4, 7, 7, 11, 11, -2, -2, 1, 1]
//
//                              SOLUTION
//
// var array = [2, 4, 7, 11, -2, 1];
// var array2 = [];
// array.forEach(function (item) {
//   array2.push(item);
//   array2.push(item);
// });
// console.log(array2);
//
//                              SOLUTION (Nikola)
//
// function duplicateElements(inputArray) {
//   var outputArray = [];
//   inputArray.forEach(function (elem) {   // Using forEach built in array method to
//     outputArray.push(elem, elem);        // iterate over array
//   });
//   return outputArray;
// }
// var input = [2, 4, 7, 11, -2, 1];
// var output = duplicateElements(input);
// console.log(output);
//
//
//----------------------------------------------------------------------------------------------------
//
//
// ZADATAK 2. Write a functional expression that removes all duplicates in a given array.
// Input: [8, 13, 8, 9, 12, 8, 1, 1, 4, 13]
// Output: [1, 4, 8, 9, 12, 13]
//
//                              SOLUTION 1
//
// var array = [8, 13, 8, 9, 12, 8, 1, 1, 4, 13];
// function removeDuplicates(array) {
//   return array.filter((item, index) => array.indexOf(item) === index);
// }
// console.log(removeDuplicates(array));
//
//                              SOLUTION 2
//
// var array = [8, 13, 8, 9, 12, 8, 1, 1, 4, 13];
// function removeDuplicates(data) {
//   let result = [];
//   array.forEach(function (arrayValue, index) {
//     if (array.indexOf(arrayValue) === index) {
//       result.push(arrayValue);
//     }
//   });
//   return result;
// }
// console.log(removeDuplicates(array));
//
//                              SOLUTION 3 (Nikola)
//
// function removeDuplicates(inputArray) {
//   var resultArray = [];
//   // We create a new array and then we sort
//   // it because sort() method is modifying
//   // existing array
//   var myArray = inputArray.slice().sort();
//   // We can use forEach to iterate array also
//   myArray.forEach(function (element, index, arr) {
//     var nextElem = arr[index + 1];
//     if (element !== nextElem) {
//       resultArray.push(element);
//     }
//   });
//   // Sort function sorts array in place
//   // modifying existing array
//   resultArray.sort(function (a, b) {
//     return a - b;
//   });
//   return resultArray;
// }
// var input = [8, 13, 8, 9, 12, 8, 1, 1, 4, 13];
// var output = removeDuplicates(input);

// console.log(output);
//
//----------------------------------------------------------------------------------------------------
//
//
// ZADATAK 3. a. Write a function that checks if a given array has odd number of elements.
// Input: [1, 2, 9, 2, 1]
// Output: true
//
//                              SOLUTION
//
// function isOdd(array) {
//   return array.length % 2 !== 0;
// }
// console.log(isOdd([1, 2, 9, 2, 1]));
//
//                              SOLUTION (Nikola)
//
// "use strict";
// function isOddNumOfElements(inputArray) {
//   return !!(inputArray.length % 2);
// }
// var input = [1, 2, 9, 2, 3, 1];
// var output = isOddNumOfElements(input);
// console.log(output);
//
//
//----------------------------------------------------------------------------------------------------
//
//
// ZADATAK 3. b. Write a function that counts the number of elements less than the middle
// element. If the given array has an even number of elements, print out an error
// message.
// Input: [-1, 8.1, 3, 6, 2.3, 44, 2.11]
// Output: 4
//
//                              SOLUTION
//
// function elementCounter(someArray) {
//   if (someArray.length % 2 === 0) {
//     return "ERROR!!! Niz ima paran broj elemenata";
//   } else {
//     var middleElement = someArray[Math.floor(someArray.length / 2)];
//     var counterOfSmaller = 0;
//     for (var i = 0; i < someArray.length; i++) {
//       if (someArray[i] < middleElement) {
//         counterOfSmaller++;
//       }
//     }
//     return counterOfSmaller;
//   }
// }
// console.log(elementCounter([-1, 8.1, 3, 100, 2.3, 44, 2.11]));
//
//                              SOLUTION (Nikola)
//
"use strict";
// function numOfElementsLessThanMiddle(inputArray) {
//   if (inputArray.length % 2 === 0) {
//     return "ERROR";
//   }
//   var counter = 0;
//   var middleElementIndex = (inputArray.length - 1) / 2;
//   var middleElement = inputArray[middleElementIndex];
//   inputArray.forEach(function (element) {
//     if (element < middleElement) {
//       counter++;
//     }
//   });
//   return counter;
// }
// var input = [-1, 8.1, 3, 6, 2.3, 44, 2.11];
// var output = numOfElementsLessThanMiddle(input);
// console.log(output);
//
//
//----------------------------------------------------------------------------------------------------
//
//
// ZADATAK 4. Write a function that finds the smallest element of a given array. The function should
// return an object that contains the smallest value and its last position in the array.
// Input: [1, 4, -2, 11, 8, 1, -2, 3]
// Output: { minValue: -2, minLastIndex: 6 }
//
//                              SOLUTION
//
// function findSmallestElement(someArray) {
//   var minValue = Math.min(...someArray);
//   var minLastIndex = someArray.lastIndexOf(minValue);
//   return { minValue, minLastIndex };
// }
// console.log(findSmallestElement([1, 4, -2, 11, 8, 1, -2, 3]));
//
//                              SOLUTION
//
"use strict";
// function findLowest(inputArray) {
//   var sortedArray = inputArray.slice().sort();
//   var minElem = sortedArray[0];
//   var minElemIndex = inputArray.lastIndexOf(minElem);
//   var minElemValue = inputArray[minElemIndex];
//   return {
//     minIndex: minElemIndex,
//     minValue: minElemValue,
//   };
// }
// var input = [2, 2, 4, 4, 7, 7, 11, 11, -2, -2, 1, 1];
// var output = findLowest(input);
// console.log(output);
//
//
//----------------------------------------------------------------------------------------------------
//
//
// ZADATAK 5. a. Write a function that finds all the elements in a given array less than a given
// element.
// Input: [2, 3, 8, -2, 11, 4], 6
// Output: [2, 3, -2, 4]
//
//                              SOLUTION
//
// function lessThanGivenNumber(someArray, givenNumber) {
//   var resultArray = [];
//   for (var i = 0; i < someArray.length; i++) {
//     if (someArray[i] < givenNumber) {
//       resultArray.push(someArray[i]);
//     }
//   }
//   return resultArray;
// }
// console.log(lessThanGivenNumber([2, 3, 8, -2, 11, 4, 3, 5, 4], 6));
//
//                              SOLUTION (Nikola)
//
// ("use strict");
// function elementsLessThanE(inputArray, element) {
//   var elementsLessThanE = [];
//   for (var i = 0; i < inputArray.length; i++) {
//     var arrayElement = inputArray[i];
//     if (arrayElement < element) {
//       elementsLessThanE.push(arrayElement);
//     }
//   }
//   return elementsLessThanE;
// }
// var input = [3, 4, 7, 9, 2, 6, 0, 1, 9];
// var output = elementsLessThanE(input, 5);
// console.log(output);
//
//
//----------------------------------------------------------------------------------------------------
//
//
// ZADATAK 5. b. Write a function that finds all the elements in a given array that start with the “pro”
// substring. The function should be case insensitive.
// Input: [’JavaScript’, ’Programming’, ’fun’, ’product’]
// Output: [’Programming’, ‘product’]
//
//                              SOLUTION 1
//
// function findStartWith(someArray) {
//   var newArray = [];
//   for (i = 0; i < someArray.length; i++) {
//     var currentElement = someArray[i].toLowerCase();
//     if (currentElement.startsWith("pro")) {
//       newArray.push(currentElement);
//     }
//   }
//   return newArray;
// }
// console.log(findStartWith(["JavaScript", "Programming", "fun", "product"]));
//
//
//                              SOLUTION 2 (Nikola)
//
// function findStartWith(someArray) {
//   var newArray = [];
//   someArray.forEach(function (item) {              //"item" je proizvoljan naziv i podrazumevano je neki element niza!!!
//     if (item.toLowerCase().startsWith("pro")) {
//       newArray.push(item);
//     }
//   });
//   return newArray;
// }
// console.log(findStartWith(["JavaScript", "Programming", "fun", "product"]));
//
//                              SOLUTION 2 (Nikola)
//
// Function that receives array and callback function
// Using a callback function we give our function
// flexibility to filter based on flexible criteria
//
// function filterArray(inputArray, callback) {
//   var resultArray = [];
//   for (var i = 0; i < inputArray.length; i++) {
//     var elem = inputArray[i];
//     if (callback(elem)) {
//       resultArray.push(elem);
//     }
//   }
//   return resultArray;
// }
// var input = ["projection", "javascript", "promise"];
// var output1 = filterArray(input, startsWithPro);
// var output2 = filterArray(input, function (element) {
//   // Contains word "java"
//   return element.indexOf("java") !== -1;
// });
// console.log(output1);
// console.log(output2);
//
//
//----------------------------------------------------------------------------------------------------
//
//
// ZADATAK 5. c. Write a function that expects an array and a callback function that filters out
// some of the elements. Use functions defined in a) or b) to test it.
//
//                              SOLUTION (Nikola)
//
// function eleBeginningWithPro(arr) {
//   var newArr = [];
//   for (var i = 0; i < arr.length; i++) {
//     var elem = arr[i];
//     var prefix = elem.toLowerCase().slice(0, 3);
//     if (prefix === "pro") {
//       newArr.push(elem);
//     }
//   }
// }
// function filterElements(arr, f) {
//   return f(arr);
// }
// console.log(
//   filterElements(["projection", "javascript", "promise"], eleBeginningWithPro)
// );
//
//
//----------------------------------------------------------------------------------------------------
//
//
// ZADATAK 6. a. Write a list (array) of products you usually buy in the supermarket. Write a price
// and name for each product. For example,
// [
// {name: ‘apples’, price: 100},
// {name: ‘milk’, price: 80},
// {name:’bananas’, price: 150}
// ]
//
//                              SOLUTION
//
// var shoppingList = [
//   { name: "apples", price: 100 },
//   { name: "juice", price: 80 },
//   { name: "bananas", price: 150 },
//   { name: "lemon", price: 100 },
// ];
//
//----------------------------------------------------------------------------------------------------
//
//
// ZADATAK 6. b. Write a function that calculates the total price of your shopping list.
//
//                              SOLUTION (Nikola)
//
// function calculateTotalPrice(inputArray) {
//   var totalPrice = 0;
//   for (var i = 0; i < inputArray.length; i++) {
//     totalPrice += inputArray[i].price;
//   }
//   return totalPrice;
// }
// var output = calculateTotalPrice(shoppingList);
// console.log(output);
//
//
//----------------------------------------------------------------------------------------------------
//
//
// ZADATAK 6. c. Write a function that calculates the average product price of your shopping list.
// Print this value with the precision of three decimals.
//
//                              SOLUTION 1
//
// function averagePrice(inputArray) {
//   var totalPrice = 0;
//   for (var i = 0; i < shoppingList.length; i++) {
//     totalPrice += shoppingList[i].price;
//   }
//   var numberOfElements = inputArray.length;
//   var resultPrice = totalPrice / numberOfElements;
//   return resultPrice.toFixed(3);
// }
// console.log(averagePrice(shoppingList));
//
//                              SOLUTION 2 (1 red koda manje)
//
// function averagePrice(inputArray) {
//   var totalPrice = 0;
//   for (var i = 0; i < shoppingList.length; i++) {
//     totalPrice += shoppingList[i].price;
//   }
//   var resultPrice = totalPrice / inputArray.length; // skraceno za var numberOfElements = inputArray.length;
//   return resultPrice.toFixed(3);
// }
// console.log(averagePrice(shoppingList));
//
//                              SOLUTION 3 (Nikola)
//
// function calculateAveragePrice(inputArray) {
//   var sum = 0;
//   for (var i = 0; i < inputArray.length; i++) {
//     var obj = inputArray[i];
//     sum += obj.price;
//   }
//   var averagePrice = sum / inputArray.length;
//   return averagePrice.toFixed(3);
// }
// console.log(calculateAveragePrice(shoppingList));
//
//
//----------------------------------------------------------------------------------------------------
//
//
// ZADATAK 6. d. Write a function that prints out the name of the most expensive product on your
// shopping list. Write the name in uppercase.
//
//                              SOLUTION
//
// function mostExpensive(inputArray) {
//   var mostExpensiveItem = inputArray[0];
//   for (var i = 0; i < inputArray.length; i++) {
//     if (inputArray[i].price > mostExpensiveItem.price) {
//       mostExpensiveItem = inputArray[i];
//     }
//   }
//   return mostExpensiveItem.name.toUpperCase();
// }
// console.log(mostExpensive(shoppingList));
//
//
//----------------------------------------------------------------------------------------------------
//
//
// ZADATAK 7. a. Write a function that checks if a given string is written in all capitals.
//
//                              SOLUTION 1
//
// function checkIfCapital(inputString) {
//   var capitalString = inputString.toUpperCase();
//   if (inputString === capitalString) {
//     return "Input string is ALL Caps";
//   } else {
//     return "Input String is NOT ALL CAPS";
//   }
// }
// console.log(checkIfCapital("TEST STRING IS WRITTEN IN CAPITAL"));
//
//                              SOLUTION 2
//
// function checkIfCapital(inputString) {
//   var capitalString = inputString.toUpperCase();
//   var result = capitalString.localeCompare(inputString);
//   if (result === 0) {
//     return "Input string is ALL Caps";
//   } else {
//     return "Input String is NOT ALL CAPS";
//   }
// }
// console.log(checkIfCapital("TEST STRING IS WRITTEN IN CAPITAL"));
//
//                              SOLUTION 3
//
// function checkIfCapital(inputString) {
//   var capitalString = inputString.toUpperCase();
//   var result = capitalString.localeCompare(inputString);
//   return result === 0
//     ? "Input string is ALL Caps"
//     : "Input String is NOT ALL CAPS";
// }
// console.log(checkIfCapital("TEST STRING IS WRITTEN IN CAPITAL"));
//
//                              SOLUTION 4 (Nikola)
//
// function isAllCapitals(str) {
//   return str === str.toUpperCase();
// }
// console.log(isAllCapitals("HALLO"));
//
//
//----------------------------------------------------------------------------------------------------
//
//
// ZADATAK 7. b. Write a function that checks if a given string contains any digits.
//
//                              SOLUTION 1
//
// function containsNumber(str) {
//   return /\d/.test(str); // Check if the string contains any digit between 0 and 9
// }
// console.log(containsNumber("Hello World")); // Output: false
// console.log(containsNumber("Hello123")); // Output: true
//
//                              SOLUTION 2
//
// function containsNumber(str) {
//   return !isNaN(parseFloat(str)) && isFinite(str);
// }
// console.log(containsNumber("Hello World")); // Output: false
// console.log(containsNumber("Hello123")); // Output: true
//
//                              SOLUTION 3
//
// function containsNumber(str) {
//   return str.match(/\d+/) !== null; //the /\d+/ regular expression pattern matches one or more consecutive digits.If the match() method returns a non-null value, it indicates that the string contains a number.
// }
// console.log(containsNumber("Hello World")); // Output: false
// console.log(containsNumber("Hello123")); // Output: true
//
//                              SOLUTION 4 (Nikola)
//
// function isWithDigits(str) {
//   for (var i = 0; i < str.length; i++) {
//     var elem = str[i];
//     var parsedChar = parseInt(elem);
//     if (!isNaN(parsedChar) && typeof parsedChar === "number") {
//       return true;
//     }
//   }
//   return false;
// }
// var input = "H3llo";
// var output = isWithDigits(input);
// console.log(output);
//
//
//----------------------------------------------------------------------------------------------------
//
//
// ZADATAK 7. c. Write a function that checks if a given string is a valid hexadecimal color.
//
//                              SOLUTION
//
// function isValidHexCode(str) {
//   if (str[0] != "#") return false;
//   if (!(str.length == 4 || str.length == 7)) return false;
//   for (let i = 1; i < str.length; i++)
//     if (
//       !(
//         (str[i].charCodeAt(0) <= "0".charCodeAt(0) &&
//           str[i].charCodeAt(0) <= 9) ||
//         (str[i].charCodeAt(0) >= "a".charCodeAt(0) &&
//           str[i].charCodeAt(0) <= "f".charCodeAt(0)) ||
//         str[i].charCodeAt(0) >= "A".charCodeAt(0) ||
//         str[i].charCodeAt(0) <= "F".charCodeAt(0)
//       )
//     )
//       return false;
//   return true;
// }
// console.log(isValidHexCode("#3524fa"));
//
//                              SOLUTION (Nikola)
//
// function isHex(string) {
//   if (string.indexOf("#") === 0) {
//     string = string.slice(1);
//   }
//   if (string.length !== 6 && string.length !== 3) {
//     return false;
//   }
//   for (var i = 0; i < string.length; i++) {
//     var hexDigit = string.charAt(i);
//     var decimalHexDigit = parseInt(hexDigit, 16);
//     if (isNaN(decimalHexDigit)) {
//       return false;
//     }
//   }
//   return true;
// }
// var input = "#f9f9f9";
// var output = isHex(input);
// console.log(output);
//
//
//----------------------------------------------------------------------------------------------------
//
//
// ZADATAK 7. d. Write a function that checks if a given number belongs to the interval from 1900
// to 2018.
//
//                              SOLUTION (JS Default YYYY-MM-DD)
//
// function isValidDate(inputDateString) {
//   return !isNaN(Date.parse(inputDateString));
// }
// console.log(isValidDate("2024-11-01"));
//
//
//----------------------------------------------------------------------------------------------------
//
//
// ZADATAK 7. e. Write a function named validator that returns an object with properties
// stringValidator, passwordValidator, colorValidator, and yearValidator referencing
// the functions from a) to d).
//
// FUNCTION A
//
// function checkIfCapital(inputString) {
//   var capitalString = inputString.toUpperCase();
//   var result = capitalString.localeCompare(inputString);
//   return result === 0
//     ? "Input string is ALL Caps"
//     : "Input String is NOT ALL CAPS";
// }
// console.log(checkIfCapital("TEST STRING IS WRITTEN IN CAPITAL"));
//
// FUNCTION B
//
// function containsNumber(str) {
//   return !isNaN(parseFloat(str)) && isFinite(str);
// }
// console.log(containsNumber("Hello World")); // Output: false
// console.log(containsNumber("Hello123")); // Output: true
//
// FUNCTION C
//
// function isValidHexCode(str) {
//   if (str[0] != "#") return false;
//   if (!(str.length == 4 || str.length == 7)) return false;
//   for (let i = 1; i < str.length; i++)
//     if (
//       !(
//         (str[i].charCodeAt(0) <= "0".charCodeAt(0) &&
//           str[i].charCodeAt(0) <= 9) ||
//         (str[i].charCodeAt(0) >= "a".charCodeAt(0) &&
//           str[i].charCodeAt(0) <= "f".charCodeAt(0)) ||
//         str[i].charCodeAt(0) >= "A".charCodeAt(0) ||
//         str[i].charCodeAt(0) <= "F".charCodeAt(0)
//       )
//     )
//       return false;
//   return true;
// }
// console.log(isValidHexCode("#3524fa"));
//
// FUNCTION D
//
// function isValidDate(inputDateString) {
//   return !isNaN(Date.parse(inputDateString));
// }
// console.log(isValidDate("2024-11-01"));
//
//                              SOLUTION
//
// function validator(stringVal, passVal, colorVal, yearVal) {
//   return {
//     stringVal,
//     passVal,
//     colorVal,
//     yearVal,
//   };
// }
// console.log(
//   validator(checkIfCapital, containsNumber, isValidHexCode, isValidDate)
// );
//
//
//----------------------------------------------------------------------------------------------------
//
//
// ZADATAK 8. Write a function that calculates a number of days to your birthday.
// Input: 25 February
// Output: 5 days
//
//                              SOLUTION (Nikola)
//
// function calculateDateBetween(inputDate) {
//   var currentDate = new Date();
//   if (
//     !inputDate ||
//     !inputDate instanceof Date ||
//     inputDate.getTime() < currentDate.getTime()
//   ) {
//     throw new Error("Input date is invalid");
//   }
//   var numberOfMilisecondsPerDay = 1000 * 60 * 60 * 24;
//   var result = Math.floor(
//     (inputDate.getTime() - currentDate.getTime()) / numberOfMilisecondsPerDay
//   );
//   return result;
// }
// console.log(calculateDateBetween(new Date(2024, 10, 3))); //months are indexed from 0
//
//                              SOLUTION (ChatGPT)
//
// function daysUntilBirthday(birthday) {
//   const today = new Date();
//   const nextBirthday = new Date(
//     today.getFullYear(),
//     birthday.getMonth(),
//     birthday.getDate()
//   );
//   // If the birthday has already occurred this year, set it to next year
//   if (nextBirthday < today) {
//     nextBirthday.setFullYear(nextBirthday.getFullYear() + 1);
//   }
//   const timeDiff = nextBirthday - today; // difference in milliseconds
//   const daysDiff = Math.ceil(timeDiff / (1000 * 60 * 60 * 24)); // convert to days
//   return daysDiff;
// }
// // Example usage:
// const myBirthday = new Date("YYYY-MM-DD"); // replace with your birthday
// console.log(`Days until birthday: ${daysUntilBirthday(myBirthday)}`);
//
//
//----------------------------------------------------------------------------------------------------
//
//
// ZADATAK 9. Write a function that for a given departure and arrival time calculates the time the trip
// takes.
// Input: 8:22:13 11:43:22
// Output: 3 hours 21 minutes 9 seconds
//
//
//----------------------------------------------------------------------------------------------------
//
//
// ZADATAK 10. a. Write a constructor function that creates points in space. Each point in space has
// its own x, y, and z coordinate. For example, (3, 5, 1) can be a point in space.
//
//                              SOLUTION
//
// function Point(x, y, z) {
//   this.x = x;
//   this.y = y;
//   this.z = z;
// }
// var p1 = new Point(1, 2, 3);
// var p2 = new Point(4, 5, 6);
//
//
//----------------------------------------------------------------------------------------------------
//
//
// ZADATAK 10. b. Write a function that calculates the distance between two points in the space.
//
//                              SOLUTION
//
// function distanceBetweenTwoPoints(point1, point2) {
//   var dx = point1.x - point2.x;
//   var dy = point1.y - point2.y;
//   var dz = point1.z - point2.z;
//   var result = Math.sqrt(dx * dx + dy * dy + dz * dz);
//   return result;
// }
// console.log(distanceBetweenTwoPoints(p1, p2));     // parametre dobija iz prethodnog zadatka (10.a)
//
//
//----------------------------------------------------------------------------------------------------
//
//
// ZADATAK 11. a. Write a function that generates a random integer value between 5 and 20.
//
//                              SOLUTION (from 1 to 10)
//
// function randomNumberGenerator() {
//   var result = Math.random();
//   return result.toFixed(1) * 10;
// }
// console.log(randomNumberGenerator());
//
//                              SOLUTION (from 5 to 20)
//
// function randomNumberGenerator(from, to) {
//   {
//     var min = Math.ceil(from);
//     var max = Math.floor(to);
//     return Math.floor(Math.random() * (max - min + 1) + min);
//   }
// }
// console.log(randomNumberGenerator(5, 20));
//
//
//----------------------------------------------------------------------------------------------------
//
//
// ZADATAK 11. b. Write a function that generates a random integer value between 50 and 100.
//
//                              SOLUTION (from 50 to 100)
//
// function randomNumberGenerator(from, to) {
//   {
//     var min = Math.ceil(from);
//     var max = Math.floor(to);
//     return Math.floor(Math.random() * (max - min + 1) + min);
//   }
// }
// console.log(randomNumberGenerator(50, 100));
//
//                              SOLUTION (Nikola)
//
// function randomNumberGenerator(min, max) {
//   return Math.floor(Math.random() * (max - min + 1) + min); // min and max included
// }
//
//
//----------------------------------------------------------------------------------------------------
//
//
// ZADATAK 11. c. Write a function which expects a number and a callback generator function and
// returns an array of numbers produced by the generator function.
//
//                              SOLUTION (Nikola) - koristi prethodnu f-ju (11.b) kao Callback
//
// function returnGeneratedNumbers(num, min, max, callback) {
//   var result = [];
//   for (var i = 0; i < num; i++) {
//     result.push(callback(min, max));
//   }
//   return result;
// }
// console.log(returnGeneratedNumbers(5, 1, 100, randomNumberGenerator)); // generise 5 brojeva izmedju 1 i 100 pozivajuci prethodnu f-ju
//
//
//----------------------------------------------------------------------------------------------------
//
//
// ZADATAK 12. Write a function that shuffles the elements of a given array.
// Input: [3, 6, 11, 2, 9, 1]
// Output: [6, 2, 9, 1, 3, 11] (it can be any random permutation of the given array)
