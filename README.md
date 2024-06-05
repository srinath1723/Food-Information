## Food Information Showcase

**Description:**
      
  * In [html file](./index.html)

      - Page Structure: The HTML document follows a standard structure with meta tags defining character set and viewport settings.It imports Bootstrap CSS for consistent styling and layout across different devices.
      - Content Elements: The main content is enclosed within a container `<div>` and comprises a header section with the title "Food Information Showcase". Within the header, there's a results container `<div>` with the id "results", presumably intended for displaying fetched nutrition data dynamically via JavaScript. 
  
  * In [javaScript file](./js/script.js)

       1. **Fetching Data**:
           - The code initiates a fetch request to the USDA FoodData Central API to retrieve information about foods containing "Cheddar Cheese" as a query parameter.

       2. **Promise Chain**:
           - It uses the `then()` method to handle the asynchronous response from the API. The first `then()` parses the JSON response.
           - The second `then()` calls the `displayData()` function with the parsed JSON data.

       3. **Error Handling**:
           - The `catch()` method is used to handle any errors that may occur during the fetch operation. If an error occurs, it logs the error to the console.

       4. **Displaying Data**:
           - The `displayData()` function is defined to render the fetched data onto the webpage.
           - It first clears any previous results from the results container.
           - It iterates through each food item in the retrieved data.
   
       5. **Creating Cards**:
           - For each food item, it dynamically creates a Bootstrap card (`<div>` with class 'card').
           - The card is given additional Bootstrap column classes for responsive layout.
   
       6. **Populating Card Content**:
           - Within each card, it creates a card body (`<div>` with class 'card-body') to hold the food information.
           - It checks if all required data fields (`brandOwner`, `brandName`, `foodCategory`, `ingredients`, `packageWeight`) are available for the food item.
           - If all required data is present, it creates HTML elements (`<h3>` for brand owner, `<p>` for brand name, category, ingredients, and package weight) to display the information.
           - These elements are appended to the card body.
           - If the card body contains any content, the card is appended to the results container. 

  * In [Style file](./css/style.css)

      - Styling Header and Cards: The CSS defines `.headertitle` to center-align text within the header. Cards (`div` elements with class `.card`) are styled with borders, border-radius, padding, margin, and box-shadow for a visually appealing layout.

      - Responsive Design: Media queries adjust card font size and padding based on screen width, ensuring readability and layout consistency across different devices. For larger screens (`min-width: 1400px`), column widths are adjusted using Bootstrap classes `.col-lg-4` and `.col-xl-3` for improved layout.      