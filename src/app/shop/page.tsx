import React from "react";
import Image from "next/image";
import ProductCard from "../components/ProductCard";
import { Category, Product } from "@/types/products";
import { getAllCategories, getProducts } from "@/libs";
import Search from "../components/Search";
import Breadcrumbs from "../components/Breadcrumbs";
import Pagination from "../components/filters/Pagination";
import AsideCategories from "../components/filters/AsideCategories";

// Define the shape of the search params
type SearchParams = {
  page?: string;
  limit?: string;
  query?: string;
  category?: string;
  minPrice?: string;
  maxPrice?: string;
};

// Define props for the page component
type ShopPageProps = {
  searchParams: SearchParams;
};

async function Shop({ searchParams }: ShopPageProps) {
  // const productsData = await getProducts({ page: 1 , query: null});
  // const products: Product[] = productsData.products.slice(0, 40); // Limit to 4 products for this example
  // console.log("productsData", productsData);

  const page = Number(searchParams.page) || 1;
  const limit = Number(searchParams.limit) || 20;
  const search = searchParams.query || null;
  const category = searchParams.category;
  const minPrice = searchParams.minPrice ? Number(searchParams.minPrice) : undefined;
  const maxPrice = searchParams.maxPrice ? Number(searchParams.maxPrice) : undefined;

  const { products, total } = await getProducts({
    query: search,
    page,
    limit,
    category,
    minPrice,
    maxPrice,
  });

  const categories: Category[] = await getAllCategories();

  // console.log("products", products);
  // console.log("categories", categories);

  const totalPages = Math.ceil(total / limit);
  return (
    <main className="main">
      <Search />
      <div className="container">
        <div className="shop-wrapper">
          <h1 className="title">Product</h1>
          <Breadcrumbs />
          <section className="products">
            <div className="products__inner d-flex jc-sb">
              <button type="button" className="products__filter-btn">
                <span className="sr-only">Product filter button</span>
                <Image fill className="products__btn-svg" src="/images/icons/filter-btn.svg" alt="" />
              </button>
              <ul className="filters" id="filters">
                <li className="filters__item filters-category">
                  <div className="filters__top d-flex jc-sb">
                    <h2 className="filters__title">Shop by Categor</h2>
                  </div>
                  <AsideCategories categories={categories} />
                </li>
                <li className="filters__item filters-color">
                  <div className="filters__top d-flex jc-sb">
                    <h2 className="filters__title">Shop by Color</h2>
                    <Image width={10} height={10} className="filters__toggle" src="/images/icons/triangle.svg" alt="" />
                  </div>
                  <form className="filters-color__form filters__form--dropdown" action="#">
                    <label className="filters__label filters-color__label d-flex jc-sb">
                      <input className="filters__input filters-color__input" type="checkbox" />
                      <span className="filters__text filters-color__text filters-color__text--black">Black</span>
                    </label>
                    <label className="filters__label filters-color__label d-flex jc-sb">
                      <input className="filters__input filters-color__input" type="checkbox" />
                      <span className="filters__text filters-color__text  filters-color__text--pink">Pink</span>
                    </label>
                    <label className="filters__label filters-color__label d-flex jc-sb">
                      <input className="filters__input filters-color__input" type="checkbox" />
                      <span className="filters__text filters-color__text filters-color__text--green">Green</span>
                    </label>
                    <label className="filters__label filters-color__label d-flex jc-sb">
                      <input className="filters__input filters-color__input" type="checkbox" />
                      <span className="filters__text filters-color__text filters-color__text--gray">Gray</span>
                    </label>
                    <label className="filters__label filters-color__label d-flex jc-sb">
                      <input className="filters__input filters-color__input" type="checkbox" />
                      <span className="filters__text filters-color__text filters-color__text--turquoise">Еurquoise</span>
                    </label>
                  </form>
                </li>
                <li className="filters__item filters-brand">
                  <div className="filters__top d-flex jc-sb">
                    <h2 className="filters__title">Shop by Brand</h2>
                    <Image
                      // fill
                      width={10}
                      height={10}
                      // className="filters__toggle"
                      src="/images/icons/triangle.svg"
                      alt=""
                    />
                  </div>
                  <form className="filters__form filters__form--dropdown" action="#">
                    <label className="filters__label d-flex jc-sb">
                      <input className="filters__input" type="checkbox" />
                      <span className="filters__text">Apple</span>
                    </label>
                    <label className="filters__label d-flex jc-sb">
                      <input className="filters__input" type="checkbox" />
                      <span className="filters__text">Huawei</span>
                    </label>
                    <label className="filters__label d-flex jc-sb">
                      <input className="filters__input" type="checkbox" />
                      <span className="filters__text">Samsung</span>
                    </label>
                    <label className="filters__label d-flex jc-sb">
                      <input className="filters__input" type="checkbox" />
                      <span className="filters__text">Lenovo</span>
                    </label>
                    <label className="filters__label d-flex jc-sb">
                      <input className="filters__input" type="checkbox" />
                      <span className="filters__text">Sony</span>
                    </label>
                  </form>
                </li>
                <li className="filters__item filters-brand">
                  <div className="filters__top d-flex jc-sb">
                    <h2 className="filters__title">Shop by Price</h2>
                  </div>
                  <form className="filters__form" action="#">
                    <label className="filters__label d-flex jc-sb">
                      <input className="filters__input" type="checkbox" />
                      <span className="filters__text">$0.00 - $9.99</span>
                    </label>
                    <label className="filters__label d-flex jc-sb">
                      <input className="filters__input" type="checkbox" />
                      <span className="filters__text">$10.00 - $19.99</span>
                    </label>
                    <label className="filters__label d-flex jc-sb">
                      <input className="filters__input" type="checkbox" />
                      <span className="filters__text">$20.00 - $29.99</span>
                    </label>
                    <label className="filters__label d-flex jc-sb">
                      <input className="filters__input" type="checkbox" />
                      <span className="filters__text">$30.00 - $39.99</span>
                    </label>
                    <label className="filters__label d-flex jc-sb">
                      <input className="filters__input" type="checkbox" />
                      <span className="filters__text">$40.00 - $69.99</span>
                    </label>
                  </form>
                </li>
              </ul>
              <div className="shop-content">
                <div className="shop-content__filter  d-flex jc-sb">
                  <div className="shop-content__buttons d-flex">
                    <button className="shop-content__btn button-grid shop-content__btn--active flex justify-center items-center" type="button">
                      <svg className="shop-content__svg">
                        <use xlinkHref="sprite.svg#grid-filter-btn" />
                      </svg>
                      <span className="sr-only">Display products in grid</span>
                    </button>
                    <button className="shop-content__btn button-list d-flex jc-c ai-c" type="button">
                      <svg className="shop-content__svg">
                        <use xlinkHref="sprite.svg#grid-list-btn" />
                      </svg>
                      <span className="sr-only">Display products list</span>
                    </button>
                  </div>
                  <form className="shop-content__form d-flex" action="">
                    <label>
                      {" "}
                      <span>Sort by:</span>
                      <select name="" id="" className="shop-content__select-by select-style text-black p-4">
                        <option value={1}>Featured</option>
                        <option value={1}>2</option>
                        <option value={1}>3</option>
                        <option value={1}>4</option>
                      </select>
                    </label>
                    <label>
                      {" "}
                      <span>Show:</span>
                      <select name="" id="" className="shop-content__select-show select-style text-black p-4">
                        <option value={1}>36</option>
                        <option value={1}>48</option>
                        <option value={1}>60</option>
                        <option value={1}>72</option>
                      </select>
                    </label>
                  </form>
                </div>
                <h2 className="sr-only">Products list</h2>
                <div className="shop-products d-flex jc-sb fw-w">
                  <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {products.map((product) => (
                      <li key={product.id} className="list-none">
                        <ProductCard product={product} />
                      </li>
                    ))}
                  </ul>
                </div>
                <Pagination page={page} totalPages={totalPages} itemsPerPage={limit} totalItems={total} />
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}

export default Shop;
