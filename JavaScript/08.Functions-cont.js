// ZADATAK Write rogram that calculate max of ANY given numbers in array
//
//                          SOLUTION   !!!!!!!!!!!!!WRONG SOLUTION
//
// function najveciUnizu(array) {
//   var i = 1;
//   var max = array[0];
//   while (i < array.lenght) {
//     var element = array[i];
//     if (element > max) {
//       max = element;
//     }
//     i++;
//   }
//   return max;
// }
// console.log(najveciUnizu([1, 2, 3, 4, 5, "66", "7", 13, undefined]));
//
//
//----------------------------------------------------------------------------------------------------
//
//
//ZADATAK Write program that checks if number is contained in array
//
//                          SOLUTION
//
// function isGivenNumber(array, x) {
//   var result;
//   for (i = 0; i < array.length; i++) {
//     if (x === array[i]) {
//       result = "yes";
//       return result; //ili BREAK
//     } else {
//       result = "no";
//     }
//   }
//   return result;
// }
// console.log(isGivenNumber([5, -4, 2, 3, 7], -4));
//
//
//----------------------------------------------------------------------------------------------------
//
//
//ZADATAK Write program that calculate sum of positive numbers in array
//
//                          SOLUTION
//
// function sumPositives(array) {
//   var result = 0;
//   for (i = 0; i < array.length; i++) {
//     if (array[i] > 0) {
//       result += array[i];
//     }
//   }
//   return result;
// }
// console.log(sumPositives([2, -1, 2, -5, 11]));
//
//
//----------------------------------------------------------------------------------------------------
//
//
// ZADATAK Find Finite Numeric Elements
//
//                          SOLUTION
//
// function filterFiniteNumericElements(inputArray) {
//     var resultArray = [];
//     for (var i = 0; i < inputArray.length; i++) {
//         var element = inputArray[i];
//         var result = element * 1;
//         if (result === 0) {
//             resultArray.push(result);
//             continue;
//         }
//         if (!result || result == Infinity || typeof result != 'number') {
//             continue;
//         }
//         resultArray.push(result);
//     }
//     return resultArray;
// }
// console.log(filterFiniteNumericElements(['0', '1', '21', undefined, '42', '1e+3', Infinity, 'ad3']))
//
//
//----------------------------------------------------------------------------------------------------
//
//
// ZADATAK Filter last N element
//
//                          SOLUTION
//
// function filterLastElements(inputArray, n) {
//     if (!inputArray || inputArray.length == 0 || n > inputArray.length) {
//         return 0;
//     }
//     var result = [];
//     var index = 0;
//     for (var i = inputArray.length - n; i < inputArray.length; i++) {
//         result[index] = inputArray[i];
//         index++;
//     }
//     return result;
// }
// console.log(filterLastElements([7, 9, 0, -2], 5))
//
//
//----------------------------------------------------------------------------------------------------
//
//
// ZADATAK  ????????????????
//
// function drawLine(a) {
//   if (a < 1) {
//     return;
//   }
//   var result = "";
//   for (var i = 0; i < a; i++) {
//     result += "*";
//   }
//   return result;
// }
//
//
//----------------------------------------------------------------------------------------------------
//
//
// ZADATAK
//
// function drawLines() {
//     var args = arguments;
//     if (!args || args.length == 0) {
//         return;
//     }
//     var result = '';
//     for (var i = 0; i < args.length; i++) {
//         var value = args[i];
//         result += drawLine(value);
//         result += '\n'
//     }
//     console.log(result);
// }
//
//
//----------------------------------------------------------------------------------------------------
//
//
// ZADATAK
//
// function sumApperances(inputArray, givenNumber) {
//     if (!inputArray) {
//         return 0;
//     }
//     var counter = 0;
//     for (var i = 0; i < inputArray.length; i++) {
//         var value = inputArray[i];
//         if (value == givenNumber) {
//             counter++;
//         }
//     }
//     return counter;
// }
// console.log(sumApperances([2, 4, 7, 8, 7, 7, 1], 7));
//
//
//----------------------------------------------------------------------------------------------------
//
//
// ZADATAK 10.
// function sumOfLetterAppearances(inputString, inputLetter) {
//     var counter = 0;
//     var stringToLower = inputString.toLowerCase();
//     var letterToLower = inputLetter.toLowerCase();
//     for (var i = 0; i < stringToLower.length; i++) {
//         var character = stringToLower[i];
//         if (character == letterToLower) {
//             counter++;
//         }
//     }
//     return counter;
// }
// console.log(sumOfLetterAppearances('Today is Monday', 'o'));
//
//
//----------------------------------------------------------------------------------------------------
//
//
// ZADATAK 11.
//
// function concatenateString(inputString, numberOfIterations) {
//     var result = '';
//     for (var i = 0; i < numberOfIterations; i++) {
//         result += inputString;
//     }
//     return result;
// }
// console.log(concatenateString('abc', 4));
//
//
//----------------------------------------------------------------------------------------------------
//
//
//Write a function to check whether the input is a string or not.
// function isString(input) {
//     if (typeof input === 'string') {
//         return true;
//     } else {
//         return false;
//     }
// }
// console.log(isString(2));
//
//
//----------------------------------------------------------------------------------------------------
//
//
// Write a function to check whether a string is blank or not.
// function isBlank(input) {
//     if (typeof input === 'string' && input.length === 0) {
//         return true;
//     } else {
//         return false;
//     }
// }
// console.log(isBlank(''));
// console.log(isBlank('abc'));
//
//
//----------------------------------------------------------------------------------------------------
//
//
////Write a function that concatenates a given string n times (default is 1).
// function repeat(str, count) {
//     if (typeof count == 'undefined') {
//         count = 1;
//     }
//     if(count < 1) {
//         return '';
//     }
//     var res = '';
//     for (var i = 0; i < count; i++) {
//         res += str;
//     }
//     return res;
// }
// console.log(repeat('Ha'));
// console.log(repeat('Ha', 2));
//
//
//----------------------------------------------------------------------------------------------------
//
//
////Write a function to count the number of letter occurrences in a string.
// function countOcurances(str, letter) {
//     var count = 0;
//     for (var i = 0; i < str.length; i++) {
//         var element = str[i];
//         if (element === letter) {
//             count++;
//         }
//     }
//     return count;
//  }
//  var occ = countOcurances('My random string', 'n');
//  console.log(occ);
//
//
//----------------------------------------------------------------------------------------------------
//
//
//Write a function to find the position of the first occurrence of a character in a string.
//The result should be in human numeration form. If there are no occurrences of the character, the function should return -1.
// function positionOfFirst(inputString, character) {
//   for (var index = 0; index < inputString.length; index++) {
//     var currentCharacter = inputString[index];
//     if (currentCharacter === character) {
//       return index + 1;
//     }
//   }
//   return -1;
// }
//
// var characterFirstPosition = positionOfFirst("This is input string", "k");
// console.log(characterFirstPosition);
//
//
//----------------------------------------------------------------------------------------------------
//
//
////  Write a function to find the position of the last occurrence of a character in a string.
//  The result should be in human numeration form. If there are no occurrences of the character, function should return -1.
// function positionOfLast(inputString, character) {
//     var lastIndex = inputString.length - 1;
//     for (var index = lastIndex; index >= 0; index--) {
//         var currentCharacter = inputString[index];
//         if (currentCharacter === character) {
//             return index + 1;
//         }
//     }
//     return -1;
//  }
//  var characterFirstPosition = positionOfLast('This is input string', 'i');
//  console.log(characterFirstPosition);
//
//
//----------------------------------------------------------------------------------------------------
//
//
// Write a function to convert string into an array. Space in a string should be represented as “null” in new array.
// function stringIntoArray(inputString) {
//     var space = ' '
//     var outputArray = [];
//     for (var index = 0; index < inputString.length; index++) {
//         var element = inputString[index];
//         if (element === space) {
//             outputArray[index] = null;
//         } else {
//             outputArray[index] = element;
//         }
//     }
//     return outputArray;
//  }
//  var output = stringIntoArray('This is simple string');
//  console.log(output);
//
//
//----------------------------------------------------------------------------------------------------
//
//
//Write a function that accepts a number as a parameter and check if the number is prime or not.
// function isPrimeNumber(num) {
//     if (num === 1) {
//         return false;
//     } else if (num === 2) {
//         return true;
//     }
//     for (var x = 2; x < num; x++) {
//         if (num % x === 0) {
//             return false;
//         }
//     }
//     return true;
//  }
//  var isPrime = isPrimeNumber(37);
//  console.log(isPrime);
///
//
//----------------------------------------------------------------------------------------------------
//
//
// Write a function that replaces spaces in a string with provided separator.
// If separator is not provided, use “-” (dash) as the default separator.
// function replaceSpace(string, sep) {
//   var output = "";
//   sep = sep || "-";
//   for (var index = 0; index < string.length; index++) {
//     var element = string[index];
//     if (element === " ") {
//       output += sep;
//     } else {
//       output += element;
//     }
//   }
//   return output;
// }
// var result = replaceSpace("Random string with space", "%");
// console.log(result);
//
//
//----------------------------------------------------------------------------------------------------
//
//
//  Write a function to convert an array of strings into an array of numbers. Filter out all non-numeric values.
// function filterNonNumbers(inputArray) {
//   var numArray = [];
//   var positionFixer = 0;
//   for (var index = 0; index < inputArray.length; index++) {
//     var element = inputArray[index];
//     var number = parseFloat(element);
//     if (!isNaN(number) && isFinite(number)) {
//       numArray[index - positionFixer] = number;
//     } else {
//       positionFixer++;
//     }
//   }
//   return numArray;
// }
// var output = filterNonNumbers(["1", "21", undefined, "42", "1e+3", Infinity]);
// console.log(output);
//
//
//----------------------------------------------------------------------------------------------------
//
//
//  Write a function to calculate how many years there are left until retirement based on the year of birth.
//  Retirement for men is at age of 65 and for women at age of 60. If someone is already retired, a proper message should be displayed.
// function calculateAge(yearOfBirth) {
//   var age = parseInt(2022 - yearOfBirth);
//   return age;
// }
// function isInReitrement(age, gender) {
//   gender = gender || "m";

