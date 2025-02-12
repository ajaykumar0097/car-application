import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Home from "./pages/Home";
import CarDetails from "./pages/CarDetails";
import Home from "./pages/Home";
// import CarDetails from "./pages/CarDetails";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cars/:id" element={<CarDetails />} />
      </Routes>
    </Router>
  );
}

export default App;

// import React, { useState, useEffect } from "react";
// import SearchBar from "./components/SearchBar";
// import CarList from "./components/CarList";
// import "./styles/App.css";
// import SearchBar from "./components/SearchBar";

// const App = () => {
//   const [cars, setCars] = useState([]);  // Store car list
//   const [searchTerm, setSearchTerm] = useState(""); // Search input state

//   useEffect(() => {
//     fetch("/cars.json") // Fetch from your API or JSON file
//       .then((response) => response.json())
//       .then((data) => setCars(data.cars))
//       .catch((error) => console.error("Error fetching cars:", error));
//   }, []);

//   // 🔍 Filtering Cars Based on Search Input
//   const filteredCars = cars.filter(
//     (car) =>
//       car.make.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       car.model.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       car.year.toString().includes(searchTerm)
//   );

//   return (
//     <div className="app">
//       <h1>Car Listing</h1>
//       <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
//       <CarList cars={filteredCars} />
//     </div>
//   );
// };

// export default App;

