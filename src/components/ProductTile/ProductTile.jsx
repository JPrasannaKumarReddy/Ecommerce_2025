import React,{useState} from "react"; 
import "./ProductTile.css"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"; 
import { Link } from 'react-router-dom';
import Popup from "../Header/Popup";

const ProductTile = ({ product, incrementCart,popupVisible,handleYesCart, handleNoCart, isAddedCart }) => {

  return (
    <div className="wrapper">
      <div className="card">
        <div className="card-container">
          <h3 className="card-title">{product.name}</h3>
          <Link to="/productDetails" state={{ product: product }} >
            <FontAwesomeIcon icon={faArrowRight} />
          </Link>
        </div>

        {/* Button to add the product to the cart */}
        <div>
          <button onClick={()=>incrementCart(product)} className="card-btn" disable={isAddedCart}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductTile;
