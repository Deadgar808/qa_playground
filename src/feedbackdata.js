//
class Recipe {
  category;
  fName;
  lName;
  ingredients;
  instructions;
  constructor(category, fName, lName, ingredients, instructions) {
    this.category = category;
    this.fName = fName;
    this.lName = lName;
    this.ingredients = ingredients;
    this.instructions = instructions;
  }
}

const recipeData = [
  new Recipe(
    "Breakfast",
    "Bill",
    "Murray",
    "Eggs, Bacon, Cheese, Potatoes",
    "Cook on stove and serve"
  ),
  new Recipe(
    "Dinner",
    "Frank",
    "Armstrong",
    "Steak, Squash, Broccoli, corn",
    "Cook on grill and eat"
  ),
];

recipeData.forEach(
  //do something with person
  // this is the callback parameter or argument
  (recipe) => {
    console.log(recipe.category);
    console.log(recipe.instructions);
  }
);

// for (i = 0; i < recipeData.length; i++) {
//   console.log(recipeData[i].category);
//   console.log(recipeData[i].instructions);
// }

/*
() is an evaluation.
thing() means perform thing.
stuff(items) give value items to stuff for processing.
(input) => {function} perform a function using input.
*/
