
import { fetchCars } from "../services/api";

global.fetch = jest.fn(() =>
    Promise.resolve({
        json: () => Promise.resolve([{ id: 1, name: "Toyota Corolla" }]),
    })
);

test("fetchCars API function", async () => {
    const cars = await fetchCars();
    expect(cars.length).toBeGreaterThan(0);
    expect(cars[0].name).toBe("Toyota Corolla");
});
