class billMurray {
  movie: string;
  actor: string;
  quotes: string;

  constructor(actor: string, movie: string, quotes: string) {
    this.movie = movie;
    this.actor = actor;
    this.quotes = quotes;
  }
}

const billMurrayMovie: billMurray = new billMurray(
  "Bill Murray",
  "Lost in Translation",
  "For relaxing times, make suntori time!"
);
console.log("Lost In Translation");

class Actor extends billMurray {
  quotes: string;
  constructor(movie: string, actor: string, quotes) {
    super(movie, actor, quotes);
  }
}

const johnCandy: Array<billMurray> = [
  new billMurray(
    "John Candy",
    "Trains, Plane and Automobiles",
    "When Am I Ever Gonna Wake Up?"
  ),

  new billMurray(
    "Bill Murray",
    "Lost In Translation",
    "For relaxing times, make suntori time!"
  ),
];

describe("Bill Murray", () => {
  test("Lost In Translation", () => {
    console.log(billMurray);
  });
});
