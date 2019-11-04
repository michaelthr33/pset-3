const readlineSync = require("readline-sync");
const MIN= Number.MIN_SAFE_INTEGER;
const MAX= Number.MAX_SAFE_INTEGER;

let amount = Number(readlineSync.question("\nEnter an integer: "));

if (Number.isNaN(amount)) {console.log("Invalid")
    // print your error message here
} else if (amount < MIN || amount > MAX) {console.log("Invalid")
}else if(amount%2 === 0){console.log("Even")}
else {console.log("Odd")}
