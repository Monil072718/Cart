import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const ReduxThunk = () => {
    const state = useSelector((state) => state)
    const dispatch = useDispatch()



    const handleClick = () => {
        dispatch({
            type: 'INCREMENT'
        })
    }

    const handleApi = () => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((res) => res.json())
            .then((data) => {
                dispatch({
                    type: 'api',
                    payload: data
                })
            })
            .catch((err) => console.log(err))
    }

    return (
        <>
            <h1>count: {state.count}</h1>
            <button onClick={handleClick}>incr</button>
            <h1>Name : {state.name}</h1>
            <button onClick={() => dispatch({ type: 'add_name', payload: 'MONIL' })}>Add Name</button><br /><br />
            <button onClick={handleApi}>Call Api</button>

            <ul>

                {
                    state.data && state.data.map(item => {
                        return (
                            <li>{item.name}</li>
                        )
                    })
                }
            </ul>
        </>
    )
}

export default ReduxThunk