import React from "react";
import Link from "next/link";
import Search from "./Search";
function Header() {
  return (
    <header className="header">
      <div className="container">
        <nav className="header__nav d-flex jc-sb">
          <Link className="logo" href="/">
            <img src="images/logo.svg" alt="logo of the webpage" width="65" height="15" />
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


      {/* <div className="header__bottom">
        <div className="container">
          <div className="header__inner d-flex jc-sb ai-c fw-w">
            <div className="header__col">
              <nav className="dropdown-menu js_drop" id="my-menu">
                Shop by Category
                <ul className="dropdown-menu__list dropdown">
                  <li className="dropdown-menu__item">
                    <a className="dropdown-menu__group" href="#">
                      Accesories
                    </a>
                    <ul className="dropdown-menu__submenu">
                      <li className="dropdown-menu__categories">
                        <a className="dropdown-menu__heading" href="#">
                          Phones
                        </a>
                        <ul className="dropdown-menu__sublist">
                          <li className="dropdown-menu__subitem">
                            <a className="dropdown-menu__link" href="#">
                              Phone 1
                            </a>
                          </li>
                          <li className="dropdown-menu__subitem">
                            <a className="dropdown-menu__link" href="#">
                              Phone 2
                            </a>
                          </li>
                          <li className="dropdown-menu__subitem">
                            <a className="dropdown-menu__link" href="#">
                              Phone 3
                            </a>
                          </li>
                          <li className="dropdown-menu__subitem">
                            <a className="dropdown-menu__link" href="#">
                              Phone 4
                            </a>
                          </li>
                          <li className="dropdown-menu__subitem">
                            <a className="dropdown-menu__link" href="#">
                              Phone 5
                            </a>
                          </li>
                          <li className="dropdown-menu__subitem">
                            <a className="dropdown-menu__link" href="#">
                              Phone 6
                            </a>
                          </li>
                          <li className="dropdown-menu__subitem">
                            <a className="dropdown-menu__link" href="#">
                              Phone 7
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="dropdown-menu__categories">
                        <a className="dropdown-menu__heading" href="#">
                          Computers
                        </a>
                        <ul className="dropdown-menu__sublist">
                          <li className="dropdown-menu__subitem">
                            <a className="dropdown-menu__link" href="#">
                              Computer 1
                            </a>
                          </li>
                          <li className="dropdown-menu__subitem">
                            <a className="dropdown-menu__link" href="#">
                              Computer 2
                            </a>
                          </li>
                          <li className="dropdown-menu__subitem">
                            <a className="dropdown-menu__link" href="#">
                              Computer 3
                            </a>
                          </li>
                          <li className="dropdown-menu__subitem">
                            <a className="dropdown-menu__link" href="#">
                              Computer 4
                            </a>
                          </li>
                          <li className="dropdown-menu__subitem">
                            <a className="dropdown-menu__link" href="#">
                              Computer 5
                            </a>
                          </li>
                          <li className="dropdown-menu__subitem">
                            <a className="dropdown-menu__link" href="#">
                              Computer 6
                            </a>
                          </li>
                          <li className="dropdown-menu__subitem">
                            <a className="dropdown-menu__link" href="#">
                              Computer 7
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="dropdown-menu__categories">
                        <a className="dropdown-menu__heading" href="#">
                          Smart watches
                        </a>
                        <ul className="dropdown-menu__sublist">
                          <li className="dropdown-menu__subitem">
                            <a className="dropdown-menu__link" href="#">
                              Smart watches 1
                            </a>
                          </li>
                          <li className="dropdown-menu__subitem">
                            <a className="dropdown-menu__link" href="#">
                              Smart watches 2
                            </a>
                          </li>
                          <li className="dropdown-menu__subitem">
                            <a className="dropdown-menu__link" href="#">
                              Smart watches 3
                            </a>
                          </li>
                          <li className="dropdown-menu__subitem">
                            <a className="dropdown-menu__link" href="#">
                              Smart watches 4
                            </a>
                          </li>
                          <li className="dropdown-menu__subitem">
                            <a className="dropdown-menu__link" href="#">
                              Smart watches 5
                            </a>
                          </li>
                          <li className="dropdown-menu__subitem">
                            <a className="dropdown-menu__link" href="#">
                              Smart watches 6
                            </a>
                          </li>
                          <li className="dropdown-menu__subitem">
                            <a className="dropdown-menu__link" href="#">
                              Smart watches 7
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="dropdown-menu__categories">
                        <a className="dropdown-menu__heading" href="#">
                          Cameras
                        </a>
                        <ul className="dropdown-menu__sublist">
                          <li className="dropdown-menu__subitem">
                            <a className="dropdown-menu__link" href="#">
                              Camera 1
                            </a>
                          </li>
                          <li className="dropdown-menu__subitem">
                            <a className="dropdown-menu__link" href="#">
                              Camera 2
                            </a>
                          </li>
                          <li className="dropdown-menu__subitem">
                            <a className="dropdown-menu__link" href="#">
                              Camera 3
                            </a>
                          </li>
                          <li className="dropdown-menu__subitem">
                            <a className="dropdown-menu__link" href="#">
                              Camera 4
                            </a>
                          </li>
                          <li className="dropdown-menu__subitem">
                            <a className="dropdown-menu__link" href="#">
                              Camera 5
                            </a>
                          </li>
                          <li className="dropdown-menu__subitem">
                            <a className="dropdown-menu__link" href="#">
                              Camera 6
                            </a>
                          </li>
                          <li className="dropdown-menu__subitem">
                            <a className="dropdown-menu__link" href="#">
                              Camera 7
                            </a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li className="dropdown-menu__item">
                    <a href="#" className="dropdown-menu__group">
                      Furniture
                    </a>
                    <ul className="dropdown-menu__submenu">
                      <li className="dropdown-menu__categories">
                        <a className="dropdown-menu__heading" href="#">
                          Phones
                        </a>
                        <ul className="dropdown-menu__sublist">
                          <li className="dropdown-menu__subitem">
                            <a className="dropdown-menu__link" href="#">
                              Phone 1
                            </a>
                          </li>
                          <li className="dropdown-menu__subitem">
                            <a className="dropdown-menu__link" href="#">
                              Phone 2
                            </a>
                          </li>
                          <li className="dropdown-menu__subitem">
                            <a className="dropdown-menu__link" href="#">
                              Phone 3
                            </a>
                          </li>
                          <li className="dropdown-menu__subitem">
                            <a className="dropdown-menu__link" href="#">
                              Phone 4
                            </a>
                          </li>
                          <li className="dropdown-menu__subitem">
                            <a className="dropdown-menu__link" href="#">
                              Phone 5
                            </a>
                          </li>
                          <li className="dropdown-menu__subitem">
                            <a className="dropdown-menu__link" href="#">
                              Phone 6
                            </a>
                          </li>
                          <li className="dropdown-menu__subitem">
                            <a className="dropdown-menu__link" href="#">
                              Phone 7
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="dropdown-menu__categories">
                        <a className="dropdown-menu__heading" href="#">
                          Computers
                        </a>
                        <ul className="dropdown-menu__sublist">
                          <li className="dropdown-menu__subitem">
                            <a className="dropdown-menu__link" href="#">
                              Computer 1
                            </a>
                          </li>
                          <li className="dropdown-menu__subitem">
                            <a className="dropdown-menu__link" href="#">
                              Computer 2
                            </a>
                          </li>
                          <li className="dropdown-menu__subitem">
                            <a className="dropdown-menu__link" href="#">
                              Computer 3
                            </a>
                          </li>
                          <li className="dropdown-menu__subitem">
                            <a className="dropdown-menu__link" href="#">
                              Computer 4
                            </a>
                          </li>
                          <li className="dropdown-menu__subitem">
                            <a className="dropdown-menu__link" href="#">
                              Computer 5
                            </a>
                          </li>
                          <li className="dropdown-menu__subitem">
                            <a className="dropdown-menu__link" href="#">
                              Computer 6
                            </a>
                          </li>
                          <li className="dropdown-menu__subitem">
                            <a className="dropdown-menu__link" href="#">
                              Computer 7
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="dropdown-menu__categories">
                        <a className="dropdown-menu__heading" href="#">
                          Smart watches
                        </a>
                        <ul className="dropdown-menu__sublist">
                          <li className="dropdown-menu__subitem">
                            <a className="dropdown-menu__link" href="#">
                              Smart watches 1
                            </a>
                          </li>
                          <li className="dropdown-menu__subitem">
                            <a className="dropdown-menu__link" href="#">
                              Smart watches 2
                            </a>
                          </li>
                          <li className="dropdown-menu__subitem">
                            <a className="dropdown-menu__link" href="#">
                              Smart watches 3
                            </a>
                          </li>
                          <li className="dropdown-menu__subitem">
                            <a className="dropdown-menu__link" href="#">
                              Smart watches 4
                            </a>
                          </li>
                          <li className="dropdown-menu__subitem">
                            <a className="dropdown-menu__link" href="#">
                              Smart watches 5
                            </a>
                          </li>
                          <li className="dropdown-menu__subitem">
                            <a className="dropdown-menu__link" href="#">
                              Smart watches 6
                            </a>
                          </li>
                          <li className="dropdown-menu__subitem">
                            <a className="dropdown-menu__link" href="#">
                              Smart watches 7
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="dropdown-menu__categories">
                        <a className="dropdown-menu__heading" href="#">
                          Cameras
                        </a>
                        <ul className="dropdown-menu__sublist">
                          <li className="dropdown-menu__subitem">
                            <a className="dropdown-menu__link" href="#">
                              Camera 1
                            </a>
                          </li>
                          <li className="dropdown-menu__subitem">
                            <a className="dropdown-menu__link" href="#">
                              Camera 2
                            </a>
                          </li>
                          <li className="dropdown-menu__subitem">
                            <a className="dropdown-menu__link" href="#">
                              Camera 3
                            </a>
                          </li>
                          <li className="dropdown-menu__subitem">
                            <a className="dropdown-menu__link" href="#">
                              Camera 4
                            </a>
                          </li>
                          <li className="dropdown-menu__subitem">
                            <a className="dropdown-menu__link" href="#">
                              Camera 5
                            </a>
                          </li>
                          <li className="dropdown-menu__subitem">
                            <a className="dropdown-menu__link" href="#">
                              Camera 6
                            </a>
                          </li>
                          <li className="dropdown-menu__subitem">
                            <a className="dropdown-menu__link" href="#">
                              Camera 7
                            </a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li className="dropdown-menu__item">
                    <a className="dropdown-menu__group" href="#">
                      Electronics
                    </a>
                    <ul className="dropdown-menu__submenu">
                      <li className="dropdown-menu__categories">
                        <a className="dropdown-menu__heading" href="#">
                          Phones
                        </a>
                        <ul className="dropdown-menu__sublist">
                          <li className="dropdown-menu__subitem">
                            <a className="dropdown-menu__link" href="#">
                              Phone 1
                            </a>
                          </li>
                          <li className="dropdown-menu__subitem">
                            <a className="dropdown-menu__link" href="#">
                              Phone 2
                            </a>
                          </li>
                          <li className="dropdown-menu__subitem">
                            <a className="dropdown-menu__link" href="#">
                              Phone 3
                            </a>
                          </li>
                          <li className="dropdown-menu__subitem">
                            <a className="dropdown-menu__link" href="#">
                              Phone 4
                            </a>
                          </li>
                          <li className="dropdown-menu__subitem">
                            <a className="dropdown-menu__link" href="#">
                              Phone 5
                            </a>
                          </li>
                          <li className="dropdown-menu__subitem">
                            <a className="dropdown-menu__link" href="#">
                              Phone 6
                            </a>
                          </li>
                          <li className="dropdown-menu__subitem">
                            <a className="dropdown-menu__link" href="#">
                              Phone 7
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="dropdown-menu__categories">
                        <a className="dropdown-menu__heading" href="#">
                          Computers
                        </a>
                        <ul className="dropdown-menu__sublist">
                          <li className="dropdown-menu__subitem">
                            <a className="dropdown-menu__link" href="#">
                              Computer 1
                            </a>
                          </li>
                          <li className="dropdown-menu__subitem">
                            <a className="dropdown-menu__link" href="#">
                              Computer 2
                            </a>
                          </li>
                          <li className="dropdown-menu__subitem">
                            <a className="dropdown-menu__link" href="#">
                              Computer 3
                            </a>
                          </li>
                          <li className="dropdown-menu__subitem">
                            <a className="dropdown-menu__link" href="#">
                              Computer 4
                            </a>
                          </li>
                          <li className="dropdown-menu__subitem">
                            <a className="dropdown-menu__link" href="#">
                              Computer 5
                            </a>
                          </li>
                          <li className="dropdown-menu__subitem">
                            <a className="dropdown-menu__link" href="#">
                              Computer 6
                            </a>
                          </li>
                          <li className="dropdown-menu__subitem">
                            <a className="dropdown-menu__link" href="#">
                              Computer 7
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="dropdown-menu__categories">
                        <a className="dropdown-menu__heading" href="#">
                          Smart watches
                        </a>
                        <ul className="dropdown-menu__sublist">
                          <li className="dropdown-menu__subitem">
                            <a className="dropdown-menu__link" href="#">
                              Smart watches 1
                            </a>
                          </li>
                          <li className="dropdown-menu__subitem">
                            <a className="dropdown-menu__link" href="#">
                              Smart watches 2
                            </a>
                          </li>
                          <li className="dropdown-menu__subitem">
                            <a className="dropdown-menu__link" href="#">
                              Smart watches 3
                            </a>
                          </li>
                          <li className="dropdown-menu__subitem">
                            <a className="dropdown-menu__link" href="#">
                              Smart watches 4
                            </a>
                          </li>
                          <li className="dropdown-menu__subitem">
                            <a className="dropdown-menu__link" href="#">
                              Smart watches 5
                            </a>
                          </li>
                          <li className="dropdown-menu__subitem">
                            <a className="dropdown-menu__link" href="#">
                              Smart watches 6
                            </a>
                          </li>
                          <li className="dropdown-menu__subitem">
                            <a className="dropdown-menu__link" href="#">
                              Smart watches 7
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="dropdown-menu__categories">
                        <a className="dropdown-menu__heading" href="#">
                          Cameras
                        </a>
                        <ul className="dropdown-menu__sublist">
                          <li className="dropdown-menu__subitem">
                            <a className="dropdown-menu__link" href="#">
                              Camera 1
                            </a>
                          </li>
                          <li className="dropdown-menu__subitem">
                            <a className="dropdown-menu__link" href="#">
                              Camera 2
                            </a>
                          </li>
                          <li className="dropdown-menu__subitem">
                            <a className="dropdown-menu__link" href="#">
                              Camera 3
                            </a>
                          </li>
                          <li className="dropdown-menu__subitem">
                            <a className="dropdown-menu__link" href="#">
                              Camera 4
                            </a>
                          </li>
                          <li className="dropdown-menu__subitem">
                            <a className="dropdown-menu__link" href="#">
                              Camera 5
                            </a>
                          </li>
                          <li className="dropdown-menu__subitem">
                            <a className="dropdown-menu__link" href="#">
                              Camera 6
                            </a>
                          </li>
                          <li className="dropdown-menu__subitem">
                            <a className="dropdown-menu__link" href="#">
                              Camera 7
                            </a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li className="dropdown-menu__item">
                    <a className="dropdown-menu__group" href="#">
                      Clothes
                    </a>
                    <ul className="dropdown-menu__submenu">
                      <li className="dropdown-menu__categories">
                        <a className="dropdown-menu__heading" href="#">
                          Phones
                        </a>
                        <ul className="dropdown-menu__sublist">
                          <li className="dropdown-menu__subitem">
                            <a className="dropdown-menu__link" href="#">
                              Phone 1
                            </a>
                          </li>
                          <li className="dropdown-menu__subitem">
                            <a className="dropdown-menu__link" href="#">
                              Phone 2
                            </a>
                          </li>
                          <li className="dropdown-menu__subitem">
                            <a className="dropdown-menu__link" href="#">
                              Phone 3
                            </a>
                          </li>
                          <li className="dropdown-menu__subitem">
                            <a className="dropdown-menu__link" href="#">
                              Phone 4
                            </a>
                          </li>
                          <li className="dropdown-menu__subitem">
                            <a className="dropdown-menu__link" href="#">
                              Phone 5
                            </a>
                          </li>
                          <li className="dropdown-menu__subitem">
                            <a className="dropdown-menu__link" href="#">
                              Phone 6
                            </a>
                          </li>
                          <li className="dropdown-menu__subitem">
                            <a className="dropdown-menu__link" href="#">
                              Phone 7
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="dropdown-menu__categories">
                        <a className="dropdown-menu__heading" href="#">
                          Computers
                        </a>
                        <ul className="dropdown-menu__sublist">
                          <li className="dropdown-menu__subitem">
                            <a className="dropdown-menu__link" href="#">
                              Computer 1
                            </a>
                          </li>
                          <li className="dropdown-menu__subitem">
                            <a className="dropdown-menu__link" href="#">
                              Computer 2
                            </a>
                          </li>
                          <li className="dropdown-menu__subitem">
                            <a className="dropdown-menu__link" href="#">
                              Computer 3
                            </a>
                          </li>
                          <li className="dropdown-menu__subitem">
                            <a className="dropdown-menu__link" href="#">
                              Computer 4
                            </a>
                          </li>
                          <li className="dropdown-menu__subitem">
                            <a className="dropdown-menu__link" href="#">
                              Computer 5
                            </a>
                          </li>
                          <li className="dropdown-menu__subitem">
                            <a className="dropdown-menu__link" href="#">
                              Computer 6
                            </a>
                          </li>
                          <li className="dropdown-menu__subitem">
                            <a className="dropdown-menu__link" href="#">
                              Computer 7
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="dropdown-menu__categories">
                        <a className="dropdown-menu__heading" href="#">
                          Smart watches
                        </a>
                        <ul className="dropdown-menu__sublist">
                          <li className="dropdown-menu__subitem">
                            <a className="dropdown-menu__link" href="#">
                              Smart watches 1
                            </a>
                          </li>
                          <li className="dropdown-menu__subitem">
                            <a className="dropdown-menu__link" href="#">
                              Smart watches 2
                            </a>
                          </li>
                          <li className="dropdown-menu__subitem">
                            <a className="dropdown-menu__link" href="#">
                              Smart watches 3
                            </a>
                          </li>
                          <li className="dropdown-menu__subitem">
                            <a className="dropdown-menu__link" href="#">
                              Smart watches 4
                            </a>
                          </li>
                          <li className="dropdown-menu__subitem">
                            <a className="dropdown-menu__link" href="#">
                              Smart watches 5
                            </a>
                          </li>
                          <li className="dropdown-menu__subitem">
                            <a className="dropdown-menu__link" href="#">
                              Smart watches 6
                            </a>
                          </li>
                          <li className="dropdown-menu__subitem">
                            <a className="dropdown-menu__link" href="#">
                              Smart watches 7
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="dropdown-menu__categories">
                        <a className="dropdown-menu__heading" href="#">
                          Cameras
                        </a>
                        <ul className="dropdown-menu__sublist">
                          <li className="dropdown-menu__subitem">
                            <a className="dropdown-menu__link" href="#">
                              Camera 1
                            </a>
                          </li>
                          <li className="dropdown-menu__subitem">
                            <a className="dropdown-menu__link" href="#">
                              Camera 2
                            </a>
                          </li>
                          <li className="dropdown-menu__subitem">
                            <a className="dropdown-menu__link" href="#">
                              Camera 3
                            </a>
                          </li>
                          <li className="dropdown-menu__subitem">
                            <a className="dropdown-menu__link" href="#">
                              Camera 4
                            </a>
                          </li>
                          <li className="dropdown-menu__subitem">
                            <a className="dropdown-menu__link" href="#">
                              Camera 5
                            </a>
                          </li>
                          <li className="dropdown-menu__subitem">
                            <a className="dropdown-menu__link" href="#">
                              Camera 6
                            </a>
                          </li>
                          <li className="dropdown-menu__subitem">
                            <a className="dropdown-menu__link" href="#">
                              Camera 7
                            </a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li className="dropdown-menu__item">
                    <a className="dropdown-menu__group" href="#">
                      Bags
                    </a>
                    <ul className="dropdown-menu__submenu">
                      <li className="dropdown-menu__categories">
                        <a className="dropdown-menu__heading" href="#">
                          Phones
                        </a>
                        <ul className="dropdown-menu__sublist">
                          <li className="dropdown-menu__subitem">
                            <a className="dropdown-menu__link" href="#">
                              Phone 1
                            </a>
                          </li>
                          <li className="dropdown-menu__subitem">
                            <a className="dropdown-menu__link" href="#">
                              Phone 2
                            </a>
                          </li>
                          <li className="dropdown-menu__subitem">
                            <a className="dropdown-menu__link" href="#">
                              Phone 3
                            </a>
                          </li>
                          <li className="dropdown-menu__subitem">
                            <a className="dropdown-menu__link" href="#">
                              Phone 4
                            </a>
                          </li>
                          <li className="dropdown-menu__subitem">
                            <a className="dropdown-menu__link" href="#">
                              Phone 5
                            </a>
                          </li>
                          <li className="dropdown-menu__subitem">
                            <a className="dropdown-menu__link" href="#">
                              Phone 6
                            </a>
                          </li>
                          <li className="dropdown-menu__subitem">
                            <a className="dropdown-menu__link" href="#">
                              Phone 7
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="dropdown-menu__categories">
                        <a className="dropdown-menu__heading" href="#">
                          Computers
                        </a>
                        <ul className="dropdown-menu__sublist">
                          <li className="dropdown-menu__subitem">
                            <a className="dropdown-menu__link" href="#">
                              Computer 1
                            </a>
                          </li>
                          <li className="dropdown-menu__subitem">
                            <a className="dropdown-menu__link" href="#">
                              Computer 2
                            </a>
                          </li>
                          <li className="dropdown-menu__subitem">
                            <a className="dropdown-menu__link" href="#">
                              Computer 3
                            </a>
                          </li>
                          <li className="dropdown-menu__subitem">
                            <a className="dropdown-menu__link" href="#">
                              Computer 4
                            </a>
                          </li>
                          <li className="dropdown-menu__subitem">
                            <a className="dropdown-menu__link" href="#">
                              Computer 5
                            </a>
                          </li>
                          <li className="dropdown-menu__subitem">
                            <a className="dropdown-menu__link" href="#">
                              Computer 6
                            </a>
                          </li>
                          <li className="dropdown-menu__subitem">
                            <a className="dropdown-menu__link" href="#">
                              Computer 7
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="dropdown-menu__categories">
                        <a className="dropdown-menu__heading" href="#">
                          Smart watches
                        </a>
                        <ul className="dropdown-menu__sublist">
                          <li className="dropdown-menu__subitem">
                            <a className="dropdown-menu__link" href="#">
                              Smart watches 1
                            </a>
                          </li>
                          <li className="dropdown-menu__subitem">
                            <a className="dropdown-menu__link" href="#">
                              Smart watches 2
                            </a>
                          </li>
                          <li className="dropdown-menu__subitem">
                            <a className="dropdown-menu__link" href="#">
                              Smart watches 3
                            </a>
                          </li>
                          <li className="dropdown-menu__subitem">
                            <a className="dropdown-menu__link" href="#">
                              Smart watches 4
                            </a>
                          </li>
                          <li className="dropdown-menu__subitem">
                            <a className="dropdown-menu__link" href="#">
                              Smart watches 5
                            </a>
                          </li>
                          <li className="dropdown-menu__subitem">
                            <a className="dropdown-menu__link" href="#">
                              Smart watches 6
                            </a>
                          </li>
                          <li className="dropdown-menu__subitem">
                            <a className="dropdown-menu__link" href="#">
                              Smart watches 7
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="dropdown-menu__categories">
                        <a className="dropdown-menu__heading" href="#">
                          Cameras
                        </a>
                        <ul className="dropdown-menu__sublist">
                          <li className="dropdown-menu__subitem">
                            <a className="dropdown-menu__link" href="#">
                              Camera 1
                            </a>
                          </li>
                          <li className="dropdown-menu__subitem">
                            <a className="dropdown-menu__link" href="#">
                              Camera 2
                            </a>
                          </li>
                          <li className="dropdown-menu__subitem">
                            <a className="dropdown-menu__link" href="#">
                              Camera 3
                            </a>
                          </li>
                          <li className="dropdown-menu__subitem">
                            <a className="dropdown-menu__link" href="#">
                              Camera 4
                            </a>
                          </li>
                          <li className="dropdown-menu__subitem">
                            <a className="dropdown-menu__link" href="#">
                              Camera 5
                            </a>
                          </li>
                          <li className="dropdown-menu__subitem">
                            <a className="dropdown-menu__link" href="#">
                              Camera 6
                            </a>
                          </li>
                          <li className="dropdown-menu__subitem">
                            <a className="dropdown-menu__link" href="#">
                              Camera 7
                            </a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li className="dropdown-menu__item">
                    <a className="dropdown-menu__group" href="#">
                      Home appliances
                    </a>
                    <ul className="dropdown-menu__submenu">
                      <li className="dropdown-menu__categories">
                        <a className="dropdown-menu__heading" href="#">
                          Phones
                        </a>
                        <ul className="dropdown-menu__sublist">
                          <li className="dropdown-menu__subitem">
                            <a className="dropdown-menu__link" href="#">
                              Phone 1
                            </a>
                          </li>
                          <li className="dropdown-menu__subitem">
                            <a className="dropdown-menu__link" href="#">
                              Phone 2
                            </a>
                          </li>
                          <li className="dropdown-menu__subitem">
                            <a className="dropdown-menu__link" href="#">
                              Phone 3
                            </a>
                          </li>
                          <li className="dropdown-menu__subitem">
                            <a className="dropdown-menu__link" href="#">
                              Phone 4
                            </a>
                          </li>
                          <li className="dropdown-menu__subitem">
                            <a className="dropdown-menu__link" href="#">
                              Phone 5
                            </a>
                          </li>
                          <li className="dropdown-menu__subitem">
                            <a className="dropdown-menu__link" href="#">
                              Phone 6
                            </a>
                          </li>
                          <li className="dropdown-menu__subitem">
                            <a className="dropdown-menu__link" href="#">
                              Phone 7
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="dropdown-menu__categories">
                        <a className="dropdown-menu__heading" href="#">
                          Computers
                        </a>
                        <ul className="dropdown-menu__sublist">
                          <li className="dropdown-menu__subitem">
                            <a className="dropdown-menu__link" href="#">
                              Computer 1
                            </a>
                          </li>
                          <li className="dropdown-menu__subitem">
                            <a className="dropdown-menu__link" href="#">
                              Computer 2
                            </a>
                          </li>
                          <li className="dropdown-menu__subitem">
                            <a className="dropdown-menu__link" href="#">
                              Computer 3
                            </a>
                          </li>
                          <li className="dropdown-menu__subitem">
                            <a className="dropdown-menu__link" href="#">
                              Computer 4
                            </a>
                          </li>
                          <li className="dropdown-menu__subitem">
                            <a className="dropdown-menu__link" href="#">
                              Computer 5
                            </a>
                          </li>
                          <li className="dropdown-menu__subitem">
                            <a className="dropdown-menu__link" href="#">
                              Computer 6
                            </a>
                          </li>
                          <li className="dropdown-menu__subitem">
                            <a className="dropdown-menu__link" href="#">
                              Computer 7
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="dropdown-menu__categories">
                        <a className="dropdown-menu__heading" href="#">
                          Smart watches
                        </a>
                        <ul className="dropdown-menu__sublist">
                          <li className="dropdown-menu__subitem">
                            <a className="dropdown-menu__link" href="#">
                              Smart watches 1
                            </a>
                          </li>
                          <li className="dropdown-menu__subitem">
                            <a className="dropdown-menu__link" href="#">
                              Smart watches 2
                            </a>
                          </li>
                          <li className="dropdown-menu__subitem">
                            <a className="dropdown-menu__link" href="#">
                              Smart watches 3
                            </a>
                          </li>
                          <li className="dropdown-menu__subitem">
                            <a className="dropdown-menu__link" href="#">
                              Smart watches 4
                            </a>
                          </li>
                          <li className="dropdown-menu__subitem">
                            <a className="dropdown-menu__link" href="#">
                              Smart watches 5
                            </a>
                          </li>
                          <li className="dropdown-menu__subitem">
                            <a className="dropdown-menu__link" href="#">
                              Smart watches 6
                            </a>
                          </li>
                          <li className="dropdown-menu__subitem">
                            <a className="dropdown-menu__link" href="#">
                              Smart watches 7
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="dropdown-menu__categories">
                        <a className="dropdown-menu__heading" href="#">
                          Cameras
                        </a>
                        <ul className="dropdown-menu__sublist">
                          <li className="dropdown-menu__subitem">
                            <a className="dropdown-menu__link" href="#">
                              Camera 1
                            </a>
                          </li>
                          <li className="dropdown-menu__subitem">
                            <a className="dropdown-menu__link" href="#">
                              Camera 2
                            </a>
                          </li>
                          <li className="dropdown-menu__subitem">
                            <a className="dropdown-menu__link" href="#">
                              Camera 3
                            </a>
                          </li>
                          <li className="dropdown-menu__subitem">
                            <a className="dropdown-menu__link" href="#">
                              Camera 4
                            </a>
                          </li>
                          <li className="dropdown-menu__subitem">
                            <a className="dropdown-menu__link" href="#">
                              Camera 5
                            </a>
                          </li>
                          <li className="dropdown-menu__subitem">
                            <a className="dropdown-menu__link" href="#">
                              Camera 6
                            </a>
                          </li>
                          <li className="dropdown-menu__subitem">
                            <a className="dropdown-menu__link" href="#">
                              Camera 7
                            </a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                </ul>
              </nav>
            </div>

            <div className="header__col">
              <form className="search @@small-form @@big-form @@error d-flex  ai-c">
                <label className="search__label">
                  <span className="sr-only">Search input field</span>
                  <input className="search__input @@small-input @@big-input" type="search" placeholder="Search Products" />
                </label>
                <button className="search__btn" type="submit">
                  <svg className="search__icon">
                    <use xlinkHref="sprite.svg#search" />
                  </svg>

                  <span className="sr-only">Search button</span>
                </button>
              </form>
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
                        <img className="cart__img" width="80" height="80" src="images/content/black-smart-w.jpg" alt="Black Smart Watch" />
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
                        <img className="cart__img" width="80" height="80" src="images/content/black-smart-w.jpg" alt="Black Smart Watch" />
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
                        <img className="cart__img" width="80" height="80" src="images/content/black-smart-w.jpg" alt="Black Smart Watch" />
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
      </div> */}
    </header>
  );
}

export default Header;
