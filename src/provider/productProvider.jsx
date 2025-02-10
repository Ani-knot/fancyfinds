import React from "react";
import { ProductContext } from "../context";
import { useFetchProducts } from "../hooks";

const ProductProvider = ({ children }) => {
  const { products, categories, loading, error } = useFetchProducts();

  return (
    <ProductContext.Provider value={{ products, categories, loading, error }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
