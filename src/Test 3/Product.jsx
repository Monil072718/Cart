import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import "./Style.css"
const Product = () => {

    const state = useSelector(state => state)
    const dispatch = useDispatch()
    console.log(state)
    const addCart = (id) => {
        dispatch({ type: 'add_cart', payload: id })
    }

    return (
        
        <div className='container py-5'>
            <div className="grid grid-cols-4 gap-5">
                {   
                    state.products.map((product, i) => {
                        return <div className='bg-white rounded-lg py-3 '>
                            <div className='p-5'>
                                <img src={product.image} alt="" width={'100%'} className='h-72' />
                            </div>
                            <div className='p-3'>
                                <h2 className=''>{product.title}</h2>
                                <p className=' mt-1'>{product.description}</p>
                                <p className='text-xl  mt-1'>₹ {product.price}</p>
                                <button className='mt-1'  onClick={() => addCart(i)}>Add To Cart</button>
                            </div>
                        </div>
                    })
                }

            </div>
        </div>
    )
}

export default Product