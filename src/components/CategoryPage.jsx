import React from 'react';
import ItemCard from './ItemCard';
import { sampleItems } from '../data';

export default function CategoryPage({ category, addToCart }) {
  const filtered = sampleItems.filter(item => item.category === category);
  return (
    <div className="items">
      {filtered.map(item => (
        <ItemCard key={item.id} item={item} addToCart={addToCart} />
      ))}
    </div>
  );
}