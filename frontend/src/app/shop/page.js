import React from 'react';
import CategoryFilter from '../../components/Shop/Filters/CategoryFilter';
import PriceFilter from '../../components/Shop/Filters/PriceFilter';
import SizeFilter from '../../components/Shop/Filters/SizeFilter';
import ColorFilter from '../../components/Shop/Filters/ColorFilter';
import AvailabilityFilter from '../../components/Shop/Filters/AvailabilityFilter';
import BrandFilter from '../../components/Shop/Filters/BrandFilter';
import ProductCard from '../../components/Shop/ProductCard';

const products = [
  {
    id: 1,
    name: "Lyocell wrap top",
    image: "/assets/images/product/product-1.jpg",
    imageHover: "/assets/images/product/product-1_2.jpg",
    price: 69.99,
    oldPrice: 99.99,
    availability: "In Stock",
    brand: "Louis Vuitton",
    badges: [{ type: "new", text: "NEW" }]
  },
  {
    id: 2,
    name: "Buttons cotton top",
    image: "/assets/images/product/product-2.jpg",
    imageHover: "/assets/images/product/product-2_2.jpg",
    price: 29.99,
    oldPrice: 49.99,
    availability: "In Stock",
    brand: "Nike",
    badges: [{ type: "sale", text: "-25%" }]
  },
  {
    id: 3,
    name: "Wool Midi Coat",
    image: "/assets/images/product/product-3.jpg",
    imageHover: "/assets/images/product/product-3_2.jpg",
    price: 15.99,
    oldPrice: 25.99,
    availability: "Out of stock",
    brand: "Hermes",
    badges: [{ type: "sale", text: "-25%" }]
  },
  {
    id: 4,
    name: "linen slim-fit shirt",
    image: "/assets/images/product/product-4.jpg",
    imageHover: "/assets/images/product/product-4_2.jpg",
    price: 45.99,
    oldPrice: 79.99,
    availability: "In Stock",
    brand: "Nike",
    badges: []
  },
  {
    id: 5,
    name: "High neck midi wool coat",
    image: "/assets/images/product/product-5.jpg",
    imageHover: "/assets/images/product/product-5_2.jpg",
    price: 9.99,
    oldPrice: 19.99,
    availability: "In Stock",
    brand: "Hermes",
    badges: [{ type: "new", text: "NEW" }]
  },
  {
    id: 6,
    name: "Square metallic frame sunglasses",
    image: "/assets/images/product/product-6.jpg",
    imageHover: "/assets/images/product/product-6_2.jpg",
    price: 34.99,
    oldPrice: 59.99,
    availability: "In Stock",
    brand: "Zalando",
    badges: [{ type: "sale", text: "-25%" }]
  },
  {
    id: 7,
    name: "Leather shopper bag with stitching",
    image: "/assets/images/product/product-7.jpg",
    imageHover: "/assets/images/product/product-7_2.jpg",
    price: 22.99,
    oldPrice: 39.99,
    availability: "In Stock",
    brand: "Louis Vuitton",
    badges: [{ type: "sale", text: "-25%" }]
  },
  {
    id: 8,
    name: "Oval shoulder bag",
    image: "/assets/images/product/product-10.jpg",
    imageHover: "/assets/images/product/product-10.jpg",
    price: 12.99,
    oldPrice: 21.99,
    availability: "In Stock",
    brand: "Gucci",
    badges: []
  }
];

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
                    <CategoryFilter />
                    <div className="br-line"></div>
                    <PriceFilter />
                    <div className="br-line"></div>
                    <SizeFilter />
                    <div className="br-line"></div>
                    <ColorFilter />
                    <div className="br-line"></div>
                    <AvailabilityFilter />
                    <div className="br-line"></div>
                    <BrandFilter />
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
                >
                  {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                  
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
