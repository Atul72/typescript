let stringArr = ["one", "hey", "Dave"];

let guitars: (string | number)[] = ["Strat", "Les Paul", 5150];

let mixedData = ["EVH", 1984, true];

stringArr[0] = "John";
stringArr.push("hey");

guitars[0] = 1984;
guitars.unshift("Jim");

// mixedData = guitars;  thats was possible
// guitars = mixedData;  that was not possible

let test = [];
let bands: string[] = [];
bands.push("Van Halen");

// tuple

let myTuple: [string, number, boolean] = ["Dave", 42, true];

let mixed = ["John", 1, false];

// mixed = myTuple;

myTuple[1] = 42;

// Objects

let myObj: object;
myObj = [];
myObj = bands;
// console.log(typeof myObj);
myObj = {};

let exapmleObj = {
  prop1: "dave",
  prop2: true,
};

exapmleObj.prop1 = "Atul Rai";

// type Guitarist = {
//   name?: string;
//   active: boolean;
//   albums: (string | number)[];
// };
interface Guitarist {
  name?: string;
  active: boolean;
  albums: (string | number)[];
}

let evh: Guitarist = {
  name: "Atul",
  active: false,
  albums: [1984, 5150, "OU812"],
};

let jp: Guitarist = {
  active: true,
  albums: ["I", "II", "IV"],
};

// evh = jp;

const greetGuitarist = (guitarist: Guitarist) => {
  if (guitarist.name) {
    return `Hello ${guitarist.name.toUpperCase()}!`;
  }
  return "Hello";
};

console.log(greetGuitarist(evh));

// Enums
// "Unlike most TypeScript features, Enums are not a type-level addition to JavaScript but something added to the language and runtime."

enum Grade {
  U,
  D,
  C,
  B,
  A,
}

console.log(Grade.A);
