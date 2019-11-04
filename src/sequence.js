const readlineSync = require("readline-sync");
const MIN= Number.MIN_SAFE_INTEGER;
const MAX= Number.MAX_SAFE_INTEGER;

console.log("Enter three numbers\n")
const number1 = Number(readlineSync.question(""))
const number2 = Number(readlineSync.question(""))
const number3 = Number(readlineSync.question(""))

const sum = number1+number2+number3
const number5 = sum/3
if (Number.isNaN(sum)) {console.log("Invalid")}
else if (number1>MAX||number1<MIN||number2>MAX||number2<MIN||number3>MAX||number3<MIN||sum>MAX||sum<MIN){console.log("invalid")}
else if (number1<number2&number2<number3){console.log("Strictly increasing")}
else if (number1>number2&number2>number3){console.log("Strictly decreasing")}
else if (number5 <= number1&number5>=number1){console.log("Equal")}
else if (number1<number3){console.log("Increasing")}
else if (number1>number3){console.log("Decreasing")}
else {console.log("Unordered")}
