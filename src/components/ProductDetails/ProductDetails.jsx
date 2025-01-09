import React from "react"; 
import { useLocation, useNavigate } from "react-router-dom";
import Tv from "../../assets/tv.jpg";
import "./ProductDetails.css"; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'; 

function ProductDetails() {
  // Get the location object which contains the state passed via the Link
  const location = useLocation(); 
  const navigate = useNavigate();
  const product = location.state?.product; 

  // If no product information is available, show a message
  if (!product) {
    return <p>No product information available</p>; 
  }

  // backHandler function to go back to the previous page
  const backHandler = () => {
    navigate(-1);
  }

  return (
    <>
      <div className="productBack">
        <FontAwesomeIcon icon={faArrowLeft} onClick={backHandler}/>
      </div>

      <div className="productDetailsContainer">
        <h1>Product Details</h1>
        <div className="productDetailsSubContainer">
          {/* Left side - Product information */}
          <div className="productDetailleft">
            <h2>{product.id}</h2>
            <h2>{product.name}</h2>
            <p>Description: Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat tempora voluptates adipisci accusamus ducimus dolorum eius hic, quasi, officiis et mollitia. Repellat molestiae rem accusamus illo qui cupiditate repudiandae cumque.</p> {/* Product description placeholder */}
            <p>Price: $90000</p> 
          </div>

           {/* Right side - Image of the product */}
          <div className="productDetailRight">
            <img src={Tv} alt="Product Image" style={{width : "100%"}}/>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductDetails;
