for (var i = 1; i <= 5; i++) {
    console.log(i);
}

for (var i = 1; i <= 5; i++) {
    for (var j = i; j > 0; j--) {
        process.stdout.write('*')
    }
    console.log();
}
console.log();
// *
// **
// ***
// ****
// *****

for (var i = 1; i <= 5; i++) {
    for (var j = i; j <= 5; j++) {
        process.stdout.write('*')
    }
    console.log();
}

// *****
// ****
// ***
// **
// *
console.log();
for (var i = 1; i <= 5; i++) {
    for (var j = i; j > 0; j--) {
        process.stdout.write(String(i));
    }
    console.log();
}

console.log();
for (var i = 1; i <= 5; i++) {
    for (var j = i; j <= 5; j++) {
        process.stdout.write(String(i));
    }
    console.log();
}

console.log();
for (var i = 1; i <= 5; i++) {
    for (var j = i; j > 0; j--) {
        process.stdout.write(String(j));
    }
    console.log();
}

console.log();
for (var i = 1; i <= 5; i++) {
    for (var j = i; j <= 5; j++) {
        process.stdout.write(String(j));
    }
    console.log();
}

var test = 100;

var frends = [10, 'Asraful', { name: 'Kuddus', age: 20 },
    [10, 20, 30, 40], test
];

for (var i = 0; i < frends.length; i++) {
    if (frends[i] == 'Asraful') {
        console.log('Yes Sir');
        break;
    } else {
        console.log('No sir');
    }
}
console.log();
for (var i = 0; i < frends.length; i++) {
    if (frends[i] == 'Asraful') {
        continue;
        console.log('Yes Sir');

    } else {
        console.log('No sir');
    }
}