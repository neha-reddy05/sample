import React, { useState } from 'react';
import Filters from '../components/Filters';
import ItemCard from '../components/ItemCard';
import { sampleItems } from '../data';

export default function Home({ addToCart }) {
  const [filteredItems, setFilteredItems] = useState(sampleItems);

  return (
    <div className="home">
      <Filters setFilteredItems={setFilteredItems} items={sampleItems} />
      <div className="items">
        {filteredItems.map(item => (
          <ItemCard key={item.id} item={item} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
}
