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
              <div style={{ display: 'flex', gap: '1rem' }}>
                <button onClick={() => removeFromCart(index)} className="delete-btn">
                  Delete
                </button>
                <a
                  href={`https://wa.me/917995439410?text=Hi,%20I'm%20interested%20in%20your%20item:%20${encodeURIComponent(item.name)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="whatsapp-btn"
                >
                  Message
                </a>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
