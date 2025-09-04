import React from "react";
import { render, screen } from "@testing-library/react";
import Header from "../components/Header";
import "@testing-library/jest-dom";

// Mock ShoppingCart icon from lucide-react
jest.mock("lucide-react", () => ({
  ShoppingCart: () => <svg data-testid="shopping-cart-icon" />,
}));

describe("Header Component", () => {
  it("renders the header title", () => {
    render(<Header />);
    expect(screen.getByText("Shopping Cart")).toBeInTheDocument();
  });

  it("renders the shopping cart icon", () => {
    render(<Header />);
    expect(screen.getByTestId("shopping-cart-icon")).toBeInTheDocument();
  });
});
