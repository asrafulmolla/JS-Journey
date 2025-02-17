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

// Loop through the products array to find the product with id = 3
for (let i = 0; i < products.length; i++) {
    const item = products[i]; // Get the current product
    if (item.id == 3) { // Check if the product ID is 3
        console.log(item); // Print the product details to the console
    }
}

// Use the `find` method to get the product with id = 2
const result = products.find(pd => pd.id == 2);
console.log(result); // Print the found product

// kono kisu khuje na paile undefine return korbe