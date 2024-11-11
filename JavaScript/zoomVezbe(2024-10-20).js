//ZADATAK Funkcija koja broji parne i neparne brojeve iz niz, kao i njihov prosek.
//
//                              SOLUTION
//
// function parNepar(array) {
//   var brojParnih = 0;
//   var brojNeparnih = 0;
//   var zbir = 0;
//   var prosek;

//   for (i = 0; i < array.length; i++) {
//     var element = array[i];
//     if (array[i] % 2 === 0) {
//       brojParnih++;
//     } else {
//       brojNeparnih++;
//     }
//     zbir += element;
//   }
//   prosek = zbir / array.length;

//   return {
//     brojParnih,
//     brojNeparnih,
//     prosek,
//   };
// }
// console.log(parNepar([2, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
//
//
//----------------------------------------------------------------------------------------------------
//
//
// ZADATAK Napraviti funkciju koja nalazi prvi karakter u stringu koji se ne ponavlja.
// firstNonRepeatChar('the quick brown fox jumps then quickly blow air');
// = "f"
//
//                              SOLUTION
//
// function firstNonRepeatChar(string) {
//   var result = [];
//   for (var i = 0; i < string.length; i++) {
//     var daLiSePonavlja = false;
//     for (var j = i + 1; j < string.length; j++) {
//       if (string[i] === string[j]) {
//         daLiSePonavlja = true;
//         break;
//       }
//     }
//     if (daLiSePonavlja === false) {
//       return string[i];
//     }
//   }
//   return result;
// }
// console.log(
//   firstNonRepeatChar("the quick brown fox jumps then quickly blow air")
// );
//
//
//----------------------------------------------------------------------------------------------------
//
//
