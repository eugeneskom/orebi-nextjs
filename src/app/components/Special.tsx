import Image from 'next/image'
import React from 'react'
import ProductCard from './ProductCard'
import { getProducts } from '@/libs';
import { Product } from '@/types/products';

async function Special() {
  const productsData = await getProducts({ page: 1 , query: null});
  const products: Product[] = productsData.products.slice(0, 4); // Limit to 4 products for this example
  return (
    <section className="special">
    <div className="container">
      <h2 className="title title--main">Special Offers</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" >
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
    </div>
  </section>
  )
}

export default Special