//   if (gender === "m") {
//     return age >= 65;
//   } else if (gender === "f") {
//     return age >= 60;
//   }
// }
// function untilRetirement(yearOfBirth, gender) {
//   var age = calculateAge(yearOfBirth);
//   var gender = gender || "m";

//   if (isInReitrement(age, gender)) {
//     return "Person is already in retirement";
//   }
//   if (gender === "m") {
//     return 65 - age;
//   } else {
//     return 60 - age;
//   }
// }
// var output = untilRetirement(1989);
// console.log(output);
//
//
//----------------------------------------------------------------------------------------------------
//
//
//  Write a function to humanize a number (formats a number to a human-readable string) with the correct suffix such as 1st, 2nd, 3rd or 4th.
// function humanizeNumber(num) {
//   if (typeof num == "undefined") {
//     return;
//   }

//   if (num % 100 >= 11 && num % 100 <= 13) {
//     return num + "th";
//   }

//   switch (num % 10) {
//     case 1:
//       return num + "st";
//     case 2:
//       return num + "nd";
//     case 3:
//       return num + "rd";
//   }
//   return num + "th";
// }
// Output
// console.log(humanizeNumber());
// console.log(humanizeNumber(1));
// console.log(humanizeNumber(8));
//
//
//----------------------------------------------------------------------------------------------------
//
//
// Write a function that reverses a number. The result must be a number.
// function reverseNumber(num) {
//   num = num + "";
//   var output = "";
//   var lastIndex = num.length - 1;

