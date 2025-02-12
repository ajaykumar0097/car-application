import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCarDetails } from "../services/api";

const CarDetails = () => {
  const { id } = useParams();
  const [car, setCar] = useState(null);
  const [error, setError] = useState(null);
  // useEffect(() => {
  //   getCarDetails().then(data => setCars(data));
  // }, []);

  useEffect(() => {
    axios.get(`https://www.freetestapi.com/api/v1/cars/${id}`) // Fetch full data first
      .then((response) => {
        const carData = response.data; // Find car by ID
        if (carData) {
          setCar(carData);
        } else {
          setError("Car not found");
        }
      })
      .catch((error) => {
        console.error("Error fetching car details:", error);
        setError("Failed to load car details");
      });
  }, [id]);

  if (error) return <p>{error}</p>;
  if (!car) return <p>Loading...</p>;

  return (
    <div>
      <h2>{car?.make} {car?.model} ({car?.year})</h2>
      <p>Price: ${car?.price}</p>
      <p>{car?.description}</p>
      <img src={car?.images} alt={car?.make} width="300px" />
    </div>
  );
};

export default CarDetails;
