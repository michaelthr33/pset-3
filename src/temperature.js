const readlineSync = require("readline-sync");
const MAX=Number.MAX_SAFE_INTEGER;
const MIN=Number.MIN_SAFE_INTEGER;
const temperature = Number(readlineSync.question("Enter a temperature:  "))
const scale =readlinesync.question("Enter a scale: ")
const leapyearhundred = year%100;
if (scale=="F"&temperature<=32){console.log("Liquid")}
else if (scale=="K")
