import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ProductCard from "../components/ProductCard";
import { useDispatch } from "react-redux";
import { AddProductAction } from "../core/actions/actions";
import "@testing-library/jest-dom";

// Mock useDispatch
const mockDispatch = jest.fn();
jest.mock("react-redux", () => ({
  useDispatch: () => mockDispatch,
}));

// Mock AddProductAction
jest.mock("../core/actions/actions", () => ({
  AddProductAction: jest.fn(),
}));

const sampleProduct = {
  id: 1,
  title: "Sample Product",
  description: "This is a sample product description.",
  price: 25.99,
  image: "https://via.placeholder.com/150",
  quantity: 2,
};

describe("ProductCard Component", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders product details correctly", () => {
    render(<ProductCard product={sampleProduct} />);

    expect(screen.getByText("Sample Product")).toBeInTheDocument();
    expect(
      screen.getByText("This is a sample product description.")
    ).toBeInTheDocument();
    expect(screen.getByText("$25.99")).toBeInTheDocument();
    expect(screen.getByText("Add to Cart")).toBeInTheDocument();
    expect(screen.getByRole("img")).toHaveAttribute("src", sampleProduct.image);
  });

  it("renders cart view with quantity and subtotal when isCartView is true", () => {
    render(<ProductCard product={sampleProduct} isCartView={true} />);

    expect(
      screen.getByText(`Quantity: ${sampleProduct.quantity}`)
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        `Subtotal: $${(sampleProduct.price * sampleProduct.quantity).toFixed(
          2
        )}`
      )
    ).toBeInTheDocument();
    expect(screen.queryByText("Add to Cart")).not.toBeInTheDocument();
  });

  it("dispatches AddProductAction when Add to Cart is clicked", () => {
    AddProductAction.mockReturnValue({
      type: "AddProductToCart",
      payload: sampleProduct,
    });

    render(<ProductCard product={sampleProduct} />);

    const button = screen.getByText("Add to Cart");
    fireEvent.click(button);

    expect(AddProductAction).toHaveBeenCalledWith(sampleProduct);
    expect(mockDispatch).toHaveBeenCalledWith({
      type: "AddProductToCart",
      payload: sampleProduct,
    });
  });
});
