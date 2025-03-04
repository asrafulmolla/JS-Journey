document.getElementById("search-btn").addEventListener("click", searchItems);

function searchItems() {
    const searchText = document.getElementById("search-box").value;
    document.getElementById("search-box").value = "";
    if (searchText === "") {
        return;
    }
    document.getElementById("meal-container-details").innerHTML = "";
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`)
        .then(response => response.json())
        .then(data => {
            const mealContainer = document.getElementById("meal-container");
            mealContainer.innerHTML = "";

            if (data.meals) {
                data.meals.forEach(meal => {
                    const div = document.createElement("div");
                    div.classList.add("meal-card");
                    div.innerHTML = `
                        <img src="${meal.strMealThumb}" alt="Meal Image">
                        <h3>${meal.strMeal}</h3>
                    `;
                    mealContainer.appendChild(div);
                    div.onclick = () => itemDetais(meal.idMeal);
                });
            } else {
                mealContainer.innerHTML = "<p>No meals found!</p>";
            }
        })
        .catch(err => {
            console.log(err);
        });
}