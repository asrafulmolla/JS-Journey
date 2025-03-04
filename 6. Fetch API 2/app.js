document.addEventListener("DOMContentLoaded", loadRandomCocktails);
document.getElementById("search-btn").addEventListener("click", searchItems);

function loadRandomCocktails() {
    const mealContainer = document.getElementById("meal-container");
    mealContainer.innerHTML = "";

    for (let i = 0; i < 20; i++) {
        fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")
            .then(response => response.json())
            .then(data => {
                if (data.drinks) {
                    const drink = data.drinks[0];
                    const div = document.createElement("div");
                    div.classList.add("meal-card");
                    div.innerHTML = `
                        <img src="${drink.strDrinkThumb}" alt="Drink Image">
                        <h6 class="mt-2">Name: ${drink.strGlass}</h6>
                        <p>Category: ${drink.strCategory}</p>
                        <p>Instructions: ${drink.strInstructions.slice(0, 15)}...</p>
                        <button type="button" class="btn btn-outline-warning" onclick="itemDetails('${drink.idDrink}')">Details</button>
                        <button type="button" class="btn btn-outline-info" onclick="handleAddToCart('${drink.idDrink}')">Add to Cart</button>
                    `;
                    mealContainer.appendChild(div);
                }
            })
            .catch(err => console.error("Error fetching random drinks:", err));
    }
}

function handleAddToCart(id) {

    fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
        .then(response => response.json())
        .then(data => {
            if (!data.drinks) return;
            const drink = data.drinks[0];
            const cartCount = document.getElementById('count').innerText;
            let covertToCount = parseInt(cartCount);
            covertToCount++;
            if (covertToCount < 8) {
                document.getElementById('count').innerText = covertToCount;
                const container = document.getElementById("cart-main-container");
                const div = document.createElement("div");
                div.classList.add("card-info")
                div.innerHTML = `
                <div class="d-flex align-items-center justify-content-around card-item">
                    <p class="sl-number">${covertToCount}</p>
                    <img class="card-img" src="${drink.strDrinkThumb}" alt="Drink Image">
                    <p class="drink-name">${drink.strGlass.slice()}</p>
                </div>
                `
                container.appendChild(div);
            } else {
                alert("You have Reached the maximum limit. ")
            }
        })
        .catch(err => console.error("Error fetching drink details:", err));
}

function itemDetails(id) {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
        .then(response => response.json())
        .then(data => {
            if (!data.drinks) return;
            const drink = data.drinks[0];
            document.getElementById("modal-title").innerText = drink.strGlass;
            document.getElementById("modal-body").innerHTML = `
                <img src="${drink.strDrinkThumb}" class="img-fluid mb-3 modal-img" alt="Drink Image">
                <h6 class="modal-mr">Details</h6>
                <p class="modal-mr">Category: <b>${drink.strCategory}</b></p>
                <p class="modal-mr">Alcoholic: <b>${drink.strAlcoholic}</b></p>
                <p class="modal-mr">${drink.strInstructions.slice(0, 120)}</p>
            `;
            let modalElement = document.getElementById("exampleModal");
            let modalInstance = bootstrap.Modal.getInstance(modalElement);
            if (!modalInstance) {
                modalInstance = new bootstrap.Modal(modalElement);
            }
            modalInstance.show();
        })
        .catch(err => console.error("Error fetching drink details:", err));
}

function searchItems() {
    const searchText = document.getElementById("search-box").value.trim();
    document.getElementById("search-box").value = "";
    if (searchText === "") return;
    const api = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchText}`;
    fetch(api)
        .then(response => response.json())
        .then(data => {
            const mealContainer = document.getElementById("meal-container");
            mealContainer.innerHTML = "";

            if (data.drinks) {
                data.drinks.forEach(drink => {
                    const div = document.createElement("div");
                    div.classList.add("meal-card");
                    div.innerHTML = `
                        <img src="${drink.strDrinkThumb}" alt="Drink Image">
                        <h6 class="mt-2">Name: ${drink.strDrink}</h6>
                        <p>Category: ${drink.strCategory}</p>
                        <p>Instructions: ${drink.strInstructions.slice(0, 15)}...</p>
                        <button type="button" class="btn btn-outline-warning" onclick="itemDetails('${drink.idDrink}')">Details</button>
                        <button type="button" class="btn btn-outline-info" onclick="handleAddToCart('${drink.idDrink}')">Add to Cart</button>
                    `;
                    mealContainer.appendChild(div);
                });
            } else {
                mealContainer.innerHTML = "<h3>Your Searched drink is not found.</h3>";
            }
        })
        .catch(err => console.error("Error fetching drinks:", err));
}