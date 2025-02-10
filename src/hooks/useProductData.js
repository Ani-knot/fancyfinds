import { useEffect, useState } from "react";

const useFetchProducts = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState({
    state: false,
    message: "",
  });
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading({
      ...loading,
      state: true,
      message: "Finding location...",
    });
    const fetchProducts = async () => {
      try {
        setLoading({
          ...loading,
          status: true,
          message: "Fetching Products...",
        });
        const response = await fetch("https://fakestoreapi.com/products");
        if (!response.ok) {
          const errorMessage = `Fetching Products failed : ${response.status}`;
          throw new Error(errorMessage);
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading({
          ...loading,
          state: false,
          message: "",
        });
      }
    };
    const fetchCategories = async () => {
      try {
        setLoading({
          ...loading,
          status: true,
          message: "Fetching Categories...",
        });
        const response = await fetch(
          "https://fakestoreapi.com/products/categories"
        );
        if (!response.ok) {
          const errorMessage = `Fetching Categories failed : ${response.status}`;
          throw new Error(errorMessage);
        }
        const data = await response.json();
        setCategories(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading({
          ...loading,
          state: false,
          message: "",
        });
      }
    };
    fetchProducts();
    fetchCategories();
  }, []);
  return {
    products,
    categories,
    loading,
    error,
  };
};

export default useFetchProducts;