//   for (var index = 0; index < num.length; index++) {
//     var element = num[lastIndex - index];
//     output += element;
//   }

//   var reversedNum = parseFloat(output);
//   return reversedNum;
// }

// var result = reverseNumber(98765);

// console.log(typeof result);
// console.log(result);
//
//
//----------------------------------------------------------------------------------------------------
//
//
//  Write a function that says whether a number is perfect.
// function isPerfect(number) {
//   var temp = 0;
//   for (var i = 1; i <= number / 2; i++) {
//     if (number % i === 0) {
//       temp += i;
//     }
//   }

//   if (temp === number && temp !== 0) {
//     console.log(number + " is a perfect number.");
//   } else {
//     console.log(num + " is not a perfect number.");
//   }
// }

// isPerfect(28);
//
//
//----------------------------------------------------------------------------------------------------
//
//
// Write a function to find a word within a string.
// function searchWordCount(text, word) {
//   var x = 0;
//   var y = 0;

//   for (i = 0; i < text.length; i++) {
//     if (text[i] == word[0]) {
//       for (j = i; j < i + word.length; j++) {
//         if (text[j] == word[j - i]) {
//           y++;
//         }
//         if (y == word.length) {
//           x++;
//         }
//       }
//       y = 0;
//     }
//   }
//   return "'" + word + "' was found " + x + " times.";
// }

