
import { render, screen } from "@testing-library/react";
import CarCard from "../components/CarCard";

test("renders CarCard component", () => {
    const car = { name: "Toyota Corolla", price: "$20,000", image: "car.jpg" };
    render(<CarCard car={car} />);
    expect(screen.getByText("Toyota Corolla")).toBeInTheDocument();
});
