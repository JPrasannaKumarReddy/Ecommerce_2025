import React, { useState } from "react"; // Importing React and useState hook for state management
import Sidebar from "../Sidebar/Sidebar"; // Importing the Sidebar component to display the list of categories
import ProductTile from "../ProductTile/ProductTile"; // Importing the ProductTile component to display individual products
import { productData } from "../../helpers/ProductData"; // Importing product data from an external helper file
import "./MainContent.css"; // Importing the CSS file to style the component

// MainContent component definition. It accepts `incrementCart` as a prop to add products to the cart.
const MainContent = ({ incrementCart }) => {
  // State hook to track the current selected category, initialized with "Computers"
  const [currentCategory, setCurrentCategory] = useState("Computers");
  
  // State hook to track the current list of items based on the selected category
  const [currentItems, setCurrentItems] = useState(productData.Electronics.Computers);

  // Handler function to change category. It updates both the category and the list of items.
  const handleCategoryChange = (category) => {
    setCurrentCategory(category); // Set the selected category
    // Set the list of items based on the selected category; defaults to an empty array if the category doesn't exist
    setCurrentItems(productData.Electronics[category] || []);
  };

  return (
    <div className="d-flex main-content"> {/* Main container for the content, using Flexbox for layout */}
      {/* Sidebar component where the user can select a category */}
      <Sidebar onSelectCategory={handleCategoryChange} /> 
      
      <div className="product-section">
        {/* Display the current category */}
        <h2>{currentCategory}</h2>
        
        <div className="product-grid"> 
          {/* Loop through the currentItems array and render a ProductTile for each item */}
          {currentItems.map((item) => (
            <ProductTile key={item.id} product={item} incrementCart={incrementCart} />
          ))}
        </div>
      </div>
    </div>
  );
};

// Exporting MainContent component for use in other parts of the app
export default MainContent;
