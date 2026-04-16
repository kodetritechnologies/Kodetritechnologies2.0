function QuickAddModel() {
  return (
    <div className="modal modalCentered fade modal-quickadd" id="quickAdd">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="d-flex align-items-center justify-content-between mb-20">
            <h5>Quick Add</h5>
            <span className="d-flex cs-pointer link" data-bs-dismiss="modal">
              <i className="icon icon-X2 fs-24"></i>
            </span>
          </div>
          <div className="tf-product-quick_add tf-quick-prd_variant">
            <div className="product-mini-view">
              <a href="product-detail.html" className="prd-image">
                <img
                  className="img-product"
                  width="80"
                  height="107"
                  src="/assets/images/product/single/detail-1.jpg"
                  alt="Image Product"
                />
              </a>
              <div className="prd-content">
                <a
                  href="product-detail.html"
                  className="prd-name fw-medium link-underline link text-capitalize"
                >
                  linen slim-fit shirt
                </a>
                <div className="price-wrap">
                  <span className="price-new text-primary fw-semibold price-on-sale">
                    $79.99
                  </span>
                  <span className="price-old text-caption-01 cl-text-3">
                    $99,99
                  </span>
                </div>
              </div>
            </div>
            <div className="quick-variant-picker picker_color">
              <div className="variant-picker_label mb-12">
                <div>
                  Colors:
                  <span className="variant__value text-capitalize fw-medium">
                    Gray
                  </span>
                </div>
              </div>
              <div className="variant-picker_values">
                <div className="hover-tooltip tooltip-bot color_btn style-image active">
                  <div className="img">
                    <img
                      loading="lazy"
                      width="60"
                      height="60"
                      src="/assets/images/product/single/img_square/detail-1_2.jpg"
                      data-src="/assets/images/product/single/detail-1.jpg"
                      alt="img"
                    />
                  </div>
                  <span className="tooltip color__label">Green</span>
                </div>
                <div className="hover-tooltip tooltip-bot color_btn style-image">
                  <div className="img">
                    <img
                      loading="lazy"
                      width="60"
                      height="60"
                      src="/assets/images/product/single/img_square/detail-1_5.jpg"
                      data-src="/assets/images/product/single/detail-1_5.jpg"
                      alt="img"
                    />
                  </div>
                  <span className="tooltip color__label">Gray</span>
                </div>
              </div>
            </div>
            <div className="quick-variant-picker picker_size">
              <div className="variant-picker_label mb-12">
                <div>
                  Size:
                  <span className="variant__value text-capitalize fw-medium">
                    L
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
              <div className="variant-picker_values">
                <span
                  className="size_btn"
                  data-quick-size="S"
                  data-quick-price="39.99"
                >
                  S
                </span>
                <span
                  className="size_btn"
                  data-quick-size="M"
                  data-quick-price="59.99"
                >
                  M
                </span>
                <span
                  className="size_btn active"
                  data-quick-size="L"
                  data-quick-price="79.99"
                >
                  L
                </span>
                <span
                  className="size_btn"
                  data-quick-size="XL"
                  data-quick-price="89.99"
                >
                  XL
                </span>
                <span
                  className="size_btn disabled"
                  data-quick-size="XX"
                  data-quick-price="99.99"
                >
                  XXL
                </span>
              </div>
            </div>
            <div className="product-total-quantity">
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
                    value={1}
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
                  Add to Cart
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
        </div>
      </div>
    </div>
  );
}

export default QuickAddModel;
