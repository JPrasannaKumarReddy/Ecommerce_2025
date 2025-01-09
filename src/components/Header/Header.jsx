import React from "react";
import "./Header.css" 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Header = ({ cartCount }) => {
  return (
    <div className="navbar"> 
      <h1>Bengaluru eShopping</h1> 
      <div>
        <FontAwesomeIcon icon={faShoppingCart} />
        <span className="ms-2">Cart ({cartCount})</span>
      </div>
    </div>
  );
};

export default Header;

