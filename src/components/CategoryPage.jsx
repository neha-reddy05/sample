import React from 'react';
import ItemCard from './ItemCard';
import { sampleItems } from '../data';

export default function CategoryPage({ category, addToCart }) {
  const filtered = sampleItems.filter(
    item => item.category.trim().toLowerCase() === category.trim().toLowerCase()
  );

  return (
    <div className="items">
      {filtered.length > 0 ? (
        filtered.map(item => (
          <ItemCard key={item.id} item={item} addToCart={addToCart} />
        ))
      ) : (
        <p>No items found in this category.</p>
      )}
    </div>
  );
}
