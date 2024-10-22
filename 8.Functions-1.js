// ZADATAK 1. Write a program that calculates the maximum of two given numbers.
//
//                              SOLUTION
//
// function findMaximumOfTwoNumbers(a, b) {
//   if (a > b) {
//     return a;
//   }
//   return b;
// }
// var c = findMaximumOfTwoNumbers(5, 8);
// console.log(c);
//
//
//----------------------------------------------------------------------------------------------------
//
//
// ZADATAK 2. Write a program that checks if a given number is odd.
//
//                              SOLUTION (Nikola)
//
// function isOdd(x) {
//   return x % 2 !== 0 ? true : false;
// }
// console.log(isOdd(-117));
//
//                              SOLUTION
//
// function parNepar(a) {
//   if (a % 2 === 0) {
//     return (c = "Paran broj");
//   } else return (c = "Neparan broj");
// }
// console.log(parNepar(11));
//
//
//----------------------------------------------------------------------------------------------------
//
//
// ZADATAK 3. Write a program that checks if a given number is a three digit long number.
//
//                              SOLUTION 1
//
// function is3digitNumber(x) {
//   var stringNumber = x + ""; //   opciono var stringNumber - x.toString()
//   if (stringNumber.length === 3) {
//     return true;
//   }
//   return false;
// }
// console.log(is3digitNumber(444));
//
//                              SOLUTION 2
//
// function is3DigitNumber(x) {
//   if (x > 99 && x < 1000) {
//     return true;
//   }
//   return false;
// }
// console.log(is3DigitNumber(180));
//
//                              SOLUTION
//
// function threeDigitNumber(a) {
//     if (a >= 100 && a <= 999) {
//       return (c = "This number is 3 digit number");
//     } else return (c = "This number is NOT a 3 digit number");
//   }
//   console.log(threeDigitNumber(98));
//
//                              SOLUTION (Nikola)
//
// function getNumberLenght() {
//     if (typeof a == "number") {
//       return (a + " ").getNumberLenght;
//     }
//     return 0;
//   }
//
//   console.log(getNumberLenght(334));
//
//
//----------------------------------------------------------------------------------------------------
//
//
// ZADATAK 4. Write a program that calculates an arithmetic mean of four numbers.
//
//                              SOLUTION
//
// function calculateMean() {
//   var mean;
//   var zbir = 0;
//   for (var i = 0; i < arguments.length; i++) {
//     var element = arguments[i];
//     zbir += element;
//   }
//   mean = zbir / arguments.length;
//   return mean;
// }
// console.log(calculateMean(1, 2, 3, 4, 5, 6));
//
//
//----------------------------------------------------------------------------------------------------
//
//
// ZADATAK 5. Write a program that draws a square of a given size. For example,
// if the size of square is 5 the program should draw:
// *****
// *    *
// *    *
// *    *
// *****
//
//                              SOLUTION (NE RADI)
//
// function printPattern(n) {
//   var pattern = "";
//   for (var i = 0; i < n; i++) {
//     for (var j = 0; j < n; j++) {
//       if (i === 0 || j === 0 || i === n - 1 || j === n - 1){
//       pattern += "*\t";
//     }
//     pattern += "\n";
//   }
//   else {
//     pattern+= "\t"
//   }
//   return pattern;
// }
// console.log(printPattern(5));
//
//                              SOLUTION
//
// function square(a) {
//   if (a <= 0) {
//     return;
//   }
//   var result = "";
//   for (var i = 0; i < a; i++) {
//     for (var j = 0; j < a; j++) {
//       if (i == 0 || i == a - 1) {
//         result += "*";
//       } else {
//         if (j == 0 || j == a - 1) {
//           result += "*";
//         } else {
//           result += " ";
//         }
//       }
//     }
//     result += "\n";
//   }
//   console.log(result);
// }
// square(5);
//
//
//----------------------------------------------------------------------------------------------------
//
//
// ZADATAK 6. Write a program that draws a horizontal chart representing three given values.
// For example, if values are 5, 3, and 7, the program should draw:
// * * * * *
// * * *
// * * * * * * *
//
//                              SOLUTION (NE RADI)
//
// fuction printPattern(x,y,z){
//     var pattern = "";
//     for (var i = 0; i < x; i++){
//         pattern += "*\t"
//     }
//     pattern += "\n"
//     var pattern = "";
//     for (var i = 0; i < x; i++){
//         pattern += "*\t"
//     }
//     pattern += "\n"
//     var pattern = "";
//     for (var i = 0; i < x; i++){
//         pattern += "*\t"
//     }
//     return pattern
// }
// console.log(printPattern(5,3,7))
//
//
//----------------------------------------------------------------------------------------------------
//
//
// ZADATAK 7. Write a program that calculates a number of digits of a given number.
//
//                              SOLUTION 1
//
// function calculateNumDigits(x) {
//   return (x + "").length;
// }
// console.log(calculateNumDigits(1251));
//
//
//                              SOLUTION 2
//
// function calculateNumDigits(x) {
//   var i = 0;
//   while (x > 10) {
//     var cj = x % 10;
//     x -= cj;
//     x /= 10;
//     i++;
//   }
//   return i;
// }
// console.log(calculateNumDigits(7654321));
//
//
//----------------------------------------------------------------------------------------------------
//
//
// ZADATAK 8. Write a program that calculates a number of appearances of a given number in a given array.
// Inputs: a = [2, 4, 7, 8, 7, 7, 1], e = 7
// Result: 3
//
//                              SOLUTION
//
// var a = [2, 4, 7, 8, 7, 7, 1],
//   e = 7;
// function findOccurenece(array, broj) {
//   var brojac = 0;
//   for (var i = 0; i < array.length; i++) {
//     var element = array[i];
//     if (element === broj) {
//       brojac++;
//     }
//   }
//   return brojac;
// }
// console.log(findOccurenece(a, e));
//
//
//----------------------------------------------------------------------------------------------------
//
//
// ZADATAK 9. Write a program that calculates the sum of odd elements of a given array.
//
//                              SOLUTION (NEED CORRECTION)
//
// function sumOfOdd(array) {
//   var suma = 0;
//   for (var i = 0; i < array.lenght; i++) {
//     var element = array[i];
//     if (isOdd(element)) {
//       suma += element;
//     }
//   }
//   return suma;
//   console.log(sumOfOdd([3, 5, 9, 8, 8, 8]));
// }
//
//
//----------------------------------------------------------------------------------------------------
//
//
// ZADATAK 10. Write a program that calculates the number of appearances of a letter a in a given string.
// Modify the program so it calculates the number of both letters a and A.
//
//                              SOLUTION (NOT WORKING)
//
// function calculateAppereance(str) {
//   var brojac = 0;
//   for (var i = 0; i < str.lenght; i++) {
//     var element = str[i];
//     if (element === "a") {
//       brojac++;
//     }
//   }
//   return brojac;
// }
// console.log(calculateAppereance("Dragan"));
//
//
//----------------------------------------------------------------------------------------------------
//
//
// ZADATAK 11. Write a program that concatenates a given string given number of times.
// For example, if “abc” and 4 are given values, the program prints out abcabcabcabc.
//
//                              SOLUTION (NE RADI)
//
// function concatenateString(str, broj) {
//   var konkateniranString = "";
//   for (var i = 0; i < broj; i++) {
//     konkateniranString += str;
//     {
//       return konkateniranString;
//     }
//     console.log(concatenateString("abc", 2));
//   }
// }
