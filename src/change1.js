const readlineSync = require("readline-sync");
const quarter = 0.25;
let quarternumber=0;
const dime= 0.1;
let dimenumber=0;
const nickle= .05;
let nicklenumber=0;
const penny= .01;
let pennynumber=0;
const MIN = 0.01;
const MAX = 0.99;

let amount = Number(readlineSync.question("\nEnter a dollar amount: "));

if (Number.isNaN(amount)) {console.log("Invalid")
    // print your error message here
} else if (amount < MIN || amount > MAX) {console.log("Invalid")
    // print your error message here
} else if (amount > quarter){while(amount>quarter){amount=amount-quarter;
quarternumber++;}
} else if (amount > dime){while(amount>dime){amount=amount-dime;
dimenumber++;}} else if (amount > nickle){while(amount > nickle){amount=amount-nickle;
nicklenumber++;}} else if (amount > penny){while(amount > penny){amount=amount-penny;
pennynumber++;}} else {console.log(""+quarternumber+" quarters, "+ dimenumber + " dimes, "+ nicklenumber +" nickles, and " + pennynumber +" pennies.");}
