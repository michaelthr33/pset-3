const readlineSync = require("readline-sync");
const GPA = readlineSync.question("Enter a letter grade:  ")
const A = 4.00
const B = 3.00
const C = 2.00
const D = 1.00
const F = 0.00
if (GPA=="A"){console.log("Your Gpa is 4.00")}
if else (GPA=="B"){console.log("Your GPA is 3.00")}
if else(GPA=="C"){console.log("Your GPA is 2.00")}
if else(GPA=="D"){console.log("Your GPA is 1.00")}
if (GPA=="F"){console.log("Your GPA is 0.00")}
