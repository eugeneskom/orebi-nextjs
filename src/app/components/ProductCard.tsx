// ProductCard.tsx
"use client";

import React from "react";
import Image from "next/image";
import { Product } from "@/types/products";
import sharedStyles from '../styles/sharedStyles.module.css';
interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const handleAddToWishList = () => {
    console.log("Added to wish list:", product.title);
  };

  const handleCompare = () => {
    console.log("Comparing:", product.title);
  };

  const handleAddToCart = () => {
    console.log("Added to cart:", product.title);
  };

  return (
    <article className="product">
      <div className="product__top">
        <div className="product__new">New</div>
        <Image 
          src={product.thumbnail} 
          alt={product.title}
          width={300}
          height={300}
          layout="responsive"
          objectFit="cover"
          className="product__img"
        />
        <div className="product__popup">
          <ul className="product__list">
            <li className="product__item">
              <button onClick={handleAddToWishList} className="product__link product__link--wish" type="button">
                Add to Wish List
              </button>
            </li>
            <li className="product__item">
              <button onClick={handleCompare} className="product__link product__link--compare" type="button">
                Compare
              </button>
            </li>
            <li className="product__item">
              <button onClick={handleAddToCart} className="product__link product__link--cart" type="button">
                Add to Cart
              </button>
            </li>
          </ul>
        </div>
      </div>
      <div className="product__bottom d-flex jc-sb">
        <div className="product__desc">
          <h3 className="product__name">{product.title}</h3>
          <p className="product__color">{product.category}</p>
        </div>
        <p className="product__price">
          <span>$</span>{product.price.toFixed(2)}
        </p>
        <div className="product__content">
          <div className="product__text">
            <p>{product.description}</p>
          </div>
          <button onClick={handleAddToCart} className="product__btn btn btn--big">Add to Cart</button>
        </div>
      </div>
    </article>
  );
}