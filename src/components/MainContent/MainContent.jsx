import React, { useState,useEffect } from "react"; 
import Sidebar from "../Sidebar/Sidebars"; 
import ProductTile from "../ProductTile/ProductTile"; 
import { productData } from "../../helpers/ProductData"; 
import "./MainContent.css"; 
import Popup from "../Header/Popup"
const MainContent = (props) => {
  const { incrementCart,handleYesCart,handleNoCart, popupVisible, cartItems,disableCart,pendingProduct,disabledProducts } = props;
  const [currentCategory, setCurrentCategory] = useState("Computers");
  const [currentItems, setCurrentItems] = useState(productData.Electronics.Computers);
const [imageData, setImageData] = useState([]);

  const handleCategoryChange = (category) => {
    setCurrentCategory(category);
    setCurrentItems(productData.Electronics[category] || []);
  };

  useEffect(()=>{
    const fetchData = async()=>{
      try {
        const res = await fetch("https://api.thecatapi.com/v1/images/search?limit=10");
        const data = await res.json();

        setImageData(data)
      }catch(error){
        console.error(error)
      }
    }

    fetchData();
  },[])

  return (
    <div className="d-flex main-content"> 

      <Sidebar onSelectCategory={handleCategoryChange} /> 
      
      <div className="product-section">
  
        <h2>{currentCategory}</h2>
        
        <div className="product-grid"> 
  
          { currentItems.map((item) => (
            <ProductTile key={item.id} product={item} 
              incrementCart={incrementCart}
             handleNoCart={handleNoCart} handleYesCart={handleYesCart} 
             pendingProduct={pendingProduct}
             disabledProducts={disabledProducts}
             />
          ))}
        </div>

        <div>
        <h3>Images Data </h3>
        <div> 
          {
            imageData.length ? imageData.map((image)=>{
              return(
                <div key={image.id}>
                    <img src={image.url} />
                   </div>
              )
            }) : null
          }
          </div>  
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
