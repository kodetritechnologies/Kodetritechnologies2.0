function Lookbook() {
  return (
    <div className="themesFlat">
      <div className="tf-grid-layout xl-col-2 gap-10 mb-10">
        <div className="banner-lookbook wrap-lookbook_hover">
          <img
            className="img-banner"
            loading="lazy"
            width="955"
            height="640"
            src="/assets/images/section/banner-lookbook-1.jpg"
            alt="Image"
          />
          <div className="lookbook-item position1">
            <div className="dropdown dropup-center dropdown-custom dropend">
              <div
                role="dialog"
                className="tf-pin-btn bundle-pin-item swiper-button"
                data-slide="0"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <span></span>
              </div>
              <div className="dropdown-menu">
                <div className="lookbook-product">
                  <a href="product-detail.html" className="image">
                    <img
                      width="88"
                      height="88"
                      src="/assets/images/product/square/product-10.jpg"
                      alt="Product"
                    />
                  </a>
                  <div className="content">
                    <a
                      href="product-detail.html"
                      className="name-prd link fw-medium lh-24 text-line-clamp-2"
                    >
                      High neck midi wool coat
                    </a>
                    <div className="price-wrap">
                      <span className="price-new text-primary fw-semibold">
                        $29,99
                      </span>
                      <span className="price-old text-caption-01 cl-text-3">
                        $39.99
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="lookbook-item position2">
            <div className="dropdown dropup-center dropdown-custom dropstart">
              <div
                role="dialog"
                className="tf-pin-btn bundle-pin-item swiper-button"
                data-slide="0"
                id="pin2"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <span></span>
              </div>
              <div className="dropdown-menu">
                <div className="lookbook-product">
                  <a href="product-detail.html" className="image">
                    <img
                      width="88"
                      height="88"
                      src="/assets/images/product/square/product-3_3.jpg"
                      alt="Product"
                    />
                  </a>
                  <div className="content">
                    <a
                      href="product-detail.html"
                      className="name-prd link fw-medium lh-24 text-line-clamp-2"
                    >
                      High neck midi wool coat
                    </a>
                    <div className="price-wrap">
                      <span className="price-new text-primary fw-semibold">
                        $49,99
                      </span>
                      <span className="price-old text-caption-01 cl-text-3">
                        $59.99
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="banner-lookbook wrap-lookbook_hover">
          <img
            className="img-banner"
            loading="lazy"
            width="955"
            height="640"
            src="/assets/images/section/banner-lookbook-2.jpg"
            alt="Image"
          />
          <div className="lookbook-item position3">
            <div className="dropdown dropup-center dropdown-custom dropstart">
              <div
                role="dialog"
                className="tf-pin-btn bundle-pin-item swiper-button"
                data-slide="0"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <span></span>
              </div>
              <div className="dropdown-menu">
                <div className="lookbook-product">
                  <a href="product-detail.html" className="image">
                    <img
                      width="88"
                      height="88"
                      src="/assets/images/product/square/product-11.jpg"
                      alt="Product"
                    />
                  </a>
                  <div className="content">
                    <a
                      href="product-detail.html"
                      className="name-prd link fw-medium lh-24 text-line-clamp-2"
                    >
                      High neck midi wool coat
                    </a>
                    <div className="price-wrap">
                      <span className="price-new text-primary fw-semibold">
                        $69,99
                      </span>
                      <span className="price-old text-caption-01 cl-text-3">
                        $79.99
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Lookbook;
