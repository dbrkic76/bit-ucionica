// ZADATAK 1. Write a program that checks if a given element e is in the array a.
// Input:  e = 3, a = [5, -4.2, 3, 7]
// Output: yes
// Input:  e = 3, a = [5, -4.2, 18, 7]
// Output: no
//
//                              SOLUTION
//
// var niz = [5, -4.2, 3, 7];
// var trazeniBroj = 3;
// var nadjen = false;
// for (var i = 0; i < niz.length; i++) {
//   if (niz[i] === trazeniBroj) {
//     nadjen = true;
//     break;
//   }
// }
//
// if (nadjen) {
//   console.log("Trazeni broj " + "(" + trazeniBroj + ")" + " je u nizu.");
// } else {
//   console.log("Trazeni broj " + "(" + trazeniBroj + ")" + " nije u nizu.");
// }
//
//
//----------------------------------------------------------------------------------------------------
//
//
// ZADATAK 2. Write a program that multiplies every positive element of a given array by 2.
// Input array: [-3, 11, 5, 3.4, -8]
// Output array: [-3, 22, 10, 6.8, -8]
//
//                              SOLUTION
//
// var inputArray = [-3, 11, 5, 3.4, -8];
// var outputArray = [];
// for (var i = 0; i < inputArray.length; i++) {
//   if (inputArray[i] > 0) {
//     outputArray[i] = inputArray[i] * 2;
//   } else {
//     outputArray[i] = inputArray[i];
//   }
// }
//
// console.log("Output array:", outputArray);
//
//
//----------------------------------------------------------------------------------------------------
//
//
// ZADATAK 3. Write a program that finds the minimum of a given array and prints out its value and index.
// Input array: [4, 2, 2, -1, 6]
// Output: -1, 3
//
//                              SOLUTION
//
// var ulazniNiz = [-4, -2, 2, -1, -6];
// var najmanjiBroj = Infinity;
// var indeksNajmanjeg = 0;
// for (var i = 0; i < ulazniNiz.length; i++) {
//   if (ulazniNiz[i] < najmanjiBroj) {
//     najmanjiBroj = ulazniNiz[i];
//     indeksNajmanjeg = i;
//   }
// }
// console.log(
//   "Najmanji broj u nizu je " +
//     najmanjiBroj +
//     " koji se nalazi na indeksu " +
//     indeksNajmanjeg
// );
//
//
//----------------------------------------------------------------------------------------------------
//
//
// ZADATAK 4. Write a program that finds the first element larger than minimum and prints out its value.
// Input array: [4, 2, 2, -1, 6]
// Output: 2
//
//                              SOLUTION
//
//
//----------------------------------------------------------------------------------------------------
//
//
// ZADATAK 5. Write a program that calculates the sum of positive elements in the array.
// Input array: [3, 11, -5, -3, 2]
// Output: 16
//
//                              SOLUTION
//
// var niz = [3, 11, -5, -3, 2];
// var suma = 0;
// for (i = 0; i < niz.length; i++) {
//   if (niz[i] > 0) {
//     suma = suma + niz[i];
//   }
// }
// console.log("Zbir pozitivnih elemenata niza je " + suma);
//
//
//----------------------------------------------------------------------------------------------------
//
//
// ZADATAK 6. Write a program that checks if a given array is symmetric.
// An array is symmetric if it can be read the same way both from the left and the right hand side.
// Input array: [2, 4, -2, 7, -2, 4, 2]
// Output: The array is symmetric.
// Input array: [3, 4, 12, 8]
// Output: The array isn’t symmetric.
//
//                              SOLUTION
//
// var a = [2, 4, -2, 7, 5, -2, 4, 2];
// var isSymetric = true;
// for (
//   var i = 0, j = a.length - 1;
//   i < a.length / 2, j > a.length / 2 - 1;
//   i++, j--
// ) {
//   if (a[i] !== a[j]) {
//     //if(a[i] !== a[a.length - 1 - i])
//     isSymetric = false;
//     break;
//   }
// }
// console.log(isSymetric);
//
//
//----------------------------------------------------------------------------------------------------
//
//
// ZADATAK 7. Write a program that intertwines two arrays.
// You can assume the arrays are of the same length.
// Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
// Output array: [4, 3, 5, 8, 6, 11, 2, 9]
//
//                              SOLUTION with Pre-Defined Functions
//
// var niz1 = [4, 5, 6, 2];
// var niz2 = [3, 8, 11, 9];
// var konacniNiz = [];
// for (var i = 0, j = 0; i < niz1.length, j < niz2.length; i++, j++) {
//   konacniNiz.push(niz1[i]);
//   konacniNiz.push(niz2[i]);
// }
// console.log(konacniNiz);
//
//
//----------------------------------------------------------------------------------------------------
//
//
// ZADATAK 8. Write a program that concatenates two arrays.
// Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
// Output array: [4, 5, 6, 2, 3, 8, 11, 9]
//
//                              SOLUTION with Pre-Defined Functions
//
// var niz1 = [4, 5, 6, 2];
// var niz2 = [3, 8, 11, 9];
// var spojeno = niz1.concat(niz2);
// console.log(spojeno);
//
//
//----------------------------------------------------------------------------------------------------
//
//
// ZADATAK 9. Write a program that deletes a given element e from the array a.
// Input: e = 2, a = [4, 6, 2, 8, 2, 2]
// Output array: [4, 6, 8]
//
//                              SOLUTION
//
// var niz = [4, 6, 2, 8, 2, 2];
// var brojBrisanje = 2;
// var noviNiz = [];
// for (i = 0; i < niz.length; i++) {
//   if (niz[i] !== brojBrisanje) {
//     noviNiz.push(niz[i]);
//   }
// }
// console.log(noviNiz);
//
//
//----------------------------------------------------------------------------------------------------
//
//
// ZADATAK 10. Write a program that inserts a given element e on the given
// position p in the array a. If the value of the position is greater than the
// array length, print the error message.
// Input: e = 78, p = 3, a = [2, -2, 33, 12, 5, 8]
// Output: [2, -2, 33, 78, 12, 5, 8]
//
//                              SOLUTION
//
var niz = [2, -2, 33, 12, 5, 8];
var noviElement = 78;
var pozicija = 3;
var noviNiz = [];
for (i = 0; i < niz.length; i++) {
  if (i !== pozicija) {
    noviNiz.push(niz[i]);
  } else {
    noviNiz.push(noviElement);
  }
}
console.log(noviElement);
