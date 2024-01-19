import React from 'react'
import Style from "../Style/Style.css"
const Header = () => {
    return (
        <>
            <header className="had">
                <div className="header container col m-auto d-flex  ">
                    <div className="logo  d-flex align-items-center justify-content-evenly">
                        <h1>HMS</h1>
                    </div>
                    <div className="menu col  justify-content-evenly">
                        <ul className=" d-flex align-items-center text-decoration-none">
                            <li className> <a className="" href=""><span>Home</span></a> </li>
                            <li className> <a className="" href="">Services</a> </li>
                            <li className> <a className="" href="">About Us</a> </li>
                            <li className> <a className="" href="">Contact Us</a> </li>
                            <li className> <a className="" href="">Logins</a> </li>
                            
                        </ul>
                    </div>
                        <div className="col d-flex justify-content-evenly">
                            <button className='btn btn-primary'>Book and Appointment</button>
                        </div>
                </div>
            </header>
            <div className="banner">
                
            </div>

        </>
    )
}

export default Header