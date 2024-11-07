// ZADATAK 1. Employees and Managers
//
// -Create constructor functions with properties representing the following:
// Person: name, surname
// Employee: inherits Person and has job and salary
// Developer: inherits from Employee and has specialization
// Manager: inherits from Employee and has department
//
// -All developers should inherit method:
// getSpecialization which prints out the name of the specialization
//
// -All managers should inherit methods:
// getDepartment which prints out the name of the department
// changeDepartment which sets the department value to the given value
//
// -All employees should inherit methods:
// getData which returns the name, surname and salary
// getSalary which prints out the salary
// increaseSalary which increases the salary by 10%

function Person(name, surname) {
  this.name = name;
  this.surname = surname;
}
/////// OVE DVE STAVKE (1 i 2) URADI "EXTEND" KADA SE RADI SA KLASAMA
//1. stavka naseldjivanja -> povezujemo prototipe (Employee gleda na Person)
Employee.prototype = Object.create(Person.prototype);
// 2. moram da povratim pokazivac na Employee consrtuctor, jer prethodna linija usmerava na nasledjeni constructor
Employee.prototype.constructor = Employee;

function Employee(name, surname, job, salary) {
  // 3. pozivanje constructora od Person
  Person.call(this, name, surname);
  this.job = job;
  this.salary = salary;
}

Developer.prototype = Object.create(Employee.prototype);
Developer.prototype.constructor = Developer;

function Developer(name, surname, job, salary, specialization) {
  Employee.call(this, name, surname, job, salary);
  this.specialization = specialization;
}
// Person methods
Person.prototype.getFullName = function () {
  return this.name + this.surname;
};
// Employee methods
Employee.prototype.getData = function () {
  return this.name + this.surname + this.salary;
};

Employee.prototype.increaseSalary = function () {
  this.salary *= 1.1;
  return this.salary;
};
// Developer methods
Developer.prototype.getSpecialization = function () {
  return this.specialization;
};

var osoba = new Person("Martin", "Potkonjak");
var zaposleni = new Employee("Petar", "Petrovic", "Programmer", 2000);
var developer = new Developer("Mitar", "Mitrovic", "dev", 5000, "JS");

console.log(osoba.getFullName());
console.log(zaposleni.getFullName());
console.log(developer.getFullName());

console.log(zaposleni.getData());
console.log(developer.getData());

console.log(zaposleni.increaseSalary());
console.log(developer.increaseSalary());