// console.log(searchWordCount("The quick brown fox", "fox"));
// console.log(searchWordCount("aa, bb, cc, dd, aa", "aa"));
//
//
//----------------------------------------------------------------------------------------------------
//
//
//  Write a program to find the most frequent item of an array.
// function findFrequentItem(inputArr) {
//   var mostFrequent = 1;
//   var m = 0;
//   var item;
//   for (var i = 0; i < inputArr.length; i++) {
//     for (var j = i; j < inputArr.length; j++) {
//       if (inputArr[i] == inputArr[j]) {
//         m++;
//       }
//       if (mostFrequent < m) {
//         mostFrequent = m;
//         item = inputArr[i];
//       }
//     }
//     m = 0;
//   }

//   // output: item (number of times)
//   return item + " ( " + mostFrequent + " times ) ";
// }

// var arr1 = [3, "a", "a", "a", 2, 3, "a", 3, "a", 2, 4, 9, 3];
// console.log(findFrequentItem(arr1));
//
//
//----------------------------------------------------------------------------------------------------
//
//
//Write a program that checks if a given element e is in the array a.
// function doesElementExist(array, elementToMatch) {
//   if (array.length < 1 || !elementToMatch) {
//     return false;
//   }
//   for (var i = 0; i < array.length; i++) {
//     var element = array[i];
//     if (elementToMatch === element) {
//       return true;
//     }
//   }
//   return false;
// }

// var element = 3;
// var array = [5, -4.2, 3, 7];
// var isMatch = doesElementExist(array, element);

// console.log(isMatch ? "yes" : "no");
//
//
//----------------------------------------------------------------------------------------------------
//
//
//  Write a program that multiplies every positive element of a given array by 2.
// function doublePositiveArrayValues(inputArray) {
//   if (inputArray.length < 1) {
//     return inputArray;
//   }

//   var doubledArray = [];

//   for (var i = 0; i < inputArray.length; i++) {
//     var arrayElement = inputArray[i];
//     if (arrayElement > 0) {
//       var doubleElement = arrayElement * 2;
//       doubledArray[i] = doubleElement;
//     } else {
//       doubledArray[i] = arrayElement;
//     }
//   }

//   return doubledArray;
// }

// var array = [-3, 11, 5, 3.4, -8];
// var doubledArray = doublePositiveArrayValues(array);

// console.log(doubledArray);
//
//
//----------------------------------------------------------------------------------------------------
//
//
// Write a program that finds the minimum of a given array and prints out its value and index.
// function findMinimum(inputArray) {
//   if (inputArray.length < 1) {
//     return inputArray;
//   }

//   var minElement = [];
//   var minElementValue = inputArray[0];
//   var minElementIndex = 0;

