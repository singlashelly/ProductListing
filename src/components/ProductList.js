import { useProductData } from "../core/common/useProductData";
import Cart from "./Cart";
import ProductCard from "./ProductCard";

import React from "react";
const ProductList = () => {
  const productData = useProductData("https://fakestoreapi.com/products");

  return (
    <div className="flex items-start gap-6 p-6">
      {/* Left: Product Grid */}
      <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {productData?.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>

      {/* Right: Cart Sidebar */}
      <div className="w-80 bg-white shadow-md rounded-lg p-4">
        <h2 className="text-lg font-semibold mb-4">Cart</h2>
        <Cart />
      </div>
    </div>
  );
};

export default ProductList;
