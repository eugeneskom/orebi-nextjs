import Image from 'next/image'
import React from 'react'

import logo from '/images/logo.svg'

function Footer() {
  return (
    <footer className="footer">
    <div className="container">
      <div className="footer__top">
        <ul className="footer__list d-flex jc-sb">
          <li className="footer__item">
            <p className="footer__heading">menu</p>
            <ul className="category">
              <li className="category__item">
                <a href="#" className="category__link">
                  Home
                </a>
              </li>
              <li className="category__item">
                <a href="#" className="category__link">
                  Shop
                </a>
              </li>
              <li className="category__item">
                <a href="#" className="category__link">
                  About
                </a>
              </li>
              <li className="category__item">
                <a href="#" className="category__link">
                  Contact
                </a>
              </li>
              <li className="category__item">
                <a href="#" className="category__link">
                  Journal
                </a>
              </li>
            </ul>
          </li>
          <li className="footer__item">
            <p className="footer__heading">SHOP</p>
            <ul className="category">
              <li className="category__item">
                <a href="#" className="category__link">
                  Category 1
                </a>
              </li>
              <li className="category__item">
                <a href="#" className="category__link">
                  Category 2
                </a>
              </li>
              <li className="category__item">
                <a href="#" className="category__link">
                  Category 3
                </a>
              </li>
              <li className="category__item">
                <a href="#" className="category__link">
                  Category 4
                </a>
              </li>
              <li className="category__item">
                <a href="#" className="category__link">
                  Category 5
                </a>
              </li>
            </ul>
          </li>
          <li className="footer__item">
            <p className="footer__heading">HELP</p>
            <ul className="category">
              <li className="category__item">
                <a href="#" className="category__link">
                  Privacy Policy
                </a>
              </li>
              <li className="category__item">
                <a href="#" className="category__link">
                  Terms &amp; Conditions
                </a>
              </li>
              <li className="category__item">
                <a href="#" className="category__link">
                  Special E-shop
                </a>
              </li>
              <li className="category__item">
                <a href="#" className="category__link">
                  Shipping
                </a>
              </li>
              <li className="category__item">
                <a href="#" className="category__link">
                  Secure Payments
                </a>
              </li>
            </ul>
          </li>
        </ul>
        <address className="contacts">
          <a href="tel:+0526115711" className="contacts__link">
            (052) 611-5711
          </a>
          <a href="mailto:company@domain.com" className="contacts__link">
            company@domain.com
          </a>
          <p className="contacts__address">
            575 Crescent Ave. Quakertown, PA 18951
          </p>
        </address>
        <a href="#" className="logo footer__logo">
          <Image width={66} height={16} src={`/images/logo.svg`} alt="logo of the website" />
        </a>
      </div>
      <div className="footer__bottom d-flex jc-sb ai-c">
        <ul className="social d-flex ai-c">
          <li className="social__item">
            <a href="" className="social__link">
              <span className="sr-only">Facebook</span>
              <svg className="social__svg">
                <use xlinkHref="sprite.svg#facebook" />
              </svg>
            </a>
          </li>
          <li className="social__item">
            <a href="" className="social__link">
              <span className="sr-only">Linkedin</span>
              <svg className="social__svg">
                <use xlinkHref="sprite.svg#linkedin" />
              </svg>
            </a>
          </li>
          <li className="social__item">
            <a href="" className="social__link">
              <span className="sr-only">Instagram</span>
              <svg className="social__svg">
                <use xlinkHref="sprite.svg#instagram" />
              </svg>
            </a>
          </li>
        </ul>
        <p className="footer__copy">
          2020 Orebi Minimal eCommerce Sketch Template by Adveits
        </p>
      </div>
    </div>
  </footer>
  
  )
}

export default Footer