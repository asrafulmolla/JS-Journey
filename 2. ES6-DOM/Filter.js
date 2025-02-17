// Array of product objects with properties: id, name, description, price, and color
const products = [{
        id: 1,
        name: 'Xiaomi',
        description: 'this is a xiaomi phone',
        price: 500,
        color: 'black'
    },
    {
        id: 2,
        name: 'Iphone',
        description: 'this is a Iphone',
        price: 800,
        color: 'white'
    },
    {
        id: 3,
        name: 'Xiaomi',
        description: 'this is a xiaomi phone',
        price: 500,
        color: 'black'
    },
    {
        id: 4,
        name: 'Xiaomi',
        description: 'this is a xiaomi phone',
        price: 600,
        color: 'white'
    }
];

// Manually filtering products with color 'black' using a for loop
let filter = []; // Initialize an empty array to store matching products
for (let i = 0; i < products.length; i++) {
    if (products[i].color == 'black') { // Check if the product's color is 'black'
        filter.push(products[i]); // Add matching product to the filter array
    }
}

console.log(filter); // Print the filtered products

// Using the `.filter()` method to find all products with color 'black'
const result = products.filter(pd => pd.color == 'black');
console.log(result); // Print the filtered products

// Note: If no product matches the condition, an empty array `[]` will be returned.