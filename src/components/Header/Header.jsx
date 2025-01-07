import React from "react"; // Importing React to use JSX and component features
import "./Header.css" // Importing the CSS file to style the component
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Importing FontAwesomeIcon component
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons"; // Importing the shopping cart icon from FontAwesome

// Header component definition. It accepts `cartCount` as a prop to display the number of items in the cart.
const Header = ({ cartCount }) => {
  return (
    <div className="navbar"> {/* This div is the main container for the navbar */}
      <h1>Bengaluru eShopping</h1> {/* Title of the application */}
      <div>
        {/* FontAwesome shopping cart icon */}
        <FontAwesomeIcon icon={faShoppingCart} />
        {/* Displaying the cart count */}
        <span className="ms-2">Cart ({cartCount})</span> {/* Shows cart count next to the icon */}
      </div>
    </div>
  );
};

// Exporting the Header component for use in other parts of the app
export default Header;

