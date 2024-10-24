// ZADATAK 1. Write an array of months in a year. Using console.log display June,
// October and January from the array.
//
//                              SOLUTION
//
// var a = [
//   "January",
//   "February",
//   "March",
//   "April",
//   "May",
//   "June",
//   "July",
//   "August",
//   "September",
//   "October",
//   "November",
//   "December",
// ];
// console.log(a[5], a[9], a[0]);
//
//
//----------------------------------------------------------------------------------------------------
//
//
// ZADATAK 2. Write an arrays of days in a week. Using console.log display Sunday from the array.
//
//                              SOLUTION
//
// var b = [
//   "Monday",
//   "Tuesday",
//   "Wednesday",
//   "Thursday",
//   "Friday",
//   "Saturday",
//   "Sunday",
// ];
// console.log(b[6]);
//
//
//----------------------------------------------------------------------------------------------------
//
//
// ZADATAK 3. Print all negative elements from the array [2, -4, 5, -2, -11].
//
//                              SOLUTION 1
//
// var array = [2, -4, 5, -2, -11];
// for (var index = 0; index < array.length; index++) {
//   var element = array[index];
//   if (element < 0) {
//     console.log(
//       "Element at index " + index + " is negative with value " + element
//     );
//   }
// }
//
//                              SOLUTION 2
//
// var array = [2, -4, 5, -2, -11];
// var i = 0;
// while (i < array.length) {
//   var item = array[i];
//   if (item < 0) {
//     console.log("Element at index " + i + " is negative with value " + item);
//   }
//   i++;
// }
//
//
//----------------------------------------------------------------------------------------------------
//
//
// ZADATAK 4. Print all elements with indexes divisible by 3 from the array
// [5, 15, -5, 20, 12, 18, 72, 14, 9].
//
//                              SOLUTION
//
// var array = [5, 15, -5, 20, 12, 18, 72, 14, 9];
// for (var index = 0; index < array.length; index++) {
//   var element = array[index];
//   if (index % 3 === 0) {
//     console.log("Element value " + element + " at position " + index);
//   }
// }
//
//
//----------------------------------------------------------------------------------------------------
//
//
// ZADATAK 5. What is the index of number 24 in the following array?
// [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];
// Using console.log:
// Display the 3rd element of the array,
// Display the 2nd element of the 3rd element.
//
//                              SOLUTION
//
// var matrix = [
//   [1, 2, 1, 24],
//   [8, 11, 9, 4],
//   [7, 0, 7, 27],
//   [7, 4, 24, 14],
//   [3, 10, 26, 7],
// ];
// var valueFound = false;
// for (var i = 0; i < matrix.length; i++) {
//   var arrayItem = matrix[i];
//   for (var j = 0; j < arrayItem.length; j++) {
//     var item = arrayItem[j];
//     if (item == 24) {
//       console.log("Value 24 is in position " + j + " of array " + i);
//     }
//   }
// }
