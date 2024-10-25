// 1. Create an object that represents your favourite coffee. Please include coffee name,
// strength, flavour, milk, sugar, … everything you like!
//
//                              SOLUTION
//
// var coffee = {
//   name: "NessCafe Gold",
//   strength: "strong",
//   flavour: "Arabica",
//   milk: false,
//   sugar: false,
// };
// console.log(coffee);
//
//----------------------------------------------------------------------------------------------------
//
//
// 2. Create an object that represents your favourite movie. Please include title, actors,
// director, genre, popularity.
//
//                              SOLUTION
//
// var favMovie = {
//   name: "The Lord of the Rings",
//   genre: "Fantasy",
//   production_year: 2001,
//   budget: 281,
//   profit: 2964,
//   producer: "Barrie M. Osborne",
//   director: "Peter Jackson",
//   screenplay: "Fran Walsh",
//   starring: ["Elijah Wood", "Ian McKellen", "Liv Tyler", "Viggo Mortensen"],
// };
// console.log(favMovie.starring[2]);
//
//
//----------------------------------------------------------------------------------------------------
//
//
// 3. Write a function that creates an object that represents a project. Each project is
// described by: description, programming language, git repository, boolean status that
// says if the project is in development or not. Add a method that prints out the project's
// repository, a method that checks if the project is written in JavaScript as well as a
// method that checks if the project is in development or not.
//
//                              SOLUTION
//
//
//----------------------------------------------------------------------------------------------------
//
//
// 4. Write a function that creates an object that represents a culinary recipe. Each recipe is
// described by: name, type of cuisine, complexity (value from 1 to 5), list of ingredients,
// preparing time, preparing instruction.
// ○ Add a method that prints out all the ingredients necessary for the meal
// preparation.
// ○ Add a method that checks if a meal can be prepared in under 15 minutes.
// ○ Add a method that changes the type of cuisine to the given value.
// ○ Add a method that delete a given ingredient from the list of ingredients.
//
//                              SOLUTION (Martin)
//
// 4. zadatak        string, string, number,     array,      number,    array
function createRecipe(
  name,
  cuisine,
  complexity,
  ingredients,
  prepTime,
  instructions
) {
  return {
    name: name,
    cuisine: cuisine,
    complexity: complexity,
    ingredients: ingredients,
    prepTime: prepTime,
    instructions: instructions,
    printIngredients: function () {
      for (var i = 0; i < this.ingredients.length; i++) {
        console.log(this.ingredients[i]);
      }
    },
    checkPrepTime: function () {
      if (this.prepTime < 15) {
        return true;
      }
      return false;
    },
    changeCuisine: function (cuisine) {
      // addObjProperty(this, "cuisine", cuisine)
      this.cuisine = cuisine;
    },
    deleteIngredient: function (ingredient) {
      this.ingredients = this.ingredients.filter((e) => e !== ingredient); // filter vraca novi niz, pa moramo da setujemo taj niz opet na isti property
      //this.ingredients.splice(this.ingredients.indexOf(ingredient), 1) // splice menja vec postojeci niz! Bolja opcija
    },
  };
}

var recept = createRecipe(
  "Pasta",
  "Italian",
  2,
  ["pasta", "olive oil", "garlic", "tomato", "basil", "salt"],
  14,
  ["cook pasta", "add ingredients", "mix together"]
);
// console.log(recept)
recept.printIngredients();
// console.log(recept.checkPrepTime())

recept.changeCuisine("french");
// console.log(recept)

console.log(recept.ingredients);
recept.deleteIngredient("garlic");
console.log(recept.ingredients);
