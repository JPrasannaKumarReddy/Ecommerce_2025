import React, { useState } from "react"; 
import Sidebar from "../Sidebar/Sidebar"; 
import ProductTile from "../ProductTile/ProductTile"; 
import { productData } from "../../helpers/ProductData"; 
import "./MainContent.css"; 
import Popup from "../Header/Popup"
const MainContent = ({ incrementCart,handleYesCart,handleNoCart, popupVisible, cartItems }) => {
  const [currentCategory, setCurrentCategory] = useState("Computers");
  const [currentItems, setCurrentItems] = useState(productData.Electronics.Computers);

  const handleCategoryChange = (category) => {
    setCurrentCategory(category);
    setCurrentItems(productData.Electronics[category] || []);
  };

  return (
    <div className="d-flex main-content"> 

      <Sidebar onSelectCategory={handleCategoryChange} /> 
      
      <div className="product-section">
  
        <h2>{currentCategory}</h2>
        
        <div className="product-grid"> 
  
          {currentItems.map((item) => (
            <ProductTile key={item.id} product={item} incrementCart={incrementCart}
             handleNoCart={handleNoCart} handleYesCart={handleYesCart} 
             isAddedCart={cartItems.includes(item.id)}
             
             />
          ))}
        </div>
        {
          popupVisible && (
            <Popup handleNoCart={handleNoCart} handleYesCart={handleYesCart}/>
          )
        }
      </div>
    </div>
  );
};

export default MainContent;
