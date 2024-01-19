import React from 'react'

const Signup = () => {
    return (
        <>
            <form action="" className='form-control'>
                <fieldset>
                    <div className="container form-control">
                        <legend>Personalia:</legend>
                        <label htmlFor="fname">First name:</label>
                        <input type="text" id="fname" name="fname" className='form-control' />
                        <label htmlFor="lname">Last name:</label>
                        <input type="text" id="lname" name="lname" className='form-control'/>
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" className='form-control' />
                        <label htmlFor="email">City:</label>
                        <input type="city" id="city" name="city" className='form-control' />
                       
                        <button className='btn btn-primary'>Submit ➡</button>
                    </div>
                </fieldset>
            </form>

        </>
    )
}


export default Signup