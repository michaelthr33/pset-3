const readlineSync = require("readline-sync");
const quarter = 0.25;
let quarternumber=0;
const dime= 0.1;
let dimenumber=0;
const nickel= .05;
let nickelnumber=0;
const penny= .01;
let pennynumber=0;
const MIN = 0.01;
const MAX = 0.99;

let amount = Number(readlineSync.question("\nEnter a dollar amount: "));

if (Number.isNaN(amount)) {console.log("Invalid")
    // print your error message here
} else if (amount < MIN || amount > MAX) {console.log("Invalid")
    // print your error message here
} else if (amount >= quarter){while(amount>=quarter){amount=amount-quarter;
quarternumber++;}
while(amount>=dime&amount<quarter){amount=amount-dime;
dimenumber++;}
while(amount>=nickel&amount<dime){amount=amount-nickel;
nickelnumber++;}
while(amount>=penny&amount<nickel){amount=amount-penny;
pennynumber++;}}
{console.log(""+quarternumber+" quarters, "+ dimenumber + " dimes, "+ nickelnumber +" nickels, and " + pennynumber +" pennies.");}
