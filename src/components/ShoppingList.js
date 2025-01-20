import React from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  return (
    <div className="Items"> {/* Ensure this div has the correct class name */}
      {items.map((item) => (
        <Item key={item.id} name={item.name} category={item.category} />
      ))}
    </div>
  );
}

export default ShoppingList;
