import React from "react";

export default function ProductCard({ product }) {
  return (
    <div
      className="card-product product-style_list"
      data-availability={product.availability || "In Stock"}
      data-brand={product.brand || ""}
    >
      <div className="card-product_wrapper">
        <a href="product-detail.html" className="product-img">
          <img
            className="img-product"
            loading="lazy"
            width="330"
            height="440"
            src={product.image || "/assets/images/product/product-1.jpg"}
            alt="Product"
          />
          <img
            className="img-hover"
            loading="lazy"
            width="330"
            height="440"
            src={product.imageHover || "/assets/images/product/product-1_2.jpg"}
            alt="Product"
          />
        </a>
        {product.badges && product.badges.length > 0 && (
          <ul className="product-badge_list">
            {product.badges.map((badge, idx) => (
              <li key={idx} className={`product-badge_item text-caption-01 ${badge.type}`}>
                {badge.text}
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="card-product_info">
        <a
          href="product-detail.html"
          className="name-product lh-24 fw-medium link-underline-text"
        >
          {product.name}
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
            ${product.price}
          </span>
          {product.oldPrice && (
            <span className="price-old text-caption-01 cl-text-3">
              ${product.oldPrice}
            </span>
          )}
        </div>
        <p className="description text-caption-01 mb-10">
          {product.description || "Button-up shirt sleeves and a relaxed silhouette. It’s tailored with drapey, crinkle-texture fabric that’s made from LENZING™ ECOVERO™ Viscose..."}
        </p>
        
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
  );
}
