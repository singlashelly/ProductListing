import React from "react";
import { Routes, Route } from "react-router-dom";
import Cart from "../components/Cart";

export default function Routing() {
  return (
    <Routes>
      <Route path="/Cart" element={<Cart />} />
    </Routes>
  );
}
