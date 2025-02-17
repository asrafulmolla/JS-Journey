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

// Iterate over each product's id and log it
const result = products.map(pd => pd.id * 2);
console.log(result);

// Iterate over each product and log its id // foreach kono kisu return kore na
const result2 = products.forEach(pd => {
    console.log(pd.id);
});

// Iterate over each product and log the entire product object
const result3 = products.forEach(pd => {
    console.log(pd);
});