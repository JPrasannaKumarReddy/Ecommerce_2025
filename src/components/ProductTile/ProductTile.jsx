// Importing necessary React libraries and components
import React from "react"; 
import "./ProductTile.css"; // Import the CSS file for styling
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import FontAwesomeIcon for icons
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"; // Import the right arrow icon
import { Link } from 'react-router-dom'; // Import Link from react-router-dom for navigation

// Functional component for ProductTile, which displays each product in a card
const ProductTile = ({ product, incrementCart }) => {

  return (
    // Wrapper div that contains the individual card layout
    <div className="wrapper">
      {/* Card element that contains product information and buttons */}
      <div className="card">
        
        {/* Card container that holds the product title and the right-arrow icon for navigation */}
        <div className="card-container">
          {/* Product title */}
          <h3 className="card-title">{product.name}</h3> {/* Display the name of the product */}

          {/* Link to navigate to the ProductDetails page */}
          <Link to="/productDetails" state={{ product: product }} >
            {/* FontAwesome right arrow icon */}
            <FontAwesomeIcon icon={faArrowRight} />
          </Link>
        </div>

        {/* Button to add the product to the cart */}
        <div>
          <button onClick={incrementCart} className="card-btn">
            Add to Cart {/* Button text */}
          </button>
        </div>
      </div>
    </div>
  );
};

// Exporting ProductTile component to be used elsewhere in the app
export default ProductTile;
