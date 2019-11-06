const readlineSync = require("readline-sync");
const MAX=Number.MAX_SAFE_INTEGER;
const MIN=Number.MIN_SAFE_INTEGER;
const month =(readlineSync.question("Enter a month:  "))
if (month=="feb"||"Febuary"||"febuary"||"Feb"){console.log("28 or 29 days")}
