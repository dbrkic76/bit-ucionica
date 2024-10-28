// ZADATAK 1. Write a function to check whether the `input` is a string or not.
// "My random string" -> true
// 12 -> false
//
//                              SOLUTION
//
// function isString(input) {
//   if (typeof input == "string") {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(isString(12));
//
//
//----------------------------------------------------------------------------------------------------
//
//
// ZADATAK 2. Write a function to check whether a string is blank or not.
// "My random string" -> false
// " " -> true
// 12 -> false
// false -> false
//
//                              SOLUTION
//
// function isStringBlank(someValue) {
//   if (!someValue) return true;
//   for (let i = 0; i < someValue.length; i++) {
//     if (someValue[i] !== " ") {
//       return false;
//     }
//   }
//   return true;
// }
// console.log(isStringBlank(""));
// console.log(isStringBlank("   "));
// console.log(isStringBlank("Hello"));
// console.log(isStringBlank("  World  "));
//
//
//----------------------------------------------------------------------------------------------------
//
//
// ZADATAK 3. Write a function that concatenates a given string n times (default is 1).
// 	"Ha" -> "Ha"
// "Ha", 3 -> "HaHaHa"
//
//                              SOLUTION
//
// function concatenateString(someString, n) {
//   newString = "";
//   for (i = 0; i < n; i++) {
//     newString += someString;
//   }
//   return newString;
// }
// console.log(concatenateString("Ha", 5));
//
//
//----------------------------------------------------------------------------------------------------
//
//
// ZADATAK 4. Write a function to count the number of letter occurrences in a string.
// "My random string", "n" -> 2
//
//                              SOLUTION
//
// function letterOccurence(someString, someLetter) {
//   var brojac = 0;
//   for (i = 0; i < someString.length; i++) {
//     if (someString[i] === someLetter) {
//       brojac++;
//     }
//   }
//   return brojac;
// }
// console.log(letterOccurence("My random string", "n"));
//
//
//----------------------------------------------------------------------------------------------------
//
//
// ZADATAK 5. Write a function to find the position of the first occurrence of a character in a string.
// The result should be the position of character. If there are no occurrences of the character,
// the function should return -1.
//
//                              SOLUTION
//
// function firstOccurence(someString, n) {
//   var result = someString.indexOf(n);
//   return result;
// }
// console.log(firstOccurence("Neki nasumicni tekst", "m"));
//
//
//----------------------------------------------------------------------------------------------------
//
//
// ZADATAK 6. Write a function to find the position of the last occurrence of a character in a string.
// The result should be in human numeration form. If there are no occurrences of the character,
// function should return -1.
//
//                              SOLUTION
//
// function firstOccurence(someString, n) {
//   var result = someString.lastIndexOf(n);
//   return result;
// }
// console.log(firstOccurence("Neki nasumicni tekstm", "m"));
//
//
//----------------------------------------------------------------------------------------------------
//
//
// ZADATAK 7. Write a function to convert string into an array. Space in a string should be
// represented as “null” in new array.
// "My random string" -> ["M", "y", null, "r", "a"]
// "Random" -> ["R", "a", "n", "d", "o", "m"]
//
//                              SOLUTION
//
// function convertStringToArray(someString) {
//   var someArray = [];
//   for (i = 0; i < someString.length; i++) {
//     if (someString[i] === " ") {
//       someArray[i] = null;
//     } else someArray[i] = someString[i];
//   }
//   return someArray;
// }
// console.log(convertStringToArray("My random string"));
//
//
//----------------------------------------------------------------------------------------------------
//
//
// ZADATAK 8. Write a function that accepts a number as a parameter and checks if the number
// is prime or not.
// Note: A prime number (or a prime) is a natural number greater than 1 that has no positive
// divisors other than 1 and itself.
//
//                              SOLUTION
//
// function isPrimeNumber(n) {
//   if (n < 2) {
//     return `Number ${n} is NOT a prime number`;
//   }
//   for (let i = 2; i < n; i++) {
//     if (n % i === 0) {
//       return `Number ${n} is NOT a prime number`;
//     }
//   }
//   return `Number ${n} is a prime number`;
// }
// console.log(isPrimeNumber(5));
//
//
//----------------------------------------------------------------------------------------------------
//
//
// ZADATAK 9. Write a function that replaces spaces in a string with provided separator.
// If separator is not provided, use “-” (dash) as the default separator.
//     "My random string", "_" -> "My_random_string"
//     "My random string", "+" -> "My+random+string"
//     "My random string" -> "My-random-string"
//
//                              SOLUTION
//
// function replaceSpace(someString, someSeparator) {
//   var newString = "";
//   if (someSeparator === undefined) {
//     someSeparator = "-";
//   }
//   for (var i = 0; i < someString.length; i++) {
//     if (someString[i] === " ") {
//       newString += someSeparator;
//     } else {
//       newString += someString[i];
//     }
//   }
//   return newString;
// }
// console.log(replaceSpace("My random string"));
//
//
//----------------------------------------------------------------------------------------------------
//
//
// ZADATAK 10. Write a function to get the first n characters and add “...” at the end of newly
// created string.
//
//                              SOLUTION
//
// function addDots(someString, n) {
//   newString = "";
//   if (n > someString.length) {
//     return `Uneta vrednost (${n}) je veca od duzine stringa`;
//   } else {
//     for (i = 0; i <= n; i++) {
//       if (newString.length < n) {
//         newString += someString[i];
//       } else {
//         newString += "...";
//       }
//     }
//   }
//   return newString;
// }
// console.log(addDots("Neki nasumicni tekst", 5));
//
//
//----------------------------------------------------------------------------------------------------
//
//
// ZADATAK 11. Write a function that converts an array of strings into an array of numbers.
// Filter out all non-numeric values.
// ["1", "21", undefined, "42", "1e+3", Infinity] -> [1, 21, 42, 1000]
//
//                              SOLUTION

//
function convertStringsToNumbers(someArray) {
  newArray = [];
  for (i = 0; i < someArray.length; i++) {
    if (someArray[i] != string) {
      newArray = newArray;
    } else {
      newArray += someArray[i] * 1;
    }
  }
  return newArray;
}
console.log(
  convertStringsToNumbers(["1", "21", undefined, "42", "1e+3", Infinity])
);
//
//
//----------------------------------------------------------------------------------------------------
//
//
// ZADATAK 12. Write a function to calculate how many years there are left until retirement
// based on the year of birth. Retirement for men is at age of 65 and for women at age of 60.
// If someone is already retired, a proper message should be displayed.
//
//                              SOLUTION
//
//
//----------------------------------------------------------------------------------------------------
//
//
// ZADATAK 13. Write a function to humanize a number (formats a number to a human-readable string)
// with the correct suffix such as 1st, 2nd, 3rd or 4th.
// 1 -> 1st
// 11 -> 11th
//
//                              SOLUTION
