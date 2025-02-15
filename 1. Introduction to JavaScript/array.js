var test = 100;

var frends = [10, 'Asraful', { name: 'Kuddus', age: 20 },
    [10, 20, 30, 40], test
];
console.log(frends);
console.log(frends.length);

// access array 
for (var i = 0; i < frends.length; i++) {
    console.log(frends[i]);
}


var p = frends[2];
console.log(p.name);

// array object access
console.log(frends[2].name);

// array of array or 2d array
console.log(frends[3][2]);


//array push
frends.push("New Element Push");


for (var i = 0; i < frends.length; i++) {
    console.log(frends[i]);
}

// Array POp
frends.pop();
for (var i = 0; i < frends.length; i++) {
    console.log(frends[i]);
}

// Array front added
frends.unshift('Rafiq');
for (var i = 0; i < frends.length; i++) {
    console.log(frends[i]);
}

//Array front item delete

frends.shift();
for (var i = 0; i < frends.length; i++) {
    console.log(frends[i]);
}