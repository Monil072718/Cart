import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import "./Style.css"

const Header = () => {
    const cartCount = useSelector(state => state.cart.length)
    return (
        <header >
            <div className="container flex justify-between py-3 text-xl">               
                <div className="menu">
                    <ul className='flex gap-3'>
                        <li ><button className='border-1'><Link to="/" className='btn'>Products</Link></button></li>
                        <li ><button><Link to="/cart">Cart</Link></button></li>
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default Header