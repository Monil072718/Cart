
export const addToCart = (id) => {
    return (dispatch) => {
        dispatch({
            type: 'addcart',
            payload: id,
        })
    }


}

export const deleteItem = (id) => {
    return (dispatch) => {
        dispatch({
            type: "deletecart",
            payload: id,
        })
    }
}