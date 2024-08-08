import React from 'react'

function Contact() {
  return (
    <main className="main">
  <div className="container">
    <section className="contact">
      <h1 className="title">contact</h1>
      <div className="breadcrumbs">
        <ul className="breadcrumbs__list d-flex">
          <li className="breadcrumbs__item">
            <a className="breadcrumbs__link" href="#">
              Home
            </a>
          </li>
          <li className="breadcrumbs__item">
            <span className="breadcrumbs__link">contact</span>
          </li>
        </ul>
      </div>
      <form className="form contact__form">
        <div className="form__fieldset">
          <legend className="title contact__heading">Fill up a Form</legend>
          <label className="form__label">
            Name
            <input
              className="form__input form__input--medium"
              type="text"
              placeholder="Your name here"
            />
          </label>
          <label className="form__label">
            Email
            <input
              className="form__input form__input--medium"
              type="email"
              placeholder="Your name here"
            />
          </label>
          <label className="form__label">
            Review
            <textarea
              className="form__textarea form__textarea--medium"
              placeholder="Your review here"
              defaultValue={""}
            />
          </label>
          <button className="btn btn--big" type="submit">
            Post
          </button>
        </div>
      </form>
      <div className="map">
        <div className="map__api" />
        <ul className="map__list accordion">
          <li className="map__item">
            <button className="accordion__btn">Germany Office</button>
            <div className="accordion__panel">
              <address className="map__address">
                575 Crescent Ave. Quakertown, PA 18951
                <a className="map__contact" href="tel:43253312523">
                  +432 533 12 523
                </a>
                <a className="map__contact" href="mailto:info@domain.com">
                  info@domain.com
                </a>
                <p className="map__schedule">Mon - Fri: 9am - 6pm</p>
              </address>
            </div>
          </li>
          <li className="map__item">
            <button className="accordion__btn">Slovakia Office</button>
            <div className="accordion__panel">
              <address className="map__address">
                575 Crescent Ave. Quakertown, PA 18951
                <a className="map__contact" href="tel:43253312523">
                  +432 533 12 523
                </a>
                <a className="map__contact" href="mailto:info@domain.com">
                  info@domain.com
                </a>
                <p className="map__schedule">Mon - Fri: 9am - 6pm</p>
              </address>
            </div>
          </li>
          <li className="map__item">
            <button className="accordion__btn">Lithuania Office</button>
            <div className="accordion__panel">
              <address className="map__address">
                575 Crescent Ave. Quakertown, PA 18951
                <a className="map__contact" href="tel:43253312523">
                  +432 533 12 523
                </a>
                <a className="map__contact" href="mailto:info@domain.com">
                  info@domain.com
                </a>
                <p className="map__schedule">Mon - Fri: 9am - 6pm</p>
              </address>
            </div>
          </li>
        </ul>
      </div>
    </section>
  </div>
</main>

  )
}

export default Contact