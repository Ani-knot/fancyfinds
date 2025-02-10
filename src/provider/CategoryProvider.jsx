import React, { useState } from "react";
import { CategoryContext } from "../context";
import { useFetchProducts } from "../hooks";

const CategoryProvider = ({ children }) => {
  const { categories, loading, error } = useFetchProducts();
  const [categoryFilter, setCategoryFilter] = useState("");

  return (
    <CategoryContext.Provider
      value={{ categories, loading, error, categoryFilter, setCategoryFilter }}
    >
      {children}
    </CategoryContext.Provider>
  );
};

export default CategoryProvider;
