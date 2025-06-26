import React from 'react';

export default function Cart({ cartItems, removeFromCart }) {
  return (
    <div className="cart">
      <h2>Your Cart</h2>

      <div className="cart-items">
        {cartItems.length === 0 ? (
          <p>Cart is empty</p>
        ) : (
          cartItems.map((item, index) => (
            <div key={index} className="item-card">
              <h3>{item.name}</h3>
              <p>₹{item.price}</p>
              <button onClick={() => removeFromCart(index)} className="delete-btn">
                Delete
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
