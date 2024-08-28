import Image from "next/image";
import React from "react";

function Brands() {
  return (
    <section className="brands">
      <div className="container">
        <h2 className="title title--main">Brands We Love</h2>
        <div className="brands__desc">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore tempor sed do magna aliqua.</p>
        </div>
        <ul className="brands__list d-flex fw-w">
          <li className="brands__item">
            <Image fill layout="fill" objectFit="cover" className="brands__img" src="/images/brands/1.jpg" alt="brands image" />
          </li>
          <li className="brands__item">
            <Image fill layout="fill" objectFit="cover" className="brands__img" src="/images/brands/2.jpg" alt="brands image" />
          </li>
          <li className="brands__item">
            <Image fill layout="fill" objectFit="cover" className="brands__img" src="/images/brands/3.jpg" alt="brands image" />
          </li>
          <li className="brands__item">
            <Image fill layout="fill" objectFit="cover" className="brands__img" src="/images/brands/4.jpg" alt="brands image" />
          </li>
          <li className="brands__item">
            <Image fill layout="fill" objectFit="cover" className="brands__img" src="/images/brands/5.jpg" alt="brands image" />
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Brands;
