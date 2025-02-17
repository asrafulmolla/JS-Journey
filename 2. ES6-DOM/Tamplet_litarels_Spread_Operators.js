// Defining a constant for the country code
const countryName = 'BD';

// Concatenating strings using the `+` operator to build a sentence
const country = 'my country name is ' + countryName + " jidguyggbb";
console.log(country); // Output: my country name is BD jidguyggbb

// Using template literals (backticks) to build the string and embed the `countryName` variable
const dynamic = `my country name is ${countryName} jdn`;
console.log(dynamic); // Output: my country name is BD jdn

// Defining two arrays with numbers
const array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const array2 = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

// Printing the entire array1 directly
console.log(array1); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// Using the spread operator `...` to unpack elements of array1 and log them individually
console.log(...array1); // Output: 1 2 3 4 5 6 7 8 9 10

// Merging the two arrays using the spread operator and storing the result in `margeArray`
const margeArray = [...array1, ...array2];

// Printing the merged array
console.log(margeArray); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]


console.log(Math.max(...array1)); // Output: 10 (Maximum value of array1)
console.log(Math.min(...array2)); // Output: 11 (Minimum value of array2)

console.log(Math.floor(10.90)); // Output: 10 (Rounds down to the nearest integer)
console.log(Math.ceil(10.90)); // Output: 11 (Rounds up to the nearest integer)

console.log(Math.round(10.49)); // Output: 10 (Rounds to nearest integer)
console.log(Math.round(10.5)); // Output: 11 (Rounds to nearest integer)