import React from "react";
import Products from "./Cart/Products";
import Header from "./Cart/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./Cart/Cart";



function App() {
  return (
    <>
        <BrowserRouter>
      <Header />
      <Routes>       
        <Route path="/products" element={<Products/>} />       
        <Route path="/cart" element={<Cart/>} />       
      </Routes>
    </BrowserRouter>
    
    </>
  );
}

export default App;