//   for (var i = 0; i < inputArray.length; i++) {
//     var element = inputArray[i];
//     if (element < minElementValue) {
//       minElementValue = element;
//       minElementIndex = i;
//     }
//   }

//   minElement = [minElementValue, minElementIndex];

//   return minElement;
// }

// var array = [4, 2, 2, -1, 6];
// var minElement = findMinimum(array);

// console.log(minElement);
//
//
//----------------------------------------------------------------------------------------------------
//
//
//Write a program that finds the first element larger than minimum and prints out its value.
// function findSecondMinimum(inputArray) {
//   if (inputArray.length < 1) {
//     return inputArray;
//   }

//   var minElementValue = findMinimum(inputArray)[0];
//   var secondMinimum = inputArray[0];
//   var secondMinimumIndex = 0;
//   for (var i = 0; i < inputArray.length; i++) {
//     var element = inputArray[i];
//     if (element < secondMinimum && element > minElementValue) {
//       secondMinimum = element;
//       secondMinimumIndex = i;
//     }
//   }

//   return [secondMinimum, secondMinimumIndex];
// }

// console.log(findSecondMinimum(array));
//
//
//----------------------------------------------------------------------------------------------------
//
//
// Write a program that calculates the sum of positive elements in the array.
// function sumPositiveNumbers(array) {
//   if (array.length < 1) {
//     return array;
//   }

//   var sum = 0;

//   for (var i = 0; i < array.length; i++) {
//     var element = array[i];
//     if (element > 0) {
//       sum += element;
//     }
//   }

//   return sum;
// }

// var array = [3, 11, -5, -3, 2];
// var sum = sumPositiveNumbers(array);

// console.log(sum);
//
//
//----------------------------------------------------------------------------------------------------
//
//
//  Write a program that checks if a given array is symmetric.
// //  An array is symmetric if it can be read the same way both from the left and the right hand side.
// function isArraySymetric(array) {
//   if (array.length < 1) {
//     return false;
//   }

//   for (var index = 0; index < array.length; index++) {
//     var element = array[index];
//     var elementPair = array[array.length - i - 1];
//     if (element !== elementPair) {
//       return false;
//     }
//   }

//   return true;
// }

// var array = [2, 4, -2, 7, -2, 4, 2];
// var isSymmetric = isArraySymmetric(array);

// console.log(
//   isSymmetric ? "The array is symmetric." : "The array isn't symmetric."
// );
//
//
//----------------------------------------------------------------------------------------------------
//
//
// Write a program that intertwines two arrays. You can assume the arrays are of the same length.
// function twistArrays(firstArray, secondArray) {
//   var combinedArray = [];
//   var arraysLength = firstArray.length + secondArray.length;

//   for (var i = 0, j = 0; j < arraysLength; i++) {
//     if (i < firstArray.length) {
//       combinedArray[j++] = firstArray[i];
//     }

//     if (i < secondArray.length) {
//       combinedArray[j++] = secondArray[i];
//     }
//   }

//   return combinedArray;
// }

// var firstArray = [4, 5, 6, 2];
// var secondArray = [3, 8, 11, 9];
// var twistedArray = twistArrays(firstArray, secondArray);

// console.log(twistedArray);
//
//
//----------------------------------------------------------------------------------------------------
//
//
//  Write a program that concatenates two arrays.
// function concatenateArrays(array1, array2) {
//   var array1Length = array1.length;
//   var array2Length = array2.length;
//   var result = [];
//   for (var i = 0; i < array1Length + array2Length; i++) {
//     if (i < array1Length) {
//       result[i] = array1[i];
//     } else if (i >= array1Length) {
//       result[i] = array2[i - array1Length];
//     }
//   }

//   return result;
// }

// var concatenated = concatenateArrays(firstArray, secondArray);
// console.log(concatenated);
//
//
//----------------------------------------------------------------------------------------------------
//
//
//Write a program that deletes a given element e from the array a.
// function deleteElement(array, elementToDelete) {
//   if (array.length < 1 || !elementToDelete) {
//     return array;
//   }

