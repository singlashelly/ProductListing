import { useDispatch } from "react-redux";
import { AddProductAction } from "../core/actions/actions";
import React from "react";
const ProductCard = ({ product, isCartView = false }) => {
  const dispatch = useDispatch();
  const handleAdd = () => {
    dispatch(AddProductAction(product));
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center">
      <img
        src={product.image}
        alt={product.title}
        className="h-40 object-contain mb-4"
      />
      <h2 className="text-sm font-semibold text-gray-800 line-clamp-2 text-center">
        {product.title}
      </h2>
      {/* Description (normal font weight, smaller, gray) */}
      <p className="text-sm text-gray-600 line-clamp-3 text-center mt-2">
        {product.description}
      </p>

      {/* Price and Button in one row */}
      <div className="flex items-center justify-between w-full mt-4">
        <p className="text-lg font-bold text-gray-900">${product.price}</p>

        {isCartView ? (
          <div className="mt-2 text-sm">
            <p>Quantity: {product.quantity}</p>
            <p className="font-medium">
              Subtotal: ${(product.price * product.quantity).toFixed(2)}
            </p>
          </div>
        ) : (
          <button
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            onClick={handleAdd}
          >
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
