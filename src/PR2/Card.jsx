import React, { useState } from "react";
import "../PR2/style.css";

export default function Card() {
  const itemList = [
    "Apple",
    "Orange",
    "Banana",
    "Cherry",
    "Milk",
    "Peanuts",
    "Butter",
    "Tomato"
  ];

  const [filteredList, setFilteredList] = useState(itemList); // Remove "new" here

  const filterBySearch = (event) => {
    // Access input value
    const query = event.target.value;
    // Create a copy of the item list
    var updatedList = [...itemList];
    // Include all elements that include the search query
    updatedList = updatedList.filter((item) => {
      return item.toLowerCase().indexOf(query.toLowerCase()) !== -1;
    });
    // Trigger a render with updated values
    setFilteredList(updatedList);
  };

  return (
    <div className="App">
      <div className="search-header">
        <div className="search-text">Search:</div>
        <input id="search-box" onChange={filterBySearch} />
      </div>
      <div id="item-list">
        <ol>
          {filteredList.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ol>
      </div>
    </div>
  );
}
