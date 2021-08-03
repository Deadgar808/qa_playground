//Primative Types - Basic of the basics or data types
//string = 'Kris' number = 25, boolean = True/False, undefined type unique to JS.

//structural types for JS = Objects is a list of key value pairs like age name and career.
// another structural type is a function
//typescript = classes - fancy way of dealing with objects

// simple objects in javascript
var p1 = {
  name: "Marty",
  age: 32,
  career: "Sound",
  talk: () => {
    console.log("hi from object!");
  },
};

var p2 = { name: "Suzanne", age: 40, career: "Programmer" };

// Recipe, classes in typescript to reuse code
class person {
  age: number;
  name: string;
  career: string;

  // ingredients that are required.
  constructor(age, name, career) {
    // Preparing the ingredients
    this.age = age;
    this.name = name;
    this.career = career;
  }

  talk() {
    console.log("hi from class!");
  }
}
// Person Objects - cooked meals
var person1 = new person(32, "Marty", "Sound");
var person2 = new person(40, "Suzanne", "Programmer");
var person3 = new person(61, "Bill", "Waste Sanitation");

//Array of people
var people = [person1, person2, person3];
// loop through people
people.forEach(
  //do something with person
  // this is the callback parameter or argument
  (p) => {
    console.log(p);
    p.talk();
  }
);

var cook = () => {
  console.log("cook the food");
};
cook();

cook = () => {
  console.log("grill the food");
};
cook();
