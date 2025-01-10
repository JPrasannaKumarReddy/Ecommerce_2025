import React, { useState,useEffect } from "react";
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
const [cartplus,setCartplus]=useState();

const A1 = [
  { name: 'John', age: 30, city: 'New York' },
  { name: 'Jane', age: 25, city: 'Los Angeles' },
  { name: 'Mike', age: 28, city: 'Chicago' },
  { name: 'Alice', age: 32, city: 'San Francisco' }
];

const A2 = [
  { name: 'John', occupation: 'Engineer', salary: 70000 },
  { name: 'Jane', occupation: 'Designer', salary: 65000 }
];

const mergeArrays = (arr1, arr2) => {
  const mapA2 = new Map(arr2.map(item => [item.name, item]));

  return arr1.map(item => ({
    ...item,
    ...(mapA2.get(item.name) || {}) // Merge only if name exists in A2
  }));
};

const result = mergeArrays(A1, A2);

  const incrementCart = (product) => {
    setCartplus(product)
   
    setPendingProduct(product);
    setPopupVisible(true)
  };

  useEffect(() => {
  const storedCount = JSON.parse(localStorage.getItem("cart")) || [];
  setCartCount(storedCount?.length);
  setDisabledProducts(storedCount?.map((product)=>product?.id))
  }, [])



  const handleYesCart = ()=>{

    if(cartplus){
      const currentCart = JSON.parse(localStorage.getItem("cart")) || [];

      const updatedCart = [...currentCart, cartplus];

      localStorage.setItem("cart", JSON.stringify(updatedCart));
    }
    
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
