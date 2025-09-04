import { useEffect, useState } from "react";

export const useProductData = (url) => {
  const [productData, setProductData] = useState([]);

  const fetchProductList = async () => {
    const res = await fetch(url);
    const json = await res.json();
    setProductData(json);
  };
  useEffect(() => {
    fetchProductList();
  }, []);

  return productData;
};
