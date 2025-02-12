import React from "react";
import "../styles/SearchBar.css";

const SearchBar = ({ searchTerm, setSearchTerm }) => (
  <input
    type="text"
    placeholder="Search by make, model, year"
    value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)}
    className="search-bar"
  />
);

export default SearchBar;
