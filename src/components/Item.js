import React, { useState } from "react";

function Item({ name, category }) {
  const [inCart, setInCart] = useState(false);

  const handleAddToCart = () => {
    setInCart(true);
  };

  return (
    <li className={`Item ${inCart ? "in-cart" : ""}`}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleAddToCart}>
        {inCart ? "Remove from Cart" : "Add to Cart"}
      </button>
    </li>
  );
}

export default Item;
