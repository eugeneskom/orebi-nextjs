import React from "react";
import ProductCard from "./ProductCard";
import sharedStyles from '../styles/sharedStyles.module.css';
import { Product } from "@/types/products";
// import styles from './NewProducts.module.css';
async function getProducts() {
  const res = await fetch('https://dummyjson.com/products');
  if (!res.ok) {
    throw new Error('Failed to fetch products');
  }
  return res.json();
}

export default async function NewProducts() {
  const productsData = await getProducts();
  const products:Product[] = productsData.products.slice(0, 4); // Limit to 4 products for this example
  console.log('productsData',productsData)
  return (
    <section className="new">
      <div className="container">
        <h2 className="title title--main">New Arrivals</h2>
        <ul className="new__slider d-flex jc-sa">
         
          {products.map((product) => (
            <li key={product.id} className="special__product">
              <ProductCard product={product} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}