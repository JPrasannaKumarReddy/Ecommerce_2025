// Import necessary React libraries and components
import React from "react"; 
import { useLocation, useNavigate } from "react-router-dom"; // These hooks are used to get the location and navigate within the app
import Tv from "../../assets/tv.jpg"; // Importing a default image for the product
import "./ProductDetails.css"; // Importing CSS styles for the component
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import FontAwesome for icons
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'; // Importing left arrow icon

// Functional component for ProductDetails
function ProductDetails() {
  // Get the location object which contains the state passed via the Link
  const location = useLocation(); 
  const navigate = useNavigate(); // Initialize the navigation function
  // Access the product information passed in state from the previous page
  const product = location.state?.product; 

  // If no product information is available, show a message
  if (!product) {
    return <p>No product information available</p>; 
  }

  // backHandler function to go back to the previous page
  const backHandler = () => {
    navigate(-1); // This will navigate back to the previous page in the browser history
  }

  return (
    <>
      {/* Back button with left arrow icon */}
      <div className="productBack">
        <FontAwesomeIcon icon={faArrowLeft} onClick={backHandler}/> {/* Clicking the icon will trigger the backHandler function */}
      </div>

      {/* Main container for the product details */}
      <div className="productDetailsContainer">
        
        <h1>Product Details</h1> {/* Title for the product details page */}

        <div className="productDetailsSubContainer">
          {/* Right side - Image of the product */}
          <div className="productDetailRight">
            <img src={Tv} alt="Product Image" /> {/* Displaying the imported product image */}
          </div>

          {/* Left side - Product information */}
          <div className="productDetailleft">
            <h2>{product.id}</h2> {/* Displaying product id */}
            <h2>{product.name}</h2> {/* Displaying product name */}
            <p>Description: Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat tempora voluptates adipisci accusamus ducimus dolorum eius hic, quasi, officiis et mollitia. Repellat molestiae rem accusamus illo qui cupiditate repudiandae cumque.</p> {/* Product description placeholder */}
            <p>Price: $90000</p> {/* Displaying price of the product */}
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductDetails; // Exporting the component to be used elsewhere
