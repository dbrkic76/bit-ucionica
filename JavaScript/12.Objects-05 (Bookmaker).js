"use strict";
(function () {
  var Continent = {
    ASIA: "AS",
    EUROPE: "EU",
    AFRICA: "AF",
    NORTH_AMERICA: "NA",
    SOUTH_AMERICA: "SA",
    AUSTRALIA: "AU",
  };
  function Country(name, odds, continent) {
    this.name = name;
    this.odds = odds;
    this.continent = continent;
  }
  function Person(name, surname, dateOfBirth) {
    this.name = name;
    this.surname = surname;
    this.dateOfBirth = dateOfBirth;
    this.getInfo = function () {
      return (
        this.name + ", " + this.surname + ", " + formattedDate(this.dateOfBirth)
      );
    };
  }
  function Player(person, betAmount, country) {
    this.person = person;
    this.betAmount = betAmount;
    this.country = country;
    this.formattedPlayer = function () {
      return `${this.country.substring(0, 2).toUpperCase()},${
        this.country.odds * this.betAmmount.toFixed(2)
      } eur, ${this.person.name} ${this.person.surname} ${calculateAge(
        this.person.dateOfBirth
      )}`;
    };
  }
  function Address(country, city, postalCode, street, streetNumber) {
    this.country = country;
    this.city = city;
    this.postalCode = postalCode;
    this.street = street;
    this.streetNumber = streetNumber;
    this.formattedAddress = function () {
      return `${this.street} ${this.streetNumber}, ${this.postalCode} ${
        this.city
      }, ${this.country.substring(0, 2).toUpperCase()}`;
    };
  }
  function BettingPlace(address) {
    this.address = address;
    this.players = [];
    this.formattedBets = function () {
      var sum = 0;
      this.players.forEach(function (player) {
        sum += player.betAmmount;
      });
      return `${this.address.street}, ${this.address.postalCode}, ${this.address.city} sum of all bets: ${sum}eur`;
    };
    this.addPlayer = function (player) {
      this.player.push(player);
    };
  }
  
  function BettingHouse(competition) {
    this.competition = competition;
    this.BettingPlaces = [];
    this.numberOfPlayers = function () {
      var sum = 0;
      this.BettingPlaces.forEach(function (bp) {
        sum += bp.players.legth;
      });
      return sum;
    };
    this.BettingPlaces.push(bp);
  }
  function createPlayer(name, surname, DoB, betAmmount, country) {
    var person = new Person(name, surname, DoB);
    return new Player(person, betAmmount, country);
  }
  function createBettingPlace(country, city, postalCode, street, streetNumber) {
    return new BettingPlace(
      new Address(country, city, postalCode, street, streetNumber)
    );
  }
  var player1 = createPlayer("Stefan", "Milovanovic, "4.5.1999", 1000, country)
  var player2 = createPlayer("Stefan", "Milovanovic, "4.5.1999", 1000, country)
  var player3 = createPlayer("Stefan", "Milovanovic, "4.5.1999", 1000, country)
  var player4 = createPlayer("Stefan", "Milovanovic, "4.5.1999", 1000, country)
})();
function formattedDate(date) {
  var fullYear = date.getFullYear();
  var str = fullYear.toString().substring(2, 4);
  var day = date.getDate();
  var dayStr = "";
  if (day <= 9) {
    dayStr = dayStr + "0" + day.toString();
  } else {
    dayStr = day.toString();
  }
  return `${dayStr}.${date.getMonth() + 1}.${str}`;
}
function calculateAge(date) {
  var currentYear = new Date().getFullYear();
  var yearOfBirth = date.getFullYear();
  return currentYear - yearOfBirth + " years";
}
