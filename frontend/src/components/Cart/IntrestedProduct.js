function IntrestedProduct() {
  return (
    <section className="flat-spacing">
      <div className="container">
        <div className="sect-heading">
          <h4>You may be interested in…</h4>
        </div>
        <div
          dir="ltr"
          className="swiper tf-swiper wrap-sw-over"
          data-preview={4}
          data-tablet={3}
          data-mobile-sm={2}
          data-mobile={2}
          data-space-lg={30}
          data-space-md={20}
          data-space={10}
          data-pagination={2}
          data-pagination-sm={2}
          data-pagination-md={3}
          data-pagination-lg={4}
        >
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <div className="card-product">
                <div className="card-product_wrapper">
                  <a href="product-detail.html" className="product-img">
                    <img
                      className="img-product"
                      loading="lazy"
                      width="330"
                      height="440"
                      src="/assets/images/product/product-1.jpg"
                      alt="Product"
                    />
                    <img
                      className="img-hover"
                      loading="lazy"
                      width="330"
                      height="440"
                      src="/assets/images/product/product-1_2.jpg"
                      alt="Product"
                    />
                  </a>
                  <ul className="product-action_list">
                    <li className="wishlist">
                      <a
                        href="#;"
                        className="hover-tooltip tooltip-left box-icon"
                      >
                        <span className="icon icon-heart"></span>
                        <span className="tooltip">Add to Wishlist</span>
                      </a>
                    </li>
                    <li className="compare">
                      <a
                        href="#compare"
                        data-bs-toggle="offcanvas"
                        className="hover-tooltip tooltip-left box-icon"
                      >
                        <span className="icon icon-ArrowsLeftRight"></span>
                        <span className="tooltip">Compare</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="#quickView"
                        data-bs-toggle="offcanvas"
                        className="hover-tooltip tooltip-left box-icon"
                      >
                        <span className="icon icon-Eye"></span>
                        <span className="tooltip">Quick view</span>
                      </a>
                    </li>
                  </ul>
                  <ul className="product-badge_list">
                    <li className="product-badge_item text-caption-01 new">
                      NEW
                    </li>
                  </ul>
                  <div className="product-action_bot">
                    <a
                      href="#quickAdd"
                      data-bs-toggle="modal"
                      className="tf-btn btn-white small  w-100"
                    >
                      Quick Add
                    </a>
                  </div>
                  <div className="product-marquee_sale">
                    <div className="marquee-wrapper">
                      <div className="initial-child-container">
                        <div className="marquee-child-item">
                          HOT SALE 25% OFF
                        </div>
                        <i className="icon icon-Star2"></i>
                        <div className="marquee-child-item">
                          HOT SALE 25% OFF
                        </div>
                        <i className="icon icon-Star2"></i>
                        <div className="marquee-child-item">
                          HOT SALE 25% OFF
                        </div>
                        <i className="icon icon-Star2"></i>
                        <div className="marquee-child-item">
                          HOT SALE 25% OFF
                        </div>
                        <i className="icon icon-Star2"></i>
                        <div className="marquee-child-item">
                          HOT SALE 25% OFF
                        </div>
                        <i className="icon icon-Star2"></i>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-product_info">
                  <a
                    href="product-detail.html"
                    className="name-product lh-24 fw-medium link-underline-text"
                  >
                    Lyocell wrap top
                  </a>
                  <div className="star-wrap d-flex align-items-center">
                    <i className="icon icon-Star"></i>
                    <i className="icon icon-Star"></i>
                    <i className="icon icon-Star"></i>
                    <i className="icon icon-Star"></i>
                    <i className="icon icon-Star"></i>
                  </div>
                  <div className="price-wrap">
                    <span className="price-new text-primary fw-semibold">
                      $69,99
                    </span>
                    <span className="price-old text-caption-01 cl-text-3">
                      $99,99
                    </span>
                  </div>
                  <ul className="product-color_list">
                    <li className="product-color-item color-swatch hover-tooltip tooltip-bot active">
                      <span className="tooltip color-filter">Brown</span>
                      <span className="swatch-value bg-warm-beige"></span>
                      <img
                        src="/assets/images/product/product-1.jpg"
                        data-src="/assets/images/product/product-1.jpg"
                        alt="Image"
                      />
                    </li>
                    <li className="product-color-item color-swatch hover-tooltip tooltip-bot">
                      <span className="tooltip color-filter">Dark Blue</span>
                      <span className="swatch-value bg-midnight-blue"></span>
                      <img
                        src="/assets/images/product/product-1_3.jpg"
                        data-src="/assets/images/product/product-1_3.jpg"
                        alt="Image"
                      />
                    </li>
                    <li className="product-color-item color-swatch hover-tooltip tooltip-bot">
                      <span className="tooltip color-filter">White</span>
                      <span className="swatch-value bg-white"></span>
                      <img
                        src="/assets/images/product/product-1_4.jpg"
                        data-src="/assets/images/product/product-1_4.jpg"
                        alt="Image"
                      />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="card-product">
                <div className="card-product_wrapper">
                  <a href="product-detail.html" className="product-img">
                    <img
                      className="img-product"
                      loading="lazy"
                      width="330"
                      height="440"
                      src="/assets/images/product/product-2.jpg"
                      alt="Product"
                    />
                    <img
                      className="img-hover"
                      loading="lazy"
                      width="330"
                      height="440"
                      src="/assets/images/product/product-2_2.jpg"
                      alt="Product"
                    />
                  </a>
                  <ul className="product-action_list">
                    <li className="wishlist">
                      <a
                        href="#;"
                        className="hover-tooltip tooltip-left box-icon"
                      >
                        <span className="icon icon-heart"></span>
                        <span className="tooltip">Add to Wishlist</span>
                      </a>
                    </li>
                    <li className="compare">
                      <a
                        href="#compare"
                        data-bs-toggle="offcanvas"
                        className="hover-tooltip tooltip-left box-icon"
                      >
                        <span className="icon icon-ArrowsLeftRight"></span>
                        <span className="tooltip">Compare</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="#quickView"
                        data-bs-toggle="offcanvas"
                        className="hover-tooltip tooltip-left box-icon"
                      >
                        <span className="icon icon-Eye"></span>
                        <span className="tooltip">Quick view</span>
                      </a>
                    </li>
                  </ul>
                  <ul className="product-badge_list">
                    <li className="product-badge_item text-caption-01 sale">
                      -25%
                    </li>
                  </ul>
                  <div className="product-action_bot">
                    <a
                      href="#quickAdd"
                      data-bs-toggle="modal"
                      className="tf-btn btn-white small  w-100"
                    >
                      Quick Add
                    </a>
                  </div>
                </div>
                <div className="card-product_info">
                  <a
                    href="product-detail.html"
                    className="name-product lh-24 fw-medium link-underline-text"
                  >
                    Buttons cotton top
                  </a>
                  <div className="star-wrap d-flex align-items-center">
                    <i className="icon icon-Star"></i>
                    <i className="icon icon-Star"></i>
                    <i className="icon icon-Star"></i>
                    <i className="icon icon-Star"></i>
                    <i className="icon icon-Star"></i>
                  </div>
                  <div className="price-wrap">
                    <span className="price-new text-primary fw-semibold">
                      $29,99
                    </span>
                    <span className="price-old text-caption-01 cl-text-3">
                      $49,99
                    </span>
                  </div>
                  <ul className="product-color_list">
                    <li className="product-color-item color-swatch hover-tooltip tooltip-bot active">
                      <span className="tooltip color-filter">Brown</span>
                      <span className="swatch-value bg-warm-brown"></span>
                      <img
                        src="/assets/images/product/product-2.jpg"
                        data-src="/assets/images/product/product-2.jpg"
                        alt="Image"
                      />
                    </li>
                    <li className="product-color-item color-swatch hover-tooltip tooltip-bot">
                      <span className="tooltip color-filter">Beige</span>
                      <span className="swatch-value bg-beige"></span>
                      <img
                        src="/assets/images/product/product-2_3.jpg"
                        data-src="/assets/images/product/product-2_3.jpg"
                        alt="Image"
                      />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="card-product has-size">
                <div className="card-product_wrapper">
                  <a href="product-detail.html" className="product-img">
                    <img
                      className="img-product"
                      loading="lazy"
                      width="330"
                      height="440"
                      src="/assets/images/product/product-3.jpg"
                      alt="Product"
                    />
                    <img
                      className="img-hover"
                      loading="lazy"
                      width="330"
                      height="440"
                      src="/assets/images/product/product-3_2.jpg"
                      alt="Product"
                    />
                  </a>
                  <ul className="product-action_list">
                    <li className="wishlist">
                      <a
                        href="#;"
                        className="hover-tooltip tooltip-left box-icon"
                      >
                        <span className="icon icon-heart"></span>
                        <span className="tooltip">Add to Wishlist</span>
                      </a>
                    </li>
                    <li className="compare">
                      <a
                        href="#compare"
                        data-bs-toggle="offcanvas"
                        className="hover-tooltip tooltip-left box-icon"
                      >
                        <span className="icon icon-ArrowsLeftRight"></span>
                        <span className="tooltip">Compare</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="#quickView"
                        data-bs-toggle="offcanvas"
                        className="hover-tooltip tooltip-left box-icon"
                      >
                        <span className="icon icon-Eye"></span>
                        <span className="tooltip">Quick view</span>
                      </a>
                    </li>
                  </ul>
                  <ul className="product-badge_list">
                    <li className="product-badge_item text-caption-01 sale">
                      -25%
                    </li>
                  </ul>
                  <div className="product-action_bot">
                    <a
                      href="#quickAdd"
                      data-bs-toggle="modal"
                      className="tf-btn btn-white small  w-100"
                    >
                      Quick Add
                    </a>
                  </div>
                  <div className="variant-box">
                    <ul className="product-size_list">
                      <li className="size-item text-caption-01">XS</li>
                      <li className="size-item text-caption-01">S</li>
                      <li className="size-item text-caption-01">M</li>
                      <li className="size-item text-caption-01">L</li>
                    </ul>
                  </div>
                </div>
                <div className="card-product_info">
                  <a
                    href="product-detail.html"
                    className="name-product lh-24 fw-medium link-underline-text"
                  >
                    Wool Midi Coat
                  </a>
                  <div className="star-wrap d-flex align-items-center">
                    <i className="icon icon-Star"></i>
                    <i className="icon icon-Star"></i>
                    <i className="icon icon-Star"></i>
                    <i className="icon icon-Star"></i>
                    <i className="icon icon-Star"></i>
                  </div>
                  <div className="price-wrap">
                    <span className="price-new text-primary fw-semibold">
                      $15,99
                    </span>
                    <span className="price-old text-caption-01 cl-text-3">
                      $25,99
                    </span>
                  </div>
                  <ul className="product-color_list">
                    <li className="product-color-item color-swatch hover-tooltip tooltip-bot active">
                      <span className="tooltip color-filter">Brown</span>
                      <span className="swatch-value bg-olive-brown"></span>
                      <img
                        src="/assets/images/product/product-3.jpg"
                        data-src="/assets/images/product/product-3.jpg"
                        alt="Image"
                      />
                    </li>
                    <li className="product-color-item color-swatch hover-tooltip tooltip-bot">
                      <span className="tooltip color-filter">Blue</span>
                      <span className="swatch-value bg-dark-blue"></span>
                      <img
                        src="/assets/images/product/product-3_3.jpg"
                        data-src="/assets/images/product/product-3_3.jpg"
                        alt="Image"
                      />
                    </li>
                    <li className="product-color-item color-swatch hover-tooltip tooltip-bot">
                      <span className="tooltip color-filter">Light</span>
                      <span className="swatch-value bg-warm-beige"></span>
                      <img
                        src="/assets/images/product/product-3_4.jpg"
                        data-src="/assets/images/product/product-3_4.jpg"
                        alt="Image"
                      />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="card-product">
                <div className="card-product_wrapper">
                  <a href="product-detail.html" className="product-img">
                    <img
                      className="img-product"
                      loading="lazy"
                      width="330"
                      height="440"
                      src="/assets/images/product/product-4.jpg"
                      alt="Product"
                    />
                    <img
                      className="img-hover"
                      loading="lazy"
                      width="330"
                      height="440"
                      src="/assets/images/product/product-4_2.jpg"
                      alt="Product"
                    />
                  </a>
                  <ul className="product-action_list">
                    <li className="wishlist">
                      <a
                        href="#;"
                        className="hover-tooltip tooltip-left box-icon"
                      >
                        <span className="icon icon-heart"></span>
                        <span className="tooltip">Add to Wishlist</span>
                      </a>
                    </li>
                    <li className="compare">
                      <a
                        href="#compare"
                        data-bs-toggle="offcanvas"
                        className="hover-tooltip tooltip-left box-icon"
                      >
                        <span className="icon icon-ArrowsLeftRight"></span>
                        <span className="tooltip">Compare</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="#quickView"
                        data-bs-toggle="offcanvas"
                        className="hover-tooltip tooltip-left box-icon"
                      >
                        <span className="icon icon-Eye"></span>
                        <span className="tooltip">Quick view</span>
                      </a>
                    </li>
                  </ul>
                  <div className="product-action_bot">
                    <a
                      href="#quickAdd"
                      data-bs-toggle="modal"
                      className="tf-btn btn-white small  w-100"
                    >
                      Quick Add
                    </a>
                  </div>
                  <div className="product-countdown">
                    <div
                      className="js-countdown cd-has-zero"
                      data-timer="1093120"
                      data-labels="D : ,H : ,M : ,S"
                    ></div>
                  </div>
                </div>
                <div className="card-product_info">
                  <a
                    href="product-detail.html"
                    className="name-product lh-24 fw-medium link-underline-text"
                  >
                    linen slim-fit shirt
                  </a>
                  <div className="star-wrap d-flex align-items-center">
                    <i className="icon icon-Star"></i>
                    <i className="icon icon-Star"></i>
                    <i className="icon icon-Star"></i>
                    <i className="icon icon-Star"></i>
                    <i className="icon icon-Star"></i>
                  </div>
                  <div className="price-wrap">
                    <span className="price-new text-primary fw-semibold">
                      $45,99
                    </span>
                    <span className="price-old text-caption-01 cl-text-3">
                      $79,99
                    </span>
                  </div>
                  <ul className="product-color_list">
                    <li className="product-color-item color-swatch hover-tooltip tooltip-bot active">
                      <span className="tooltip color-filter">Blue</span>
                      <span className="swatch-value bg-dark-blue-2"></span>
                      <img
                        src="/assets/images/product/product-4.jpg"
                        data-src="/assets/images/product/product-4.jpg"
                        alt="Image"
                      />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="sw-line-default style-2 tf-sw-pagination"></div>
        </div>
      </div>
    </section>
  );
}

export default IntrestedProduct;
