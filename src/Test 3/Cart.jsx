import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import "./Style.css"

const Cart = () => {

    const state = useSelector(state => state)
    const dispatch = useDispatch()

    const handleDelete = (id) => {
        dispatch({ type: 'delete_cart', payload: id })
    }

    return (
        <div className="container py-5">
            <h1 className='text-xl font-medium border-b'>Cart</h1>

            {
                state.cart.length < 1 ? <h1 className='text-center py-5 text-xl'>No items in cart...</h1>
                    : <div class="relative overflow-x-auto">
                        <table class="">
                            <thead class="text-sm ">
                                <tr>
                                    <th scope="col" class="px-6 py-3">
                                        Product name
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Qty
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Price
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Remove
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    state.cart.map((item, i) => {
                                        return <tr class="">
                                            <th scope="row" class="px-6 py-4 font-medium whitespace-nowrap">
                                                {item.title}
                                            </th>
                                            <td class="px-6 py-4">
                                                {item.qty}
                                            </td>
                                            <td class="px-6 py-4">
                                                $ {item.price}
                                            </td>
                                            <td class="px-6 py-4">
                                                <button onClick={() => handleDelete(i)}>Delete</button>
                                            </td>
                                        </tr>
                                    })
                                }

                            </tbody>
                        </table>
                    </div>
            }
        </div>
    )
}

export default Cart