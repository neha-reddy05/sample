import React from 'react';

export default function Filters({ setFilteredItems, items }) {
  const handleFilter = (e) => {
    const value = e.target.value.trim().toLowerCase();

    const filtered =
      value === ''
        ? items
        : items.filter(item => item.category.trim().toLowerCase() === value);

    setFilteredItems(filtered);
  };

  return (
    <div className="filters">
      <select onChange={handleFilter}>
        <option value="">All</option>
        <option value="Dorm">Dorm</option>
        <option value="Electronics">Electronics</option>
        <option value="Study">Study</option>
        <option value="Clothes">Clothes</option>
      </select>
    </div>
  );
}
