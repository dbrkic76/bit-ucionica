// ZADATAK 0. Write a program that will iterate from 0 to 10 and display squares of numbers.
//
//                              SOLUTION
//
// for (var x = 0; x <= 10; x++) {
//   console.log(x * x);
// }
//
//
//----------------------------------------------------------------------------------------------------
//
//
// ZADATAK 1. Write a for loop that will iterate from 0 to 15. For each iteration, it will check
// if the current number is odd or even, and display a message to the screen.
//
//                              SOLUTION
//
// for (var x = 0; x <= 15; x++) {
//   if (x === 0) continue;
//   if (x % 2 === 0) console.log("Broj " + x + " je paran");
//   else console.log("Broj " + x + " je neparan");
// }
//
//
//----------------------------------------------------------------------------------------------------
//
//
// ZADATAK 2. Write a program to sum the multiples of 3 and 5 under 1000.
//
//                              SOLUTION
//
// var sum = 0;
// for (var x = 0; x <= 1000; x++) {
//   if (x % 3 === 0 && x % 5 === 0) {
//     sum += x;
//   }
// }
// console.log(sum);
//
//
//----------------------------------------------------------------------------------------------------
//
//
// ZADATAK 3. Write a program to compute the sum and product of an array of integers.
//
//                              SOLUTION
//
// var array = [2, 3, 6];
// var suma = 0;
// var proizvod = 1;
// for (var i = 0; i < array.length; i++) {
//   suma = suma + array[i];
//   proizvod = proizvod * array[i];
// }
// console.log(suma);
// console.log(proizvod);
//
//
//----------------------------------------------------------------------------------------------------
//
//
// ZADATAK 4. Write a program which prints the elements of the following array as a single string.
// var x = ['1', 'A', 'B', "c", "r", true, NaN, undefined];
//
//                              SOLUTION
//
// var niz = ["1", "A", "B", "c", "r", true, NaN, undefined];
// var endstring = "";
// for (var i = 0; i < niz.length; i++) {
//   endstring = endstring + niz[i];
// }
// console.log(endstring);
//
//
//----------------------------------------------------------------------------------------------------
//
//
// ZADATAK 5. Write a program that prints the elements of the following array.
// var a = [
// [1, 2, 1, 24],
// [8, 11, 9, 4],
// [7, 0, 7, 27]
// ];
//
//                              SOLUTION
//
// var a = [
//   [1, 2, 1, 24],
//   [8, 11, 9, 4],
//   [7, 0, 7, 27],
// ];
// for (var i = 0; i < a.length; i++) {
//   for (var j = 0; j < a[i].length; j++) {
//     console.log(a[i][j]);
//   }
// }
//
//
//----------------------------------------------------------------------------------------------------
//
//
// ZADATAK 6. Write a program that outputs the sum of squares of the first 20 numbers.
//
//                              SOLUTION
//
// var sum = 0;
// for (i = 0; i <= 20; i++) {
//   sum = sum + i * i;
// }
// console.log(sum);
//
//
//----------------------------------------------------------------------------------------------------
//
//
// ZADATAK 7. Write a program that computes average marks of the following students.
// Then use this average to determine the corresponding grade.
// David - 80
// Marko - 77
// Dany - 88
// John - 95
// Thomas - 68
// The grades are computed as follows :
// < 60% - F
// < 70% - D
// < 80% - C
// < 90% - B
// < 100% - A
//
//                              SOLUTION 1
//
// var David = 80;
// var Marko = 77;
// var Dany = 88;
// var John = 95;
// var Thomas = 68;
// var totalMarks = David + Marko + Dany + John + Thomas;
// var averageMarks = totalMarks / 5;
// var grade;
// if (averageMarks < 60) {
//   grade = "F";
// } else if (averageMarks < 70) {
//   grade = "D";
// } else if (averageMarks < 80) {
//   grade = "C";
// } else if (averageMarks < 90) {
//   grade = "B";
// } else {
//   grade = "A";
// }
// console.log("Average Class Mark is: " + averageMarks);
// console.log("Average Class Grade is: " + grade);
//
//
//----------------------------------------------------------------------------------------------------
//
//
// ZADATAK 8. Write a program that uses console.log to print all the numbers from 1 to 100,
// with two exceptions. For numbers divisible by 3, print "Fizz" instead of the number,
// and for numbers divisible by 5 (and not 3), print "Buzz" instead. When you have that working,
// modify your program to print "FizzBuzz", for numbers that are divisible by both 3 and 5
// (and still print "Fizz" or "Buzz" for numbers divisible by only one of those).
// Note: This is actually an interview question that has been claimed to weed out a significant
// percentage of programmer candidates. So if you’ve solved it, you’re now allowed
// to feel good about yourself.
//
//                              SOLUTION
//
// var someNumber;
// for (var i = 1; i <= 100; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     someNumber = "FizzBuzz";
//   } else if (i % 3 === 0) {
//     someNumber = "Fizz";
//   } else if (i % 5 === 0) {
//     someNumber = "Buzz";
//   } else {
//     someNumber = i;
//   }

//   console.log(someNumber);
// }
