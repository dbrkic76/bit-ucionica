// ZADATAK 1. Write a function that checks if a given string contains digit 5.
// Input: “1b895abd”
// Output: true
// Input: “1bser9re”
// Output: false
//
//                              SOLUTION 1
//
// function doesInclude(someString, someLetter) {
//   for (i = 0; i < someString.length; i++) {
//     if (someString[i] === someLetter) {
//       result = true;
//       break;
//     } else {
//       result = false;
//     }
//   }
//   return result;
// }
// console.log(doesInclude("167b8924abd", "5"));
//
//                              SOLUTION 2 (ChatGPT)
//
// function doesInclude(someString, someLetter) {
//   let result = false; // Initialize result to false
//   for (let i = 0; i < someString.length; i++) {
//     if (someString[i] === someLetter) {
//       result = true; // Set result to true if a match is found
//       break; // Exit the loop since we found the letter
//     }
//   }
//   return result; // Return the result after the loop
// }
// console.log(doesInclude("1b895abd", "5"));
//
//
//----------------------------------------------------------------------------------------------------
//
//
// ZADATAK 2. Write a function that in a given string replaces all the appearances of the string ‘JS’ with
// ‘**’.
// Input: “Programming in JS is super interesting!”
// Output: “Programming in ** is super interesting!”
//
//                              SOLUTION
//
//
//----------------------------------------------------------------------------------------------------
//
//
// ZADATAK 3. Write a function that inserts a given character on a given position in the string.
// Input: “Goo morning”, 4, ‘d’
// Output: “Good morning”
//
//
//                              SOLUTION (Martin)??
//
// function insertString(str, pos, char) {
//   if (str.length < 1 || pos > str.length) {
//     return "Invalid posistion";
//   }
//   return str.slice(0, pos - 1) + char + str.slice(pos - 1);
// }
// console.log(insertString("Goo morning", 13, "darr"));
// function deleteString(str, pos) {
//   if (str.length < 1 || pos > str.length || pos === 0) {
//     return "Invalid position";
//   }

//   return str.slice(0, pos - 1) + str.slice(pos);
// }
//
//
//----------------------------------------------------------------------------------------------------
//
//
// ZADATAK 4. Write a function that deletes a character from the given position in the string.
// Input: “Goodd morning!”, 3
// Output: “Good morning!”
//
//                              SOLUTION
//
//
//----------------------------------------------------------------------------------------------------
//
//
// ZADATAK 5. Write a function that deletes every second element of the given array.
// Input: [3, 5, 1, 8, 90, -4, 23, 1, 67]
// Output: [3, 1, 90, 23, 67]
//
//                              SOLUTION
//
//
//----------------------------------------------------------------------------------------------------
//
//
// ZADATAK 6. Write a function that replaces the elements of the given array between two positions with
// their doubled values.
// Input: [3, 5, 1, 8, 90, -4, 23, 1, 67], 2, 6
// Output: [3, 5, 2, 16, 180, -8, 46, 1, 67]
//
//                              SOLUTION
//
//
//----------------------------------------------------------------------------------------------------
//
//
// ZADATAK 7. Write a function that checks if every element of the first array is contained in the second
// array. Be careful with repetitions!
// Input: [3, 4, 1, 3], [8, 9, 3, 1, 11, 4, 3]
// Output: true
//
//                              SOLUTION
//
//
//----------------------------------------------------------------------------------------------------
//
//
// ZADATAK 8. Write a function that sorts an array of strings by the number of appearances of the letter
// ‘a’ or ‘A’.
// Input: [‘apple’, ‘tea’, ‘amazing’, ‘morning’, ‘JavaScript’]
// Output: [‘morning’, ‘apple’, ‘tea’, ‘JavaScript’, ‘amazing’]
//
//                              SOLUTION
//
//
//----------------------------------------------------------------------------------------------------
//
//
// ZADATAK 9. Write a function that prints out the date of the next day.
// Output: 25. 10. 2018.
//
//                              SOLUTION
//
//
// ZADATAK 10. Write a function that prints out the date of the previous day.
// Output: 23. 10. 2018.
//
//                              SOLUTION
//
//
//----------------------------------------------------------------------------------------------------
//
//
// ZADATAK 11. Write a function that prints out an array of the numbers aligned from the right side.
// Input: [78, 111, 4, 4321]
// Output:
// 78
// 111
// 4
// 4321
//
//                              SOLUTION
