"use client"
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";
function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  }
  return (
    <header className="header relative z-50">
      <div className="container">
        {/* // header__nav */}
        {/* d-flex jc-sb  */}
        <nav className={clsx( "flex", "justify-between", "items-center", "flex-wrap", "md:flex-nowrap", "md:py-5")}>
          <Link href="/">
            <Image src={`./images/logo.svg`} alt="logo of the webpage" width="65" height="15" />
          </Link>
          <input className="menu-btn" type="checkbox" id="menu-btn" />
          <label className="menu-icon" onClick={toggleMenu}>
            <span className="navicon"></span>
          </label>
          <ul className={clsx("md:flex", isMenuOpen ? "block absolute w-full z-50 bg-white left-0 py-11" : "hidden")}>
            <li className="md:mr-9">
              <Link href="/" className="">
                Home
              </Link>
            </li>
            <li className="md:mr-9">
              <Link href="/shop" className={clsx(
                isMenuOpen ? "block" : "",
              )}>
                Shop
              </Link>
            </li>
            <li className="md:mr-9">
              <Link href="/about" className={clsx(
                isMenuOpen ? "block" : "",
              )}>
                About
              </Link>
            </li>
            <li className="md:mr-9">
              <Link href="/contact" className={clsx(
                isMenuOpen ? "block" : "",
              )}>
                Contacts
              </Link>
            </li>
            <li className="md:mr-9">
              <Link href="/journal" className={clsx(
                isMenuOpen ? "block" : "",
              )}>
                Journal
              </Link>
            </li>
          </ul>
          {/* nav-lang */}
          <form className=" block md-flex uppercase w-full md:w-auto order-3 md:order-1">
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
