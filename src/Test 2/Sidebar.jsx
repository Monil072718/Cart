import React, { useEffect } from 'react'

export const Sidebar = ({ handleSearch, input, setInput, handleType }) => {
    const handleChange = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value })
    }
    useEffect(() => {
        
        handleType()

    }, [input])
    return (
        <>
            <div className='border py-5'>
                <div className='text-center'>
                    <input type="text" name="search" id="search" className='border shadow rounded px-2 py-1' placeholder='seacrh by name' onKeyUp={handleSearch} value={input.search} onChange={handleChange} />
                </div>
                <div className='text-center my-5'>
                    <select name="type" id="" className='border' value={input.type} onChange={handleChange}>
                        <option value="all">All</option>
                        <option value="men">Men</option>
                        <option value="women">Women</option>
                    </select>
                </div>
                <div className='text-center'>
                    <input type="radio" name="color" className='mx-2 cursor-pointer' value={input.color} onChange={handleChange} id="" />white
                    <input type="radio" name="color" className='mx-2 cursor-pointer' value={input.color} onChange={handleChange} id="" />blue
                    <input type="radio" name="color" className='mx-2 cursor-pointer' value={input.color} onChange={handleChange} id="" />yellow
                </div>
            </div>
        </>
    )
}
