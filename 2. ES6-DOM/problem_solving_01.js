const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

// Given an array, display only the numbers that have an even number of digits.

// This filter method incorrectly filters even numbers instead of numbers with even digit counts.
const result = numbers.filter(pd => pd % 2 == 0);
console.log(...result); // Uncomment to display the result

// Using forEach to iterate over numbers and check for even numbers
const result2 = numbers.forEach(pd => {
    if (pd % 2 == 0) {
        console.log(pd); // Uncomment to display the result
    }
});

// Function to collect even numbers into an array
const evenNumber = (array) => {
    let even = []; // Initialize an empty array to store even numbers
    for (let i = 0; i < array.length; i++) { // Loop through the array
        if (array[i] % 2 == 0) { // Check if the number is even
            even.push(array[i]); // Add even numbers to the array
        }
    }
    return even; // Return the collected even numbers
}

// Calling the function and storing the result
const result3 = evenNumber(numbers);
console.log(result3); // Output the list of even numbers