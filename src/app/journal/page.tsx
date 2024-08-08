import React from "react";
import Image from "next/image";
function Journal() {
  return (
    <>
      <div className="breadcrumbs">
        <div className="container">
          <h1 className="title breadcrumbs__title">Journal</h1>
          <ul className="breadcrumbs__list d-flex">
            <li className="breadcrumbs__item">
              <a className="breadcrumbs__link" href="#">
                Home
              </a>
            </li>
            <li className="breadcrumbs__item">
              <span className="breadcrumbs__link">Journal</span>
            </li>
          </ul>
        </div>
      </div>
      <main className="main">
        <div className="container">
          <section className="journal">
            <ul className="journal__feed">
              <li className="journal__article">
                <Image width={100} height={100} className="journal__img" src="/images/journal/1.jpg" alt="photo of an article" />
              </li>
            </ul>
          </section>
        </div>
      </main>
    </>
  );
}

export default Journal;
