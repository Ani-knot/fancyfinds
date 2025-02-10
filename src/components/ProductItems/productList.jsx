import { useContext } from "react";
import { CategoryContext, ProductContext } from "../../context";
import ProductCard from "./productCard";

export default function ProductList() {
  const { products, loading, error } = useContext(ProductContext);
  const { categoryFilter } = useContext(CategoryContext);

  const filteredProducts = categoryFilter
    ? products.filter((product) => {
        return product.category === categoryFilter;
      })
    : products;

  if (loading.state) return <div>{loading.message}</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="mt-6 flex flex-wrap gap-x-6 gap-y-10">
          {/* Card */}
          {filteredProducts.map((product) => (
            <div key={product.id} className="w-full sm:w-1/2 lg:w-1/4 xl:w-1/5">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
