// // NAVIGATOR
// function printInfo() {
//   console.log(navigator.platform);
//   console.log(navigator.appVersion);
//   console.log(navigator.vendor);
//   console.log(navigator.userAgent);
// }
// printInfo();
// // ISONLINE
// function isOnline() {
//   console.log(navigator.onLine);
// }
// isOnline();
// // SCREEN
// function browserWH() {
//   console.log(screen.width);
//   console.log(screen.height);
//   console.log(screen.availHeight);
// }
// browserWH();
// //LOCATION
// function fullUrl() {
//   console.log(location.href);
// }
// fullUrl();

// function whatDomain() {
//   console.log(location.host);
// }
// whatDomain();

// function whatProtocol() {
//   console.log(location.protocol);
// }
// whatProtocol();

// function urlParameters() {
//   console.log(location.search);
// }
// urlParameters();

// function restartPage() {
//   return reload();
// }
// function redirectToPage() {
//   location.href = "https://www.yahoo.com";
// }
// redirectToPage();
// function redirectToPage() {
//   window.open("https://www.yahoo.com");
// }
// redirectToPage();
//
// UPIS U LOCAL STORAGE // CITANJE IZ LOCAL STORAGE
// function writeLocalStorage(key, value) {
//   localStorage.setItem(key, value);
// }
// writeLocalStorage("name", "Pera");
//
// BRISE IZ LOCAL STORAGE
// localStorage.removeItem("name");
//
// function readLocalStorage(name) {
//   let foundName = localStorage.getItem(name);
//   if (foundName == undefined) {
//     console.log("There is No Data");
//   } else return foundName;
// }
// console.log(readLocalStorage("name"));
//
//
//
// PRETHODNI PRIMER PISANI KAO ARROW FUNKCIJE
//
// WRITE
//
// let writeLocalStorage = (key, value) => localStorage.setItem(key, value);
// writeLocalStorage("ime", "Pera");
// //
// // READ
// //
// let readLocalStorage = (key) => {
//   let foundName = localStorage.getItem(key);
//   if (foundName == undefined) {
//     console.log("There is No Data");
//   } else return foundName;
// };
// console.log(readLocalStorage("ime"));
// //
// // DELETE
// //
// let deleteItem = (key) => localStorage.removeItem(key);
// deleteItem("ime");
