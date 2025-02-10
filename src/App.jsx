import React from "react";
import ItemHeader from "./components/itemHeader/ItemHeader";
import ProductList from "./components/ProductItems/productList";
import Footer from "./Footer";
import Header from "./Header";
import HeroSection from "./Hero-Section";
import CategoryProvider from "./provider/CategoryProvider";
import ProductProvider from "./provider/productProvider";
import "./style.css";

export default function App() {
  return (
    <CategoryProvider>
      <ProductProvider>
        <Header />
        <HeroSection />
        <div className="pt-16 sm:pt-24 lg:pt-40">
          <ItemHeader />
          <ProductList />
        </div>
        <Footer />
      </ProductProvider>
    </CategoryProvider>
  );
}
