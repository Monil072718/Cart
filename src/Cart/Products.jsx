import React from 'react'
import "./style.css";
const Products = () => {
    const addCart = () => {
        console.log('ff')
    }
    return (

        <>
            <div className="container mx-auto  row row-cols-4 d-flex py-2 px-4">
                <div className="product-card container mx-auto col-lg-3">
                    <div className="product-tumb">
                        <img src="" alt="" />
                    </div>
                    <div className="product-details">
                        <span className="product-catagory"></span>
                        <h4>Title</h4>
                        <p>Desc</p>
                        <div className="product-bottom-details">
                            <div className="product-price">₹Price</div>
                            <div className="product-links">
                                <button
                                    className="border-0 p-1 rounded"
                                    onClick={ addCart}
                                >
                                    Add to cart +
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>


    )
}

export default Products