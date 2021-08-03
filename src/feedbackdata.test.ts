//
class goodRecipe {
  category: string;
  fName: string;
  lName: string;
  ingredients: string;
  instructions: string;
  constructor(
    category: string,
    fName: string,
    lName: string,
    ingredients: string,
    instructions: string
  ) {
    this.category = category;
    this.fName = fName;
    this.lName = lName;
    this.ingredients = ingredients;
    this.instructions = instructions;
  }
}

const recipeData0: Array<goodRecipe> = [
  new goodRecipe(
    "Breakfast",
    "Bill",
    "Murray",
    "Eggs, Bacon, Cheese, Potatoes",
    "Cook on stove and serve"
  ),
  new goodRecipe(
    "Dinner",
    "Frank",
    "Armstrong",
    "Steak, Squash, Broccoli, corn",
    "Cook on grill and eat"
  ),
];

recipeData0.forEach(
  //do something with person
  // this is the callback parameter or argument
  (recipe) => {
    console.log(recipe.category);
  }
);

//House = describe and it = room such as bathroom or kitchen etc inside of the house.
//Describe is the test suite and it is the test case.
describe("Creating new recipe card", () => {
  // it = room inside house
  it("log recipe data", () => {
    console.log(recipeData0);
  });
});

describe("Slaying a dragon for breakfast", () => {
  // it = room inside house
  it("Kill the dragon", () => {
    console.log(recipeData0);
    //expect(recipeData0.length).toBe(2);
  });
  it("Now cook the dragon", () => {
    //expect(recipeData0.length).toBe(1);
    console.log(recipeData0);
  });
});

/*
() is an evaluation.
thing() means perform thing.
stuff(items) give value items to stuff for processing.
(input) => {function} perform a function using input.
*/
