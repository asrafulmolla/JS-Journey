// Short arrow function with implicit return
const sum = (num1, num2) => (num1 + num2);
console.log(sum(10, 20)); // Output: 30

// Explanation:
// The sum function takes two parameters, num1 and num2, and directly returns their sum
// Since it's a single expression, the result is returned implicitly without the need for a 'return' keyword

// Arrow function with block body
const sum2 = (num1, num2) => {
    const add = num1 + num2; // Adding the two numbers and storing the result in the 'add' variable
    return add; // Explicitly returning the 'add' variable
}

console.log(sum2(10, 20)); // Output: 30

// Explanation:
// The sum2 function also takes two parameters, num1 and num2, but it uses a block body
// This allows for more flexibility, like defining variables (e.g., 'add') and performing multiple actions within the function