//   var newArray = [];

//   for (var i = 0, j = 0; i < array.length; i++) {
//     if (elementToDelete !== array[i]) {
//       var newArrayLength = newArray.length;
//       newArray[newArrayLength] = array[i];
//     }
//   }

//   return newArray;
// }

// var array = [4, 6, 2, 8, 2, 2];
// var element = 2;

// console.log(array);
// array = deleteElement(array, element);
// console.log(array);
//
//
//----------------------------------------------------------------------------------------------------
//
//
// Write a program that inserts a given element e on the given position p in the array a.
// If the value of the position is greater than the array length, print the error message.
// function insertElement(array, element, position) {
//   position = position || 0;
//   if (array.length < 1 || !element) {
//     return array;
//   }

//   if ((position) => array.length) {
//     console.log("Index out of bounds.");
//     return array;
//   }

//   var newArray = [];
//   for (var i = 0, j = 0; i < array.length; i++) {
//     if (i === position) {
//       newArray[j] = element;
//       newArray[j + 1] = array[i];
//       j += 2;
//     } else {
//       newArray[j] = array[i];
//       j++;
//     }
//   }
//   return newArray;
// }

// var element = 78;
// var position = 3;
// var array = [2, -2, 33, 12, 5, 8];
// var output = insertElement(array, element, position);

// console.log(output);
//
//
//----------------------------------------------------------------------------------------------------
//
//
// Find the min and max element in the following array and switch their places.
// Print out the modified array in the console.
// function swapMinimumAndMaximumElement(array) {
//   var minElement = 9007199254740991; // max safe number in JavaScript
//   var maxElement = -9007199254740991;

//   var minIndex = 0;
//   var maxIndex = 0;

//   var newArray = [];

//   for (var i = 0; i < array.length; i++) {
//     var element = array[i];
//     newArray[i] = element;

//     if (element > maxElement) {
//       maxElement = element;
//       maxIndex = i;
//     }

//     if (element < minElement) {
//       minElement = element;
//       minIndex = i;
//     }

//     if (i === array.length - 1) {
//       newArray[maxIndex] = minElement;
//       newArray[minIndex] = maxElement;
//     }
//   }

//   return newArray;
// }

// var array = [3, 500, 12, 149, 53, 414, 1, 19];
// console.log(swapMinimumAndMaximumElement(array));
//
//
//----------------------------------------------------------------------------------------------------
//
//
// Use the following array to make a new one by dividing its values by two and adding 5.
// If a given element's value is 0, change it to 20
// function computeArray(
//   array,
//   valueToDivide,
//   valueToAdd,
//   valueIfElementEqualsZero
// ) {
//   var newArray = [];

//   for (var i = 0; i < array.length; i++) {
//     var element = array[i];
//     element = element / valueToDivide + valueToAdd;

//     if (element === 0) {
//       element = valueIfElementEqualsZero;
//     }

//     newArray[i] = element;
//   }

//   return newArray;
// }

// var array = [3, 500, -10, 149, 53, 414, 1, 19];
// console.log(computeArray(array, 2, 5, 20));
//
//
//----------------------------------------------------------------------------------------------------
//
//
// Initialize two arrays. The first one should contain student names, the second one the number of points for each student.
// Display students' names with their corresponding grade.
// function printGrades(students, points) {
//   var outputMessage = "";

//   for (var i = 0; i < students.length; i++) {
//     var score = points[i];
//     var roundedScore = (score - (score % 10)) / 10 + 1;
//     var message =
//       students[i] +
//       " acquired " +
//       score +
//       " points and earned " +
//       roundedScore +
//       ".";
//     var failedMessage =
//       students[i] +
//       " acquired " +
//       score +
//       " points and failed to complete an exam.";

