// ZADATAK 1. Write a conditional statement to find the sign of product of three numbers. Display the
// result in the console with the specified sign.
// Sample numbers: 3, -7, 2
// Output: The sign is -
//
//                              SOLUTION 1
//
// var a = 3;
// var b = -7;
// var c = 2;
// if (a * b * c > 0) {
//   console.log("The sign is +");
// } else {
//   console.log("The sign is -");
// }
//
//                              SOLUTION 2
//
// var a = 3;
// var b = -7;
// var c = 2;
// var result = a * b * c;
// if (result < 0) {
//   console.log("The sign is -");
// } else {
//   console.log("The sign is +");
// }
//
//                              SOLUTION 3 - odd numnber of negative  multiplication operands is always -
//
// var a = 3;
// var b = -7;
// var c = -2;
// var counter = 0;
// if (a < 0) {
//   counter++;
// }
// if (b < 0) {
//   counter++;
// }
// if (c < 0) {
//   counter++;
// }
// if (counter % 2 === 0) {
//   console.log("The sign is +");
// } else {
//   console.log("The sign is -");
// }
//
//
//----------------------------------------------------------------------------------------------------
//
//
// ZADATAK 2. Write a conditional statement to find the largest of five numbers. Display the result in the
// console.
// Sample numbers: -5, -2, -6, 0, -1
// Output: 0
//
//                              SOLUTION
//
// var a = -5;
// var b = -2;
// var c = 6;
// var d = 0;
// var e = -1;
// var result = -Infinity;
// if (a > result) {
//   result = a;
// }
// if (b > result) {
//   result = b;
// }
// if (c > result) {
//   result = c;
// }
// if (d > result) {
//   result = d;
// }
// if (e > result) {
//   result = e;
// }
// console.log(result);
//
//
//----------------------------------------------------------------------------------------------------
//
//
// ZADATAK 3. Write a conditional statement to print three numbers as sorted number list.
// Sample numbers : 0, -1, 4
// Output : 4, 0, -1
//
//                              SOLUTION
//
// var a = 10;
// var b = 6;
// var c = 40;
// var smallestNumber;
// var middleNumber;
// var largestNumber;
// if (a > b && a > c) {
//   largestNumber = a;
//   if (b > c) {
//     middleNumber = b;
//     smallestNumber = c;
//   } else {
//     middleNumber = c;
//     smallestNumber = b;
//   }
// } else if (b > a && b > c) {
//   largestNumber = b;
//   if (a > c) {
//     middleNumber = a;
//     smallestNumber = c;
//   } else {
//     middleNumber = c;
//     smallestNumber = a;
//   }
// } else if (c > a && c > b) {
//   largestNumber = c;
//   if (a > b) {
//     middleNumber = a;
//     smallestNumber = b;
//   } else {
//     middleNumber = b;
//     smallestNumber = a;
//   }
// }
// console.log(largestNumber, middleNumber, smallestNumber);
//
//
//----------------------------------------------------------------------------------------------------
//
//
// ZADATAK 4. Write a program to check if the variable is a number and if it’s a number, check if it is
// divisible by 2. If it is, print the result, if not, show “X”.
// Sample input: 10 Sample input: 7
// Output: 10 / 2 = 5 Output: X
//
//                              SOLUTION
//
// var a = 2;
// if (typeof a == "number") {
//   if (a % 2 === 0) {
//     console.log(a, "/", 2, "=", a / 2);
//   } else {
//     console.log("Number is not divisible by 2");
//   }
// } else {
//   console.log("This is not a number");
// }
//
//
//----------------------------------------------------------------------------------------------------
//
//
// ZADATAK 5. Write a program that compares two numbers and displays the larger. Display the result in
// the console.
//
//                              SOLUTION
//
// var a = 10;
// var b = 50;
// if (a > b) {
//   console.log("Bigger number is ", a);
// } else {
//   console.log("Bigger number is ", b);
// }
//
//
//----------------------------------------------------------------------------------------------------
//
//
// ZADATAK 6. Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit.
// Formula : F = (9*C/5) + 32 [ where c = temperature in Celsius and f = temperature in Fahrenheit ]
// Sample Input: 60°C
// Output : 60°C is 140 °F
//
//                              SOLUTION
//
// var temp = 60;
// var scale = "F";
// var result;
// if (scale == "C") {
//   result = (9 * temp) / 5 + 32;
// } else {
//   result = ((temp - 32) * 5) / 9;
// }
// console.log(result);
//
//
//----------------------------------------------------------------------------------------------------
//
//
// ZADATAK 7. Write a JavaScript program to get the difference between a given number and 13,
// if the number is greater than 13 return double difference between that number and 13.
// Sample Input: 11					Sample Input: 32
// Output : 2					.	Output : 38
// (  Math.abs( number )  )
//
//                              SOLUTION
//
// var number = 32;
// if (number < 13) {
//   console.log(Math.abs(number - 13)); //apsolutna vrednost broja
// } else {
//   console.log((number - 13) * 2);
// }
//
//
//----------------------------------------------------------------------------------------------------
//
//
// ZADATAK 8. Write a JavaScript program to compute the sum of the two given integers.
// If the two values are same, then returns triple their sum.
//
//                              SOLUTION
//
// var a = 20;
// var b = 10;
// var c = 1;
// if (a == b) {
//   c = 3;
// }
// console.log((a + b) * c);
//
//
//----------------------------------------------------------------------------------------------------
//
//
// ZADATAK 9. Write a JavaScript program to check two given numbers and print “true”
// if one of the number is 50 or if their sum is 50.
// Sample Input: 5,54			Sample Input: 6,50			Sample Input: 40,10
// Output : -				Output : true				Output : true
//
//                              SOLUTION
//
// var a = 6;
// var b = 30;
// if (a == 50 || b == 50 || a + b == 50) {
//   console.log(true);
// } else console.log(false);
//
//
//----------------------------------------------------------------------------------------------------
//
//
// ZADATAK 10. Write a JavaScript program to check a given integer is within 20 to100 or 100 to 400,
// and print range in which number belongs.
// Sample Input: 13			Sample Input: 34			Sample Input: 256
// Output : -				Output : 20 ⇔ 100			Output : 100 ⇔ 400
//
//                              SOLUTION
//
// var number = 7;
// if (number >= 20 && number < 100) {
//   console.log("20-100");
// } else if (number >= 100 && number < 400) {
//   console.log("100-400");
// } else {
//   console.log("wrong input value");
// }
