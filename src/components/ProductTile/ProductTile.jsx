import React,{useState} from "react"; 
import "./ProductTile.css"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"; 
import { Link } from 'react-router-dom';
import Popup from "../Header/Popup";

const ProductTile = (props) => {
  const { product, incrementCart,popupVisible,handleYesCart, handleNoCart,pendingProduct,disabledProducts } = props;
console.log("disableCart", product.id)
console.log("val",pendingProduct?.id)
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
        <button
  onClick={() => incrementCart(product)}
  className={disabledProducts.includes(product.id) ? "card-btn-disable" : "card-btn"}
  disabled={disabledProducts.includes(product.id)}
>
  Add to Cart
</button>
        </div>
      </div>
    </div>
  );
};

export default ProductTile;
