import React from "react";
import { render, screen } from "@testing-library/react";
import ProductList from "../components/ProductList";
import { useProductData } from "../core/common/useProductData";
import "@testing-library/jest-dom";
jest.mock("../core/common/useProductData");
jest.mock("../components/ProductCard", () => ({ product }) => (
  <div data-testid="product-card">{product.title}</div>
));
jest.mock("../components/Cart", () => () => (
  <div data-testid="cart">Cart Component</div>
));

const mockProducts = [
  {
    id: 1,
    title: "Test Product 1",
    price: 29.99,
    image: "https://example.com/image1.jpg",
    description: "Product 1 description",
  },
  {
    id: 2,
    title: "Test Product 2",
    price: 19.99,
    image: "https://example.com/image2.jpg",
    description: "Product 2 description",
  },
];

describe("ProductList Component", () => {
  beforeEach(() => {
    useProductData.mockReturnValue(mockProducts);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders product cards based on fetched data", () => {
    render(<ProductList />);
    const productCards = screen.getAllByTestId("product-card");
    expect(productCards).toHaveLength(mockProducts.length);
    expect(productCards[0]).toHaveTextContent("Test Product 1");
    expect(productCards[1]).toHaveTextContent("Test Product 2");
  });

  it("renders the Cart component", () => {
    render(<ProductList />);
    expect(screen.getByTestId("cart")).toBeInTheDocument();
    expect(screen.getByText("Cart")).toBeInTheDocument(); // Title above cart
  });
});
