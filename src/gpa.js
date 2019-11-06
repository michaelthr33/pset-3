const readlineSync = require("readline-sync");
const GPA = readlineSync.question("Enter a letter grade:  ")
const A = 4.00
const B = 3.00
const C = 2.00
const D = 1.00
const F = 0.00
if (GPA=="A"){console.log("Your Gpa is a 4.00")}
if (GPA=="B"){console.log("Your GPA is a 3.00")}
if (GPA=="C"){console.log("Your GPA is a 2.00")}
if (GPA=="D"){console.log("Your GPA is a 1.00")}
if (GPA=="F"){console.log("Your GPA is a 0.00")}
