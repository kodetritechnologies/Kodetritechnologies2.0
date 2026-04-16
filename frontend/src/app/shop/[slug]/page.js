import ProductDescription from "@/components/Shop/ProductDescription";
import RelateProduct from "@/components/Shop/RelateProduct";

function page() {
  return (
    <main id="wrapper">
      <section className="section-product-single tf-main-product section-image-zoom">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="tf-product-media-wrap sticky-top">
                <div className="product-thumbs-slider style-row">
                  <div className="flat-wrap-media-product">
                    <div
                      dir="ltr"
                      className="swiper tf-product-media-main"
                      id="gallery-swiper-started"
                      data-spacing="0"
                    >
                      <div className="swiper-wrapper">
                        <div
                          className="swiper-slide"
                          data-color="green"
                          data-size="L"
                        >
                          <a
                            href="/assets/images/product/single/detail-1.jpg"
                            target="_blank"
                            className="item"
                            data-pswp-width="576px"
                            data-pswp-height="768px"
                          >
                            <img
                              loading="lazy"
                              width="576"
                              height="768"
                              className="tf-image-zoom"
                              data-zoom="/assets/images/product/single/detail-1.jpg"
                              src="/assets/images/product/single/detail-1.jpg"
                              alt="img-product"
                            />
                          </a>
                        </div>
                        <div
                          className="swiper-slide"
                          data-color="green"
                          data-size="S"
                        >
                          <a
                            href="/assets/images/product/single/detail-1_2.jpg"
                            target="_blank"
                            className="item"
                            data-pswp-width="576px"
                            data-pswp-height="768px"
                          >
                            <img
                              loading="lazy"
                              width="576"
                              height="768"
                              className="tf-image-zoom"
                              data-zoom="/assets/images/product/single/detail-1_2.jpg"
                              src="/assets/images/product/single/detail-1_2.jpg"
                              alt="img-product"
                            />
                          </a>
                        </div>
                        <div
                          className="swiper-slide"
                          data-color="green"
                          data-size="M"
                        >
                          <a
                            href="/assets/images/product/single/detail-1_3.jpg"
                            target="_blank"
                            className="item"
                            data-pswp-width="576px"
                            data-pswp-height="768px"
                          >
                            <img
                              loading="lazy"
                              width="576"
                              height="768"
                              className="tf-image-zoom"
                              data-zoom="/assets/images/product/single/detail-1_3.jpg"
                              src="/assets/images/product/single/detail-1_3.jpg"
                              alt="img-product"
                            />
                          </a>
                        </div>
                        <div
                          className="swiper-slide"
                          data-color="green"
                          data-size="XL"
                        >
                          <a
                            href="/assets/images/product/single/detail-1_4.jpg"
                            target="_blank"
                            className="item"
                            data-pswp-width="576px"
                            data-pswp-height="768px"
                          >
                            <img
                              loading="lazy"
                              width="576"
                              height="768"
                              className="tf-image-zoom"
                              data-zoom="/assets/images/product/single/detail-1_4.jpg"
                              src="/assets/images/product/single/detail-1_4.jpg"
                              alt="img-product"
                            />
                          </a>
                        </div>
                        <div
                          className="swiper-slide"
                          data-color="gray"
                          data-size="M"
                        >
                          <a
                            href="/assets/images/product/single/detail-1_5.jpg"
                            target="_blank"
                            className="item"
                            data-pswp-width="576px"
                            data-pswp-height="768px"
                          >
                            <img
                              loading="lazy"
                              width="576"
                              height="768"
                              className="tf-image-zoom"
                              data-zoom="/assets/images/product/single/detail-1_5.jpg"
                              src="/assets/images/product/single/detail-1_5.jpg"
                              alt="img-product"
                            />
                          </a>
                        </div>
                        <div
                          className="swiper-slide"
                          data-color="gray"
                          data-size="M"
                        >
                          <a
                            href="/assets/images/product/single/detail-1_6.jpg"
                            target="_blank"
                            className="item"
                            data-pswp-width="576px"
                            data-pswp-height="768px"
                          >
                            <img
                              loading="lazy"
                              width="576"
                              height="768"
                              className="tf-image-zoom"
                              data-zoom="/assets/images/product/single/detail-1_6.jpg"
                              src="/assets/images/product/single/detail-1_6.jpg"
                              alt="img-product"
                            />
                          </a>
                        </div>
                        <div
                          className="swiper-slide"
                          data-color="black"
                          data-size="L"
                        >
                          <a
                            href="/assets/images/product/single/detail-1_7.jpg"
                            target="_blank"
                            className="item"
                            data-pswp-width="576px"
                            data-pswp-height="768px"
                          >
                            <img
                              loading="lazy"
                              width="576"
                              height="768"
                              className="tf-image-zoom"
                              data-zoom="/assets/images/product/single/detail-1_7.jpg"
                              src="/assets/images/product/single/detail-1_7.jpg"
                              alt="img-product"
                            />
                          </a>
                        </div>
                        <div
                          className="swiper-slide"
                          data-color="black"
                          data-size="L"
                        >
                          <a
                            href="/assets/images/product/single/detail-1_8.jpg"
                            target="_blank"
                            className="item"
                            data-pswp-width="576px"
                            data-pswp-height="768px"
                          >
                            <img
                              loading="lazy"
                              width="576"
                              height="768"
                              className="tf-image-zoom"
                              data-zoom="/assets/images/product/single/detail-1_8.jpg"
                              src="/assets/images/product/single/detail-1_8.jpg"
                              alt="img-product"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    dir="ltr"
                    className="swiper tf-product-media-thumbs other-image-zoom"
                    data-direction="vertical"
                    data-preview="7"
                  >
                    <div className="swiper-wrapper stagger-wrap">
                      <div className="swiper-slide stagger-item">
                        <div className="item">
                          <img
                            loading="lazy"
                            width="82"
                            height="110"
                            src="/assets/images/product/single/detail-1.jpg"
                            alt="Image"
                          />
                        </div>
                      </div>
                      <div className="swiper-slide stagger-item">
                        <div className="item">
                          <img
                            loading="lazy"
                            width="82"
                            height="110"
                            src="/assets/images/product/single/detail-1_2.jpg"
                            alt="Image"
                          />
                        </div>
                      </div>
                      <div className="swiper-slide stagger-item">
                        <div className="item">
                          <img
                            loading="lazy"
                            width="82"
                            height="110"
                            src="/assets/images/product/single/detail-1_3.jpg"
                            alt="Image"
                          />
                        </div>
                      </div>
                      <div className="swiper-slide stagger-item">
                        <div className="item">
                          <img
                            loading="lazy"
                            width="82"
                            height="110"
                            src="/assets/images/product/single/detail-1_4.jpg"
                            alt="Image"
                          />
                        </div>
                      </div>
                      <div className="swiper-slide stagger-item">
                        <div className="item">
                          <img
                            loading="lazy"
                            width="82"
                            height="110"
                            src="/assets/images/product/single/detail-1_5.jpg"
                            alt="Image"
                          />
                        </div>
                      </div>
                      <div className="swiper-slide stagger-item">
                        <div className="item">
                          <img
                            loading="lazy"
                            width="82"
                            height="110"
                            src="/assets/images/product/single/detail-1_6.jpg"
                            alt="Image"
                          />
                        </div>
                      </div>
                      <div className="swiper-slide stagger-item">
                        <div className="item">
                          <img
                            loading="lazy"
                            width="82"
                            height="110"
                            src="/assets/images/product/single/detail-1_7.jpg"
                            alt="Image"
                          />
                        </div>
                      </div>
                      <div className="swiper-slide stagger-item">
                        <div className="item">
                          <img
                            loading="lazy"
                            width="82"
                            height="110"
                            src="/assets/images/product/single/detail-1_8.jpg"
                            alt="Image"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="tf-product-info-wrap position-relative mt-md-0">
                <div className="tf-zoom-main sticky-top"></div>
                <div className="tf-product-info-list other-image-zoom">
                  <div className="tf-product-info-heading">
                    <p className="product-infor-cate text-caption-01 mb-4">
                      Clothing
                    </p>
                    <h3 className="product-infor-name mb-12">
                      Lyocell Wrap Top
                    </h3>
                    <div className="product-infor-meta mb-20">
                      <div className="meta_rate">
                        <div className="star-wrap normal d-flex align-items-center">
                          <i className="icon icon-Star"></i>
                          <i className="icon icon-Star"></i>
                          <i className="icon icon-Star"></i>
                          <i className="icon icon-Star"></i>
                          <i className="icon icon-Star"></i>
                        </div>
                        <span className="text-caption-01 cl-text-2">
                          (134 reviews)
                        </span>
                      </div>
                      <div className="br-line type-vertical"></div>
                      <div className="meta_sold">
                        <i className="icon icon-Lightning text-primary"></i>
                        <span className="text-caption-01 cl-text-2">
                          18 sold in last 32 hours
                        </span>
                      </div>
                      <div className="br-line type-vertical"></div>
                      <div className="meta_prd_code text-caption-01">
                        <span className="cl-text-2">SKU:</span>
                        <span>53453412</span>
                      </div>
                    </div>
                    <div className="product-infor-price mb-12">
                      <h4 className="price-on-sale">$79.99</h4>
                      <div className="br-line type-vertical"></div>
                      <p className="cl-text-3 text-decoration-line-through">
                        $98.99
                      </p>
                      <span className="badge-sale text-white fw-semibold text-caption-02">
                        -25%
                      </span>
                    </div>
                    <p className="product-infor-desc cl-text-2 mb-12">
                      The garments labelled as Committed are products that have
                      been produced using sustainable fibres or processes,
                      reducing their environmental impact.
                    </p>
                    <div className="product-infor-reality lh-24">
                      <div className="ic d-flex">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect width="24" height="24" rx="4" fill="#101010" />
                          <path
                            d="M19.4569 11.7975C19.435 11.7481 18.9056 10.5738 17.7287 9.39687C16.1606 7.82875 14.18 7 12 7C9.81999 7 7.83937 7.82875 6.27124 9.39687C5.09437 10.5738 4.56249 11.75 4.54312 11.7975C4.51469 11.8614 4.5 11.9306 4.5 12.0006C4.5 12.0706 4.51469 12.1398 4.54312 12.2037C4.56499 12.2531 5.09437 13.4269 6.27124 14.6038C7.83937 16.1713 9.81999 17 12 17C14.18 17 16.1606 16.1713 17.7287 14.6038C18.9056 13.4269 19.435 12.2531 19.4569 12.2037C19.4853 12.1398 19.5 12.0706 19.5 12.0006C19.5 11.9306 19.4853 11.8614 19.4569 11.7975ZM12 14.5C11.5055 14.5 11.0222 14.3534 10.6111 14.0787C10.1999 13.804 9.87951 13.4135 9.69029 12.9567C9.50107 12.4999 9.45157 11.9972 9.54803 11.5123C9.64449 11.0273 9.88259 10.5819 10.2322 10.2322C10.5819 9.8826 11.0273 9.6445 11.5123 9.54804C11.9972 9.45157 12.4999 9.50108 12.9567 9.6903C13.4135 9.87952 13.804 10.2 14.0787 10.6111C14.3534 11.0222 14.5 11.5055 14.5 12C14.5 12.663 14.2366 13.2989 13.7678 13.7678C13.2989 14.2366 12.663 14.5 12 14.5Z"
                            fill="white"
                          />
                        </svg>
                      </div>
                      <span className="text-caption-01">
                        28 people are viewing this right now
                      </span>
                    </div>
                  </div>
                  <div className="br-line"></div>
                  <div className="tf-product-variant">
                    <div className="variant-picker-item variant-color">
                      <div className="variant-picker-label">
                        <div>
                          Colors:
                          <span className="variant-picker-label-value value-currentColor text-capitalize fw-medium">
                            Gray
                          </span>
                        </div>
                      </div>
                      <div className="variant-picker-values">
                        <div
                          className="hover-tooltip tooltip-bot color-btn style-image active"
                          data-color="green"
                        >
                          <div className="img">
                            <img
                              loading="lazy"
                              width="60"
                              height="60"
                              src="/assets/images/product/single/img_square/detail-1_2.jpg"
                              data-src="/assets/images/product/single/img_square/detail-1_2.jpg"
                              alt="img"
                            />
                          </div>
                          <span className="tooltip">Green</span>
                        </div>
                        <div
                          className="hover-tooltip tooltip-bot color-btn style-image"
                          data-color="gray"
                        >
                          <div className="img">
                            <img
                              loading="lazy"
                              width="60"
                              height="60"
                              src="/assets/images/product/single/img_square/detail-1_5.jpg"
                              data-src="/assets/images/product/single/img_square/detail-1_5.jpg"
                              alt="img"
                            />
                          </div>
                          <span className="tooltip">Gray</span>
                        </div>
                        <div
                          className="hover-tooltip tooltip-bot color-btn style-image"
                          data-color="black"
                        >
                          <div className="img">
                            <img
                              loading="lazy"
                              width="60"
                              height="60"
                              src="/assets/images/product/single/img_square/detail-1_7.jpg"
                              data-src="/assets/images/product/single/img_square/detail-1_7.jpg"
                              alt="img"
                            />
                          </div>
                          <span className="tooltip">Black</span>
                        </div>
                      </div>
                    </div>
                    <div className="variant-picker-item variant-size">
                      <div className="variant-picker-label">
                        <div>
                          Size:
                          <span className="variant-picker-label-value value-currentSize text-capitalize fw-medium">
                            M
                          </span>
                        </div>
                        <a
                          href="#findSize"
                          data-bs-toggle="modal"
                          className="tf-btn-line-2 style-primary text-caption-01 fw-semibold"
                        >
                          Size Guide
                        </a>
                      </div>
                      <div className="variant-picker-values">
                        <span
                          className="size-btn"
                          data-size="S"
                          data-price="39.99"
                        >
                          S
                        </span>
                        <span
                          className="size-btn active"
                          data-size="M"
                          data-price="59.99"
                        >
                          M
                        </span>
                        <span
                          className="size-btn"
                          data-size="L"
                          data-price="79.99"
                        >
                          L
                        </span>
                        <span
                          className="size-btn"
                          data-size="XL"
                          data-price="89.99"
                        >
                          XL
                        </span>
                        <span
                          className="size-btn disabled"
                          data-size="XX"
                          data-price="99.99"
                        >
                          XXL
                        </span>
                      </div>
                    </div>
                    <div className="tf-product-total-quantity">
                      <p className="">Quantity:</p>
                      <div className="group-action">
                        <div className="wg-quantity">
                          <button className="btn-quantity btn-decrease">
                            <i className="icon icon-minus"></i>
                          </button>
                          <input
                            className="quantity-product"
                            type="text"
                            name="number"
                            value="1"
                          />
                          <button className="btn-quantity btn-increase">
                            <i className="icon icon-plus"></i>
                          </button>
                        </div>
                        <a
                          href="#shoppingCart"
                          data-bs-toggle="offcanvas"
                          className="btn-action-price tf-btn type-xl animate-btn w-100"
                        >
                          Add To Cart
                          <span className="d-none d-sm-block d-md-none d-lg-block">
                            &nbsp;-&nbsp;
                          </span>
                          <span className="price-add d-none d-sm-block d-md-none d-lg-block">
                            $79.99
                          </span>
                        </a>
                      </div>
                      <a
                        href="checkout.html"
                        className="tf-btn type-xl btn-primary animate-btn w-100"
                      >
                        Buy It Now
                      </a>
                    </div>
                  </div>
                  <div className="tf-product-extra-link">
                    <a
                      href="#compare"
                      data-bs-toggle="offcanvas"
                      className="product-extra-icon link"
                    >
                      <i className="icon icon-ArrowsLeftRight"></i>
                      Compare
                    </a>
                    <a
                      href="#ask"
                      data-bs-toggle="modal"
                      className="product-extra-icon link"
                    >
                      <i className="icon icon-Question"></i>
                      Ask A Question
                    </a>
                    <a
                      href="#findSize"
                      data-bs-toggle="modal"
                      className="product-extra-icon link"
                    >
                      <i className="icon icon-Ruler"></i>
                      Size Guide
                    </a>
                    <a
                      href="#share"
                      data-bs-toggle="modal"
                      className="product-extra-icon link"
                    >
                      <i className="icon icon-ShareNetwork"></i>
                      Share
                    </a>
                  </div>
                  <div className="br-line"></div>
                  <div className="tf-product-delivery-return">
                    <div className="product-delivery">
                      <i className="icon icon-Timer"></i>
                      <p>
                        Estimated Delivery:
                        <span className="fw-semibold">12-26 Days</span>
                        (International),
                        <span className="fw-semibold">3-6 Days</span>
                        (United States)
                      </p>
                    </div>
                    <div className="product-delivery return">
                      <i className="icon icon-ArrowClockwise"></i>
                      <p>
                        Return within
                        <span className="fw-semibold">45 Days</span>
                        of purchase. Duties & taxes are non-refundable.
                      </p>
                    </div>
                  </div>
                  <div className="tf-product-trust-seal">
                    <p className="h6 text-seal">Guranteed Safe Checkout:</p>
                    <ul className="list-card">
                      <li className="card-item">
                        <img
                          width="50"
                          height="32"
                          src="/assets/images/payment/visa.svg"
                          alt="card"
                        />
                      </li>
                      <li className="card-item">
                        <img
                          width="50"
                          height="32"
                          src="/assets/images/payment/master-card.svg"
                          alt="card"
                        />
                      </li>
                      <li className="card-item">
                        <img
                          width="50"
                          height="32"
                          src="/assets/images/payment/amex.svg"
                          alt="card"
                        />
                      </li>
                      <li className="card-item">
                        <img
                          width="50"
                          height="32"
                          src="/assets/images/payment/paypal.svg"
                          alt="card"
                        />
                      </li>
                      <li className="card-item">
                        <img
                          width="50"
                          height="32"
                          src="/assets/images/payment/water.svg"
                          alt="card"
                        />
                      </li>
                      <li className="card-item">
                        <img
                          width="50"
                          height="32"
                          src="/assets/images/payment/discover.svg"
                          alt="card"
                        />
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="tf-sticky-btn-atc">
        <div className="container">
          <div className="tf-height-observer w-100 d-flex align-items-center">
            <div className="tf-sticky-atc-product d-flex align-items-center">
              <div className="atc-product-side">
                <div className="prd_img">
                  <img
                    loading="lazy"
                    width="60"
                    height="80"
                    src="/assets/images/product/single/detail-1_2.jpg"
                    alt="Image"
                  />
                </div>
                <div className="prd_info d-none d-lg-grid">
                  <p className="name__prd fw-medium lh-24">Lyocell wrap top</p>
                  <p className="distribute__prd text-caption-01 cl-text-3">
                    Green, XS, Cotton
                  </p>
                  <p className="price__prd fw-semibold">$79.00</p>
                </div>
              </div>
            </div>
            <div className="tf-sticky-atc-infos">
              <form className="">
                <div className="tf-sticky-atc-variant-price">
                  <p className="title">Size:</p>
                  <div className="tf-select style-2">
                    <select>
                      <option selected="selected">M</option>
                      <option>S</option>
                      <option>L</option>
                      <option>XL</option>
                    </select>
                  </div>
                </div>
                <div className="tf-product-info-quantity">
                  <p className="title">Quantity:</p>
                  <div className="wg-quantity style-2">
                    <button className="btn-quantity minus-btn">
                      <i className="icon icon-minus"></i>
                    </button>
                    <input
                      className="quantity-product"
                      type="text"
                      name="number"
                      value="1"
                    />
                    <button className="btn-quantity plus-btn">
                      <i className="icon icon-plus"></i>
                    </button>
                  </div>
                </div>
                <a
                  href="#shoppingCart"
                  data-bs-toggle="offcanvas"
                  className="tf-btn animate-btn btn-add-to-cart"
                >
                  Add To Cart - $79.99
                </a>
              </form>
            </div>
          </div>
        </div>
      </div>
      <ProductDescription />
      <RelateProduct />
    </main>
  );
}

export default page;
