import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteItem } from './Action'
import './style.css'
const Cart = () => {

    const dispatch = useDispatch()
    const carts = useSelector((state) => state.cart)

    const totalAmount = useSelector((state) => state.totalAmount)

    const [noItem, setnoItem] = useState(false)
    useEffect(() => {
        if (carts.length === 0) {
            setnoItem(true)
        } else {
            setnoItem(false)
        }
    }, [carts])

    const handleDelete = (id) => {
        dispatch(deleteItem(id))
    }

    return (
        <>
            <h2 className="text-3xl font-bold mb-6 mt-5 text-center">Shopping Cart</h2>
            <div className="mb-4"></div>
            <div className="container">

                <div className="cart_area border shadow mt-4 p-3 bor-rad ">
                    <div className="row">
                        <div className="col-12">
                            <table className='table-auto w-full'>
                                <thead className='table-dark'>
                                    <tr>
                                        <th className='text-dark col'>Name</th>
                                        <th className='text-dark col'>Price</th>
                                        <th className='text-dark col'>Action</th>
                                    </tr>
                                </thead>
                                <tbody className='table-group-divider'>
                                    {
                                        noItem ? (
                                            <>
                                                <tr>
                                                    <td>
                                                        <h1 className='text-xl text-center text-danger mt-4'>No items in cart!</h1>
                                                    </td>
                                                </tr>
                                            </>
                                        ) : (

                                            carts.map((item, id) => {
                                                return (
                                                    <tr key={id}>
                                                        <td className='d-flex justify-content-between align-items-center py-3'>
                                                            
                                                            <div className="title">
                                                                <h6 className='text-start fw-bold mb-0 clr-gr'>{item.name}</h6>
                                                                <p className='font-sz mb-2 lightslategrey text-justify'>{item.disc}</p>
                                                            </div>
                                                        </td>
                                                       
                                                        <td className=''>{item.subtotal}/-</td>
                                                        <td className=''>
                                                            <button onClick={() => handleDelete(id)}>
                                                                ❌
                                                            </button></td>
                                                    </tr>
                                                )
                                            })
                                        )
                                    }

                                </tbody>
                            </table>
                        </div>

                    </div>

                </div>

            </div>
        </>
    )
}

export default Cart
