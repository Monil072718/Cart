import React from 'react'
import {  useSelector } from 'react-redux'
import './style.css'
    // const dispatch =useDispatch()

 function Action() {
    const state = useSelector((state)=>state.product)
    console.log(state)

  return (
    <>
    
        <nav>
           <button className='mt-2 text-primary p-1 border-1 rounded mr-3'>Add to cart</button>
        </nav>
    <div className='row'>

        {state && state.map((item,index)=>
            <div className="product-card col-3" key={item.id}>
                        <div class="product-tumb">
                    <img src={item.img} alt=""  className="img-fliud"/>
                </div>
                <div class="product-details">
                    <span class="product-catagory">{item.type}</span>
                    <h4><a href="">{item.name}</a></h4>
                    <p>{item.color}</p>
                    <a className='btn border-1 rounded'>
                        Add Cart +
                    </a>
                </div>
                    </div>
            )}
    
    </div>
    </>
  )
}
export default Action