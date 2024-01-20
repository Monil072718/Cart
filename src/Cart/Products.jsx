import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from './Action'
import './style.css'
const Products = () => {

    const dispatch = useDispatch()
    const products = useSelector((state) => state.products)


    const handleAddToCart = (id) => {
        dispatch(addToCart(id));
    }


    return (
        <div className="container mx-auto  row row-cols-4 d-flex py-2 px-4 mt-3" >
            {
                products.map((item, id) => {
                    return (
                        <div className="product-card container mx-auto col-lg-3" key={id}>
                           
                                
                                    <div className="product-tumb">
                                        <img src={item.img} alt=""/>
                                    </div>
                                    <div className="product-details">
                                        <span className="product-catagory"></span>
                                        
                                            <div className="title">
                                                <h4 >{item.name}</h4>
                                                <p >{item.disc}</p>
                                            </div>
                                       
                                            <div className="product-bottom-details">
                                            <span className='product-price'>Price : {item.price} /-</span>
                                            <div className="product-links">
                                            <button className='btn  btn-primary me-2 border-0 p-1 rounded' onClick={() => handleAddToCart(id)}>Add to Cart</button>
                                            </div>
                                        </div>
                                    </div>
                                
                            
                        </div>
                            )
                            })
                        }



            
        </div>
    )
}

export default Products
