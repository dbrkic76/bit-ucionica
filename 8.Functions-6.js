// ZADATAK 1. Write a function to count vowels in a provided string.
// Vowels are a, e, i, o, and u as well as A, E, I, O, and U.
//
//                              SOLUTION
//
// function findVowel(string) {
//   var smallCapString = string.toLowerCase();
//   var result = 0;
//   for (i = 0; i < string.length; i++) {
//     if (
//       smallCapString[i] === "a" ||
//       smallCapString[i] === "e" ||
//       smallCapString[i] === "i" ||
//       smallCapString[i] === "o" ||
//       smallCapString[i] === "u"
//     ) {
//       result++;
//     }
//   }
//   return result;
// }
// console.log(findVowel("Lorem Ipsum"));
//
//
//----------------------------------------------------------------------------------------------------
//
//
// ZADATAK 2. Write a function that combines two arrays by alternatingly taking elements.
//
//                              SOLUTION
//
// [‘a’,’b’,’c’], [1,2,3] ->; [‘a’,1,’b’,2,’c’,3]
// function mergeArrays(niz1, niz2) {
//   var konacniNiz = [];
//   for (var i = 0; i < niz1.length; i++) {
//     konacniNiz.push(niz1[i]);
//     konacniNiz.push(niz2[i]);
//   }
//   return konacniNiz;
// }
// console.log(mergeArrays(["a", "b", "c"], [1, 2, 3]));
//
//
//----------------------------------------------------------------------------------------------------
//
//
// ZADATAK 3. Write a function that rotates a list by k elements.
// For example [1,2,3,4,5,6] rotated by two becomes [3,4,5,6,1,2]+
// function rotateArray(originalArray, k) {
//
//                              SOLUTION
//
//   var firstArrayPart = originalArray.slice(0, k);
//   var secondArrayPart = originalArray.slice(k, originalArray.length);
//   newArray = secondArrayPart.concat(firstArrayPart);
//   return newArray;
// }
// console.log(
//   rotateArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2)
// );
//
//
//----------------------------------------------------------------------------------------------------
//
//
// ZADATAK 4. Write a function that takes a number and returns array of its digits.
//
//                              SOLUTION
//
// function numberOfDigits(givenNumber) {
//   var numberArray = [];
//   var stringNumber = givenNumber.toString();
//   for (i = 0; i < stringNumber.length; i++) {
//     numberArray.push(stringNumber[i]);
//   }
//   return numberArray;
// }
// console.log(numberOfDigits(35268311));
//
//
// ZADATAK 5. Write a program that prints a multiplication table for numbers up to 12.
//
//                              SOLUTION (URADI PONOVO ZA SVE BROJEVE OD 1 do number)
//
// function multiplicationTable(number) {
//   for (i = 1; i <= 10; i++) {
//     console.log(number + "*" + i + " = " + number * i);
//   }
// }
// multiplicationTable(12);
//
//
//----------------------------------------------------------------------------------------------------
//
//
// ZADATAK 6. Write a function to input temperature in Centigrade and convert to Fahrenheit.
//
//                              SOLUTION 1
//
// function centigradeToFahrenheit(number) {
//   var result = (9 / 5) * number + 32;
//   return result;
// }
// console.log(centigradeToFahrenheit(18.5).toFixed(1));
//
//                              SOLUTION 2 (NE RADI - EKSPERIMENTISI SA FUNCTION SCOPE)
//
// function centigradeToFahrenheit(number) {
//   var result = (9 / 5) * number + 32;
//   return result;
// }
// var number = 18.5;
// console.log(
//   number + "\u00B0C" + " is " + centigradeToFahrenheit().toFixed(1) + "\u00B0F"
// );
//
//
//----------------------------------------------------------------------------------------------------
//
//
// ZADATAK 7. Write a function to find the maximum element in array of numbers.
// Filter out all non-number elements.
//
//                              SOLUTION
//
// function maximumElement(array) {
//   var maxElement = -Infinity;
//   for (i = 0; i < array.length; i++) {
//     if (array[i] !== isNaN && array[i] > maxElement) {
//       maxElement = array[i];
//     }
//   }
//   return maxElement;
// }
// console.log(maximumElement([2, 5, 38, "john", 11, "string", 4]));
//
//
//----------------------------------------------------------------------------------------------------
//
//
// ZADATAK 8. Write a function to find the maximum and minimum elements. Function returns an array.
//
//                              SOLUTION
//
// function minMaxElements(array) {
//   var max = array[0];
//   var min = 0;
//   for (var i = 0; i < array.length; i++) {
//     if (array[i] > max) {
//       max = array[i];
//     }
//     if (array[i] < min) {
//       min = array[i];
//     }
//   }
//   return [max, min];
// }
// console.log(minMaxElements([-2, 5, 38, 11, 4, 35, 0, 1, -68]));
//
//
//----------------------------------------------------------------------------------------------------
//
//
// ZADATAK 9. Write a function to find the median element of array.
//
//                              SOLUTION
//
//
//----------------------------------------------------------------------------------------------------
//
//
// ZADATAK 10. Write a function to find the element that occurs most frequently.
//
//                              SOLUTION (URADI PONOVO BEZ SORTIRANJA NIZA!!!!!!!!!!)
//
// function findMostFrequent(array) {
//   var sorted = array.sort((a, b) => a - b);
//   var mostFrequentElement = sorted[0];
//   var currentElement = sorted[0];
//   var currentCounter = 1;
//   var mostFrequentCounter = 1;
//   for (var i = 1; i < sorted.length; i++) {
//     if (sorted[i] === currentElement) {
//       currentCounter++;
//     } else {
//       currentElement = sorted[i];
//       currentCounter = 1;
//     }
//     if (currentCounter > mostFrequentCounter) {
//       mostFrequentCounter = currentCounter;
//       mostFrequentElement = currentElement;
//     }
//   }
//   return mostFrequentElement;
// }
// console.log(findMostFrequent([1, 2, 4, 3, 3]));
//
//
//----------------------------------------------------------------------------------------------------
//
//
// ZADATAK 11. Write a function to find and return the first, middle and last element of
// an array if the array has odd number of elements. If number of elements is even, return just
// the first and the last. In other cases (empty array), input array should be returned.
//
//                              SOLUTION
//
// function firstMiddleLast(array) {
//   var first;
//   var middle;
//   var last;
//   var emptyArray = [];
//   if (array.length % 2 === 0 && array.length > 0) {
//     first = array[0];
//     last = array[array.length - 1];
//     return [first, last];
//   } else if (array.length % 2 > 0) {
//     first = array[0];
//     middle = array[Math.floor(array.length / 2)];
//     last = array[array.length - 1];
//     return [first, middle, last];
//   } else if (array.length === 0) {
//     return emptyArray;
//   }
// }
// console.log(firstMiddleLast([]));
//
//
//----------------------------------------------------------------------------------------------------
//
//
// ZADATAK 12. Write a function to find the average of N elements.
// Make the function flexible to receive dynamic number or parameters.
//
//
//----------------------------------------------------------------------------------------------------
//
//
// ZADATAK 13. Write a function to find all the numbers greater than the average.
//
//                              SOLUTION
//
//
//----------------------------------------------------------------------------------------------------
//
//
// ZADATAK 14. The body mass index (BMI) is the ratio of the weight of a person (in kilograms)
// to the square of the height (in meters). Write a function that takes two parameters,
// weight and height, computes the BMI, and prints the corresponding BMI category:
// ● Starvation: less than 15
// ● Anorexic: less than 17.5
// ● Underweight: less than 18.5
// ● Ideal: greater than or equal to 18.5 but less than 25
// ● Overweight: greater than or equal to 25 but less than 30
// ● Obese: greater than or equal to 30 but less than 40
// ● Morbidly obese: greater than or equal to 40
//
//                              SOLUTION
//
//
//----------------------------------------------------------------------------------------------------
//
//
// ZADATAK 15. Write a function that takes a list of strings and prints them, one per line,
// in a rectangular frame.:
// For example the list ["Hello", "World", "in", "a", "frame"] getsprinted as:
// *********
// * Hello *
// * World *
// * in *
// * a *
// * frame *
// *********
//
//                              SOLUTION
//
