import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { useParams } from "next/navigation";
import ProductTabs from "@/app/components/product/ProductTabs";

async function getProductById(id: string) {
  const res = await fetch(`https://dummyjson.com/products/${id}`);
  if (!res.ok) {
    return null;
  }
  return res.json();
}

export default async function ProductPage({ params }: { params: { id: string } }) {
  // Extract the numeric ID from the start of the string
  const id = params.id.split("-")[0];

  const product = await getProductById(id);
  if (!product) {
    notFound();
  }

  // Construct the expected slug
  const expectedSlug = `${id}-${product.title.toLowerCase().replace(/ /g, "-")}`;

  // Check if the current URL matches the expected URL
  if (params.id !== expectedSlug) {
    notFound();
  }
  return (
    <main className="main">
      <div className="container ">
        <section className="product-inside">
          <h1 className="title">{product.title}</h1>
          <div className="breadcrumbs">
            <ul className="breadcrumbs__list d-flex">
              <li className="breadcrumbs__item">
                <Link className="breadcrumbs__link" href="/">
                  Home
                </Link>
              </li>
              <li className="breadcrumbs__item">
                <span className="breadcrumbs__link">{product.title}</span>
              </li>
            </ul>
          </div>
          <div className="product-gallery">
            <ul className="product-gallery__list d-flex fw-w">
              {product.images.map((image: string, index: number) => (
                <li key={index} className="product-gallery__item">
                  <Image className="product-gallery__img" src={image} alt={`${product.title} image ${index + 1}`} width={300} height={300} />
                </li>
              ))}
            </ul>
          </div>
          <div className="product-description">
            <h2 className="title">{product.title}</h2>
            <div className="product-description__rating d-flex ai-c">
              <div className="rate" />
              <div className="product-description__review">
                <p>{product.rating} Rating</p>
              </div>
            </div>
            <div className="product-description__price d-flex">
              <p className="product-description__old">
                <span>$</span>
                {product.price.toFixed(2)}
              </p>
              <p className="product-description__new">
                <span>$</span>
                {(product.price * (1 - product.discountPercentage / 100)).toFixed(2)}
              </p>
            </div>
          </div>
          <section className="product-filters d-flex ">
            <ul className="filters-names d-flex fd-col jc-sb">
              <li className="filters-names__item">
                <p className="product-filters__name">color:</p>
              </li>
              <li className="filters-names__item">
                <p className="product-filters__name">size:</p>
              </li>
              <li className="filters-names__item">
                <p className="product-filters__name">quantity:</p>
              </li>
            </ul>
            <ul className="product-filters__list">
              <li className="product-filters__item product-filters__color d-flex ai-c">
                <form className="product-filters__form d-flex ai-c">
                  <label className="product-filters__label">
                    <input className="product-filters__input" type="radio" name="color" />
                    <span className="product-filters__checkbox product-filters__checkbox--gray" />
                  </label>
                  <label className="product-filters__label">
                    <input className="product-filters__input" type="radio" name="color" />
                    <span className="product-filters__checkbox product-filters__checkbox--lightred" />
                  </label>
                  <label className="product-filters__label">
                    <input className="product-filters__input" type="radio" name="color" />
                    <span className="product-filters__checkbox product-filters__checkbox--lightgreen" />
                  </label>
                  <label className="product-filters__label">
                    <input className="product-filters__input" type="radio" name="color" />
                    <span className="product-filters__checkbox product-filters__checkbox--lightgray" />
                  </label>
                  <label className="product-filters__label">
                    <input className="product-filters__input" type="radio" name="color" />
                    <span className="product-filters__checkbox product-filters__checkbox--lightblue" />
                  </label>
                </form>
              </li>
              <li className="product-filters__item product-filters__size d-flex ai-c">
                <form className="product-filters__form" action="">
                  <label>
                    <span className="sr-only">Select size</span>
                    <select  className="select">
                      <option value="S">S</option>
                      <option value="M">M</option>
                      <option value="L">L</option>
                      <option value="XL">XL</option>
                      <option value="XXL">XXL</option>
                    </select>
                  </label>
                </form>
              </li>
              <li className="product-filters__item quantity ">
                <form className="product-filters__form" action="">
                  <label>
                    <span className="sr-only">Select quantity</span>
                    <input className="number" type="number" defaultValue={1} min={1} />
                  </label>
                </form>
              </li>
            </ul>
          </section>
          <div className="product-status">
            <p className="product-status__name">
              status: <span>{product.stock > 0 ? "In stock" : "Out of stock"}</span>
            </p>
          </div>
          <div className="product-buttons">
            <button className="btn" type="button">
              Add to Wish List
            </button>
            <button className="btn" type="button">
              Add to Cart
            </button>
          </div>
          <ul className="prodduct-return accordion">
            <li className="product-return__item">
              <button className="accordion__btn">features &amp; details</button>
              <div className="accordion__panel">
                <p>{product.description}</p>
              </div>
            </li>
            <li className="product-return__item">
              <button className="accordion__btn">shipping &amp; returns</button>
              <div className="accordion__panel">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
            </li>
          </ul>
          <ProductTabs description={product.description} title={product.title}/>
        </section>
      </div>
    </main>
  );
}
