import React from "react";
import Link from "next/link";
import Image from "next/image";
function Header() {
  return (
    <header className="header">
      <div className="container">
        <nav className="header__nav d-flex jc-sb">
          <Link className="logo" href="/">
            <Image src={`./images/logo.svg`} alt="logo of the webpage" width="65" height="15" />
          </Link>
          <input className="menu-btn" type="checkbox" id="menu-btn" />
          <label className="menu-icon">
            <span className="navicon"></span>
          </label>
          <ul className="menu d-flex">
            <li className="menu__item">
              <Link href="/" className="menu__link">
                Home
              </Link>
            </li>
            <li className="menu__item">
              <Link href="/shop" className="menu__link">
                Shop
              </Link>
            </li>
            <li className="menu__item">
              <Link href="/about" className="menu__link">
                About
              </Link>
            </li>
            <li className="menu__item">
              <Link href="/contact" className="menu__link">
                Contacts
              </Link>
            </li>
            <li className="menu__item">
              <Link href="/journal" className="menu__link">
                Journal
              </Link>
            </li>
          </ul>
          <form className="nav-lang">
            <label className="nav-lang__label">
              <input className="nav-lang__radio" name="language" type="radio" id="lang-en" checked />
              <span>en</span>
            </label>
            <label className="nav-lang__label">
              <input className="nav-lang__radio" name="language" type="radio" id="lang-ru" />
              <span>ru</span>
            </label>
          </form>
        </nav>
      </div>
    </header>
  );
}

export default Header;
