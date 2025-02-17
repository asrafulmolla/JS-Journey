"use strict";
const ps = require("prompt-sync");
const prompt = ps();

let result = Number(prompt('Enter Marks: '));

if (result >= 80 && result <= 100) {
    console.log('A+');
} else if (result >= 70 && result <= 79) {
    console.log('A');
} else if (result >= 60 && result <= 69) {
    console.log('A-');
} else if (result >= 50 && result <= 59) {
    console.log('B');
} else if (result >= 40 && result <= 49) {
    console.log('C');
} else if (result >= 33 && result <= 39) {
    console.log('D');
} else if (result >= 0 && result <= 32) {
    console.log('F');
} else {
    console.log('Invalid Number');
}