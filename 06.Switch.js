// ZADATAK 1. Write a program that shows text representation of a day in a week for a number
// input from 1 to 7. Print output in console.
// For input 1, output should be “Monday”.
//
//                              SOLUTION
//
// var uslov = 7;
// switch (uslov) {
//   case 1:
//     console.log("Ponedeljak");
//     break;
//   case 2:
//     console.log("Utorak");
//     break;
//   case 3:
//     console.log("Sreda");
//     break;
//   case 4:
//     console.log("Cetvrtak");
//     break;
//   case 5:
//     console.log("Petak");
//     break;
//   case 6:
//     console.log("Subota");
//     break;
//   case 7:
//     console.log("Nedelja");
//     break;
// }
//
//
//----------------------------------------------------------------------------------------------------
//
//
// ZADATAK 2. Write a program that shows text representation of a day in a week for a number
// input from 1 to 7. All other cases output a message explaining that input must be a number
// between 1 and 7.
// For input 1, output should be “Monday”.
// For input 10, output should be “Input must be a number between 1 and 7”.
//
//                              SOLUTION
//
// var uslov = 8;
// switch (uslov) {
//   case 1:
//     console.log("Monday");
//     break;
//   case 2:
//     console.log("Tuesday");
//     break;
//   case 3:
//     console.log("Wednesday");
//     break;
//   case 4:
//     console.log("Thursday");
//     break;
//   case 5:
//     console.log("Friday");
//     break;
//   case 6:
//     console.log("Saturday");
//     break;
//   case 7:
//     console.log("Sunday");
//     break;
//   default:
//     console.log("Morate uneti broj 1-7");
//     break; // nije neophodan break, jer je svakako poslednji slucaj
// }
//
//
//----------------------------------------------------------------------------------------------------
//
//
// ZADATAK 3. Write a program that for a 1-7 number input (representing a day in a week)
// shows if that day is a weekday or weekend. All other cases output a message
// explaining that input must be a number between 1 and 7.
// For input 2, output should be “It’s weekday”.
// For input 6, output should be “It’s weekend”.
// For input 12, output should be “Input must be number between 1 and 7”.
//
//                              SOLUTION
//
// var uslov = 6;
// switch (uslov) {
//   case 1:
//   case 2:
//   case 3:
//   case 4:
//   case 5:
//     console.log("radni dan");
//     break;
//   case 6:
//   case 7:
//     console.log("vikend");
//     break;
//   default:
//     console.log("morate uneti broj 1-7");
//     break;
// }
//
//
//----------------------------------------------------------------------------------------------------
//
//
// ZADATAK 4. Write a program that for a 1-12 number input (representing a month in a year)
// shows that month’s name. All other cases output a message explaining that input must
// be a number between 1 and 12.
// For input 2, output should be “February”.
// For input 6, output should be “June”.
// For input 13, output should be “Input must be a number between 1 and 12”.
//
//                              SOLUTION
//
// var uslov = 12;
// switch (uslov) {
//   case 1:
//     console.log("Januar");
//     break;
//   case 2:
//     console.log("Februar");
//     break;
//   case 3:
//     console.log("Mart");
//     break;
//   case 4:
//     console.log("April");
//     break;
//   case 5:
//     console.log("Maj");
//     break;
//   case 6:
//     console.log("Jun");
//     break;
//   case 7:
//     console.log("Jul");
//     break;
//   case 8:
//     console.log("Avgust");
//     break;
//   case 9:
//     console.log("Septembar");
//     break;
//   case 10:
//     console.log("Oktobar");
//     break;
//   case 11:
//     console.log("Novembar");
//     break;
//   case 12:
//     console.log("Decembar");
//     break;
//   default:
//     console.log("Morate uneti broj 1-12");
// }
//
//
//----------------------------------------------------------------------------------------------------
//
//
// ZADATAK 5. Write a program that for a 1-12 number input (representing a month in a year) shows
// what season it is. All inputs different from 1-12 output a message explaining that
// input must be a number between 1 and 12.
//
//                              SOLUTION
//
// var uslov = 40;
// switch (uslov) {
//   case 1:
//   case 2:
//   case 3:
//     console.log("Zima");
//     break;
//   case 4:
//   case 5:
//   case 6:
//     console.log("Leto");
//     break;
//   case 7:
//   case 8:
//   case 9:
//     console.log("Prolece");
//     break;
//   case 10:
//   case 11:
//   case 12:
//     console.log("jesen");
//     break;
//   default:
//     console.log("Morate uneti broj 1-12");
// }
//
//
//----------------------------------------------------------------------------------------------------
//
//
// ZADATAK 6. Write a program that for a string input of a grade from “A”-“F” outputs a proper info
// message about that grade in the following manner:
// A - "Good job"", B - "Pretty good"", C - "Passed"", D - "Not so good"", F - "Failed".
// Input different from letters A-F outputs a message "Unknown grade".
//
//                              SOLUTION
//
// var uslov = "a";
// switch (
//   uslov.toUpperCase() // toLowerCase() pretvara u mala slova
// ) {
//   case "A":
//     console.log("Good job");
//     break;
//   case "B":
//     console.log("Pretty good");
//     break;
//   case "C":
//     console.log("Passed");
//     break;
//   case "D":
//     console.log("Not so good");
//     break;
//   case "F":
//     console.log("Failed");
//     break;
//   default:
//     console.log("Ne postoji ocena");
// }
//
//
//----------------------------------------------------------------------------------------------------
//
//
// ZADATAK 7. Write a program that takes as input a city name and outputs the country where the city is.
// You may choose which cities and countries you want to output yourself, however there has to
// be at least 5 countries and 15 cities. Note that each country must have a different number of cities.
// Input different from the listed cities should output a message"Please choose a different city".
//
//                              SOLUTION
//
// var uslov = "Beograd";
// switch (uslov) {
//   case "Beograd":
//   case "Novi Sad":
//   case "Nis":
//     console.log("Srbija");
//     break;
//   case "Pariz":
//   case "Lyon":
//   case "Le Mans":
//     console.log("Francuska");
//     break;
//   case "Berlin":
//   case "Minhen":
//   case "Frankfurt":
//     console.log("Nemacka");
//     break;
//   case "Zagreb":
//   case "Rovinj":
//   case "Karlovac":
//     console.log("Hrvatska");
//     break;
//   case "Podgorica":
//   case "Niksic":
//   case "Bar":
//     console.log("Crna Gora");
//     break;
//   default:
//     console.log("ne postoji izabrani grad");
// }
//
//
//----------------------------------------------------------------------------------------------------
//
//
// ZADATAK 8. Write a program that takes as input two numbers and a string denoting the operation
// (“+”, “-”, “*”, “/”) and prints out the appropriate result. Watch out for division by zero!
//
//                              SOLUTION
//
// var x = "12";
// var y = 2;
// var operation = "/";
// switch (operation) {
//   case "+":
//     console.log(x + y);
//     break;
//   case "-":
//     console.log(x - y);
//     break;
//   case "*":
//     console.log(x * y);
//     break;
//   case "/":
//     if (y != 0) {
//       console.log(x / y);
//     } else {
//       console.log("Broj ne sme biti 0");
//     }
// }
