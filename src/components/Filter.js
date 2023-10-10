import React from "react";

function Filter({ onCategoryChange, onSearchChange, search, filter }) {
  return (
    <div className="Filter">
      <input
        type="text"
        name="search"
        onChange={onSearchChange}
        placeholder="Search..."
        value={search}
      />
      <select name="filter" value={filter} onChange={onCategoryChange}>
        <option value="All">Filter by category</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
    </div>
  );
}

export default Filter;
