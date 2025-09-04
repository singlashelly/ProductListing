import React from "react";
import { render, screen } from "@testing-library/react";
import Cart from "../components/Cart";
import { useSelector } from "react-redux";
import "@testing-library/jest-dom";

// ✅ Mock ProductCard component
jest.mock("../components/ProductCard", () => ({ product, isCartView }) => (
  <div data-testid="product-card">
    {product.title}
    {isCartView && ` - Qty: ${product.quantity}`}
  </div>
));

// ✅ Mock useSelector
jest.mock("react-redux", () => ({
  useSelector: jest.fn(),
}));

describe("Cart Component", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders empty cart message when cart is empty", () => {
    useSelector.mockImplementation((selector) =>
      selector({ ShoppingReducer: { cartItems: [] } })
    );

    render(<Cart />);
    expect(screen.getByText("Your cart is empty")).toBeInTheDocument();
  });

  it("renders cart items and total price correctly", () => {
    const mockCartItems = [
      { id: 1, title: "Product A", price: 10, quantity: 2 },
      { id: 2, title: "Product B", price: 15, quantity: 1 },
    ];

    useSelector.mockImplementation((selector) =>
      selector({ ShoppingReducer: { cartItems: mockCartItems } })
    );

    render(<Cart />);

    // ✅ ProductCard items
    const productCards = screen.getAllByTestId("product-card");
    expect(productCards.length).toBe(2);
    expect(productCards[0]).toHaveTextContent("Product A - Qty: 2");
    expect(productCards[1]).toHaveTextContent("Product B - Qty: 1");

    // ✅ Total Price
    expect(screen.getByText("Total: $35.00")).toBeInTheDocument();
  });
});
