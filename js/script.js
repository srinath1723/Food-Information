const response = fetch("https://api.nal.usda.gov/fdc/v1/foods/search?api_key=5Ur6vVKxAUwVGMnBpPyVoFkWpcGluRVBhfNeaMGi&query=Cheddar%20Cheese");

response
    .then(function(response) {
        return response.json(); // Parse JSON asynchronously
    })
    .then(function(data) {
        displayData(data); // Call the displayData function with the retrieved data
    })
    .catch(function(error) {
        console.error("Error fetching food file:", error); // Log error if there's any problem fetching the data
    });

// Function to display the retrieved data
function displayData(data) {
    const resultsContainer = document.getElementById('results');

    resultsContainer.innerHTML = ''; // Clear previous results

    // Loop through each food item in the retrieved data
    data.foods.forEach(food => {
        const card = document.createElement('div');
        card.className = 'card';
        card.classList.add("col-lg-8", "col-lg-6", "col-lg-4", "col-xl-3");

        const cardBody = document.createElement('div');
        cardBody.className = 'card-body';

        // Check if all required data is available for the food item
        if (food.brandOwner && food.brandName && food.foodCategory && food.ingredients && food.packageWeight) {
            const cardTitle = document.createElement('h3');
            cardTitle.className = 'card-title';
            cardTitle.textContent = food.brandOwner;
            cardBody.appendChild(cardTitle);

            const brandNameText = document.createElement('p');
            brandNameText.className = 'card-text';
            brandNameText.textContent = `Brand: ${food.brandName}`;
            cardBody.appendChild(brandNameText);

            const categoryText = document.createElement('p');
            categoryText.className = 'card-text';
            categoryText.textContent = `Category: ${food.foodCategory}`;
            cardBody.appendChild(categoryText);

            const ingredientsText = document.createElement('p');
            ingredientsText.className = 'card-text';
            ingredientsText.textContent = `Ingredients: ${food.ingredients}`;
            cardBody.appendChild(ingredientsText);

            const packageWeightText = document.createElement('p');
            packageWeightText.className = 'card-text';
            packageWeightText.textContent = `packageWeight: ${food.packageWeight}`;
            cardBody.appendChild(packageWeightText);

            // If there's any content in the card body, append it to the card and then to the results container
            if (cardBody.children.length > 0) {
                card.appendChild(cardBody);
                resultsContainer.appendChild(card);
            }
        }
    });
}
