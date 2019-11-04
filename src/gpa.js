const readlineSync = require("readline-sync");
const GPA = readlineSync.question("Enter a letter grade:  ")
const A = 4.00
const B = 3.00
const C = 2.00
const D = 1.00
const F = 0.00

if (GPA>=A||GPA=<A) {console.log("you received a 4.00")}
