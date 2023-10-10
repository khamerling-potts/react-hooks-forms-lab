import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, onAddItem }) {
  // const [selectedCategory, setSelectedCategory] = useState("All");
  const [filterData, setFilterData] = useState({
    filter: "All",
    search: "",
  });

  function handleFilterChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    setFilterData({ ...filterData, [name]: value });
  }

  function handleItemSubmit(item) {
    onAddItem(item);
  }

  const itemsToDisplay = items.filter((item) => {
    if (filterData.filter === "All")
      return item.name.includes(filterData.search);
    return (
      item.name.includes(filterData.search) &&
      item.category === filterData.filter
    );
  });

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={handleItemSubmit} />
      <Filter
        onCategoryChange={handleFilterChange}
        onSearchChange={handleFilterChange}
        search={filterData.search}
        filter={filterData.filter}
      />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
