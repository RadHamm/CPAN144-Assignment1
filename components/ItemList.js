import { useState } from "react";
import React from "react";

// Displays list of items and shows which item is selected
function ItemList() {
  // state to track selected item from list
  const [selectedItem, setSelectedItem] = useState(null);

  // list of items
  const items = ["Item 1", "Item 2", "Item 3"];

  // function for item selection and updating state
  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  // returns a rendered list of items, cycles through each item available.
  return (
    <div>
      <ul>
        {items.map((item, index) => (
          <li key={index} onClick={() => handleItemClick(item)}>
            {item}
          </li>
        ))}
      </ul>
      {/* conditional render for selected item*/}
      {selectedItem && <p>You selected: {selectedItem}</p>}
    </div>
  );
}

export default ItemList;
