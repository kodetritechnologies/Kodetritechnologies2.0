function RelateProduct() {
  return (
    <div class="flat-spacing flat-animate-tab pt-0">
      <div class="container">
        <ul
          class="tab-btn-wrap-v1 style-2 justify-content-sm-center"
          role="tablist"
        >
          <li class="nav-tab-item" role="presentation">
            <a
              href="#related"
              data-bs-toggle="tab"
              class="tf-btn-tab active"
              role="tab"
            >
              <span class="h4 fw-medium">Related Products</span>
            </a>
          </li>
          <li class="nav-tab-item" role="presentation">
            <a
              href="#recently"
              data-bs-toggle="tab"
              class="tf-btn-tab"
              role="tab"
            >
              <span class="h4 fw-medium">Recently Viewed</span>
            </a>
          </li>
        </ul>
        <div class="tab-content">
          <div class="tab-pane active show" id="related" role="tabpanel">
            <div
              dir="ltr"
              class="swiper tf-swiper wrap-sw-over"
              data-preview="4"
              data-tablet="3"
              data-mobile-sm="2"
              data-mobile="2"
              data-space-lg="30"
              data-space-md="20"
              data-space="10"
              data-pagination="2"
              data-pagination-sm="2"
              data-pagination-md="3"
              data-pagination-lg="4"
            >
              <div class="swiper-wrapper">
                <div class="swiper-slide">
                  <div class="card-product">
                    <div class="card-product_wrapper">
                      <a href="product-detail.html" class="product-img">
                        <img
                          class="img-product"
                          loading="lazy"
                          width="330"
                          height="440"
                          src="/assets/images/product/product-1.jpg"
                          alt="Product"
                        />
                        <img
                          class="img-hover"
                          loading="lazy"
                          width="330"
                          height="440"
                          src="/assets/images/product/product-1_2.jpg"
                          alt="Product"
                        />
                      </a>
                      <ul class="product-action_list">
                        <li class="wishlist">
                          <a
                            href="#;"
                            class="hover-tooltip tooltip-left box-icon"
                          >
                            <span class="icon icon-heart"></span>
                            <span class="tooltip">Add to Wishlist</span>
                          </a>
                        </li>
                        <li class="compare">
                          <a
                            href="#compare"
                            data-bs-toggle="offcanvas"
                            class="hover-tooltip tooltip-left box-icon"
                          >
                            <span class="icon icon-ArrowsLeftRight"></span>
                            <span class="tooltip">Compare</span>
                          </a>
                        </li>
                        <li>
                          <a
                            href="#quickView"
                            data-bs-toggle="offcanvas"
                            class="hover-tooltip tooltip-left box-icon"
                          >
                            <span class="icon icon-Eye"></span>
                            <span class="tooltip">Quick view</span>
                          </a>
                        </li>
                      </ul>
                      <ul class="product-badge_list">
                        <li class="product-badge_item text-caption-01 new">
                          NEW
                        </li>
                      </ul>
                      <div class="product-action_bot">
                        <a
                          href="#quickAdd"
                          data-bs-toggle="modal"
                          class="tf-btn btn-white small  w-100"
                        >
                          Quick Add
                        </a>
                      </div>
                      <div class="product-marquee_sale">
                        <div class="marquee-wrapper">
                          <div class="initial-child-container">
                            <div class="marquee-child-item">
                              HOT SALE 25% OFF
                            </div>
                            <i class="icon icon-Star2"></i>
                            <div class="marquee-child-item">
                              HOT SALE 25% OFF
                            </div>
                            <i class="icon icon-Star2"></i>
                            <div class="marquee-child-item">
                              HOT SALE 25% OFF
                            </div>
                            <i class="icon icon-Star2"></i>
                            <div class="marquee-child-item">
                              HOT SALE 25% OFF
                            </div>
                            <i class="icon icon-Star2"></i>
                            <div class="marquee-child-item">
                              HOT SALE 25% OFF
                            </div>
                            <i class="icon icon-Star2"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="card-product_info">
                      <a
                        href="product-detail.html"
                        class="name-product lh-24 fw-medium link-underline-text"
                      >
                        Lyocell wrap top
                      </a>
                      <div class="star-wrap d-flex align-items-center">
                        <i class="icon icon-Star"></i>
                        <i class="icon icon-Star"></i>
                        <i class="icon icon-Star"></i>
                        <i class="icon icon-Star"></i>
                        <i class="icon icon-Star"></i>
                      </div>
                      <div class="price-wrap">
                        <span class="price-new text-primary fw-semibold">
                          $69,99
                        </span>
                        <span class="price-old text-caption-01 cl-text-3">
                          $99,99
                        </span>
                      </div>
                      <ul class="product-color_list">
                        <li class="product-color-item color-swatch hover-tooltip tooltip-bot active">
                          <span class="tooltip color-filter">Brown</span>
                          <span class="swatch-value bg-warm-beige"></span>
                          <img
                            src="/assets/images/product/product-1.jpg"
                            data-src="/assets/images/product/product-1.jpg"
                            alt="Image"
                          />
                        </li>
                        <li class="product-color-item color-swatch hover-tooltip tooltip-bot">
                          <span class="tooltip color-filter">Dark Blue</span>
                          <span class="swatch-value bg-midnight-blue"></span>
                          <img
                            src="/assets/images/product/product-1_3.jpg"
                            data-src="/assets/images/product/product-1_3.jpg"
                            alt="Image"
                          />
                        </li>
                        <li class="product-color-item color-swatch hover-tooltip tooltip-bot">
                          <span class="tooltip color-filter">White</span>
                          <span class="swatch-value bg-white"></span>
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
                <div class="swiper-slide">
                  <div class="card-product">
                    <div class="card-product_wrapper">
                      <a href="product-detail.html" class="product-img">
                        <img
                          class="img-product"
                          loading="lazy"
                          width="330"
                          height="440"
                          src="/assets/images/product/product-2.jpg"
                          alt="Product"
                        />
                        <img
                          class="img-hover"
                          loading="lazy"
                          width="330"
                          height="440"
                          src="/assets/images/product/product-2_2.jpg"
                          alt="Product"
                        />
                      </a>
                      <ul class="product-action_list">
                        <li class="wishlist">
                          <a
                            href="#;"
                            class="hover-tooltip tooltip-left box-icon"
                          >
                            <span class="icon icon-heart"></span>
                            <span class="tooltip">Add to Wishlist</span>
                          </a>
                        </li>
                        <li class="compare">
                          <a
                            href="#compare"
                            data-bs-toggle="offcanvas"
                            class="hover-tooltip tooltip-left box-icon"
                          >
                            <span class="icon icon-ArrowsLeftRight"></span>
                            <span class="tooltip">Compare</span>
                          </a>
                        </li>
                        <li>
                          <a
                            href="#quickView"
                            data-bs-toggle="offcanvas"
                            class="hover-tooltip tooltip-left box-icon"
                          >
                            <span class="icon icon-Eye"></span>
                            <span class="tooltip">Quick view</span>
                          </a>
                        </li>
                      </ul>
                      <ul class="product-badge_list">
                        <li class="product-badge_item text-caption-01 sale">
                          -25%
                        </li>
                      </ul>
                      <div class="product-action_bot">
                        <a
                          href="#quickAdd"
                          data-bs-toggle="modal"
                          class="tf-btn btn-white small  w-100"
                        >
                          Quick Add
                        </a>
                      </div>
                    </div>
                    <div class="card-product_info">
                      <a
                        href="product-detail.html"
                        class="name-product lh-24 fw-medium link-underline-text"
                      >
                        Buttons cotton top
                      </a>
                      <div class="star-wrap d-flex align-items-center">
                        <i class="icon icon-Star"></i>
                        <i class="icon icon-Star"></i>
                        <i class="icon icon-Star"></i>
                        <i class="icon icon-Star"></i>
                        <i class="icon icon-Star"></i>
                      </div>
                      <div class="price-wrap">
                        <span class="price-new text-primary fw-semibold">
                          $29,99
                        </span>
                        <span class="price-old text-caption-01 cl-text-3">
                          $49,99
                        </span>
                      </div>
                      <ul class="product-color_list">
                        <li class="product-color-item color-swatch hover-tooltip tooltip-bot active">
                          <span class="tooltip color-filter">Brown</span>
                          <span class="swatch-value bg-warm-brown"></span>
                          <img
                            src="/assets/images/product/product-2.jpg"
                            data-src="/assets/images/product/product-2.jpg"
                            alt="Image"
                          />
                        </li>
                        <li class="product-color-item color-swatch hover-tooltip tooltip-bot">
                          <span class="tooltip color-filter">Beige</span>
                          <span class="swatch-value bg-beige"></span>
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
                <div class="swiper-slide">
                  <div class="card-product">
                    <div class="card-product_wrapper">
                      <a href="product-detail.html" class="product-img">
                        <img
                          class="img-product"
                          loading="lazy"
                          width="330"
                          height="440"
                          src="/assets/images/product/product-3.jpg"
                          alt="Product"
                        />
                        <img
                          class="img-hover"
                          loading="lazy"
                          width="330"
                          height="440"
                          src="/assets/images/product/product-3_2.jpg"
                          alt="Product"
                        />
                      </a>
                      <ul class="product-action_list">
                        <li class="wishlist">
                          <a
                            href="#;"
                            class="hover-tooltip tooltip-left box-icon"
                          >
                            <span class="icon icon-heart"></span>
                            <span class="tooltip">Add to Wishlist</span>
                          </a>
                        </li>
                        <li class="compare">
                          <a
                            href="#compare"
                            data-bs-toggle="offcanvas"
                            class="hover-tooltip tooltip-left box-icon"
                          >
                            <span class="icon icon-ArrowsLeftRight"></span>
                            <span class="tooltip">Compare</span>
                          </a>
                        </li>
                        <li>
                          <a
                            href="#quickView"
                            data-bs-toggle="offcanvas"
                            class="hover-tooltip tooltip-left box-icon"
                          >
                            <span class="icon icon-Eye"></span>
                            <span class="tooltip">Quick view</span>
                          </a>
                        </li>
                      </ul>
                      <ul class="product-badge_list">
                        <li class="product-badge_item text-caption-01 sale">
                          -25%
                        </li>
                      </ul>
                      <div class="product-action_bot">
                        <a
                          href="#quickAdd"
                          data-bs-toggle="modal"
                          class="tf-btn btn-white small  w-100"
                        >
                          Quick Add
                        </a>
                      </div>
                    </div>
                    <div class="card-product_info">
                      <a
                        href="product-detail.html"
                        class="name-product lh-24 fw-medium link-underline-text"
                      >
                        Wool Midi Coat
                      </a>
                      <div class="star-wrap d-flex align-items-center">
                        <i class="icon icon-Star"></i>
                        <i class="icon icon-Star"></i>
                        <i class="icon icon-Star"></i>
                        <i class="icon icon-Star"></i>
                        <i class="icon icon-Star"></i>
                      </div>
                      <div class="price-wrap">
                        <span class="price-new text-primary fw-semibold">
                          $15,99
                        </span>
                        <span class="price-old text-caption-01 cl-text-3">
                          $25,99
                        </span>
                      </div>
                      <ul class="product-color_list">
                        <li class="product-color-item color-swatch hover-tooltip tooltip-bot active">
                          <span class="tooltip color-filter">Brown</span>
                          <span class="swatch-value bg-olive-brown"></span>
                          <img
                            src="/assets/images/product/product-3.jpg"
                            data-src="/assets/images/product/product-3.jpg"
                            alt="Image"
                          />
                        </li>
                        <li class="product-color-item color-swatch hover-tooltip tooltip-bot">
                          <span class="tooltip color-filter">Blue</span>
                          <span class="swatch-value bg-dark-blue"></span>
                          <img
                            src="/assets/images/product/product-3_3.jpg"
                            data-src="/assets/images/product/product-3_3.jpg"
                            alt="Image"
                          />
                        </li>
                        <li class="product-color-item color-swatch hover-tooltip tooltip-bot">
                          <span class="tooltip color-filter">Light</span>
                          <span class="swatch-value bg-warm-beige"></span>
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
                <div class="swiper-slide">
                  <div class="card-product">
                    <div class="card-product_wrapper">
                      <a href="product-detail.html" class="product-img">
                        <img
                          class="img-product"
                          loading="lazy"
                          width="330"
                          height="440"
                          src="/assets/images/product/product-4.jpg"
                          alt="Product"
                        />
                        <img
                          class="img-hover"
                          loading="lazy"
                          width="330"
                          height="440"
                          src="/assets/images/product/product-4_2.jpg"
                          alt="Product"
                        />
                      </a>
                      <ul class="product-action_list">
                        <li class="wishlist">
                          <a
                            href="#;"
                            class="hover-tooltip tooltip-left box-icon"
                          >
                            <span class="icon icon-heart"></span>
                            <span class="tooltip">Add to Wishlist</span>
                          </a>
                        </li>
                        <li class="compare">
                          <a
                            href="#compare"
                            data-bs-toggle="offcanvas"
                            class="hover-tooltip tooltip-left box-icon"
                          >
                            <span class="icon icon-ArrowsLeftRight"></span>
                            <span class="tooltip">Compare</span>
                          </a>
                        </li>
                        <li>
                          <a
                            href="#quickView"
                            data-bs-toggle="offcanvas"
                            class="hover-tooltip tooltip-left box-icon"
                          >
                            <span class="icon icon-Eye"></span>
                            <span class="tooltip">Quick view</span>
                          </a>
                        </li>
                      </ul>
                      <div class="product-action_bot">
                        <a
                          href="#quickAdd"
                          data-bs-toggle="modal"
                          class="tf-btn btn-white small  w-100"
                        >
                          Quick Add
                        </a>
                      </div>
                      <div class="product-countdown">
                        <div
                          class="js-countdown cd-has-zero"
                          data-timer="1093120"
                          data-labels="D : ,H : ,M : ,S"
                        ></div>
                      </div>
                    </div>
                    <div class="card-product_info">
                      <a
                        href="product-detail.html"
                        class="name-product lh-24 fw-medium link-underline-text"
                      >
                        linen slim-fit shirt
                      </a>
                      <div class="star-wrap d-flex align-items-center">
                        <i class="icon icon-Star"></i>
                        <i class="icon icon-Star"></i>
                        <i class="icon icon-Star"></i>
                        <i class="icon icon-Star"></i>
                        <i class="icon icon-Star"></i>
                      </div>
                      <div class="price-wrap">
                        <span class="price-new text-primary fw-semibold">
                          $45,99
                        </span>
                        <span class="price-old text-caption-01 cl-text-3">
                          $79,99
                        </span>
                      </div>
                      <ul class="product-color_list">
                        <li class="product-color-item color-swatch hover-tooltip tooltip-bot active">
                          <span class="tooltip color-filter">Blue</span>
                          <span class="swatch-value bg-dark-blue-2"></span>
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
              <div class="sw-line-default style-2 tf-sw-pagination"></div>
            </div>
          </div>
          <div class="tab-pane" id="recently" role="tabpanel">
            <div
              dir="ltr"
              class="swiper tf-swiper wrap-sw-over"
              data-preview="4"
              data-tablet="3"
              data-mobile-sm="2"
              data-mobile="2"
              data-space-lg="30"
              data-space-md="20"
              data-space="10"
              data-pagination="2"
              data-pagination-sm="2"
              data-pagination-md="3"
              data-pagination-lg="4"
            >
              <div class="swiper-wrapper">
                <div class="swiper-slide">
                  <div class="card-product">
                    <div class="card-product_wrapper">
                      <a href="product-detail.html" class="product-img">
                        <img
                          class="img-product"
                          loading="lazy"
                          width="330"
                          height="440"
                          src="/assets/images/product/product-3.jpg"
                          alt="Product"
                        />
                        <img
                          class="img-hover"
                          loading="lazy"
                          width="330"
                          height="440"
                          src="/assets/images/product/product-3_2.jpg"
                          alt="Product"
                        />
                      </a>
                      <ul class="product-action_list">
                        <li class="wishlist">
                          <a
                            href="#;"
                            class="hover-tooltip tooltip-left box-icon"
                          >
                            <span class="icon icon-heart"></span>
                            <span class="tooltip">Add to Wishlist</span>
                          </a>
                        </li>
                        <li class="compare">
                          <a
                            href="#compare"
                            data-bs-toggle="offcanvas"
                            class="hover-tooltip tooltip-left box-icon"
                          >
                            <span class="icon icon-ArrowsLeftRight"></span>
                            <span class="tooltip">Compare</span>
                          </a>
                        </li>
                        <li>
                          <a
                            href="#quickView"
                            data-bs-toggle="offcanvas"
                            class="hover-tooltip tooltip-left box-icon"
                          >
                            <span class="icon icon-Eye"></span>
                            <span class="tooltip">Quick view</span>
                          </a>
                        </li>
                      </ul>
                      <ul class="product-badge_list">
                        <li class="product-badge_item text-caption-01 sale">
                          -25%
                        </li>
                      </ul>
                      <div class="product-action_bot">
                        <a
                          href="#quickAdd"
                          data-bs-toggle="modal"
                          class="tf-btn btn-white small  w-100"
                        >
                          Quick Add
                        </a>
                      </div>
                    </div>
                    <div class="card-product_info">
                      <a
                        href="product-detail.html"
                        class="name-product lh-24 fw-medium link-underline-text"
                      >
                        Wool Midi Coat
                      </a>
                      <div class="star-wrap d-flex align-items-center">
                        <i class="icon icon-Star"></i>
                        <i class="icon icon-Star"></i>
                        <i class="icon icon-Star"></i>
                        <i class="icon icon-Star"></i>
                        <i class="icon icon-Star"></i>
                      </div>
                      <div class="price-wrap">
                        <span class="price-new text-primary fw-semibold">
                          $15,99
                        </span>
                        <span class="price-old text-caption-01 cl-text-3">
                          $25,99
                        </span>
                      </div>
                      <ul class="product-color_list">
                        <li class="product-color-item color-swatch hover-tooltip tooltip-bot active">
                          <span class="tooltip color-filter">Brown</span>
                          <span class="swatch-value bg-olive-brown"></span>
                          <img
                            src="/assets/images/product/product-3.jpg"
                            data-src="/assets/images/product/product-3.jpg"
                            alt="Image"
                          />
                        </li>
                        <li class="product-color-item color-swatch hover-tooltip tooltip-bot">
                          <span class="tooltip color-filter">Blue</span>
                          <span class="swatch-value bg-dark-blue"></span>
                          <img
                            src="/assets/images/product/product-3_3.jpg"
                            data-src="/assets/images/product/product-3_3.jpg"
                            alt="Image"
                          />
                        </li>
                        <li class="product-color-item color-swatch hover-tooltip tooltip-bot">
                          <span class="tooltip color-filter">Light</span>
                          <span class="swatch-value bg-warm-beige"></span>
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
                <div class="swiper-slide">
                  <div class="card-product">
                    <div class="card-product_wrapper">
                      <a href="product-detail.html" class="product-img">
                        <img
                          class="img-product"
                          loading="lazy"
                          width="330"
                          height="440"
                          src="/assets/images/product/product-4.jpg"
                          alt="Product"
                        />
                        <img
                          class="img-hover"
                          loading="lazy"
                          width="330"
                          height="440"
                          src="/assets/images/product/product-4_2.jpg"
                          alt="Product"
                        />
                      </a>
                      <ul class="product-action_list">
                        <li class="wishlist">
                          <a
                            href="#;"
                            class="hover-tooltip tooltip-left box-icon"
                          >
                            <span class="icon icon-heart"></span>
                            <span class="tooltip">Add to Wishlist</span>
                          </a>
                        </li>
                        <li class="compare">
                          <a
                            href="#compare"
                            data-bs-toggle="offcanvas"
                            class="hover-tooltip tooltip-left box-icon"
                          >
                            <span class="icon icon-ArrowsLeftRight"></span>
                            <span class="tooltip">Compare</span>
                          </a>
                        </li>
                        <li>
                          <a
                            href="#quickView"
                            data-bs-toggle="offcanvas"
                            class="hover-tooltip tooltip-left box-icon"
                          >
                            <span class="icon icon-Eye"></span>
                            <span class="tooltip">Quick view</span>
                          </a>
                        </li>
                      </ul>
                      <div class="product-action_bot">
                        <a
                          href="#quickAdd"
                          data-bs-toggle="modal"
                          class="tf-btn btn-white small  w-100"
                        >
                          Quick Add
                        </a>
                      </div>
                      <div class="product-countdown">
                        <div
                          class="js-countdown cd-has-zero"
                          data-timer="1093120"
                          data-labels="D : ,H : ,M : ,S"
                        ></div>
                      </div>
                    </div>
                    <div class="card-product_info">
                      <a
                        href="product-detail.html"
                        class="name-product lh-24 fw-medium link-underline-text"
                      >
                        linen slim-fit shirt
                      </a>
                      <div class="star-wrap d-flex align-items-center">
                        <i class="icon icon-Star"></i>
                        <i class="icon icon-Star"></i>
                        <i class="icon icon-Star"></i>
                        <i class="icon icon-Star"></i>
                        <i class="icon icon-Star"></i>
                      </div>
                      <div class="price-wrap">
                        <span class="price-new text-primary fw-semibold">
                          $45,99
                        </span>
                        <span class="price-old text-caption-01 cl-text-3">
                          $79,99
                        </span>
                      </div>
                      <ul class="product-color_list">
                        <li class="product-color-item color-swatch hover-tooltip tooltip-bot active">
                          <span class="tooltip color-filter">Blue</span>
                          <span class="swatch-value bg-dark-blue-2"></span>
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
                <div class="swiper-slide">
                  <div class="card-product">
                    <div class="card-product_wrapper">
                      <a href="product-detail.html" class="product-img">
                        <img
                          class="img-product"
                          loading="lazy"
                          width="330"
                          height="440"
                          src="/assets/images/product/product-1.jpg"
                          alt="Product"
                        />
                        <img
                          class="img-hover"
                          loading="lazy"
                          width="330"
                          height="440"
                          src="/assets/images/product/product-1_2.jpg"
                          alt="Product"
                        />
                      </a>
                      <ul class="product-action_list">
                        <li class="wishlist">
                          <a
                            href="#;"
                            class="hover-tooltip tooltip-left box-icon"
                          >
                            <span class="icon icon-heart"></span>
                            <span class="tooltip">Add to Wishlist</span>
                          </a>
                        </li>
                        <li class="compare">
                          <a
                            href="#compare"
                            data-bs-toggle="offcanvas"
                            class="hover-tooltip tooltip-left box-icon"
                          >
                            <span class="icon icon-ArrowsLeftRight"></span>
                            <span class="tooltip">Compare</span>
                          </a>
                        </li>
                        <li>
                          <a
                            href="#quickView"
                            data-bs-toggle="offcanvas"
                            class="hover-tooltip tooltip-left box-icon"
                          >
                            <span class="icon icon-Eye"></span>
                            <span class="tooltip">Quick view</span>
                          </a>
                        </li>
                      </ul>
                      <ul class="product-badge_list">
                        <li class="product-badge_item text-caption-01 new">
                          NEW
                        </li>
                      </ul>
                      <div class="product-action_bot">
                        <a
                          href="#quickAdd"
                          data-bs-toggle="modal"
                          class="tf-btn btn-white small  w-100"
                        >
                          Quick Add
                        </a>
                      </div>
                      <div class="product-marquee_sale">
                        <div class="marquee-wrapper">
                          <div class="initial-child-container">
                            <div class="marquee-child-item">
                              HOT SALE 25% OFF
                            </div>
                            <i class="icon icon-Star2"></i>
                            <div class="marquee-child-item">
                              HOT SALE 25% OFF
                            </div>
                            <i class="icon icon-Star2"></i>
                            <div class="marquee-child-item">
                              HOT SALE 25% OFF
                            </div>
                            <i class="icon icon-Star2"></i>
                            <div class="marquee-child-item">
                              HOT SALE 25% OFF
                            </div>
                            <i class="icon icon-Star2"></i>
                            <div class="marquee-child-item">
                              HOT SALE 25% OFF
                            </div>
                            <i class="icon icon-Star2"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="card-product_info">
                      <a
                        href="product-detail.html"
                        class="name-product lh-24 fw-medium link-underline-text"
                      >
                        Lyocell wrap top
                      </a>
                      <div class="star-wrap d-flex align-items-center">
                        <i class="icon icon-Star"></i>
                        <i class="icon icon-Star"></i>
                        <i class="icon icon-Star"></i>
                        <i class="icon icon-Star"></i>
                        <i class="icon icon-Star"></i>
                      </div>
                      <div class="price-wrap">
                        <span class="price-new text-primary fw-semibold">
                          $69,99
                        </span>
                        <span class="price-old text-caption-01 cl-text-3">
                          $99,99
                        </span>
                      </div>
                      <ul class="product-color_list">
                        <li class="product-color-item color-swatch hover-tooltip tooltip-bot active">
                          <span class="tooltip color-filter">Brown</span>
                          <span class="swatch-value bg-warm-beige"></span>
                          <img
                            src="/assets/images/product/product-1.jpg"
                            data-src="/assets/images/product/product-1.jpg"
                            alt="Image"
                          />
                        </li>
                        <li class="product-color-item color-swatch hover-tooltip tooltip-bot">
                          <span class="tooltip color-filter">Dark Blue</span>
                          <span class="swatch-value bg-midnight-blue"></span>
                          <img
                            src="/assets/images/product/product-1_3.jpg"
                            data-src="/assets/images/product/product-1_3.jpg"
                            alt="Image"
                          />
                        </li>
                        <li class="product-color-item color-swatch hover-tooltip tooltip-bot">
                          <span class="tooltip color-filter">White</span>
                          <span class="swatch-value bg-white"></span>
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
                <div class="swiper-slide">
                  <div class="card-product">
                    <div class="card-product_wrapper">
                      <a href="product-detail.html" class="product-img">
                        <img
                          class="img-product"
                          loading="lazy"
                          width="330"
                          height="440"
                          src="/assets/images/product/product-2.jpg"
                          alt="Product"
                        />
                        <img
                          class="img-hover"
                          loading="lazy"
                          width="330"
                          height="440"
                          src="/assets/images/product/product-2_2.jpg"
                          alt="Product"
                        />
                      </a>
                      <ul class="product-action_list">
                        <li class="wishlist">
                          <a
                            href="#;"
                            class="hover-tooltip tooltip-left box-icon"
                          >
                            <span class="icon icon-heart"></span>
                            <span class="tooltip">Add to Wishlist</span>
                          </a>
                        </li>
                        <li class="compare">
                          <a
                            href="#compare"
                            data-bs-toggle="offcanvas"
                            class="hover-tooltip tooltip-left box-icon"
                          >
                            <span class="icon icon-ArrowsLeftRight"></span>
                            <span class="tooltip">Compare</span>
                          </a>
                        </li>
                        <li>
                          <a
                            href="#quickView"
                            data-bs-toggle="offcanvas"
                            class="hover-tooltip tooltip-left box-icon"
                          >
                            <span class="icon icon-Eye"></span>
                            <span class="tooltip">Quick view</span>
                          </a>
                        </li>
                      </ul>
                      <ul class="product-badge_list">
                        <li class="product-badge_item text-caption-01 sale">
                          -25%
                        </li>
                      </ul>
                      <div class="product-action_bot">
                        <a
                          href="#quickAdd"
                          data-bs-toggle="modal"
                          class="tf-btn btn-white small  w-100"
                        >
                          Quick Add
                        </a>
                      </div>
                    </div>
                    <div class="card-product_info">
                      <a
                        href="product-detail.html"
                        class="name-product lh-24 fw-medium link-underline-text"
                      >
                        Buttons cotton top
                      </a>
                      <div class="star-wrap d-flex align-items-center">
                        <i class="icon icon-Star"></i>
                        <i class="icon icon-Star"></i>
                        <i class="icon icon-Star"></i>
                        <i class="icon icon-Star"></i>
                        <i class="icon icon-Star"></i>
                      </div>
                      <div class="price-wrap">
                        <span class="price-new text-primary fw-semibold">
                          $29,99
                        </span>
                        <span class="price-old text-caption-01 cl-text-3">
                          $49,99
                        </span>
                      </div>
                      <ul class="product-color_list">
                        <li class="product-color-item color-swatch hover-tooltip tooltip-bot active">
                          <span class="tooltip color-filter">Brown</span>
                          <span class="swatch-value bg-warm-brown"></span>
                          <img
                            src="/assets/images/product/product-2.jpg"
                            data-src="/assets/images/product/product-2.jpg"
                            alt="Image"
                          />
                        </li>
                        <li class="product-color-item color-swatch hover-tooltip tooltip-bot">
                          <span class="tooltip color-filter">Beige</span>
                          <span class="swatch-value bg-beige"></span>
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
              </div>
              <div class="sw-line-default style-2 tf-sw-pagination"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RelateProduct;
