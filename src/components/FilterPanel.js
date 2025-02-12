import React from "react";
import "../styles/FilterPanel.css";

const FilterPanel = ({ filters, setFilters }) => (
  <div className="filter-panel">
    <label>Price Range:</label>
    <input 
      type="number" 
      placeholder="Min Price" 
      onChange={(e) => setFilters({ ...filters, minPrice: e.target.value })}
    />
    <input 
      type="number" 
      placeholder="Max Price" 
      onChange={(e) => setFilters({ ...filters, maxPrice: e.target.value })}
    />
  </div>
);

export default FilterPanel;
