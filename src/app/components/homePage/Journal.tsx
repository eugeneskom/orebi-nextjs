import Image from 'next/image'
import React from 'react'

function Journal() {
  return (
    <section className="journal">
    <div className="container">
      <h2 className="title title--main">Journal</h2>
      <ul className="journal__list d-flex fw-w">
        <li className="journal__item journal__item--main">
          <article className="article">
            <a className="article__link" href="#">
              <div className="article__image-box">
                <Image fill layout="fill" objectFit="cover" className="article__img" src="/images/journal/1.jpg" alt="article image" />
              </div>
              <p className="article__category">Category</p>
              <h2 className="article__heading">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h2>
              <div className="article__desc">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
            </a>
          </article>
        </li>
        <li className="journal__item journal__item--main">
          <article className="article">
            <a className="article__link" href="#">
              <div className="article__image-box">
                <Image fill layout="fill" objectFit="cover" className="article__img" src="/images/journal/2.jpg" alt="article image" />
              </div>
              <p className="article__category">Category</p>
              <h2 className="article__heading">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h2>
              <div className="article__desc">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
            </a>
          </article>
        </li>
        <li className="journal__item journal__item--main">
          <article className="article">
            <a className="article__link" href="#">
              <div className="article__image-box">
                <Image fill layout="fill" objectFit="cover" className="article__img" src="/images/journal/3.jpg" alt="article image" />
              </div>
              <p className="article__category">Category</p>
              <h2 className="article__heading">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h2>
              <div className="article__desc">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
            </a>
          </article>
        </li>
      </ul>
    </div>
  </section>
  )
}

export default Journal