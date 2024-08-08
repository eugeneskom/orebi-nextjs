import React from "react";
import ProductCard from "./ProductCard";
import sharedStyles from "../styles/sharedStyles.module.css";
import { Product } from "@/types/products";
import { getProducts } from "@/libs";

export default async function NewProducts() {
  const productsData = await getProducts();
  const products: Product[] = productsData.products.slice(0, 4); // Limit to 4 products for this example
  console.log("productsData", productsData);
  return (
    <section className="new">
      <div className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-extrabold text-gray-900 mb-6">New Arrivals</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
