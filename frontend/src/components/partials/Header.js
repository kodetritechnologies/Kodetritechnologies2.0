"use client";
import { useContext } from "react";
import { AuthContext } from "@/utils/context/AuthContext";
import Link from "next/link";

function Header() {
  const user = useContext(AuthContext);

  return (
    <header className="tf-header header-s2 scr-box-shadow">
      <div className="container-full">
        <div className="header-inner">
          <div className="box-open-menu-mobile d-xl-none">
            <a
              href="#mobileMenu"
              data-bs-toggle="offcanvas"
              className="btn-open-menu"
            >
              <i className="icon icon-List"></i>
            </a>
          </div>
          <div className="header-left d-none d-xl-block">
            <nav className="box-navigation">
              <ul className="box-nav-menu">
                <li className="menu-item position-relative">
                  <Link href="/" className="item-link">
                    <span className="text cus-text">Home</span>
                  </Link>
                </li>
                <li className="menu-item">
                  <Link href="/shop" className="item-link">
                    <span className="text cus-text">Shop</span>
                  </Link>
                </li>
                <li className="menu-item">
                  <Link href="/about-us" className="item-link">
                    <span className="text cus-text">About Us</span>
                  </Link>
                </li>
                <li className="menu-item position-relative">
                  <Link href="/blog" className="item-link">
                    <span className="text cus-text">Blog</span>
                  </Link>
                </li>
                <li className="menu-item position-relative">
                  <Link href="/contact-us" className="item-link">
                    <span className="text cus-text">Contact Us</span>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="header-center ">
            <Link href="/" className="logo-site">
              <img
                loading="lazy"
                width="150"
                height="30"
                src="/assets/images/logo/logo.svg"
                alt="Image"
              />
            </Link>
          </div>
          <div className="header-right">
            <div className="br-line type-vertical d-none d-xxl-flex"></div>
            <ul className="nav-icon-list">
              <li className="d-none d-sm-block">
                <a
                  href="#search"
                  data-bs-toggle="modal"
                  className="nav-icon-item link"
                >
                  <i className="icon icon-MagnifyingGlass"></i>
                </a>
              </li>
              <li>
                <Link
                  href="#sign"
                  data-bs-toggle="modal"
                  className="nav-icon-item link"
                >
                  <i className="icon icon-User"></i>
                </Link>
              </li>
              <li className="d-none d-sm-block">
                <Link href="/wishlist" className="nav-icon-item link">
                  <i className="icon icon-HeartStraight"></i>
                </Link>
              </li>
              <li>
                <a
                  href="#shoppingCart"
                  data-bs-toggle="offcanvas"
                  className="nav-icon-item link shop-cart"
                >
                  <i className="icon icon-Handbag"></i>
                  <span className="count">12</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
