"use strict";
const ps = require("prompt-sync");
const prompt = ps();


const checkYear = (n) => {

    if (n % 4 == 0) {
        if (n % 100 == 0) {
            return n % 400 == 0;
        }
        return true;
    }
    return false;
}


const year = Number(prompt('Enter Leap check year: '));
if (checkYear(year)) {
    console.log("Leap Year");
} else {
    console.log("Not Leap Year");
}