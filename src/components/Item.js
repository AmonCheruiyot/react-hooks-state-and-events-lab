import React, { useState } from "react";

function Item({ name, category }) {
  // State variable to track whether the item is in the cart or not
  const [isInCart, setIsInCart] = useState(false);

  // Function to handle adding or removing item from cart
  const handleToggleCart = () => {
    setIsInCart(prevIsInCart => !prevIsInCart);
  };

  return (
    <li className={isInCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      {/* Button text changes based on item's cart status */}
      <button className="add" onClick={handleToggleCart}>
        {isInCart ? "Remove From Cart" : "Add to Cart"}
      </button>
    </li>
  );
}

export default Item;
