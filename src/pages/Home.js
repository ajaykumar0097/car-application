import React, { useEffect, useState } from "react";
import { getCars } from "../services/api";
import CarCard from "../components/CarCard";
import SearchBar from "../components/SearchBar";
import FilterPanel from "../components/FilterPanel";
import SortOptions from "../components/SortOptions";
import Pagination from "../components/Pagination";
import "../styles/Home.css";

const Home = () => {
  const [cars, setCars] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filters, setFilters] = useState({ minPrice: 0, maxPrice: 100000 });
  const [sort, setSort] = useState("price");
  const [page, setPage] = useState(1);
console.log(searchTerm,"searchTerm");

  useEffect(() => {
    getCars().then(data => setCars(data));
  }, []);

  const filteredCars = cars
    .filter(car => car.make.includes(searchTerm) || car.model.includes(searchTerm))
    .filter(car => car.price >= filters.minPrice && car.price <= filters.maxPrice)
    .sort((a, b) => (sort === "price" ? a.price - b.price : b.year - a.year));

  const carsPerPage = 5;
  const paginatedCars = filteredCars.slice((page - 1) * carsPerPage, page * carsPerPage);
console.log("filteredCars",filteredCars);

  return (
    <div>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <FilterPanel filters={filters} setFilters={setFilters} />
      <SortOptions setSort={setSort} />
      <div className="car-list">
        {paginatedCars.map(car => <CarCard key={car.id} car={car} />)}
      </div>
      <Pagination page={page} setPage={setPage} />
    </div>
  );
};

export default Home;
