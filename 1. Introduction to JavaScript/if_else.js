// if (10 < 19)
//     console.log('10 is less than 19');
// else if (10 === 19)
//     console.log('10 is equal to 19');
// else
//     console.log('10 is greater than 19');

var result = 80;
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