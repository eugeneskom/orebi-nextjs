import Image from 'next/image'
import React from 'react'

function Special() {
  return (
    <section className="special">
    <div className="container">
      <h2 className="title title--main">Special Offers</h2>
      <ul className="special__list d-flex">
        <li className="special__product">
          <article className="product">
            <div className="product__top">
              <div className="product__new">New</div>
              <Image fill layout="fill" objectFit="cover" className="product__img" src="/images/products/12.jpg" alt="product" />
              <div className="product__popup">
                <ul className="product__list">
                  <li className="product__item">
                    <button className="product__link product__link--wish" type="button">
                      Add to Wish List
                    </button>
                  </li>
                  <li className="product__item">
                    <button className="product__link product__link--compare" type="button">
                      Compare
                    </button>
                  </li>
                  <li className="product__item">
                    <button className="product__link product__link--cart" type="button">
                      Add to Cart
                    </button>
                  </li>
                </ul>
              </div>
            </div>
            <div className="product__bottom d-flex jc-sb">
              <div className="product__desc">
                <h3 className="product__name">Basic Crew Neck Tee</h3>
                <p className="product__color">Black</p>
              </div>
              <p className="product__price">
                {" "}
                <span>$</span>44.00
              </p>
              <div className="product__content">
                <div className="product__text">
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci eos perspiciatis iure ullam exercitationem quasi nulla reprehenderit earum saepe? Id! Lorem, ipsum dolor sit amet consectetur adipisicing elit. At, quis!</p>
                </div>
                <button className="product__btn btn btn--big">Add to Cart</button>
              </div>
            </div>
          </article>
        </li>
        <li className="special__product">
          <article className="product">
            <div className="product__top">
              <div className="product__new">New</div>
              <Image fill layout="fill" objectFit="cover" className="product__img" src="/images/products/13.jpg" alt="product" />
              <div className="product__popup">
                <ul className="product__list">
                  <li className="product__item">
                    <button className="product__link product__link--wish" type="button">
                      Add to Wish List
                    </button>
                  </li>
                  <li className="product__item">
                    <button className="product__link product__link--compare" type="button">
                      Compare
                    </button>
                  </li>
                  <li className="product__item">
                    <button className="product__link product__link--cart" type="button">
                      Add to Cart
                    </button>
                  </li>
                </ul>
              </div>
            </div>
            <div className="product__bottom d-flex jc-sb">
              <div className="product__desc">
                <h3 className="product__name">Basic Crew Neck Tee</h3>
                <p className="product__color">Black</p>
              </div>
              <p className="product__price">
                {" "}
                <span>$</span>44.00
              </p>
              <div className="product__content">
                <div className="product__text">
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci eos perspiciatis iure ullam exercitationem quasi nulla reprehenderit earum saepe? Id! Lorem, ipsum dolor sit amet consectetur adipisicing elit. At, quis!</p>
                </div>
                <button className="product__btn btn btn--big">Add to Cart</button>
              </div>
            </div>
          </article>
        </li>
        <li className="special__product">
          <article className="product">
            <div className="product__top">
              <div className="product__new">New</div>
              <Image fill layout="fill" objectFit="cover" className="product__img" src="/images/products/14.jpg" alt="product" />
              <div className="product__popup">
                <ul className="product__list">
                  <li className="product__item">
                    <button className="product__link product__link--wish" type="button">
                      Add to Wish List
                    </button>
                  </li>
                  <li className="product__item">
                    <button className="product__link product__link--compare" type="button">
                      Compare
                    </button>
                  </li>
                  <li className="product__item">
                    <button className="product__link product__link--cart" type="button">
                      Add to Cart
                    </button>
                  </li>
                </ul>
              </div>
            </div>
            <div className="product__bottom d-flex jc-sb">
              <div className="product__desc">
                <h3 className="product__name">Basic Crew Neck Tee</h3>
                <p className="product__color">Black</p>
              </div>
              <p className="product__price">
                {" "}
                <span>$</span>44.00
              </p>
              <div className="product__content">
                <div className="product__text">
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci eos perspiciatis iure ullam exercitationem quasi nulla reprehenderit earum saepe? Id! Lorem, ipsum dolor sit amet consectetur adipisicing elit. At, quis!</p>
                </div>
                <button className="product__btn btn btn--big">Add to Cart</button>
              </div>
            </div>
          </article>
        </li>
        <li className="special__product">
          <article className="product">
            <div className="product__top">
              <div className="product__new">New</div>
              <Image fill layout="fill" objectFit="cover" className="product__img" src="/images/products/15.jpg" alt="product" />
              <div className="product__popup">
                <ul className="product__list">
                  <li className="product__item">
                    <button className="product__link product__link--wish" type="button">
                      Add to Wish List
                    </button>
                  </li>
                  <li className="product__item">
                    <button className="product__link product__link--compare" type="button">
                      Compare
                    </button>
                  </li>
                  <li className="product__item">
                    <button className="product__link product__link--cart" type="button">
                      Add to Cart
                    </button>
                  </li>
                </ul>
              </div>
            </div>
            <div className="product__bottom d-flex jc-sb">
              <div className="product__desc">
                <h3 className="product__name">Basic Crew Neck Tee</h3>
                <p className="product__color">Black</p>
              </div>
              <p className="product__price">
                {" "}
                <span>$</span>44.00
              </p>
              <div className="product__content">
                <div className="product__text">
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci eos perspiciatis iure ullam exercitationem quasi nulla reprehenderit earum saepe? Id! Lorem, ipsum dolor sit amet consectetur adipisicing elit. At, quis!</p>
                </div>
                <button className="product__btn btn btn--big">Add to Cart</button>
              </div>
            </div>
          </article>
        </li>
      </ul>
    </div>
  </section>
  )
}

export default Special