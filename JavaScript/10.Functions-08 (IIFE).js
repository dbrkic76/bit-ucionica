// ZADATAK 1. Write IIFE that replaces the first and the last element of the given array and prints out its
// elements.
// Input array: [4, 5, 11, 9]
// Output array: [ 9, 5, 11, 4]
//
//                              SOLUTION
//
// var newArray = (function (arr1) {
//   var temp = arr1[0];
//   arr1[0] = arr1[arr1.length - 1];
//   arr1[arr1.length - 1] = temp;
//   return arr1;
// })([4, 5, 11, 9]);
// console.log(newArray);
//
//
//----------------------------------------------------------------------------------------------------
//
//
// 2. Write IIFE that calculates the surface area of the given rectangle with sides a and b.
// Input: 4 5
// Output: 20
//
//                              SOLUTION 1
//
// var rectangleArea = (function () {
//   var a = 4;
//   var b = 5;
//   result = a * b;
//   return result;
// })();
// console.log(rectangleArea);
//
//                              SOLUTION 2
//
// var rectangleArea = (function (a, b) {
//   result = a * b;
//   return result;
// })(8, 5);
// console.log(rectangleArea);
//
//
//----------------------------------------------------------------------------------------------------
//
//
// 3. Write IIFE that replaces all appearances of the letters m or M with * and returns the
// number of replacements.
// Input: prograMming
// Output: progra**ing, 2
//
//                              SOLUTION
// var replaceLetter = (function (a) {
//   let newText = a.toLowerCase();
//   let result = newText.replace(/m/g, "*");
//   return result;
// })("prograMming");
// console.log(replaceLetter);
//
//
//----------------------------------------------------------------------------------------------------
//
//
// ZADATAK 4. Write a function with parameters name and surname that returns a function that
// suggests an email in the form name.surname@gmail.com.
// Input: pera peric
// Output: pera.peric@gmail.com
//
//                              SOLUTION
//
// var mailSuggest = (function (a) {
//   let newText = a.toLowerCase();
//   let result = newText.replace(/ /g, ".");
//   result = result + "@gmail.com";
//   return result;
// })("Brkic Dragan");
// console.log(mailSuggest);
//
//
//----------------------------------------------------------------------------------------------------
//
//
// 5. Write a function that returns a function that calculates a decimal value of the given octal
// number.
// Input: 034
// Output: 28
//
//                              SOLUTION
//
// var octalToDecimal = (function (x) {
//   //pocetak unutrasnje funkcije
//   function InnerOctalToDecimal(x) {
//     //dodeljuje promenljivoj "decimal" dekadnu vrednost oktalnog broja X
//     var decimal = parseInt(x, 8);
//     //vraca izracunatu decimalnu vrednost unutrasnjoj funkciji
//     return decimal;
//   }
//   return InnerOctalToDecimal(x);
// })(34);
// console.log(octalToDecimal);
//
//
//----------------------------------------------------------------------------------------------------
//
//
// 6. Write a function that checks if a given string is valid password. The password is valid if it
// is at least 6 characters long and contains at least one digit. The function should receive
// two callbacks named successCallback and errorCallback that should be called in case
// password is correct or invalid.
// Input: JSGuru
// Output: Your password is invalid!
// Input: JSGuru123
// Output: Your password is cool!
//
//                              SOLUTION (Martin)!!!!!!!!!!!!!!
//
// function successCallback() {
//   return "Your password is cool!";
// }

// function errorCallback() {
//   return "Your password is invalid!";
// }

// var checkPassword = function (pass, success, error) {
//   if (pass.length < 7) {
//     return error();
//   }
//   for (var i = 0; i < pass.length; i++) {
//     if (parseInt(pass[i])) {
//       return success(); //  moze i break;
//     }
//   }
//   return error();
// };

// console.log(checkPassword("632m", successCallback, errorCallback));
//
//
//----------------------------------------------------------------------------------------------------
//
//
// 7. Write a function that filters elements of the given array so that they satisfy a condition
// given by the callback function.
// Input: [2, 8, 11, 4, 9, 3], callback function checks if the number is odd
// Output: [11, 9, 3]
//
//                              SOLUTION (Martin)
//
// var niz = [2, 8, 11, 4, 9, 3];
// function isOdd(x) {
//   // return x % 2                //moze biti jedan ili nula zavisi od parnosti broja
//   return x % 2 !== 0;
// }
// function filterOdd(array, f) {
//   var newArray = [];
//   for (var i = 0; i < array.length; i++) {
//     if (f(array[i])) {
//       newArray.push(array[i]);
//     }
//   }

//   return newArray;
// }
// console.log(filterOdd(niz, isOdd));
// //2.nacin
// console.log(niz.filter(isOdd));
