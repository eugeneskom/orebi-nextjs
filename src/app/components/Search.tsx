import React from "react";
import Category from "./filters/Category";
import SearchForm from "./filters/SearchForm";
import { Suspense } from "react";
import Image from "next/image";


function SearchFormSkeleton() {
  return (
    <form className="search @@small-form @@big-form @@error d-flex  ai-c">
    <label className="search__label">
      <span className="sr-only">Search input field</span>
      <input className="search__input @@small-input @@big-input" type="search" placeholder="Search Products" 
      />
    </label>
    <button className="search__btn" type="submit">
      <svg className="search__icon">
        <use xlinkHref="sprite.svg#search" />
      </svg>

      <span className="sr-only">Search button</span>
    </button>
  </form>
  );
}


function Search() {
  return (
    <div className="header__bottom">
      <div className="container">
        <div className="header__inner d-flex jc-sb ai-c fw-w">
          <div className="header__col">
            <Category />
          </div>

          <div className="header__col">
            <Suspense fallback={<SearchFormSkeleton />}>
              <SearchForm />
            </Suspense>
          </div>

          <div className="header__col">
            <ul className="header__user-cart d-flex jc-sb">
              <li className="user js_drop">
                <ul className="user__list dropdown">
                  <li className="user__item">
                    <a className="user__link btn btn--white" href="#">
                      My&nbsp;Account
                    </a>
                  </li>
                  <li className="user__item">
                    <a className="user__link btn btn--white" href="#">
                      Log Out
                    </a>
                  </li>
                </ul>
              </li>
              <li className="cart js_drop">
                <div className="cart__inner dropdown">
                  <div className="cart__top d-flex">
                    <div className="cart__photo">
                      <Image className="cart__img" width="80" height="80" src="/images/content/black-smart-w.jpg" alt="Black Smart Watch" />
                    </div>
                    <div className="cart__desc">
                      <p className="cart__title">Black Smart Watch</p>
                      <p className="cart__price">
                        {" "}
                        <span>$</span>44.00
                      </p>
                    </div>
                  </div>
                  <div className="cart__top d-flex">
                    <div className="cart__photo">
                      <Image className="cart__img" width="80" height="80" src="/images/content/black-smart-w.jpg" alt="Black Smart Watch" />
                    </div>
                    <div className="cart__desc">
                      <p className="cart__title">Black Smart Watch</p>
                      <p className="cart__price">
                        <span>$</span>44.00
                      </p>
                    </div>
                  </div>
                  <div className="cart__top d-flex">
                    <div className="cart__photo">
                      <Image className="cart__img" width="80" height="80" src="/images/content/black-smart-w.jpg" alt="Black Smart Watch" />
                    </div>
                    <div className="cart__desc">
                      <p className="cart__title">Black Smart Watch</p>
                      <p className="cart__price">
                        <span>$</span>44.00
                      </p>
                    </div>
                  </div>

                  <div className="cart__bottom">
                    <p className="cart__subtotal">
                      Subtotal: <span>$</span>44.00
                    </p>
                    <div className="cart__buttons d-flex jc-sb">
                      <a className="btn btn--white btn--cart" href="#">
                        View Cart
                      </a>
                      <a className="btn btn--white btn--cart" href="#">
                        Checkout
                      </a>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Search;
