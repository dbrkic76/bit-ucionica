function Calculator(x, y, z) {
  this.x = x;
  this.y = y;
  this.z = z;
  this.add = function () {
    return this.x + this.y + this.z;
  };
  this.subtract = function () {
    return Math.abs(this.x - this.y - this.z); //apsolutna vrednost
  };
  this.multiply = function () {
    return this.x * this.y * this.z;
  };
  this.divide = function () {
    if (this.x && this.y && this.z) {
      return this.x / this.y / this.z;
    }
    return "Division with 0 is NOT possible!";
  };
}
var calculator = new Calculator(1, 2, 3);
console.log(calculator);
console.log(calculator.add());
console.log(calculator.subtract());
console.log(calculator.multiply());
console.log(calculator.divide());
