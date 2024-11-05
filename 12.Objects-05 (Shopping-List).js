(function () {
  function Product(name, price, expDate) {
    this.id = Math.floor(Math.random() * 89999 + 10000); // da nije ove funkcije, prvi parametar u konstruktorskoj funkciji bio bi (id)
    this.name = name;
    this.price = price.parseFloat(2);
    this.expDate = expDate;
    this.getInfo = function () {
      var firstLetter = this.name[0].toUpperCase(); // moze i this.name.charAt(0)
      var lastLetter = this.name[this.name.length - 1].toUpperCase();
      return (
        firstLetter +
        lastLetter +
        this.id +
        ", " +
        this.name +
        ", " +
        this.price
      );
    };
  }
  function ShoppingBag() {
    this.listOfProducts = [];
    this.addProduct = function (proizvod) {
      if (proizvod instanceof Product) {
        this.listOfProducts.push(proizvod); //ako je sve ok
      } else {
        console.log("add product argument must be instance of Product!"); // ako nije instance of...
      }
    };
    this.calcAvg = function () {
      var sum = 0;
      for (var i = 0; i < this.listOfProducts.length; i++) {
        sum += this.listOfProducts[i].price;
      }
      return (sum / this.listOfProducts.lenth).parseFloat(3);
    };
    this.getMostExpensive = function () {
      var max = this.listOfProducts[0].price;
      for (vari = 1; i < this.listOfProducts.length; i++) {
        if (max < this.listOfProducts[i].price) {
          max = this.listOfProducts[i];
        }
      }
    };
  }
  var jogurt = new Product("jogurt", 150, "1/12/2024");
  var torba = new ShoppingBag();
  torba.addProduct(jogurt);
  console.log(jogurt.getInfo());
})();
