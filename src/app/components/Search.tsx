import React from "react";
import Category from "./filters/Category";
import SearchForm from "./filters/SearchForm";
import { Suspense } from "react";
import Image from "next/image";

function Search() {
  return (
    <div className="header__bottom">
      <div className="container">
        <div className="header__inner d-flex jc-sb ai-c fw-w">
          <div className="header__col">
            <Category />
          </div>

          <div className="header__col">
            <Suspense fallback={<div>Loading...</div>}>
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
