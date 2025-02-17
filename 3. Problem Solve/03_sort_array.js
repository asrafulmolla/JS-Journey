let num = [2, 4, 6, 8, 1, 3, 5, 7, 10, 9, 20, 19, 18, 17, 16, 15, 11, 13, 12, 14];
num.sort(function(a, b) { return a - b });
console.log(num);



// for (let i = 0; i < num.length - 1; i++) {
//     for (let j = 0; j < num.length - 1 - i; j++) {
//         if (num[j] > num[j + 1]) {
//             [num[j], num[j + 1]] = [num[j + 1], num[j]];
//         }
//     }
// }

// console.log(num);