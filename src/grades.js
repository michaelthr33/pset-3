const readlineSync = require("readline-sync");
const numbergrade = Number(readlineSync.question("Enter a grade:  "))

if (numbergrade<=100&numbergrade>=90){console.log("You received an A.")}
else if (numbergrade<=80&numbergrade>=89){console.log("You received a B.")}
else if (numbergrade<=79&numbergrade>=70){console.log("You received a C.")}
else if (numbergrade<=69&numbergrade>=60){console.log("You received a D.")}
else if (numbergrade<=59&numbergrade>=0){console.log("You received a F.")}
else {console.log("Invalid")}
