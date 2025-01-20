import React from "react";

function Filter({ onCategoryChange }) {
  return (
    <div className="Filter">
      <select onChange={(e) => onCategoryChange(e.target.value)}>
        <option value="All">All</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Bakery">Bakery</option>
      </select>
    </div>
  );
}

export default Filter;
