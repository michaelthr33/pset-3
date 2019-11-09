const readlineSync = require("readline-sync");

const MAX=Number.MAX_SAFE_INTEGER;

const MIN=Number.MIN_SAFE_INTEGER;

const month =(readlineSync.question("Enter a month:  "))

if (month=="jan"||month=="January"||month=="jan"||month=="january"||month=="mar"||month=="March"||month=="Mar"||month=="march"||month=="May"||month=="may"||month=="July"||month=="july"||month=="Aug"||month=="aug"||month=="August"||month=="august"||month=="oct"
||month=="Oct"||month=="October"||month=="oct"||month=="December"||month=="dec"||month=="Dec"||month=="december"){console.log("31 days")}

else if (month=="feb"||month=="February"||month=="february"||month=="Feb"){console.log("28 or 29 days")}

else if (month=="Apr"||month=="apr"||month=="April"||month=="April"||month=="June"||month=="june"||month=="September"||month=="sept"||month=="Sept"||month=="september"||month=="Nov"||month=="nov"||month=="november"||month=="November"){console.log("30 days")}

else (console.log("Invalid"))
