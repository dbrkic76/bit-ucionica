// ZADATAK 1. Write a function that converts an array of strings into an array of numbers.
// Filter out all non-numeric values.
// Input: ["1", "21", undefined, "42", "1e+3", Infinity]
// Output: [1, 21, 42, 1000]
//
//                              SOLUTION
//
// function strToNum(array) {
//   var converted = [];
//   for (var i = 0; i < array.length; i++) {
//     var value = parseFloat(array[i]);
//     if (!isNaN(value) && isFinite(value)) {
//       converted[converted.length] = value;
//     }
//   }
//   return converted;
// }
// console.log("Zadatak 1");
// console.log(strToNum(["1", "21", undefined, "42", "1e+3", Infinity]));
//
//
//----------------------------------------------------------------------------------------------------
//
//
// ZADATAK 2. Write a program to join all elements of the array into a string skipping
// elements that are undefined, null, NaN or Infinity.
// 	Input: [NaN, 0, 15, false, -22, '', undefined, 47, null]
// 	Output: “015false-2247”
//
//                              SOLUTION
//
// function joinElements(array) {
//   var converted = "";
//   for (var i = 0; i < array.length; i++) {
//     var tempValue = array[i];
//     if (
//       tempValue === undefined ||
//       tempValue === null ||
//       isNaN(tempValue) ||
//       tempValue === Infinity
//     )
//       continue;
//     else {
//       converted += tempValue;
//     }
//   }
//   return converted;
// }
// console.log("Zadatak 2");
// console.log(joinElements([NaN, 0, 15, false, -22, "", undefined, 47, null]));
//
//
//----------------------------------------------------------------------------------------------------
//
//
// ZADATAK 3. Write a program to filter out falsy values from the array.
// 	Input: [NaN, 0, 15, false, -22, '', undefined, 47, null]
// Output: [15, -22, 47]
//
//                              SOLUTION
//
// function filterFalsy(array) {
//   var withoutFalsy = [];
//   for (i = 0; i < array.length; i++) {
//     var tempValue = array[i];
//     if (tempValue) {
//         withoutFalsy.push(tempValue);
//     }
//   }
//   return withoutFalsy;
// }
//
// console.log("Zadatak 3");
// console.log(filterFalsy([NaN, 0, 15, false, -22, "", undefined, 47, null]));
//
//
//----------------------------------------------------------------------------------------------------
//
//
// ZADATAK 4. Write a program that calculates a number of integer values in the array.
// 	Input: [NaN, 23.1, 15, false, -22.5, '', 4, 7, null]
// Output: 3
//
//                              SOLUTION
//
// function numberOfIntegers(array) {
//   var finalNumber = 0;
//   for (i = 0; i < array.length; i++) {
//     if (Number.isInteger(array[i])) {
//       finalNumber++;
//     }
//     continue;
//   }
//   return finalNumber;
// }
// console.log("Zadatak 4")
// console.log(numberOfIntegers([NaN, 23.1, 15, false, -22.5, "", 4, 7, null]));
//
//
//----------------------------------------------------------------------------------------------------
//
//
// ZADATAK 5. Write a program that calculates a number of float values in the array.
// 	Input: [NaN, 23.1, 15, false, -22.5, '', 4, 7, null]
// Output: 2
//
//                              SOLUTION 1
//
// function numberOfFloats(array) {
//   var finalNumber = 0;
//   for (i = 0; i < array.length; i++) {
//     if (array[i] % 1 > 0 || array[i] % 1 < 0) {
//       finalNumber++;
//     }
//   }
//   return finalNumber;
// }
// console.log("Zadatak 5")
// console.log(numberOfFloats([NaN, 23.1, 15.2, false, -22.5, "", 4, 7, null]));
//
//                              SOLUTION 2
//
//function numberOfFloats(array) {
//   var finalNumber = 0;
//   for (i = 0; i < array.length; i++) {
//     var IntegerValue = parseInt(array[i]);
//     var FloatValue = parseFloat(array[i]);
//     if (FloatValue - IntegerValue) {
//       finalNumber++;
//     }
//   }
//   return finalNumber;
// }
// console.log("Zadatak 5");
// console.log(numberOfFloats([NaN, 23.1, 15, false, -22.5, "", 4, 7, null]));
//
//                              SOLUTION 3
//
// function numberOfFloats(array) {
//   var finalNumber = 0;
//   for (i = 0; i < array.length; i++) {
//     var tempValue = array[i];
//     var IntegerValue = parseInt(tempValue);
//     var FloatValue = parseFloat(tempValue);
//     if (tempValue === +tempValue && tempValue != (tempValue | 0)) {
//       finalNumber++;
//     }
//   }
//   return finalNumber;
// }
// console.log("Zadatak 5");
// console.log(numberOfFloats([NaN, 23.1, 15, false, -22.5, "", 4, 7, null]));
