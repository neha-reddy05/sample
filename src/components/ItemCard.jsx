import React from 'react';

export default function ItemCard({ item, addToCart }) {
  return (
    <div className="item-card">
      <h3>{item.name}</h3>
      <p>Category: {item.category}</p>
      <p>Price: ₹{item.price}</p>
      <button onClick={() => addToCart(item)}>Add to Cart</button>
    </div>
  );
}