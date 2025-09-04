import { ShoppingCart } from "lucide-react";
import React from "react";
const Header = () => {
  return (
    <header className="bg-blue-600 text-white px-6 py-3 flex justify-between items-center shadow-md">
      <h1 className="text-lg font-semibold">Shopping Cart</h1>

      {/* Cart Icon with Badge */}
      <div className="relative">
        <ShoppingCart className="w-6 h-6" />
      </div>
    </header>
  );
};

export default Header;
