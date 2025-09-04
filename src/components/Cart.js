import { useSelector } from "react-redux";
import ProductCard from "./ProductCard";
import React from "react";
const Cart = () => {
  const cartItems = useSelector((state) => state.ShoppingReducer.cartItems);

  const totalPrice = cartItems.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);

  return (
    <div className="flex flex-col gap-4 h-full">
      {cartItems?.length === 0 ? (
        <p className="text-gray-600 text-center">Your cart is empty</p>
      ) : (
        <>
          {/* 🛒 Scrollable Cart Items */}
          <div className="flex-1 overflow-y-auto max-h-[400px] pr-2">
            {cartItems.map((item) => (
              <ProductCard
                key={item.id}
                product={item}
                isCartView={true}
                quantity={item.quantity}
              />
            ))}
          </div>

          {/* 💵 Sticky Total */}
          <div className="border-t pt-4 text-right">
            <p className="text-lg font-semibold">
              Total: ${totalPrice.toFixed(2)}
            </p>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
