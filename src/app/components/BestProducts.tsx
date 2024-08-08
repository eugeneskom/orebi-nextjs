import { Product } from "@/types/products";
import Image from "next/image";
import React from "react";
import ProductCard from "./ProductCard";
import { getProducts } from "@/libs";

async function BestProducts() {
  const productsData = await getProducts();
  const products: Product[] = productsData.products.slice(0, 4); // Limit to 4 products for this example
  console.log("productsData", productsData);
  return (
    <section className="best">
      <div className="container">
        <h2 className="title title--main">Our Bestsellers</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default BestProducts;
