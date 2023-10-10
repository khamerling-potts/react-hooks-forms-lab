import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items }) {
  // const [selectedCategory, setSelectedCategory] = useState("All");
  const [formData, setFormData] = useState({
    filter: "All",
    search: "",
  });

  function handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    setFormData({ ...formData, [name]: value });
  }

  const itemsToDisplay = items.filter((item) => {
    if (formData.filter === "All") return item.name.includes(formData.search);
    return (
      item.name.includes(formData.search) && item.category === formData.filter
    );
  });

  return (
    <div className="ShoppingList">
      <ItemForm />
      <Filter
        onCategoryChange={handleChange}
        onSearchChange={handleChange}
        search={formData.search}
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