//     if (score > 50 && score < 61) {
//       outputMessage += "\n" + message;
//     } else if (score > 60 && score < 71) {
//       outputMessage += "\n" + message;
//     } else if (score > 70 && score < 81) {
//       outputMessage += "\n" + message;
//     } else if (score > 80 && score < 91) {
//       outputMessage += "\n" + message;
//     } else if (score > 90 && score <= 100) {
//       outputMessage += "\n" + message;
//     } else {
//       outputMessage += "\n" + failedMessage;
//     }
//   }

//   return outputMessage;
// }

// var students = [
//   "Michael",
//   "Anne",
//   "Frank",
//   "Joe",
//   "John",
//   "David",
//   "Mark",
//   "Bill",
// ];
// var points = [50, 39, 63, 72, 99, 51, 83, 59];
// var grades = printGrades(students, points);

// console.log(grades);
//
//
//----------------------------------------------------------------------------------------------------
//
//
// Sort a previously defined array.
// Place its sorted values into a new array whose values are equivalent to the first array's values multiplied by 2.
// function sortArray(array, multiplier) {
//   var newArray = [];

//   for (var i = 0; i < array.length - 1; i++) {
//     var minIndex = i;
//     var tempElementToSwap;

//     for (var j = i + 1; j < array.length; j++) {
//       var elementToCompareTo = array[j];

//       if (elementToCompareTo < array[minIndex]) {
//         minIndex = j;
//       }
//     }

//     tempElementToSwap = array[i];
//     array[i] = array[minIndex];
//     array[minIndex] = tempElementToSwap;
//   }

//   for (var k = 0; k < array.length; k++) {
//     newArray[k] = array[k] * multiplier;
//   }

//   return newArray;
// }

// var array = [13, 11, 15, 5, 6, 1, 8, 12];
// array = sortArray(array, 2);

// console.log(array);
//
//
//----------------------------------------------------------------------------------------------------
//
//
// Sort a previously defined array in a descending order and display it in the console.
// function reverseSort(array) {
//   for (var i = array.length - 1; i > 0; i--) {
//     var maxIndex = i;
//     var tempElementToSwap;

//     for (var j = i - 1; j >= 0; j--) {
//       if (array[j] < array[maxIndex]) {
//         maxIndex = j;
//       }
//     }

//     tempElementToSwap = array[i];
//     array[i] = array[maxIndex];
//     array[maxIndex] = tempElementToSwap;
//   }

//   return array;
// }

// var array = [13, 11, 15, 5, 6, 1, 8, 12];
// console.log(reverseSort(array));
//
//
//----------------------------------------------------------------------------------------------------
//
//
// Write a program that uses a loop to add all the even numbers from 1 to 1000 and subtracts all the odd numbers 1 to 500 from the calculated sum.
// The result should then be multiplied by 12.5 and displayed in console.

// function addEvenAndSubstractOddNumbers(
//   maxEvenNumber,
//   maxOddNumber,
//   multiplyBy
// ) {
//   var sum = 0;
//   var largerIndex =
//     maxEvenNumber >= maxOddNumber ? maxEvenNumber : maxOddNumber;

//   for (var number = 1; number <= largerIndex; number++) {
//     if (number % 2 === 0 && number <= maxEvenNumber) {
//       sum += number;
//     }

//     if (number % 2 !== 0 && number <= maxOddNumber) {
//       sum -= number;
//     }
//   }

//   sum = sum * multiplyBy;
//   return sum;
// }

// console.log(addEvenAndSubstractOddNumbers(1000, 500, 12.5));
//
//
//----------------------------------------------------------------------------------------------------
//
//
// Define a 10 element array. Take the first two letters from every string (that has at least 2 letters) in the array and create
// a new string from them. Print it out in the console.
// function getFirstNLetters(array, numberOfLetters) {
//   var output = "";
//   var tempNewElement = "";

//   for (var i = 0; i < array.length; i++) {
//     for (var j = 0; j < numberOfLetters; j++) {
//       var letter = array[i][j];
//       var isLetterValid = typeof letter === "string";
//       if (!isLetterValid) {
//         break;
//       }

//       tempNewElement += letter;
//     }

