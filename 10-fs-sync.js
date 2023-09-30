//on this occasion - destructure straight away, the methods we are looking for
const { readFileSync, writeFileSync } = require("fs");

//readFileSync is a method that take in 2 parameters
//1)path to that specific file
//2)what is the encoding - so node knows how to decode the file - this is generally utf8
console.log("start");
const first = readFileSync("./content/first.txt", "utf8");
const second = readFileSync("./content/second.txt", "utf8");

console.log(first, second);

//create a new file
//parameters: 1) file name - node will create this if it doesn't exist. 2) value we want to pass

writeFileSync(
  "./content/result-sync.txt",
  `Here is the result: ${first}, ${second}`,
  { flag: "a" }
);

console.log("done with this task");
console.log("starting the next one");
