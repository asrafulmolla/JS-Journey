"use strict";
const ps = require("prompt-sync");
const prompt = ps();


const monthlySavings = (salary, livingCost) => {

    // console.log(typeof(salary));
    // console.log(typeof(livingCost));

    if (typeof(salary) != 'object' || typeof(livingCost) != 'number') {
        return 'invalid input';
    }
    let salaryUnder = salary.filter(pd => pd < 3000);
    let salaryUpper = salary.filter(pd => pd >= 3000);
    let afterTax = salaryUpper.map(pd => pd - (pd * 0.2));
    // console.log(salaryUnder);
    // console.log(afterTax);

    let netSalary = 0;
    for (let i = 0; i < salaryUnder.length; i++) {
        netSalary += salaryUnder[i];
    }

    for (let i = 0; i < afterTax.length; i++) {
        netSalary += afterTax[i];
    }
    const savings = netSalary - livingCost;
    // console.log(savings);
    if (savings < 0) {
        return "earn more";
    } else {
        return savings;
    }
}


const n = prompt('Enter number of Salary: ');
let salary = [];
for (let i = 0; i < n; i++) {
    let tk = Number(prompt());
    salary.push(tk);
}

let livingCost = Number(prompt('Enter Monthly Living Cost: '));

const totalSave = monthlySavings(salary, livingCost);
console.log(totalSave);