const readlineSync = require("readline-sync");
const MAX=Number.MAX_SAFE_INTEGER;
const MIN=Number.MIN_SAFE_INTEGER;
const year = Number(readlineSync.question("Enter a year:  "))
const leapyear= year%4;
const leapyearhundred = year%100;
const exception = year%400;
if (year>=MAX || year<0){console.log("Invalid")}
if (Number.isNaN(year)) {console.log("Invalid")}
else if (leapyear>0){console.log(""+year+" is not a leapyear")}
else if (leapyearhundred>=0 & leapyearhundred<=0 & exception>0){console.log(""+year+" is not a leapyear")}
else {console.log(""+year+" is a leapyear")}
