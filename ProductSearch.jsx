import React, { useState } from 'react';
import ProductCard from './ProductCard';
import './style.css';

function ProductSearch(props) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedColor, setSelectedColor] = useState('all'); // Initialize with 'all'
  const [selectedCategory, setSelectedCategory] = useState('all'); // Initialize with 'all'

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleColorChange = (event) => {
    setSelectedColor(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const filteredProducts = props.products.filter((product) => {
    const nameMatches = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const colorMatches = selectedColor === 'all' || product.color.toLowerCase() === selectedColor;
    const categoryMatches = selectedCategory === 'all' || product.category === selectedCategory;

    return nameMatches && colorMatches && categoryMatches;
  });

  return (
    <div>
      
      <div className="sidebar">
        <div>
          <h1 className='ml-2'>Workhubs</h1>
          <input
            type="text"
            placeholder="Search by product name"
            value={searchTerm}
            onChange={handleSearch}
            className='mt-3 ml-2 mb-2 rounded'
          />
        </div>
        <div ml-2>
          <label className='ml-2'>
            <input type="radio" name="color" value="blue" className='me-2' onClick={handleColorChange} /> Blue
          </label>
          <label className='me-1'>
            <input type="radio" name="color" value="purple" className='me-2' onClick={handleColorChange} /> White
          </label>
          <label className='me-1'>
            <input type="radio" name="color" value="green" className='me-2' onClick={handleColorChange} /> Green
          </label>
          {/* <label>
            <input type="radio" name="color" value="gold" onClick={handleColorChange} /> Gold
          </label> */}
          
          <label className='me-1'>
            <input type="radio" name="color" value="black" className='mr-2' onClick={handleColorChange} /> Black
          </label>
        </div>
        <label for="type" className='ml-2'>Category:</label>
        <select id="type" name="type" onChange={handleCategoryChange}>
          <option value="all">All</option>
          <option value="iphone-13">iphone 13</option>
          {/* <option value="iphone-13">iphone 13 pro</option>
          <option value="type3">iphone 14</option>
          <option value="type4">iphone 14 pro</option>
          <option value="type5">iphone 15</option>
          <option value="type6">iphone 15 pro</option> */}

        </select>
      </div>
      <div className="product-list">
        <div className="container">
          <div className="row justify-content-center">
            {filteredProducts.map((product) => (
              <ProductCard key={product.name} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductSearch;
