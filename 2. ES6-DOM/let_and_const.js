// Drawback of var

if (true) {
    var num = 50;
    console.log(num); // Output: 50
}
if (true) {
    console.log(num); // Output: 50 (num is accessible outside the block due to 'var' being function-scoped or globally scoped)
}

// const
// const value pore assign kora jay na
if (true) {
    const num = 50;
    console.log(num); // Output: 50
}
if (true) {
    console.log(num); // Error: num is not defined (block-scoped variable)
}


// let
// let value pore assign kora jay

if (true) {
    let num = 50;
    console.log(num); // Output: 50
}
if (true) {
    let num = 100;
    console.log(num); // Output: 100 (num is a new variable in this block)
}