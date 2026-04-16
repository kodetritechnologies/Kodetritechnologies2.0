function page() {
  return (
    <main id="wrapper">
      <section className="flat-spacing">
        <div className="container">
          <div className="row">
            <div className="col-xl-3">
              <div className="canvas-sidebar sidebar-filter canvas-filter left">
                <div className="canvas-wrapper">
                  <div className="canvas-header">
                    <h4 className="title d-none d-xl-block">Filters</h4>
                    <h5 className="title d-xl-none">Filters</h5>
                    <span className="icon-X2 fs-24 close-filter d-xl-none"></span>
                  </div>
                  <div className="canvas-body">
                    <div className="widget-facet">
                      <div
                        className="facet-title"
                        data-bs-target="#category"
                        role="button"
                        data-bs-toggle="collapse"
                        aria-expanded="true"
                        aria-controls="category"
                      >
                        <h6>Product Categories</h6>
                        <span className="icon icon-CaretDown"></span>
                      </div>
                      <div id="category" className="collapse show">
                        <ul className="collapse-body filter-group-check group-category">
                          <li className="list-item">
                            <a href="shop-default.html" className="label link">
                              <span className="cate-text">Bags</span>
                              <span className="count">(112)</span>
                            </a>
                          </li>
                          <li className="list-item">
                            <a href="shop-default.html" className="label link">
                              <span className="cate-text">Booking</span>
                              <span className="count">(32)</span>
                            </a>
                          </li>
                          <li className="list-item">
                            <a href="shop-default.html" className="label link">
                              <span className="cate-text">Clothing</span>
                              <span className="count">(42)</span>
                            </a>
                          </li>
                          <li className="list-item">
                            <a href="shop-default.html" className="label link">
                              <span className="cate-text">Women</span>
                              <span className="count">(65)</span>
                            </a>
                          </li>
                          <li className="list-item">
                            <a href="shop-default.html" className="label link">
                              <span className="cate-text">Men</span>
                              <span className="count">(13)</span>
                            </a>
                          </li>
                          <li className="list-item">
                            <a href="shop-default.html" className="label link">
                              <span className="cate-text">Shoes</span>
                              <span className="count">(52)</span>
                            </a>
                          </li>
                          <li className="list-item">
                            <a href="shop-default.html" className="label link">
                              <span className="cate-text">Uncategorized</span>
                              <span className="count">(14)</span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="br-line"></div>
                    <div className="widget-facet">
                      <div
                        className="facet-title"
                        data-bs-target="#price"
                        role="button"
                        data-bs-toggle="collapse"
                        aria-expanded="true"
                        aria-controls="price"
                      >
                        <h6>Filter By Price</h6>
                        <span className="icon icon-CaretDown"></span>
                      </div>
                      <div id="price" className="collapse show">
                        <div className="collapse-body widget-price filter-price">
                          <div
                            className="price-val-range"
                            id="price-value-range"
                            data-min="0"
                            data-max="200"
                          ></div>
                          <div className="price-box tf-grid-layout tf-col-2">
                            <div className="box-wrap">
                              <div className="price-val_wrap">
                                <span className="cl-text-2 text-body-1">$</span>
                                <div
                                  className="price-val"
                                  id="price-min-value"
                                ></div>
                              </div>
                            </div>
                            <div className="box-wrap">
                              <div className="price-val_wrap">
                                <span className="cl-text-2 text-body-1">$</span>
                                <div
                                  className="price-val"
                                  id="price-max-value"
                                ></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="br-line"></div>
                    <div className="widget-facet">
                      <div
                        className="facet-title"
                        data-bs-target="#size"
                        role="button"
                        data-bs-toggle="collapse"
                        aria-expanded="true"
                        aria-controls="size"
                      >
                        <h6>Size</h6>
                        <span className="icon icon-CaretDown"></span>
                      </div>
                      <div id="size" className="collapse show">
                        <ul className="collapse-body filter-group-size">
                          <li>
                            <input
                              className="ip-size d-none"
                              type="checkbox"
                              name="size"
                              id="size-xs"
                            />
                            <label htmlFor="size-xs" className="label-size">
                              <span className="size-text fw-medium">XS</span>
                            </label>
                          </li>
                          <li>
                            <input
                              className="ip-size d-none"
                              type="checkbox"
                              name="size"
                              id="size-s"
                            />
                            <label htmlFor="size-s" className="label-size">
                              <span className="size-text fw-medium">S</span>
                            </label>
                          </li>
                          <li>
                            <input
                              className="ip-size d-none"
                              type="checkbox"
                              name="size"
                              id="size-m"
                            />
                            <label htmlFor="size-m" className="label-size">
                              <span className="size-text fw-medium">M</span>
                            </label>
                          </li>
                          <li>
                            <input
                              className="ip-size d-none"
                              type="checkbox"
                              name="size"
                              id="size-l"
                            />
                            <label htmlFor="size-l" className="label-size">
                              <span className="size-text fw-medium">L</span>
                            </label>
                          </li>
                          <li>
                            <input
                              className="ip-size d-none"
                              type="checkbox"
                              name="size"
                              id="size-xl"
                            />
                            <label htmlFor="size-xl" className="label-size">
                              <span className="size-text fw-medium">XL</span>
                            </label>
                          </li>
                          <li>
                            <input
                              className="ip-size d-none"
                              type="checkbox"
                              name="size"
                              id="size-2xl"
                            />
                            <label htmlFor="size-2xl" className="label-size">
                              <span className="size-text fw-medium">2XL</span>
                            </label>
                          </li>
                          <li>
                            <input
                              className="ip-size d-none"
                              type="checkbox"
                              name="size"
                              id="size-3xl"
                            />
                            <label htmlFor="size-3xl" className="label-size">
                              <span className="size-text fw-medium">3XL</span>
                            </label>
                          </li>
                          <li>
                            <input
                              className="ip-size d-none"
                              type="checkbox"
                              name="size"
                              id="over-size"
                            />
                            <label
                              htmlFor="over-size"
                              className="label-size over-size"
                            >
                              <span className="size-text fw-medium">
                                Free Size
                              </span>
                            </label>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="br-line"></div>
                    <div className="widget-facet">
                      <div
                        className="facet-title"
                        data-bs-target="#price2"
                        role="button"
                        data-bs-toggle="collapse"
                        aria-expanded="true"
                        aria-controls="price2"
                      >
                        <h6>Colors</h6>
                        <span className="icon icon-CaretDown"></span>
                      </div>
                      <div id="price2" className="collapse show">
                        <ul className="collapse-body filter-group-check group-check-color">
                          <li className="list-item">
                            <fieldset className="field-color">
                              <input
                                type="radio"
                                name="color"
                                className="tf-check"
                                id="color-pink"
                              />
                              <label
                                htmlFor="color-pink"
                                className="color bg-peach-blush"
                              ></label>
                            </fieldset>
                            <label htmlFor="color-pink" className="label">
                              <span className="color-text">Pink</span>
                              <span className="count">(16)</span>
                            </label>
                          </li>
                          <li className="list-item">
                            <fieldset className="field-color">
                              <input
                                type="radio"
                                name="color"
                                className="tf-check"
                                id="color-blue"
                              />
                              <label
                                htmlFor="color-blue"
                                className="color bg-cool-gray"
                              ></label>
                            </fieldset>
                            <label htmlFor="color-blue" className="label">
                              <span className="color-text">Blue</span>
                              <span className="count">(7)</span>
                            </label>
                          </li>
                          <li className="list-item">
                            <fieldset className="field-color">
                              <input
                                type="radio"
                                name="color"
                                className="tf-check"
                                id="color-beige"
                              />
                              <label
                                htmlFor="color-beige"
                                className="color bg-cream"
                              ></label>
                            </fieldset>
                            <label htmlFor="color-beige" className="label">
                              <span className="color-text">Beige</span>
                              <span className="count">(24)</span>
                            </label>
                          </li>
                          <li className="list-item">
                            <fieldset className="field-color">
                              <input
                                type="radio"
                                name="color"
                                className="tf-check"
                                id="color-orange"
                              />
                              <label
                                htmlFor="color-orange"
                                className="color bg-flame-orange"
                              ></label>
                            </fieldset>
                            <label htmlFor="color-orange" className="label">
                              <span className="color-text">Orange</span>
                              <span className="count">(17)</span>
                            </label>
                          </li>
                          <li className="list-item">
                            <fieldset className="field-color">
                              <input
                                type="radio"
                                name="color"
                                className="tf-check"
                                id="color-gray"
                              />
                              <label
                                htmlFor="color-gray"
                                className="color bg-sage-gray"
                              ></label>
                            </fieldset>
                            <label htmlFor="color-gray" className="label">
                              <span className="color-text">Gray</span>
                              <span className="count">(5)</span>
                            </label>
                          </li>
                          <li className="list-item">
                            <fieldset className="field-color">
                              <input
                                type="radio"
                                name="color"
                                className="tf-check"
                                id="color-purple"
                              />
                              <label
                                htmlFor="color-purple"
                                className="color bg-rosewood"
                              ></label>
                            </fieldset>
                            <label htmlFor="color-purple" className="label">
                              <span className="color-text">Purple</span>
                              <span className="count">(8)</span>
                            </label>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="br-line"></div>
                    <div className="widget-facet">
                      <div
                        className="facet-title"
                        data-bs-target="#availability"
                        role="button"
                        data-bs-toggle="collapse"
                        aria-expanded="true"
                        aria-controls="availability"
                      >
                        <h6>Availability</h6>
                        <span className="icon icon-CaretDown"></span>
                      </div>
                      <div id="availability" className="collapse show">
                        <ul className="collapse-body filter-group-check">
                          <li className="list-item">
                            <input
                              type="radio"
                              name="availability"
                              className="tf-check style-2"
                              id="inStock"
                            />
                            <label htmlFor="inStock" className="label">
                              <span className="cate-text">In stock</span>
                              <span className="count">(32)</span>
                            </label>
                          </li>
                          <li className="list-item">
                            <input
                              type="radio"
                              name="availability"
                              className="tf-check style-2"
                              id="outStock"
                            />
                            <label htmlFor="outStock" className="label">
                              <span className="cate-text">Out of stock</span>
                              <span className="count">(2)</span>
                            </label>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="br-line"></div>
                    <div className="widget-facet">
                      <div
                        className="facet-title"
                        data-bs-target="#brand"
                        role="button"
                        data-bs-toggle="collapse"
                        aria-expanded="true"
                        aria-controls="availability"
                      >
                        <h6>Brands</h6>
                        <span className="icon icon-CaretDown"></span>
                      </div>
                      <div id="brand" className="collapse show">
                        <ul className="collapse-body filter-group-check">
                          <li className="list-item">
                            <input
                              type="radio"
                              name="brand"
                              className="tf-check style-2"
                              id="nike"
                            />
                            <label htmlFor="nike" className="label">
                              <span className="brand-text">Nike</span>
                              <span className="count">(112)</span>
                            </label>
                          </li>
                          <li className="list-item">
                            <input
                              type="radio"
                              name="brand"
                              className="tf-check style-2"
                              id="lv"
                            />
                            <label htmlFor="lv" className="label">
                              <span className="brand-text">Louis Vuitton</span>
                              <span className="count">(32)</span>
                            </label>
                          </li>
                          <li className="list-item">
                            <input
                              type="radio"
                              name="brand"
                              className="tf-check style-2"
                              id="hermes"
                            />
                            <label htmlFor="hermes" className="label">
                              <span className="brand-text">Hermes</span>
                              <span className="count">(42)</span>
                            </label>
                          </li>
                          <li className="list-item disabled">
                            <input
                              type="radio"
                              name="brand"
                              className="tf-check style-2"
                              id="gucci"
                            />
                            <label htmlFor="gucci" className="label">
                              <span className="brand-text">Gucci</span>
                              <span className="count">(13)</span>
                            </label>
                          </li>
                          <li className="list-item">
                            <input
                              type="radio"
                              name="brand"
                              className="tf-check style-2"
                              id="zalando"
                            />
                            <label htmlFor="zalando" className="label">
                              <span className="brand-text">Zalando</span>
                              <span className="count">(54)</span>
                            </label>
                          </li>
                          <li className="list-item disabled">
                            <input
                              type="radio"
                              name="brand"
                              className="tf-check style-2"
                              id="adidas"
                            />
                            <label htmlFor="adidas" className="label">
                              <span className="brand-text">Adidas</span>
                              <span className="count">(93)</span>
                            </label>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-9">
              <div className="tf-shop-control">
                <button
                  type="button"
                  id="filterShop"
                  className="tf-btn-filter d-xl-none"
                >
                  <span className="icon icon-filter"></span>
                  <span className="text">Show All Filter</span>
                </button>
                <div className="tf-control-sorting">
                  <div className="tf-dropdown-sort" data-bs-toggle="dropdown">
                    <div className="btn-select">
                      <span className="text-sort-value">Best Selling</span>
                      <span className="icon icon-CaretDown"></span>
                    </div>
                    <div className="dropdown-menu">
                      <div
                        className="select-item active remove-all-filters"
                        data-sort-value="best-selling"
                      >
                        <span className="text-value-item">Best Selling</span>
                      </div>
                      <div className="select-item" data-sort-value="a-z">
                        <span className="text-value-item">
                          Alphabetically, A-Z
                        </span>
                      </div>
                      <div className="select-item" data-sort-value="z-a">
                        <span className="text-value-item">
                          Alphabetically, Z-A
                        </span>
                      </div>
                      <div
                        className="select-item"
                        data-sort-value="price-low-high"
                      >
                        <span className="text-value-item">
                          Price, low to high
                        </span>
                      </div>
                      <div
                        className="select-item"
                        data-sort-value="price-high-low"
                      >
                        <span className="text-value-item">
                          Price, high to low
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <ul className="tf-control-layout">
                  <li
                    className="tf-view-layout-switch sw-layout-list list-layout"
                    data-value-layout="list"
                  >
                    <i className="icon-List"></i>
                  </li>
                  <li
                    className="tf-view-layout-switch sw-layout-2"
                    data-value-layout="tf-col-2"
                  >
                    <i className="icon-grid-2"></i>
                  </li>
                  <li
                    className="tf-view-layout-switch sw-layout-3 active d-none d-md-flex"
                    data-value-layout="tf-col-3"
                  >
                    <i className="icon-grid-3"></i>
                  </li>
                  <li
                    className="tf-view-layout-switch sw-layout-4 d-none d-lg-flex"
                    data-value-layout="tf-col-4"
                  >
                    <i className="icon-grid-4"></i>
                  </li>
                </ul>
              </div>
              <div className="wrapper-control-shop gridLayout-wrapper">
                <div className="meta-filter-shop">
                  <div
                    id="product-count-grid"
                    className="count-text text-caption-01"
                  ></div>
                  <div
                    id="product-count-list"
                    className="count-text text-caption-01"
                  ></div>
                  <div className="br-line type-vertical"></div>
                  <div id="applied-filters"></div>
                  <button
                    id="remove-all"
                    className="remove-all-filters"
                    style={{ display: "none" }}
                  >
                    <i className="icon icon-X2"></i>
                    Clear all
                  </button>
                </div>
                <div
                  className="tf-list-layout wrapper-shop"
                  id="listLayout"
                  style={{ display: "none" }}
                >
                  <div
                    className="card-product product-style_list"
                    data-availability="In Stock"
                    data-brand="Louis Vuitton"
                  >
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
                      <ul className="product-badge_list">
                        <li className="product-badge_item text-caption-01 new">
                          NEW
                        </li>
                      </ul>
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
                      <p className="description text-caption-01 mb-10">
                        Button-up shirt sleeves and a relaxed silhouette. It’s
                        tailored with drapey, crinkle-texture fabric that’s made
                        from LENZING™ ECOVERO™ Viscose — responsibly sourced
                        wood-based fibres produced through a process that
                        reduces...
                      </p>
                      <ul className="product-color_list">
                        <li className="product-color-item color-swatch hover-tooltip tooltip-bot active">
                          <span className="tooltip color-filter">Brown</span>
                          <span className="swatch-value bg-muted-brown"></span>
                          <img
                            src="/assets/images/product/product-1.jpg"
                            data-src="/assets/images/product/product-1.jpg"
                            alt="Image"
                          />
                        </li>
                        <li className="product-color-item color-swatch hover-tooltip tooltip-bot">
                          <span className="tooltip color-filter">
                            Dark Blue
                          </span>
                          <span className="swatch-value bg-dark-blue-gray"></span>
                          <img
                            src="/assets/images/product/product-1_3.jpg"
                            data-src="/assets/images/product/product-1_3.jpg"
                            alt="Image"
                          />
                        </li>
                        <li className="product-color-item color-swatch hover-tooltip tooltip-bot">
                          <span className="tooltip color-filter">Gray</span>
                          <span className="swatch-value bg-soft-gray"></span>
                          <img
                            src="/assets/images/product/product-1_4.jpg"
                            data-src="/assets/images/product/product-1_4.jpg"
                            alt="Image"
                          />
                        </li>
                      </ul>
                      <ul className="product-size_list mb-10">
                        <li className="size-item text-caption-01">XS</li>
                        <li className="size-item text-caption-01">S</li>
                        <li className="size-item text-caption-01">M</li>
                      </ul>
                      <ul className="product-action_list">
                        <li>
                          <a
                            href="#shoppingCart"
                            data-bs-toggle="offcanvas"
                            className="hover-tooltip box-icon"
                          >
                            <span className="icon icon-Handbag"></span>
                            <span className="tooltip">Add to Cart</span>
                          </a>
                        </li>
                        <li className="wishlist">
                          <a href="#;" className="hover-tooltip box-icon">
                            <span className="icon icon-heart"></span>
                            <span className="tooltip">Add to Wishlist</span>
                          </a>
                        </li>
                        <li className="compare">
                          <a
                            href="#compare"
                            data-bs-toggle="offcanvas"
                            className="hover-tooltip box-icon"
                          >
                            <span className="icon icon-ArrowsLeftRight"></span>
                            <span className="tooltip">Compare</span>
                          </a>
                        </li>
                        <li>
                          <a
                            href="#quickView"
                            data-bs-toggle="offcanvas"
                            className="hover-tooltip box-icon"
                          >
                            <span className="icon icon-Eye"></span>
                            <span className="tooltip">Quick view</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div
                    className="card-product product-style_list"
                    data-availability="In Stock"
                    data-brand="Nike"
                  >
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
                      <ul className="product-badge_list">
                        <li className="product-badge_item text-caption-01 sale">
                          -25%
                        </li>
                      </ul>
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
                      <p className="description text-caption-01 mb-10">
                        Button-up shirt sleeves and a relaxed silhouette. It’s
                        tailored with drapey, crinkle-texture fabric that’s made
                        from LENZING™ ECOVERO™ Viscose — responsibly sourced
                        wood-based fibres produced through a process that
                        reduces...
                      </p>
                      <ul className="product-color_list">
                        <li className="product-color-item color-swatch hover-tooltip tooltip-bot active">
                          <span className="tooltip color-filter">Brown</span>
                          <span className="swatch-value bg-muted-brown"></span>
                          <img
                            src="/assets/images/product/product-2.jpg"
                            data-src="/assets/images/product/product-2.jpg"
                            alt="Image"
                          />
                        </li>
                        <li className="product-color-item color-swatch hover-tooltip tooltip-bot">
                          <span className="tooltip color-filter">Beige</span>
                          <span className="swatch-value bg-stone-beige"></span>
                          <img
                            src="/assets/images/product/product-2_3.jpg"
                            data-src="/assets/images/product/product-2_3.jpg"
                            alt="Image"
                          />
                        </li>
                      </ul>
                      <ul className="product-size_list mb-10">
                        <li className="size-item text-caption-01">XS</li>
                        <li className="size-item text-caption-01">S</li>
                        <li className="size-item text-caption-01">M</li>
                      </ul>
                      <ul className="product-action_list">
                        <li>
                          <a
                            href="#shoppingCart"
                            data-bs-toggle="offcanvas"
                            className="hover-tooltip box-icon"
                          >
                            <span className="icon icon-Handbag"></span>
                            <span className="tooltip">Add to Cart</span>
                          </a>
                        </li>
                        <li className="wishlist">
                          <a href="#;" className="hover-tooltip box-icon">
                            <span className="icon icon-heart"></span>
                            <span className="tooltip">Add to Wishlist</span>
                          </a>
                        </li>
                        <li className="compare">
                          <a
                            href="#compare"
                            data-bs-toggle="offcanvas"
                            className="hover-tooltip box-icon"
                          >
                            <span className="icon icon-ArrowsLeftRight"></span>
                            <span className="tooltip">Compare</span>
                          </a>
                        </li>
                        <li>
                          <a
                            href="#quickView"
                            data-bs-toggle="offcanvas"
                            className="hover-tooltip box-icon"
                          >
                            <span className="icon icon-Eye"></span>
                            <span className="tooltip">Quick view</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div
                    className="card-product product-style_list"
                    data-availability="Out of stock"
                    data-brand="Hermes"
                  >
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
                      <ul className="product-badge_list">
                        <li className="product-badge_item text-caption-01 sale">
                          -25%
                        </li>
                      </ul>
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
                      <p className="description text-caption-01 mb-10">
                        Button-up shirt sleeves and a relaxed silhouette. It’s
                        tailored with drapey, crinkle-texture fabric that’s made
                        from LENZING™ ECOVERO™ Viscose — responsibly sourced
                        wood-based fibres produced through a process that
                        reduces...
                      </p>
                      <ul className="product-color_list">
                        <li className="product-color-item color-swatch hover-tooltip tooltip-bot active">
                          <span className="tooltip color-filter">Brown</span>
                          <span className="swatch-value bg-muted-brown"></span>
                          <img
                            src="/assets/images/product/product-3.jpg"
                            data-src="/assets/images/product/product-3.jpg"
                            alt="Image"
                          />
                        </li>
                        <li className="product-color-item color-swatch hover-tooltip tooltip-bot">
                          <span className="tooltip color-filter">
                            Dark Blue
                          </span>
                          <span className="swatch-value bg-dark-blue-gray"></span>
                          <img
                            src="/assets/images/product/product-3_3.jpg"
                            data-src="/assets/images/product/product-3_3.jpg"
                            alt="Image"
                          />
                        </li>
                        <li className="product-color-item color-swatch hover-tooltip tooltip-bot">
                          <span className="tooltip color-filter">Beige</span>
                          <span className="swatch-value bg-stone-beige"></span>
                          <img
                            src="/assets/images/product/product-3_4.jpg"
                            data-src="/assets/images/product/product-3_4.jpg"
                            alt="Image"
                          />
                        </li>
                      </ul>
                      <ul className="product-size_list mb-10">
                        <li className="size-item text-caption-01">XS</li>
                        <li className="size-item text-caption-01">S</li>
                        <li className="size-item text-caption-01">M</li>
                      </ul>
                      <ul className="product-action_list">
                        <li>
                          <a
                            href="#shoppingCart"
                            data-bs-toggle="offcanvas"
                            className="hover-tooltip box-icon"
                          >
                            <span className="icon icon-Handbag"></span>
                            <span className="tooltip">Add to Cart</span>
                          </a>
                        </li>
                        <li className="wishlist">
                          <a href="#;" className="hover-tooltip box-icon">
                            <span className="icon icon-heart"></span>
                            <span className="tooltip">Add to Wishlist</span>
                          </a>
                        </li>
                        <li className="compare">
                          <a
                            href="#compare"
                            data-bs-toggle="offcanvas"
                            className="hover-tooltip box-icon"
                          >
                            <span className="icon icon-ArrowsLeftRight"></span>
                            <span className="tooltip">Compare</span>
                          </a>
                        </li>
                        <li>
                          <a
                            href="#quickView"
                            data-bs-toggle="offcanvas"
                            className="hover-tooltip box-icon"
                          >
                            <span className="icon icon-Eye"></span>
                            <span className="tooltip">Quick view</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div
                    className="card-product product-style_list"
                    data-availability="In Stock"
                    data-brand="Nike"
                  >
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
                    </div>
                  </div>
                  <div
                    className="card-product product-style_list"
                    data-availability="In Stock"
                    data-brand="Hermes"
                  >
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
                      <ul className="product-badge_list">
                        <li className="product-badge_item text-caption-01 new">
                          NEW
                        </li>
                      </ul>
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
                      <p className="description text-caption-01 mb-10">
                        Button-up shirt sleeves and a relaxed silhouette. It’s
                        tailored with drapey, crinkle-texture fabric that’s made
                        from LENZING™ ECOVERO™ Viscose — responsibly sourced
                        wood-based fibres produced through a process that
                        reduces...
                      </p>
                      <ul className="product-color_list">
                        <li className="product-color-item color-swatch hover-tooltip tooltip-bot active">
                          <span className="tooltip color-filter">Brown</span>
                          <span className="swatch-value bg-muted-brown"></span>
                          <img
                            src="/assets/images/product/product-5.jpg"
                            data-src="/assets/images/product/product-5.jpg"
                            alt="Image"
                          />
                        </li>
                        <li className="product-color-item color-swatch hover-tooltip tooltip-bot">
                          <span className="tooltip color-filter">
                            Dark Blue
                          </span>
                          <span className="swatch-value bg-dark-blue-gray"></span>
                          <img
                            src="/assets/images/product/product-5_3.jpg"
                            data-src="/assets/images/product/product-5_3.jpg"
                            alt="Image"
                          />
                        </li>
                        <li className="product-color-item color-swatch hover-tooltip tooltip-bot">
                          <span className="tooltip color-filter">Beige </span>
                          <span className="swatch-value bg-stone-beige"></span>
                          <img
                            src="/assets/images/product/product-5_4.jpg"
                            data-src="/assets/images/product/product-5_4.jpg"
                            alt="Image"
                          />
                        </li>
                      </ul>
                      <ul className="product-size_list mb-10">
                        <li className="size-item text-caption-01">XS</li>
                        <li className="size-item text-caption-01">S</li>
                        <li className="size-item text-caption-01">M</li>
                      </ul>
                      <ul className="product-action_list">
                        <li>
                          <a
                            href="#shoppingCart"
                            data-bs-toggle="offcanvas"
                            className="hover-tooltip box-icon"
                          >
                            <span className="icon icon-Handbag"></span>
                            <span className="tooltip">Add to Cart</span>
                          </a>
                        </li>
                        <li className="wishlist">
                          <a href="#;" className="hover-tooltip box-icon">
                            <span className="icon icon-heart"></span>
                            <span className="tooltip">Add to Wishlist</span>
                          </a>
                        </li>
                        <li className="compare">
                          <a
                            href="#compare"
                            data-bs-toggle="offcanvas"
                            className="hover-tooltip box-icon"
                          >
                            <span className="icon icon-ArrowsLeftRight"></span>
                            <span className="tooltip">Compare</span>
                          </a>
                        </li>
                        <li>
                          <a
                            href="#quickView"
                            data-bs-toggle="offcanvas"
                            className="hover-tooltip box-icon"
                          >
                            <span className="icon icon-Eye"></span>
                            <span className="tooltip">Quick view</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div
                    className="card-product product-style_list"
                    data-availability="In Stock"
                    data-brand="Zalando"
                  >
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
                      <ul className="product-badge_list">
                        <li className="product-badge_item text-caption-01 sale">
                          -25%
                        </li>
                      </ul>
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
                      <p className="description text-caption-01 mb-10">
                        Button-up shirt sleeves and a relaxed silhouette. It’s
                        tailored with drapey, crinkle-texture fabric that’s made
                        from LENZING™ ECOVERO™ Viscose — responsibly sourced
                        wood-based fibres produced through a process that
                        reduces...
                      </p>
                      <ul className="product-color_list">
                        <li className="product-color-item color-swatch hover-tooltip tooltip-bot active">
                          <span className="tooltip color-filter">Brown</span>
                          <span className="swatch-value bg-muted-brown"></span>
                          <img
                            src="/assets/images/product/product-6.jpg"
                            data-src="/assets/images/product/product-6.jpg"
                            alt="Image"
                          />
                        </li>
                        <li className="product-color-item color-swatch hover-tooltip tooltip-bot">
                          <span className="tooltip color-filter">Gray</span>
                          <span className="swatch-value bg-steel-gray"></span>
                          <img
                            src="/assets/images/product/product-6_3.jpg"
                            data-src="/assets/images/product/product-6_3.jpg"
                            alt="Image"
                          />
                        </li>
                      </ul>
                      <ul className="product-size_list mb-10">
                        <li className="size-item text-caption-01">XS</li>
                        <li className="size-item text-caption-01">S</li>
                        <li className="size-item text-caption-01">M</li>
                      </ul>
                      <ul className="product-action_list">
                        <li>
                          <a
                            href="#shoppingCart"
                            data-bs-toggle="offcanvas"
                            className="hover-tooltip box-icon"
                          >
                            <span className="icon icon-Handbag"></span>
                            <span className="tooltip">Add to Cart</span>
                          </a>
                        </li>
                        <li className="wishlist">
                          <a href="#;" className="hover-tooltip box-icon">
                            <span className="icon icon-heart"></span>
                            <span className="tooltip">Add to Wishlist</span>
                          </a>
                        </li>
                        <li className="compare">
                          <a
                            href="#compare"
                            data-bs-toggle="offcanvas"
                            className="hover-tooltip box-icon"
                          >
                            <span className="icon icon-ArrowsLeftRight"></span>
                            <span className="tooltip">Compare</span>
                          </a>
                        </li>
                        <li>
                          <a
                            href="#quickView"
                            data-bs-toggle="offcanvas"
                            className="hover-tooltip box-icon"
                          >
                            <span className="icon icon-Eye"></span>
                            <span className="tooltip">Quick view</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div
                    className="card-product product-style_list"
                    data-availability="In Stock"
                    data-brand="Louis Vuitton"
                  >
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
                      <ul className="product-badge_list">
                        <li className="product-badge_item text-caption-01 sale">
                          -25%
                        </li>
                      </ul>
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
                      <p className="description text-caption-01 mb-10">
                        Button-up shirt sleeves and a relaxed silhouette. It’s
                        tailored with drapey, crinkle-texture fabric that’s made
                        from LENZING™ ECOVERO™ Viscose — responsibly sourced
                        wood-based fibres produced through a process that
                        reduces...
                      </p>
                      <ul className="product-color_list">
                        <li className="product-color-item color-swatch hover-tooltip tooltip-bot active">
                          <span className="tooltip color-filter">Brown</span>
                          <span className="swatch-value bg-muted-brown"></span>
                          <img
                            src="/assets/images/product/product-7.jpg"
                            data-src="/assets/images/product/product-7.jpg"
                            alt="Image"
                          />
                        </li>
                        <li className="product-color-item color-swatch hover-tooltip tooltip-bot">
                          <span className="tooltip color-filter">
                            Sand Brown
                          </span>
                          <span className="swatch-value bg-sand-brown"></span>
                          <img
                            src="/assets/images/product/product-7_3.jpg"
                            data-src="/assets/images/product/product-7_3.jpg"
                            alt="Image"
                          />
                        </li>
                        <li className="product-color-item color-swatch hover-tooltip tooltip-bot">
                          <span className="tooltip color-filter">Pink</span>
                          <span className="swatch-value bg-dusty-rose"></span>
                          <img
                            src="/assets/images/product/product-7_4.jpg"
                            data-src="/assets/images/product/product-7_4.jpg"
                            alt="Image"
                          />
                        </li>
                      </ul>
                      <ul className="product-size_list mb-10">
                        <li className="size-item text-caption-01">XS</li>
                        <li className="size-item text-caption-01">S</li>
                        <li className="size-item text-caption-01">M</li>
                      </ul>
                      <ul className="product-action_list">
                        <li>
                          <a
                            href="#shoppingCart"
                            data-bs-toggle="offcanvas"
                            className="hover-tooltip box-icon"
                          >
                            <span className="icon icon-Handbag"></span>
                            <span className="tooltip">Add to Cart</span>
                          </a>
                        </li>
                        <li className="wishlist">
                          <a href="#;" className="hover-tooltip box-icon">
                            <span className="icon icon-heart"></span>
                            <span className="tooltip">Add to Wishlist</span>
                          </a>
                        </li>
                        <li className="compare">
                          <a
                            href="#compare"
                            data-bs-toggle="offcanvas"
                            className="hover-tooltip box-icon"
                          >
                            <span className="icon icon-ArrowsLeftRight"></span>
                            <span className="tooltip">Compare</span>
                          </a>
                        </li>
                        <li>
                          <a
                            href="#quickView"
                            data-bs-toggle="offcanvas"
                            className="hover-tooltip box-icon"
                          >
                            <span className="icon icon-Eye"></span>
                            <span className="tooltip">Quick view</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div
                    className="card-product product-style_list"
                    data-availability="In Stock"
                    data-brand="Gucci"
                  >
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
                      <p className="description text-caption-01 mb-10">
                        Button-up shirt sleeves and a relaxed silhouette. It’s
                        tailored with drapey, crinkle-texture fabric that’s made
                        from LENZING™ ECOVERO™ Viscose — responsibly sourced
                        wood-based fibres produced through a process that
                        reduces...
                      </p>
                      <ul className="product-color_list">
                        <li className="product-color-item color-swatch hover-tooltip tooltip-bot active">
                          <span className="tooltip color-filter">Pink</span>
                          <span className="swatch-value bg-dusty-rose"></span>
                          <img
                            src="/assets/images/product/product-8.jpg"
                            data-src="/assets/images/product/product-8.jpg"
                            alt="Image"
                          />
                        </li>
                        <li className="product-color-item color-swatch hover-tooltip tooltip-bot">
                          <span className="tooltip color-filter">
                            Dark Blue
                          </span>
                          <span className="swatch-value bg-dark-blue-gray"></span>
                          <img
                            src="/assets/images/product/product-8_3.jpg"
                            data-src="/assets/images/product/product-8_3.jpg"
                            alt="Image"
                          />
                        </li>
                        <li className="product-color-item color-swatch hover-tooltip tooltip-bot">
                          <span className="tooltip color-filter">Powder</span>
                          <span className="swatch-value bg-powder-pink"></span>
                          <img
                            src="/assets/images/product/product-8_4.jpg"
                            data-src="/assets/images/product/product-8_4.jpg"
                            alt="Image"
                          />
                        </li>
                      </ul>
                      <ul className="product-size_list mb-10">
                        <li className="size-item text-caption-01">XS</li>
                        <li className="size-item text-caption-01">S</li>
                        <li className="size-item text-caption-01">M</li>
                      </ul>
                      <ul className="product-action_list">
                        <li>
                          <a
                            href="#shoppingCart"
                            data-bs-toggle="offcanvas"
                            className="hover-tooltip box-icon"
                          >
                            <span className="icon icon-Handbag"></span>
                            <span className="tooltip">Add to Cart</span>
                          </a>
                        </li>
                        <li className="wishlist">
                          <a href="#;" className="hover-tooltip box-icon">
                            <span className="icon icon-heart"></span>
                            <span className="tooltip">Add to Wishlist</span>
                          </a>
                        </li>
                        <li className="compare">
                          <a
                            href="#compare"
                            data-bs-toggle="offcanvas"
                            className="hover-tooltip box-icon"
                          >
                            <span className="icon icon-ArrowsLeftRight"></span>
                            <span className="tooltip">Compare</span>
                          </a>
                        </li>
                        <li>
                          <a
                            href="#quickView"
                            data-bs-toggle="offcanvas"
                            className="hover-tooltip box-icon"
                          >
                            <span className="icon icon-Eye"></span>
                            <span className="tooltip">Quick view</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div
                    className="card-product product-style_list"
                    data-availability="In Stock"
                    data-brand="Adidas"
                  >
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
                      <p className="description text-caption-01 mb-10">
                        Button-up shirt sleeves and a relaxed silhouette. It’s
                        tailored with drapey, crinkle-texture fabric that’s made
                        from LENZING™ ECOVERO™ Viscose — responsibly sourced
                        wood-based fibres produced through a process that
                        reduces...
                      </p>
                      <ul className="product-color_list">
                        <li className="product-color-item color-swatch hover-tooltip tooltip-bot active">
                          <span className="tooltip color-filter">Purple</span>
                          <span className="swatch-value bg-soft-lavender"></span>
                          <img
                            src="/assets/images/product/product-9.jpg"
                            data-src="/assets/images/product/product-9.jpg"
                            alt="Image"
                          />
                        </li>
                        <li className="product-color-item color-swatch hover-tooltip tooltip-bot">
                          <span className="tooltip color-filter">
                            Dark Blue
                          </span>
                          <span className="swatch-value bg-dark-blue-gray"></span>
                          <img
                            src="/assets/images/product/product-9_3.jpg"
                            data-src="/assets/images/product/product-9_3.jpg"
                            alt="Image"
                          />
                        </li>
                      </ul>
                      <ul className="product-size_list mb-10">
                        <li className="size-item text-caption-01">XS</li>
                        <li className="size-item text-caption-01">S</li>
                        <li className="size-item text-caption-01">M</li>
                      </ul>
                      <ul className="product-action_list">
                        <li>
                          <a
                            href="#shoppingCart"
                            data-bs-toggle="offcanvas"
                            className="hover-tooltip box-icon"
                          >
                            <span className="icon icon-Handbag"></span>
                            <span className="tooltip">Add to Cart</span>
                          </a>
                        </li>
                        <li className="wishlist">
                          <a href="#;" className="hover-tooltip box-icon">
                            <span className="icon icon-heart"></span>
                            <span className="tooltip">Add to Wishlist</span>
                          </a>
                        </li>
                        <li className="compare">
                          <a
                            href="#compare"
                            data-bs-toggle="offcanvas"
                            className="hover-tooltip box-icon"
                          >
                            <span className="icon icon-ArrowsLeftRight"></span>
                            <span className="tooltip">Compare</span>
                          </a>
                        </li>
                        <li>
                          <a
                            href="#quickView"
                            data-bs-toggle="offcanvas"
                            className="hover-tooltip box-icon"
                          >
                            <span className="icon icon-Eye"></span>
                            <span className="tooltip">Quick view</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div
                    className="card-product product-style_list"
                    data-availability="Out of stock"
                    data-brand="Louis Vuitton"
                  >
                    <div className="card-product_wrapper">
                      <a href="product-detail.html" className="product-img">
                        <img
                          className="img-product"
                          loading="lazy"
                          width="330"
                          height="440"
                          src="/assets/images/product/product-10.jpg"
                          alt="Product"
                        />
                        <img
                          className="img-hover"
                          loading="lazy"
                          width="330"
                          height="440"
                          src="/assets/images/product/product-10.jpg"
                          alt="Product"
                        />
                      </a>
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
                      <p className="description text-caption-01 mb-10">
                        Button-up shirt sleeves and a relaxed silhouette. It’s
                        tailored with drapey, crinkle-texture fabric that’s made
                        from LENZING™ ECOVERO™ Viscose — responsibly sourced
                        wood-based fibres produced through a process that
                        reduces...
                      </p>
                      <ul className="product-size_list mb-10">
                        <li className="size-item text-caption-01">XS</li>
                        <li className="size-item text-caption-01">S</li>
                        <li className="size-item text-caption-01">M</li>
                      </ul>
                      <ul className="product-action_list">
                        <li>
                          <a
                            href="#shoppingCart"
                            data-bs-toggle="offcanvas"
                            className="hover-tooltip box-icon"
                          >
                            <span className="icon icon-Handbag"></span>
                            <span className="tooltip">Add to Cart</span>
                          </a>
                        </li>
                        <li className="wishlist">
                          <a href="#;" className="hover-tooltip box-icon">
                            <span className="icon icon-heart"></span>
                            <span className="tooltip">Add to Wishlist</span>
                          </a>
                        </li>
                        <li className="compare">
                          <a
                            href="#compare"
                            data-bs-toggle="offcanvas"
                            className="hover-tooltip box-icon"
                          >
                            <span className="icon icon-ArrowsLeftRight"></span>
                            <span className="tooltip">Compare</span>
                          </a>
                        </li>
                        <li>
                          <a
                            href="#quickView"
                            data-bs-toggle="offcanvas"
                            className="hover-tooltip box-icon"
                          >
                            <span className="icon icon-Eye"></span>
                            <span className="tooltip">Quick view</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="wd-full justify-content-center">
                    <div className="tf-page-pagination">
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
                <div
                  className="wrapper-shop tf-grid-layout tf-col-3"
                  id="gridLayout"
                >
                  <div
                    className="card-product grid"
                    data-availability="In Stock"
                    data-brand="Louis Vuitton"
                  >
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
                          <span className="swatch-value bg-muted-brown"></span>
                          <img
                            src="/assets/images/product/product-1.jpg"
                            data-src="/assets/images/product/product-1.jpg"
                            alt="Image"
                          />
                        </li>
                        <li className="product-color-item color-swatch hover-tooltip tooltip-bot">
                          <span className="tooltip color-filter">
                            Dark Blue
                          </span>
                          <span className="swatch-value bg-dark-blue-gray"></span>
                          <img
                            src="/assets/images/product/product-1_3.jpg"
                            data-src="/assets/images/product/product-1_3.jpg"
                            alt="Image"
                          />
                        </li>
                        <li className="product-color-item color-swatch hover-tooltip tooltip-bot">
                          <span className="tooltip color-filter">Gray</span>
                          <span className="swatch-value bg-soft-gray"></span>
                          <img
                            src="/assets/images/product/product-1_4.jpg"
                            data-src="/assets/images/product/product-1_4.jpg"
                            alt="Image"
                          />
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div
                    className="card-product grid"
                    data-availability="In Stock"
                    data-brand="Nike"
                  >
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
                          <span className="swatch-value bg-muted-brown"></span>
                          <img
                            src="/assets/images/product/product-2.jpg"
                            data-src="/assets/images/product/product-2.jpg"
                            alt="Image"
                          />
                        </li>
                        <li className="product-color-item color-swatch hover-tooltip tooltip-bot">
                          <span className="tooltip color-filter">Beige</span>
                          <span className="swatch-value bg-stone-beige"></span>
                          <img
                            src="/assets/images/product/product-2_3.jpg"
                            data-src="/assets/images/product/product-2_3.jpg"
                            alt="Image"
                          />
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div
                    className="card-product grid has-size"
                    data-availability="Out of stock"
                    data-brand="Hermes"
                  >
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
                          <span className="swatch-value bg-muted-brown"></span>
                          <img
                            src="/assets/images/product/product-3.jpg"
                            data-src="/assets/images/product/product-3.jpg"
                            alt="Image"
                          />
                        </li>
                        <li className="product-color-item color-swatch hover-tooltip tooltip-bot">
                          <span className="tooltip color-filter">
                            Dark Blue
                          </span>
                          <span className="swatch-value bg-dark-blue-gray"></span>
                          <img
                            src="/assets/images/product/product-3_3.jpg"
                            data-src="/assets/images/product/product-3_3.jpg"
                            alt="Image"
                          />
                        </li>
                        <li className="product-color-item color-swatch hover-tooltip tooltip-bot">
                          <span className="tooltip color-filter">Beige</span>
                          <span className="swatch-value bg-stone-beige"></span>
                          <img
                            src="/assets/images/product/product-3_4.jpg"
                            data-src="/assets/images/product/product-3_4.jpg"
                            alt="Image"
                          />
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div
                    className="card-product grid has-size"
                    data-availability="In Stock"
                    data-brand="Nike"
                  >
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
                      <div className="variant-box">
                        <ul className="product-size_list">
                          <li className="size-item text-caption-01">XS</li>
                          <li className="size-item text-caption-01">S</li>
                          <li className="size-item text-caption-01">M</li>
                          <li className="size-item text-caption-01">L</li>
                        </ul>
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
                    </div>
                  </div>
                  <div
                    className="card-product grid"
                    data-availability="In Stock"
                    data-brand="Hermes"
                  >
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
                          <span className="swatch-value bg-muted-brown"></span>
                          <img
                            src="/assets/images/product/product-5.jpg"
                            data-src="/assets/images/product/product-5.jpg"
                            alt="Image"
                          />
                        </li>
                        <li className="product-color-item color-swatch hover-tooltip tooltip-bot">
                          <span className="tooltip color-filter">
                            Dark Blue
                          </span>
                          <span className="swatch-value bg-dark-blue-gray"></span>
                          <img
                            src="/assets/images/product/product-5_3.jpg"
                            data-src="/assets/images/product/product-5_3.jpg"
                            alt="Image"
                          />
                        </li>
                        <li className="product-color-item color-swatch hover-tooltip tooltip-bot">
                          <span className="tooltip color-filter">Beige </span>
                          <span className="swatch-value bg-stone-beige"></span>
                          <img
                            src="/assets/images/product/product-5_4.jpg"
                            data-src="/assets/images/product/product-5_4.jpg"
                            alt="Image"
                          />
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div
                    className="card-product grid has-size"
                    data-availability="In Stock"
                    data-brand="Zalando"
                  >
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
                          <li className="size-item text-caption-01">S</li>
                          <li className="size-item text-caption-01">M</li>
                          <li className="size-item text-caption-01">L</li>
                          <li className="size-item text-caption-01">XL</li>
                        </ul>
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
                          <span className="swatch-value bg-muted-brown"></span>
                          <img
                            src="/assets/images/product/product-6.jpg"
                            data-src="/assets/images/product/product-6.jpg"
                            alt="Image"
                          />
                        </li>
                        <li className="product-color-item color-swatch hover-tooltip tooltip-bot">
                          <span className="tooltip color-filter">Gray</span>
                          <span className="swatch-value bg-steel-gray"></span>
                          <img
                            src="/assets/images/product/product-6_3.jpg"
                            data-src="/assets/images/product/product-6_3.jpg"
                            alt="Image"
                          />
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div
                    className="card-product grid"
                    data-availability="In Stock"
                    data-brand="Louis Vuitton"
                  >
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
                          <span className="swatch-value bg-muted-brown"></span>
                          <img
                            src="/assets/images/product/product-7.jpg"
                            data-src="/assets/images/product/product-7.jpg"
                            alt="Image"
                          />
                        </li>
                        <li className="product-color-item color-swatch hover-tooltip tooltip-bot">
                          <span className="tooltip color-filter">
                            Sand Brown
                          </span>
                          <span className="swatch-value bg-sand-brown"></span>
                          <img
                            src="/assets/images/product/product-7_3.jpg"
                            data-src="/assets/images/product/product-7_3.jpg"
                            alt="Image"
                          />
                        </li>
                        <li className="product-color-item color-swatch hover-tooltip tooltip-bot">
                          <span className="tooltip color-filter">Pink</span>
                          <span className="swatch-value bg-dusty-rose"></span>
                          <img
                            src="/assets/images/product/product-7_4.jpg"
                            data-src="/assets/images/product/product-7_4.jpg"
                            alt="Image"
                          />
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div
                    className="card-product grid"
                    data-availability="In Stock"
                    data-brand="Gucci"
                  >
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
                          <span className="swatch-value bg-dusty-rose"></span>
                          <img
                            src="/assets/images/product/product-8.jpg"
                            data-src="/assets/images/product/product-8.jpg"
                            alt="Image"
                          />
                        </li>
                        <li className="product-color-item color-swatch hover-tooltip tooltip-bot">
                          <span className="tooltip color-filter">
                            Dark Blue
                          </span>
                          <span className="swatch-value bg-dark-blue-gray"></span>
                          <img
                            src="/assets/images/product/product-8_3.jpg"
                            data-src="/assets/images/product/product-8_3.jpg"
                            alt="Image"
                          />
                        </li>
                        <li className="product-color-item color-swatch hover-tooltip tooltip-bot">
                          <span className="tooltip color-filter">Powder</span>
                          <span className="swatch-value bg-powder-pink"></span>
                          <img
                            src="/assets/images/product/product-8_4.jpg"
                            data-src="/assets/images/product/product-8_4.jpg"
                            alt="Image"
                          />
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div
                    className="card-product grid"
                    data-availability="In Stock"
                    data-brand="Adidas"
                  >
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
                          <span className="swatch-value bg-soft-lavender"></span>
                          <img
                            src="/assets/images/product/product-9.jpg"
                            data-src="/assets/images/product/product-9.jpg"
                            alt="Image"
                          />
                        </li>
                        <li className="product-color-item color-swatch hover-tooltip tooltip-bot">
                          <span className="tooltip color-filter">
                            Dark Blue
                          </span>
                          <span className="swatch-value bg-dark-blue-gray"></span>
                          <img
                            src="/assets/images/product/product-9_3.jpg"
                            data-src="/assets/images/product/product-9_3.jpg"
                            alt="Image"
                          />
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div
                    className="card-product grid"
                    data-availability="Out of stock"
                    data-brand="Louis Vuitton"
                  >
                    <div className="card-product_wrapper">
                      <a href="product-detail.html" className="product-img">
                        <img
                          className="img-product"
                          loading="lazy"
                          width="330"
                          height="440"
                          src="/assets/images/product/product-10.jpg"
                          alt="Product"
                        />
                        <img
                          className="img-hover"
                          loading="lazy"
                          width="330"
                          height="440"
                          src="/assets/images/product/product-10.jpg"
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
                    </div>
                  </div>
                  <div className="wd-full">
                    <div className="tf-page-pagination">
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
          </div>
        </div>
      </section>
    </main>
  );
}

export default page;
