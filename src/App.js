import React, { useEffect, useState } from "react";
import Products from "./Cart/Products";
import Header from "./Cart/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./Cart/Cart";

function App() {
  const [users, setUsers] = useState(() => {
    return JSON.parse(localStorage.getItem('list')) || []
  })

  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(users))
  }, [users])
  return (
    <>
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path='/' element={<Products />} />
          <Route path='/cart' element={<Cart/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
