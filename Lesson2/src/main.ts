let myName: string = "atul";
let meaningOfLife: number;
let isLoading: boolean;
let album: string | number; // union type

myName = "tilak";
meaningOfLife = 89;
isLoading = true;

album = 89;
album = "yhh";

const sum = (a: number, b: string) => {
  return a + b;
};

let postId: string | number;
let isActive: number | boolean;

let re: RegExp = /\w+/g;
