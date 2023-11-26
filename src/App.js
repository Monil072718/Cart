import React, { useState } from "react";
import { Home } from "./PR10.1/Home";
import {BrowserRouter , Routes , Route } from 'react-router-dom'
import { Create } from "./PR10.1/Create";
import { Update } from "./PR10.1/Update";
const App = () => {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Create" element={<Create />}></Route>
        <Route path="/edit/:id" element={<Update/>}></Route>
      </Routes>
    </BrowserRouter>
    
    </>
  );
};

export default App;
