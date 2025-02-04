import { useState } from "react";

const useProductData = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState({
    state: false,
    message: "",
  });
  const [error, setError] = useState(null);
};
const fetchProducts = async () => {
  try{}
  catch(){}
  finally{}
}