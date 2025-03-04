const loadProducts = () => {
    fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then((data) => {
            // console.log(data);
            displayProduct(data);
        });
};



const displayProduct = (products) => {

    const productContainer = document.getElementById("product-container");
    products.forEach(product => {
        // console.log(product);
        const div = document.createElement("div");
        div.classList.add("card");
        div.innerHTML = `
        <img class="card-img" src=${product.image} alt=""/>
        <h5>${product.title.slice(0,50)}</h5>
        <h3>Price: ${product.price}</h3>
        <p>${product.description.slice(0,50)}</p>
        <button onclick="singleProduct('${product.id}')">Details</button>
        <button onclick="handleAddToCard('${product.title?.slice(0,12)}','${product.price}')">Add to Card</button>
        `;
        productContainer.appendChild(div)
    });
}


const handleAddToCard = (name, price) => {
    const cartCount = document.getElementById('count').innerText;
    let covertToCount = parseInt(cartCount);
    covertToCount++;
    document.getElementById('count').innerText = covertToCount;
    // console.log(covertToCount);
    // console.log(name, price);
    const container = document.getElementById("cart-main-container");
    const div = document.createElement("div");
    div.classList.add("card-info")
    div.innerHTML = `
            <p>${name.slice(0,10)}</p>
            <h3 class="price">${price}</h3>
    `
    container.appendChild(div);
    updateTotal();
}


const updateTotal = () => {
    const allPrices = document.getElementsByClassName('price');
    let count = 0;
    for (const element of allPrices) {
        count += parseFloat(element.innerText);
    }
    document.getElementById("total").innerText = count.toFixed(2);
}


const singleProduct = (id) => {
    console.log(id);
    fetch(`https://fakestoreapi.com/products/${id}`)
        .then(res => res.json())
        .then(json => console.log(json))


}
loadProducts();