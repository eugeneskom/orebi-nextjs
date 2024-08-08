import React from 'react'
import Image from 'next/image'
import ProductCard from '../components/ProductCard'
import { Product } from '@/types/products';
import { getProducts } from '@/libs';
async function Shop() {

  const productsData = await getProducts();
  const products: Product[] = productsData.products.slice(0, 40); // Limit to 4 products for this example
  console.log("productsData", productsData);
  return (
    <main className="main">
  <div className="container">
    <div className="shop-wrapper">
      <h1 className="title">Product</h1>
      <div className="breadcrumbs">
        <ul className="breadcrumbs__list d-flex">
          <li className="breadcrumbs__item">
            <a className="breadcrumbs__link" href="#">
              Home
            </a>
          </li>
          <li className="breadcrumbs__item">
            <span className="breadcrumbs__link">Product</span>
          </li>
        </ul>
      </div>
      <section className="products">
        <div className="products__inner d-flex jc-sb">
          <a className="products__filter-btn" href="#filters">
            <Image
              fill
              className="products__btn-svg"
              src="/images/icons/filter-btn.svg"
              alt=""
            />
          </a>
          <ul className="filters" id="filters">
            <li className="filters__item filters-category">
              <div className="filters__top d-flex jc-sb">
                <h2 className="filters__title">Shop by Categor</h2>
              </div>
              <form className="accordion filters-category__form" action="#">
                <label className="filters__label d-flex fd-col">
                  <span className="sr-only">Click to open sub menu</span>
                  <input
                    className="filters__input filters-category__input"
                    type="checkbox"
                  />
                  <span className="accordion__btn filters__text">
                    TV &amp; Video
                  </span>
                  <ul className="accordion__panel filters__sublist">
                    <li className="accordion__item filters__subitem">
                      <a className="filters__sublink" href="#">
                        Smart TV
                      </a>
                    </li>
                    <li className="accordion__item filters__subitem">
                      <a className="filters__sublink" href="#">
                        Stupid TV
                      </a>
                    </li>
                    <li className="accordion__item filters__subitem">
                      <a className="filters__sublink" href="#">
                        Baclajan TV
                      </a>
                    </li>
                  </ul>
                </label>
                <label className="filters__label d-flex jc-sb">
                  <input
                    className="filters__input filters-category__input"
                    type="checkbox"
                  />
                  <span className="filters__text">Computers</span>
                </label>
                <label className="filters__label d-flex fd-col">
                  <span className="sr-only">Click to open sub menu</span>
                  <input
                    className="filters__input filters-category__input"
                    type="checkbox"
                  />
                  <span className="accordion__btn filters__text">
                    Camera &amp; Photo
                  </span>
                  <ul className="accordion__panel filters__sublist">
                    <li className="accordion__item filters__subitem">
                      <a className="filters__sublink" href="#">
                        Smart TV
                      </a>
                    </li>
                    <li className="accordion__item filters__subitem">
                      <a className="filters__sublink" href="#">
                        Stupid TV
                      </a>
                    </li>
                    <li className="accordion__item filters__subitem">
                      <a className="filters__sublink" href="#">
                        Baclajan TV
                      </a>
                    </li>
                  </ul>
                </label>
                <label className="filters__label d-flex jc-sb">
                  <input
                    className="filters__input filters-category__input"
                    type="checkbox"
                  />
                  <span className="filters__text">Wearable Technology</span>
                </label>
                <label className="filters__label d-flex jc-sb">
                  <input
                    className="filters__input filters-category__input"
                    type="checkbox"
                  />
                  <span className="filters__text">Cell Phones</span>
                </label>
              </form>
            </li>
            <li className="filters__item filters-color">
              <div className="filters__top d-flex jc-sb">
                <h2 className="filters__title">Shop by Color</h2>
                <Image
                  width={10} 
                  height={10}
                  className="filters__toggle"
                  src="/images/icons/triangle.svg"
                  alt=""
                />
              </div>
              <form
                className="filters-color__form filters__form--dropdown"
                action="#"
              >
                <label className="filters__label filters-color__label d-flex jc-sb">
                  <input
                    className="filters__input filters-color__input"
                    type="checkbox"
                  />
                  <span className="filters__text filters-color__text filters-color__text--black">
                    Black
                  </span>
                </label>
                <label className="filters__label filters-color__label d-flex jc-sb">
                  <input
                    className="filters__input filters-color__input"
                    type="checkbox"
                  />
                  <span className="filters__text filters-color__text  filters-color__text--pink">
                    Pink
                  </span>
                </label>
                <label className="filters__label filters-color__label d-flex jc-sb">
                  <input
                    className="filters__input filters-color__input"
                    type="checkbox"
                  />
                  <span className="filters__text filters-color__text filters-color__text--green">
                    Green
                  </span>
                </label>
                <label className="filters__label filters-color__label d-flex jc-sb">
                  <input
                    className="filters__input filters-color__input"
                    type="checkbox"
                  />
                  <span className="filters__text filters-color__text filters-color__text--gray">
                    Gray
                  </span>
                </label>
                <label className="filters__label filters-color__label d-flex jc-sb">
                  <input
                    className="filters__input filters-color__input"
                    type="checkbox"
                  />
                  <span className="filters__text filters-color__text filters-color__text--turquoise">
                    Еurquoise
                  </span>
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
              <form
                className="filters__form filters__form--dropdown"
                action="#"
              >
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
                <button className="shop-content__btn button-grid shop-content__btn--active">
                  <svg className="shop-content__svg">
                    <use xlinkHref="sprite.svg#grid-filter-btn" />
                  </svg>
                </button>
                <button className="shop-content__btn button-list d-flex jc-c ai-c">
                  <svg className="shop-content__svg">
                    <use xlinkHref="sprite.svg#grid-list-btn" />
                  </svg>
                </button>
              </div>
              <form className="shop-content__form d-flex" action="">
                <label>
                  {" "}
                  <span>Sort by:</span>
                  <select
                    name=""
                    id=""
                    className="shop-content__select-by select-style"
                  >
                    <option value={1}>Featured</option>
                    <option value={1}>2</option>
                    <option value={1}>3</option>
                    <option value={1}>4</option>
                  </select>
                </label>
                <label>
                  {" "}
                  <span>Show:</span>
                  <select
                    name=""
                    id=""
                    className="shop-content__select-show select-style"
                  >
                    <option value={1}>36</option>
                    <option value={1}>48</option>
                    <option value={1}>60</option>
                    <option value={1}>72</option>
                  </select>
                </label>
              </form>
            </div>
            <ul className="shop-products d-flex jc-sb fw-w">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" >
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
            </ul>
            <div className="pagination d-flex jc-sb">
              <ul className="pagination__list d-flex">
                <li className="pagination__item">
                  <span className="pagination__link pagination__link--active">
                    1
                  </span>
                </li>
                <li className="pagination__item">
                  <a className="pagination__link" href="#">
                    2
                  </a>
                </li>
                <li className="pagination__item">
                  <a className="pagination__link" href="#">
                    3
                  </a>
                </li>
                <li className="pagination__item">
                  <a className="pagination__link" href="#">
                    4
                  </a>
                </li>
                <li className="pagination__item">
                  <span className="pagination__link">...</span>
                </li>
                <li className="pagination__item">
                  <a className="pagination__link" href="#">
                    10
                  </a>
                </li>
              </ul>
              <p>
                Products from <span>1</span> to <span>12</span> of{" "}
                <span>80</span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</main>

  )
}

export default Shop