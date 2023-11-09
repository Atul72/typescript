"use strict";
let stringArr = ["one", "hey", "Dave"];
let guitars = ["Strat", "Les Paul", 5150];
let mixedData = ["EVH", 1984, true];
stringArr[0] = "John";
stringArr.push("hey");
guitars[0] = 1984;
guitars.unshift("Jim");
// mixedData = guitars;  thats was possible
// guitars = mixedData;  that was not possible
let test = [];
let bands = [];
bands.push("Van Halen");
// tuple
let myTuple = ["Dave", 42, true];
let mixed = ["John", 1, false];
// mixed = myTuple;
myTuple[1] = 42;
// Objects
let myObj;
myObj = [];
myObj = bands;
// console.log(typeof myObj);
myObj = {};
let exapmleObj = {
    prop1: "dave",
    prop2: true,
};
exapmleObj.prop1 = "Atul Rai";
let evh = {
    name: "Atul",
    active: false,
    albums: [1984, 5150, "OU812"],
};
let jp = {
    active: true,
    albums: ["I", "II", "IV"],
};
// evh = jp;
const greetGuitarist = (guitarist) => {
    if (guitarist.name) {
        return `Hello ${guitarist.name.toUpperCase()}!`;
    }
    return "Hello";
};
console.log(greetGuitarist(evh));
// Enums
// "Unlike most TypeScript features, Enums are not a type-level addition to JavaScript but something added to the language and runtime."
var Grade;
(function (Grade) {
    Grade[Grade["U"] = 0] = "U";
    Grade[Grade["D"] = 1] = "D";
    Grade[Grade["C"] = 2] = "C";
    Grade[Grade["B"] = 3] = "B";
    Grade[Grade["A"] = 4] = "A";
})(Grade || (Grade = {}));
console.log(Grade.A);
