// ZADATAK 1. Write a program to insert a string within a string at a particular position
// (default is 1, beginning of a string).
// "My random string", "JS " -> "JS My random string"
// "My random string", "JS ", 10 -> "My random JS string"
//
//                              SOLUTION 1
//
// "My random string", "JS" -> "JS My random string"
// "My random string", "JS", 10 -> "My random JS string"
// function insertAt(firstString, insertString, index) {
//   if (index < 0 || index > firstString.length) {
//     return firstString;
//   }
//   var result = "";
//   var i = 0;
//   while (i < index) {
//     result += firstString[i];
//     i++;
//   }
//   var j = 0;
//   while (j < insertString.length) {
//     result += insertString[j];
//     j++;
//   }
//   while (i < firstString.length) {
//     result += firstString[i];
//     i++;
//   }
//   return result;
// }
// var firstString = "My random string";
// var insertString = "JS ";
// var index = 10;
// console.log(insertAt(firstString, insertString, index));
//
//                              SOLUTION 2
//
// function insertString(string, ubaceniString, pozicija) {
//   var noviString = [];
//   var result = "";
//   for (var i = 0; i < string.length; i++) {
//     noviString[i] = string[i];
//   }

//   for (var i = 0; i < noviString.length; i++) {
//     if (i === pozicija) {
//       result += ubaceniString;
//       console.log(ubaceniString);
//     }
//     result += noviString[i];
//   }
//   return result;
// }
// console.log(insertString("My random string", "JS", 10));
//
//
//----------------------------------------------------------------------------------------------------
//
//
// ZADATAK 2. Write a program to join all elements of the array into a string skipping
// elements that are undefined, null, NaN or Infinity.
// [NaN, 0, 15, false, -22, '', undefined, 47, null]
//
//                              SOLUTION 1
//
// var myArray = [NaN, 0, 15, false, -22, "", undefined, 47, null];
// var newString = "";
// for (i = 0; i < myArray.length; i++) {
//   if (
//     myArray[i] === undefined ||
//     myArray[i] === null ||
//     isNaN(myArray[i]) ||
//     myArray[i] === Infinity
//   ) {
//     continue;
//   } else {
//     newString = newString + myArray[i];
//   }
// }
// console.log(newString);
//
//                              SOLUTION 2 (Marko)
//
// function joinElements(inputArray) {
//   var newString = "";
//   for (var i = 0; i < inputArray.length; i++) {
//     var element = inputArray[i];
//     if (
//       element == undefined ||
//       element == null ||
//       element !== element ||
//       element == Infinity
//     ) {
//     } else {
//       newString += element;
//     }
//   }
//   return newString;
// }
// console.log(joinElements([NaN, 0, 15, false, -22, undefined, 47, null]));
//
//                              SOLUTION 3
//
// function skipElement(myArray) {
//   var newString = "";
//   for (i = 0; i < myArray.length; i++) {
//     if (
//       myArray[i] === undefined ||
//       myArray[i] === null ||
//       isNaN(myArray[i]) ||
//       myArray[i] === Infinity
//     ) {
//       continue;
//     } else {
//       newString = newString + myArray[i];
//     }
//   }
//   return newString;
// }
// console.log(skipElement([NaN, 0, 15, false, -22, "", undefined, 47, null]))
//
//
//----------------------------------------------------------------------------------------------------
//
//
// ZADATAK 3. Write a program to filter out falsy values from the array.
// [NaN, 0, 15, false, -22, '', undefined, 47, null] -> [15, -22, 47]
//
//                              SOLUTION
//
//[NaN, 0, 15, false, -22, '', undefined, 47, null] -> [15, -22, 47]
// function filterFalsy(myArray) {
//   var result = "";
//   for (i = 0; i < myArray.length; i++) {
//     if (!myArray[i]) {
//       continue;
//     } else {
//       result = result + " " + myArray[i];
//     }
//   }
//   return result;
// }
// console.log(filterFalsy([NaN, 0, 15, false, -22, "", undefined, 47, null]));
//
//
//----------------------------------------------------------------------------------------------------
//
//
// ZADATAK 4. Write a function that reverses a number. The result must be a number.
// 12345 -> 54321 // Output must be a number
//
//                              SOLUTION 1
//
// function numberReverse(x) {
//   var numberToString = "" + x;
//   var reversed = "";
//   for (var i = numberToString.length - 1; i >= 0; i--) {
//     reversed += numberToString[i];
//   }
//   return reversed * 1;
// }
// console.log(numberReverse(35254));
//
//                              SOLUTION 2 (Stefan)
//
// function reverseNumber(number) {
//   strNumber = number + ""; //pretvara u string
//   reverseStrNumber = "";
//   for (var i = strNumber.length - 1; i >= 0; i--) {
//     reverseStrNumber += strNumber[i];
//   }
//   return reverseStrNumber * 1;
// }
// console.log(reverseNumber(35813));
//
//
//----------------------------------------------------------------------------------------------------
//
//
// ZADATAK 5. Write a function to get the last element of an array. Passing a parameter 'n' will
// return the last 'n' elements of the array.
// [7, 9, 0, -2] -> -2
// [7, 9, 0, -2], 2 -> [0, -2]
//
//                              SOLUTION
//
// function lastElements(array, n) {
//   var solution = [];
//   for (i = array.length - 1; i >= 0; i--) {
//     if (i >= n) {
//       solution[result.lenght] = array[i];
//     }
//   }
//   return solution;
// }
// console.log([7, 9, 0, -2], 2);
//
//
//----------------------------------------------------------------------------------------------------
//
//
// ZADATAK 6. Write a function to create a specified number of elements
// with pre-filled numeric value array.
// 6, 0 -> [0, 0, 0, 0, 0, 0]
// 2, "none" -> ["none", "none"]
// 2 -> [null, null]
//
//                              SOLUTION
//
//
//----------------------------------------------------------------------------------------------------
//
//
// ZADATAK 7. Write a function that says whether a number is perfect.
// 28 -> 28 is a perfect number.
// Note: According to Wikipedia: In number theory, a perfect number is a positive integer that
// is equal to the sum of its proper positive divisors, that is, the sum of its positive
// divisors excluding the number itself (also known as its aliquot sum). Equivalently,
// a perfect number is a number that is half the sum of all of its positive
// divisors (including itself).
// E.g.: The first perfect number is 6, because 1, 2 and 3 are its proper positive divisors,
// and 1 + 2 + 3 = 6. Equivalently, the number 6 is equal to half the sum of all
// its positive divisors: (1 + 2 + 3 + 6) / 2 = 6.
// The next perfect number is 28 = 1 + 2 + 4 + 7 + 14.
// This is followed by the perfect numbers 496 and 8128.
//
//                              SOLUTION
//
//
//----------------------------------------------------------------------------------------------------
//
//
// ZADATAK 8. Write a function to find a word within a string.
// 'The quick brown fox', 'fox' -> "'fox' was found 1 times"
// 'aa bb cc dd aa', 'aa' -> "'aa' was found 2 times"
//
//                              SOLUTION
//
//
//----------------------------------------------------------------------------------------------------
//
//
// ZADATAK 9. Write a function to hide email address.
// "myemailaddress@bgit.rs" -> "mye...@bgit.rs"
//
//                              SOLUTION
//
//
//----------------------------------------------------------------------------------------------------
//
//
// ZADATAK 10. Write a program to find the most frequent item of an array.
// [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]
//
//                              SOLUTION
