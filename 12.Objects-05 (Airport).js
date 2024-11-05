"use strict";
(function () {
  function Person(name, surname) {
    this.name = name;
    this.surname = surname;
    this.getData = function getData() {
      return this.name + " " + this.surname;
    };
  }
  function Seat(number, category = "e") {
    if (number === undefined) {
      this.number = Math.floor(Math.random() * (100 - 10)) + 10;
    } else {
      this.number = number;
    }
    this.category = category.toUpperCase();
    this.getData = function () {
      return this.number + ", " + this.category;
    };
  }
  function Passenger(person, seat) {
    this.person = person;
    this.seat = seat;
    this.getData = function () {
      return this.seat.getData() + ", " + this.person.getData();
    };
  }
  function Flight(relation, date) {
    this.relation = relation;
    this.date = date;
    this.passengerList = [];
    this.addPassenger = function (passenger) {
      this.passengerList.push(passenger);
    };
    this.getData = function () {
      var str = "";
      this.passengerList.forEach(function (psg) {
        str = str + "\n\t\t\t\t" + psg.getData();
      });
      //console.log(str);
      return `${getDateString(this.date)} ${this.relation}${str}`;
    };
  }
  function Airport() {
    this.name = "Nikola Tesla";
    this.flightlist = [];
    this.addFlight = function (flight) {
      this.flightlist.push(flight);
    };
    this.getData = function () {
      var totalPassengers = 0;
      var str = "";
      this.flightlist.forEach(function (flight) {
        str = str + "\n\t\t" + flight.getData();
      });
      this.flightlist.forEach(function (flight) {
        totalPassengers += flight.passengerList.length;
      });
      var finalString = `airport: ${this.name}, total passengers: ${totalPassengers}${str}`;
      console.log(finalString);
    };
  }
  function createFlight(relation, date) {
    return new Flight(relation, date);
  }
  function createPassenger(name, surname, seatNumber, category) {
    var person = new Person(name, surname);
    var seat = new Seat(seatNumber, category);
    return new Passenger(person, seat);
  }
  var airport = new Airport();

  var flight1 = createFlight("Belgrade - Paris", new Date("5.5.2025."));
  var flight2 = createFlight("Belgrade - New York", new Date("5.5.2025."));
  var passenger1 = createPassenger("Djordje", "Stojilkovic", 13, "b");
  var passenger2 = createPassenger("Dragan", "Brkic", 5, "b");
  var passenger3 = createPassenger("Sredo", "Pejovic", 1, "e");
  var passenger4 = createPassenger("Nestor", "Pandurovic", 1, "b");
  flight1.addPassenger(passenger1);
  flight1.addPassenger(passenger2);
  flight2.addPassenger(passenger3);
  flight2.addPassenger(passenger4);
  airport.addFlight(flight1);
  airport.addFlight(flight2);
  airport.getData();
  //   var person1 = new Person("Stefan", "Milovanovic");
  //   var person2 = new Person("Petar", "Petrovic");
  //   var seat1 = new Seat(24, "b");
  //   var seat2 = new Seat(17, "e");
  //   var passenger1 = new Passenger(person1, seat1);
  //   var passenger2 = new Passenger(person2, seat2);
  //   var flight1 = new Flight("Beograd - Paris", new Date());

  //   flight1.addPassenger(passenger1);
  //   flight1.addPassenger(passenger2);
  //   console.log(flight1.getData());
  //   console.log(passenger1.getData());
})();
function getDateString(date) {
  return `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}.`;
}
