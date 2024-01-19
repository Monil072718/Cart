import React from 'react'
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
     <header className="bg-white shadow-md py-4">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <nav className="space-x-4 text-gray-600 text-lg">
           
            <Link to="/Products">Products</Link>         
            <Link to="/Cart" className="relative">
              Cart    </Link>
          </nav>
        </div>
      </div>
    </header>
    </>
  )
}

export default Header