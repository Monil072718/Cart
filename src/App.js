import React, { useState } from "react";
import Product from "./Test 3/Product";
import { Provider } from "react-redux";
import Store from "./Test 3/Store";
import Header from "./Test 3/Header";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Cart from "./Test 3/Cart";
const App = () => {
  return (
    <Provider store={Store}>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path='/' element={<Product />} />
                    <Route path='/cart' element={<Cart />} />
                </Routes>
            </BrowserRouter>
        </Provider>
  );
};

export default App;
