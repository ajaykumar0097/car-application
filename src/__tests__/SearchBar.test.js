
import { render, screen } from "@testing-library/react";
import SearchBar from "../components/SearchBar";

test("renders SearchBar component", () => {
    render(<SearchBar />);
    expect(screen.getByPlaceholderText("Search cars...")).toBeInTheDocument();
});
