import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./index.css";
import Header from "./components/Header/Header";
import MainContent from "./components/MainContent/MainContent";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import Popup from "./components/Header/Popup.jsx"
const App = () => {
  const [cartCount, setCartCount] = useState(0);
const [popupVisible, setPopupVisible] = useState(false);
const [pendingProduct, setPendingProduct] = useState(null);

const [cartItems, setCartItems] = useState([]);
const [disableCart, setDisableCart] = useState(false);
const [disabledProducts, setDisabledProducts] = useState([]);
const [cartplus,setCartplus]=useState()

  const incrementCart = (product) => {
    setCartplus(product)
   
    setPendingProduct(product);
    setPopupVisible(true)
  };

  const handleYesCart = ()=>{
    
    if (!disabledProducts.includes(cartplus.id)) {
      setDisabledProducts([...disabledProducts, cartplus.id]);
    }
    if(pendingProduct) {
      setCartCount(cartCount+1);
    }

    // setPendingProduct(null);
    setPopupVisible(false);
  }
  const handleNoCart = () => {
    setPendingProduct(null);
    setPopupVisible(false);
  }

  return (
    <BrowserRouter>  {/* Wrap your app in BrowserRouter */}
      <div>
        <Header cartCount={cartCount} /> {/* Pass cartCount to Header */}
        <Routes> {/* Define your routes */}
        <Route path="/" element={
            <MainContent incrementCart={incrementCart} 
              handleNoCart={handleNoCart} handleYesCart={handleYesCart}
              popupVisible={popupVisible} 
               pendingProduct={pendingProduct}
               disableCart={disableCart}
               disabledProducts={disabledProducts}
              />
              }
           />
          <Route path="/productDetails" element={<ProductDetails />} /> {/* Another route */}
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