//     if (tempNewElement.length !== numberOfLetters) {
//       tempNewElement = "";
//     } else if (tempNewElement.length === numberOfLetters) {
//       output += tempNewElement;
//       tempNewElement = "";
//     }
//   }

//   return output;
// }

// var names = [
//   "M",
//   "Anne",
//   12,
//   "Steve",
//   "Joe",
//   "John",
//   "David",
//   "Mark",
//   true,
//   "A",
// ];

// console.log(getFirstNLetters(names, 2));
//
//
//----------------------------------------------------------------------------------------------------
//
//
// Write a program that takes a string and prints its characters out in reversed order in the console.

// function reverseString(stringToReverse) {
//   var outputMessage = "";
//   var lastCharacterInString = stringToReverse.length - 1;

//   for (var i = lastCharacterInString; i >= 0; i--) {
//     var character = stringToReverse[i];
//     outputMessage += character;
//   }

//   return outputMessage;
// }

// var message = "Belgrade Institute of Technology";
// var reversedMessage = reverseString(message);

// console.log(reversedMessage);
//
//
//----------------------------------------------------------------------------------------------------
//
//
// Write a program that displays all the combinations of two numbers between 1 and 7.
// Don't display two of the same numbers at the same time. Display the number of possible combinations, as well.

// function combineNonDuplicatePairs(intervalFrom, inetervalTo) {
//   var combinations = [];
//   var numberOfPairs = 0;

//   for (var i = intervalFrom, iNew = 0; i <= inetervalTo; i++, iNew++) {
//     for (var j = 1, jNew = 0; j <= inetervalTo; j++) {
//       if (i !== j) {
//         combinations[numberOfPairs] = [i, j];
//         numberOfPairs++;
//         jNew++;
//       }
//     }
//   }

//   return combinations;
// }

// var a = 1;
// var b = 7;

// var combinations = combineNonDuplicatePairs(a, b);

// console.log(combinations);
//
//
//----------------------------------------------------------------------------------------------------
//
//
// Write a program that checks if the entered number is a prime number (i.e. divisible only by 1 and by itself).var number = 11;

// function isPrime(numberToCheck) {
//   if (numberToCheck < 1) {
//     return false;
//   }

//   for (var i = 2; i <= numberToCheck / 2; i++) {
//     var isDivisible = numberToCheck % i === 0;
//     if (isDivisible) {
//       return false;
//     }
//   }

//   return true;
// }

// console.log(isPrime(7));
//
//
//----------------------------------------------------------------------------------------------------
//
//
//Check if a given string is a palindrome (spaces are ignored).
// function isPalindrome(stringToCheck) {
//   var stringWithoutSpaces = removeSpaceCharacters(stringToCheck);

//   for (var i = 0; i < stringWithoutSpaces.length / 2; i++) {
//     if (
//       stringWithoutSpaces[i].toLowerCase() !==
//       stringWithoutSpaces[stringWithoutSpaces.length - i - 1].toLowerCase()
//     ) {
//       return false;
//     }
//   }

//   return true;
// }

// function removeSpaceCharacters(string) {
//   var newString = "";

//   for (var i = 0; i < string.length; i++) {
//     var character = string[i];
//     if (character !== " ") {
//       newString += character;
//     }
//   }

//   return newString;
// }

// console.log(isPalindrome("Ana voli Milovana"));
//
//
//----------------------------------------------------------------------------------------------------
//
//
// Write a program that calculates the greatest common divisor of two integers.
// Note: The greatest common divisor of two non-zero integers is the greatest positive number that divides both numbers with no remainder.

// function findGcd(firstNumber, secondNumber) {
//   var gcd = 1;

//   for (var i = 1; i <= firstNumber && i <= secondNumber; i++) {
//     if (firstNumber % i === 0 && secondNumber % i === 0) {
//       gcd = i;
//     }
//   }

//   return gcd;
// }

// var a = 45;
// var b = 9;

// var gcd = findGcd(a, b);

// console.log(gcd);
