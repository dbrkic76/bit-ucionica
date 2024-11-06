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

class Person {
  constructor(name, surname) {
    this.name = name;
    this.surname = surname;
  }
  getFullName() {
    return `${this.name} ${this.surname}`;
  }
}
class Employee extends Person {
  constructor(name, surname, job, salary) {
    super(name, surname);
    this.job = job;
    this.salary = salary;
  }
  getData() {
    return `${super.getFullName()} ${this.salary}`;
  }
  getSalary() {
    return `Salary is ${this.salary} per month`;
  }
  increaseSalary(incPercentage) {
    var originalSalary = this.salary;
    var increasedSalary = originalSalary * (1 + incPercentage / 100);
    this.salary = increasedSalary;
    return increasedSalary;
  }
}
class Developer extends Employee {
  constructor(name, surname, job, salary, specialization) {
    super(name, surname, job, salary);
    this.specialization = specialization;
  }
  getSpecialization() {
    return `Specialized in ${this.specialization}`;
  }
}
class Manager extends Employee {
  constructor(name, surname, job, salary, department) {
    super(name, surname, job, salary);
    this.department = department;
  }
  getDepartment() {
    return this.department;
  }
  changeDepartment(newDepartment) {
    this.department = newDepartment;
  }
}
// DEFINE EMPLOYEES
var employee1 = new Employee("John", "Smith", "Developer", 3000);
var employee2 = new Employee("Robert", "Johnson", "Manager", 4000);
var employee3 = new Employee("Steven", "Butler", "Developer", 2500);
var employee4 = new Employee("Blake", "Wayde", "Developer", 2500);
var employee5 = new Employee("William", "Murray", "Manager", 2500);
var employee6 = new Employee("Alexander", "Gordon", "Developer", 2500);
var employee7 = new Employee("Mickey", "Brown", "Developer", 2500);
var employee8 = new Employee("Gregory", "Wayne", "Manager", 2500);
// DEFINE DEVELOPER
var developer1 = new Developer(
  "John",
  "Smith",
  "Developer",
  3000,
  "JavaScript"
);
var developer2 = new Developer("Steven", "Butler", "Developer", 3000, "C#");
var developer3 = new Developer("Blake", "Wayde", "Developer", 3000, "C++");
var developer4 = new Developer(
  "Alexander",
  "Gordon",
  "Developer",
  3000,
  "JavaScript"
);
var developer5 = new Developer(
  "Mickey",
  "Brown",
  "Developer",
  3000,
  "JavaScript"
);
// DEFINE MANAGERS
var manager1 = new Manager("Robert", "Johnson", "Manager", 3000, "Finance");
var manager2 = new Manager("William", "Murray", "Manager", 2500, "HR");
var manager3 = new Manager("Gregory", "Wayne", "Manager", 2500, "Marketing");
// TEST CONSOLE LOG
// console.log(employee1.getFullName());
console.log(employee1.getSalary());
console.log(employee1.increaseSalary(15));
console.log(employee1.getSalary());
console.log(employee2.getSalary());
console.log(employee2.increaseSalary(15));
console.log(employee2.getSalary());
// console.log(manager1.getFullName());
// console.log(manager1.getDepartment());
// manager1.changeDepartment("Marketing");
// console.log(manager1.getDepartment());

// ZADATAK 2.Applications
//
// -Create constructor functions with properties representing the following:
// WebApp: name, url, technologies, licence, stars
// MobileApp: name, platforms, licence, stars
//
// -All web applications should inherit methods:
// getData which prints out all the information
// reactBased which checks if one of the used technologies is React
//
// -All mobile applications should inherit methods:
// getData which prints out all the informations
// forAndroid which checks if one of the platforms the application is developed for is Android
//
// -Both web and mobile applications should inherit methods:
// isCCLicence  which checks if the licence of the application is CC (Creative Commons)
// like which increases the number of stars by one
// showStars which prints out the number of stars
