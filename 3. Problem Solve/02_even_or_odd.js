"use strict";
const ps = require("prompt-sync");
const prompt = ps();

let num = Number(prompt('Enter Any Number: '));
if (num % 2 == 0) console.log(`${num} is EVEN.`);
else console.log(`${num} is EVEN.`);