function Person (name, surname){
    this.name = name;
    this.surname = surname;
}
Person.prototype.sayName() = function (){
    return this.name;
}
Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;

// Object.setPropertOf(Employee.protorype, Person.prototype)

function Employee(name,surname,job,salary){
    Person.call(this, name,surname)
    this.job = job;
    this.salary = salary;
}

var martin = new Person("m", "p")
console.log(martin.sayName())

var zaposleni = new Employee("m", "p", "pro", 100)