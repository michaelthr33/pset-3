
const readlineSync = require("readline-sync");

const MAX=Number.MAX_SAFE_INTEGER;

const MIN=Number.MIN_SAFE_INTEGER;

const temperature = Number(readlineSync.question("Enter a temperature:  "))

const scale =readlinesync.question("Enter a scale: ")

const leapyearhundred = year%100;

if (Number.isNaN(tempertature)){console.log("Invalid")}

else if (temperature>MAX||temperature<MIN) {console.log("Invalid")}

else if (scale=="F"&temperature<=32){console.log("Solid")}

else if (scale=="K"&temperature<=273.15){console.log("Solid")}

else if (scale=="C"&temperature<=0){console.log("Solid")}

else if (scale=="F"&temperature>=212){console.log("Gas")}

else if (scale="C"&tempertature>=100){console.log("Gas")}

else if (scale="K"&temperature>=373.15){console.log("Gas")}

else {console.log("Solid")}
