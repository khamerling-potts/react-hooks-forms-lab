import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({ onItemFormSubmit }) {
  const [itemCategory, setItemCategory] = useState("Produce");
  const [itemName, setItemName] = useState("");

  function handleCategoryChange(event) {
    console.log(event.target.value);
    setItemCategory(event.target.value);
  }

  function handleNameChange(event) {
    console.log(event.target.value);
    setItemName(event.target.value);
  }

  return (
    <form
      className="NewItem"
      onSubmit={(event) => {
        event.preventDefault();
        const newItem = {
          id: uuid(), // the `uuid` library can be used to generate a unique id
          name: itemName,
          category: itemCategory,
        };
        console.log(onItemFormSubmit);
        onItemFormSubmit(newItem);
      }}
    >
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={itemName}
          onChange={handleNameChange}
        />
      </label>

      <label>
        Category:
        <select
          name="category"
          onChange={handleCategoryChange}
          value={itemCategory}
        >
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
