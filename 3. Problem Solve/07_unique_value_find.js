var numbers = [1, 2, 3, 3, 4, 4, 5, 6, 7, 8, 9, 10];

const uniqueArray = [...new Set(numbers)];
console.log(uniqueArray);


// numbers.sort(function(a, b) { return a - b });
// const unique = [];
// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] != numbers[i + 1]) {

//         unique.push(numbers[i]);
//     }
// }
// console.log(unique);