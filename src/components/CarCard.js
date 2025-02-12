import React from "react";
import { Link } from "react-router-dom";
import "../styles/CarCard.css";

const CarCard = ({ car }) => (
  <div className="car-card">
  {console.log("dfgdgdf",car)}
    <img src={car?.images} alt={car?.make} />
    <h3>{car?.make} {car?.model} ({car?.year})</h3>
    <p>Price: ${car?.price}</p>
    <Link to={`/cars/${car?.id}`}>View Details</Link>
  </div>
);

export default CarCard;
