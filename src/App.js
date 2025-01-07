import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./index.css";
import Header from "./components/Header/Header";
import MainContent from "./components/MainContent/MainContent";
import ProductDetails from "./components/ProductDetails/ProductDetails";

const App = () => {
  const [cartCount, setCartCount] = useState(0);

  const incrementCart = () => {
    setCartCount(cartCount + 1);
  };

  return (
    <BrowserRouter>  {/* Wrap your app in BrowserRouter */}
      <div>
        <Header cartCount={cartCount} /> {/* Pass cartCount to Header */}
        <Routes> {/* Define your routes */}
        <Route path="/" element={<MainContent incrementCart={incrementCart} />} />
          <Route path="/productDetails" element={<ProductDetails />} /> {/* Another route */}
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
