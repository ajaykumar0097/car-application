import axios from "axios";

const API_URL = "https://www.freetestapi.com/api/v1/cars";

export const getCars = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const getCarDetails = async (id) => {
  const response = await axios.get(`${API_URL}/${id}`);
  console.log("response.data",response.data);
  
  return response.data;
};
