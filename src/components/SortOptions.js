import React from "react";
import "../styles/SortOptions.css";

const SortOptions = ({ setSort }) => (
  <select onChange={(e) => setSort(e.target.value)}>
    <option value="price">Sort by Price</option>
    <option value="year">Sort by Year</option>
  </select>
);

export default SortOptions;
