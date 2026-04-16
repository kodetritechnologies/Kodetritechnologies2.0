function WishlistCards() {
  return (
    <div className="section-wishlist flat-spacing">
      <div className="container">
        <div className="tf-grid-layout tf-col-2 md-col-3 xl-col-4 wrapper-wishlist">
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
                <li className="product-badge_item text-caption-01 new">NEW</li>
              </ul>
              <span className="product-action_remove remove box-icon hover-tooltip tooltip-left">
                <i className="icon icon-trash"></i>
                <span className="tooltip">Remove</span>
              </span>
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
                    <div className="marquee-child-item">HOT SALE 25% OFF</div>
                    <i className="icon icon-Star2"></i>
                    <div className="marquee-child-item">HOT SALE 25% OFF</div>
                    <i className="icon icon-Star2"></i>
                    <div className="marquee-child-item">HOT SALE 25% OFF</div>
                    <i className="icon icon-Star2"></i>
                    <div className="marquee-child-item">HOT SALE 25% OFF</div>
                    <i className="icon icon-Star2"></i>
                    <div className="marquee-child-item">HOT SALE 25% OFF</div>
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
              <span className="product-action_remove remove box-icon hover-tooltip tooltip-left">
                <i className="icon icon-trash"></i>
                <span className="tooltip">Remove</span>
              </span>
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
          <div className="card-product">
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
              <span className="product-action_remove remove box-icon hover-tooltip tooltip-left">
                <i className="icon icon-trash"></i>
                <span className="tooltip">Remove</span>
              </span>
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
              <span className="product-action_remove remove box-icon hover-tooltip tooltip-left">
                <i className="icon icon-trash"></i>
                <span className="tooltip">Remove</span>
              </span>
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
          <div className="card-product">
            <div className="card-product_wrapper">
              <a href="product-detail.html" className="product-img">
                <img
                  className="img-product"
                  loading="lazy"
                  width="330"
                  height="440"
                  src="/assets/images/product/product-5.jpg"
                  alt="Product"
                />
                <img
                  className="img-hover"
                  loading="lazy"
                  width="330"
                  height="440"
                  src="/assets/images/product/product-5_2.jpg"
                  alt="Product"
                />
              </a>
              <ul className="product-action_list">
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
              <span className="product-action_remove remove box-icon hover-tooltip tooltip-left">
                <i className="icon icon-trash"></i>
                <span className="tooltip">Remove</span>
              </span>
              <ul className="product-badge_list">
                <li className="product-badge_item text-caption-01 new">NEW</li>
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
                High neck midi wool coat
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
                  $9,99
                </span>
                <span className="price-old text-caption-01 cl-text-3">
                  $19,99
                </span>
              </div>
              <ul className="product-color_list">
                <li className="product-color-item color-swatch hover-tooltip tooltip-bot active">
                  <span className="tooltip color-filter">Brown</span>
                  <span className="swatch-value bg-olive-brown"></span>
                  <img
                    src="/assets/images/product/product-5.jpg"
                    data-src="/assets/images/product/product-5.jpg"
                    alt="Image"
                  />
                </li>
                <li className="product-color-item color-swatch hover-tooltip tooltip-bot">
                  <span className="tooltip color-filter">Blue</span>
                  <span className="swatch-value bg-dark-blue"></span>
                  <img
                    src="/assets/images/product/product-5_3.jpg"
                    data-src="/assets/images/product/product-5_3.jpg"
                    alt="Image"
                  />
                </li>
                <li className="product-color-item color-swatch hover-tooltip tooltip-bot">
                  <span className="tooltip color-filter">Beige</span>
                  <span className="swatch-value bg-beige"></span>
                  <img
                    src="/assets/images/product/product-5_4.jpg"
                    data-src="/assets/images/product/product-5_4.jpg"
                    alt="Image"
                  />
                </li>
              </ul>
            </div>
          </div>
          <div className="card-product">
            <div className="card-product_wrapper">
              <a href="product-detail.html" className="product-img">
                <img
                  className="img-product"
                  loading="lazy"
                  width="330"
                  height="440"
                  src="/assets/images/product/product-6.jpg"
                  alt="Product"
                />
                <img
                  className="img-hover"
                  loading="lazy"
                  width="330"
                  height="440"
                  src="/assets/images/product/product-6_2.jpg"
                  alt="Product"
                />
              </a>
              <ul className="product-action_list">
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
              <span className="product-action_remove remove box-icon hover-tooltip tooltip-left">
                <i className="icon icon-trash"></i>
                <span className="tooltip">Remove</span>
              </span>
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
                Square metallic frame sunglasses
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
                  $34,99
                </span>
                <span className="price-old text-caption-01 cl-text-3">
                  $59,99
                </span>
              </div>
              <ul className="product-color_list">
                <li className="product-color-item color-swatch hover-tooltip tooltip-bot active">
                  <span className="tooltip color-filter">Brown</span>
                  <span className="swatch-value bg-warm-brown-2"></span>
                  <img
                    src="/assets/images/product/product-6.jpg"
                    data-src="/assets/images/product/product-6.jpg"
                    alt="Image"
                  />
                </li>
                <li className="product-color-item color-swatch hover-tooltip tooltip-bot">
                  <span className="tooltip color-filter">Blue</span>
                  <span className="swatch-value bg-cool-gray"></span>
                  <img
                    src="/assets/images/product/product-6_3.jpg"
                    data-src="/assets/images/product/product-6_3.jpg"
                    alt="Image"
                  />
                </li>
              </ul>
            </div>
          </div>
          <div className="card-product">
            <div className="card-product_wrapper">
              <a href="product-detail.html" className="product-img">
                <img
                  className="img-product"
                  loading="lazy"
                  width="330"
                  height="440"
                  src="/assets/images/product/product-7.jpg"
                  alt="Product"
                />
                <img
                  className="img-hover"
                  loading="lazy"
                  width="330"
                  height="440"
                  src="/assets/images/product/product-7_2.jpg"
                  alt="Product"
                />
              </a>
              <ul className="product-action_list">
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
              <span className="product-action_remove remove box-icon hover-tooltip tooltip-left">
                <i className="icon icon-trash"></i>
                <span className="tooltip">Remove</span>
              </span>
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
              <div className="product-marquee_sale">
                <div className="marquee-wrapper">
                  <div className="initial-child-container">
                    <div className="marquee-child-item">HOT SALE 25% OFF</div>
                    <i className="icon icon-Star2"></i>
                    <div className="marquee-child-item">HOT SALE 25% OFF</div>
                    <i className="icon icon-Star2"></i>
                    <div className="marquee-child-item">HOT SALE 25% OFF</div>
                    <i className="icon icon-Star2"></i>
                    <div className="marquee-child-item">HOT SALE 25% OFF</div>
                    <i className="icon icon-Star2"></i>
                    <div className="marquee-child-item">HOT SALE 25% OFF</div>
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
                Leather shopper bag with stitching
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
                  $22,99
                </span>
                <span className="price-old text-caption-01 cl-text-3">
                  $39,99
                </span>
              </div>
              <ul className="product-color_list">
                <li className="product-color-item color-swatch hover-tooltip tooltip-bot active">
                  <span className="tooltip color-filter">Brown</span>
                  <span className="swatch-value bg-warm-beige"></span>
                  <img
                    src="/assets/images/product/product-7.jpg"
                    data-src="/assets/images/product/product-7.jpg"
                    alt="Image"
                  />
                </li>
                <li className="product-color-item color-swatch hover-tooltip tooltip-bot">
                  <span className="tooltip color-filter">Warm Brown</span>
                  <span className="swatch-value bg-caramel"></span>
                  <img
                    src="/assets/images/product/product-7_3.jpg"
                    data-src="/assets/images/product/product-7_3.jpg"
                    alt="Image"
                  />
                </li>
                <li className="product-color-item color-swatch hover-tooltip tooltip-bot">
                  <span className="tooltip color-filter">Beige</span>
                  <span className="swatch-value bg-sand-beige"></span>
                  <img
                    src="/assets/images/product/product-7_4.jpg"
                    data-src="/assets/images/product/product-7_4.jpg"
                    alt="Image"
                  />
                </li>
              </ul>
            </div>
          </div>
          <div className="card-product">
            <div className="card-product_wrapper">
              <a href="product-detail.html" className="product-img">
                <img
                  className="img-product"
                  loading="lazy"
                  width="330"
                  height="440"
                  src="/assets/images/product/product-8.jpg"
                  alt="Product"
                />
                <img
                  className="img-hover"
                  loading="lazy"
                  width="330"
                  height="440"
                  src="/assets/images/product/product-8_2.jpg"
                  alt="Product"
                />
              </a>
              <ul className="product-action_list">
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
              <span className="product-action_remove remove box-icon hover-tooltip tooltip-left">
                <i className="icon icon-trash"></i>
                <span className="tooltip">Remove</span>
              </span>
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
                Leather shopper bag with stitching
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
                  $67,99
                </span>
                <span className="price-old text-caption-01 cl-text-3">
                  $99,99
                </span>
              </div>
              <ul className="product-color_list">
                <li className="product-color-item color-swatch hover-tooltip tooltip-bot active">
                  <span className="tooltip color-filter">Pink</span>
                  <span className="swatch-value bg-rose-taupe"></span>
                  <img
                    src="/assets/images/product/product-8.jpg"
                    data-src="/assets/images/product/product-8.jpg"
                    alt="Image"
                  />
                </li>
                <li className="product-color-item color-swatch hover-tooltip tooltip-bot">
                  <span className="tooltip color-filter">Blue</span>
                  <span className="swatch-value bg-dark-blue-2"></span>
                  <img
                    src="/assets/images/product/product-8_3.jpg"
                    data-src="/assets/images/product/product-8_3.jpg"
                    alt="Image"
                  />
                </li>
                <li className="product-color-item color-swatch hover-tooltip tooltip-bot">
                  <span className="tooltip color-filter">Pink</span>
                  <span className="swatch-value bg-blush-pink"></span>
                  <img
                    src="/assets/images/product/product-8_4.jpg"
                    data-src="/assets/images/product/product-8_4.jpg"
                    alt="Image"
                  />
                </li>
              </ul>
            </div>
          </div>
          <div className="card-product">
            <div className="card-product_wrapper">
              <a href="product-detail.html" className="product-img">
                <img
                  className="img-product"
                  loading="lazy"
                  width="330"
                  height="440"
                  src="/assets/images/product/product-9.jpg"
                  alt="Product"
                />
                <img
                  className="img-hover"
                  loading="lazy"
                  width="330"
                  height="440"
                  src="/assets/images/product/product-9_2.jpg"
                  alt="Product"
                />
              </a>
              <ul className="product-action_list">
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
              <span className="product-action_remove remove box-icon hover-tooltip tooltip-left">
                <i className="icon icon-trash"></i>
                <span className="tooltip">Remove</span>
              </span>
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
                Oval shoulder bag
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
                  $12,99
                </span>
                <span className="price-old text-caption-01 cl-text-3">
                  $21,99
                </span>
              </div>
              <ul className="product-color_list">
                <li className="product-color-item color-swatch hover-tooltip tooltip-bot active">
                  <span className="tooltip color-filter">Purple</span>
                  <span className="swatch-value bg-lavender"></span>
                  <img
                    src="/assets/images/product/product-9.jpg"
                    data-src="/assets/images/product/product-9.jpg"
                    alt="Image"
                  />
                </li>
                <li className="product-color-item color-swatch hover-tooltip tooltip-bot">
                  <span className="tooltip color-filter">Blue</span>
                  <span className="swatch-value bg-dark-blue"></span>
                  <img
                    src="/assets/images/product/product-9_3.jpg"
                    data-src="/assets/images/product/product-9_3.jpg"
                    alt="Image"
                  />
                </li>
              </ul>
            </div>
          </div>
          <div className="wd-full">
            <div className="tf-page-pagination justify-content-center">
              <a href="#" className="pag-item">
                1
              </a>
              <p className="pag-item active">2</p>
              <a href="#" className="pag-item">
                3
              </a>
              <a href="#" className="pag-item">
                <i className="icon icon-CaretRightThin"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WishlistCards;
