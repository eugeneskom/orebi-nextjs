import React from "react";
import Image from "next/image";
import BrandImage from '../../../public/images/about/brands.jpg';
import StoreImage from '../../../public/images/about/store.jpg';

function About() {
  return (
    <main className="main">
      <section className="about">
        <div className="container">
          <h1 className="title about__title">About</h1>
          <div className="breadcrumbs">
            <ul className="breadcrumbs__list d-flex">
              <li className="breadcrumbs__item">
                <a className="breadcrumbs__link" href="#">
                  Home
                </a>
              </li>
              <li className="breadcrumbs__item">
                <span className="breadcrumbs__link">About</span>
              </li>
            </ul>
          </div>
          <ul className="about__list d-flex jc-sb">
            <li className="about__item">
              <Image className="about__img" src={BrandImage} alt="brands image"  />
              <a className="btn about__link" href="">
                our&nbsp;brands
              </a>
            </li>
            <li className="about__item">
              <Image className="about__img" src={StoreImage} alt="stores image"  />
              <a className="btn about__link" href="">
                our&nbsp;stores
              </a>
            </li>
          </ul>
          <div className="about__intro">
            <p>Orebi is one of the world’s leading ecommerce brands and is internationally recognized for celebrating the essence of classic Worldwide cool looking style.</p>
          </div>
          <ul className="about__columns d-flex">
            <li className="about__col">
              <h2 className="about__caption">our vision</h2>
              <div className="about__text">
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
              </div>
            </li>
            <li className="about__col">
              <h2 className="about__caption">our story</h2>
              <div className="about__text">
                <p>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five
                  centuries, but also the leap into electronic.
                </p>
              </div>
            </li>
            <li className="about__col">
              <h2 className="about__caption">our brands</h2>
              <div className="about__text">
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}

export default About;
