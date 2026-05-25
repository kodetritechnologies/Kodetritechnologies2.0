"use client";
import React from "react";
import { useWishlist } from "@/utils/context/WishlistContext";
import { priceHelper, productUrl } from "@/utils/helpers/productHelper";
import { useCurrency } from "@/utils/context/CurrencyContext";
import Link from "next/link";
import QuickViewButton from "@/components/QuickViewButton";

function WishlistCards() {
  const { wishlist, toggleWishlist } = useWishlist();
  const { formatPrice } = useCurrency();

  if (!wishlist || wishlist.length === 0) {
    return (
      <div className="empty-wishlist text-center py-5">
        <h4 className="mb-20">Your wishlist is empty</h4>
        <Link href="/shop" className="tf-btn btn-primary animate-btn">
          Explore Products
        </Link>
      </div>
    );
  }

  return (
    <div className="tf-grid-layout tf-col-2 md-col-3 xl-col-4 wrapper-wishlist">
      {wishlist.map((wishlistItem, index) => {
        const product = wishlistItem.item;
        const variant = wishlistItem.varient_id;

        if (!product) return null;

        const { price, sale_price } = priceHelper(product, variant);
        const url = productUrl(product, variant);

        // Determine which images to show. If variant has gallery, use it.
        const mainImg = variant?.gallery?.[0]?.url || product?.gallery?.[0]?.url;
        const hoverImg = variant?.gallery?.[1]?.url || product?.gallery?.[1]?.url || mainImg;

        return (
          <div className="card-product" key={wishlistItem._id || index}>
            <div className="card-product_wrapper">
              <Link href={url} className="product-img">
                <img
                  className="img-product"
                  loading="lazy"
                  width="330"
                  height="440"
                  src={mainImg}
                  alt={product.name}
                />
                <img
                  className="img-hover"
                  loading="lazy"
                  width="330"
                  height="440"
                  src={hoverImg}
                  alt={product.name}
                />
              </Link>
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
                  <QuickViewButton product={product} />
                </li>
              </ul>
              {product.sale_price && (
                <ul className="product-badge_list">
                  <li className="product-badge_item text-caption-01 sale">
                    SALE
                  </li>
                </ul>
              )}
              <span
                className="product-action_remove remove box-icon hover-tooltip tooltip-left"
                onClick={() => toggleWishlist(product._id, variant?._id || null)}
                style={{ cursor: "pointer" }}
              >
                <i className="icon icon-trash"></i>
                <span className="tooltip">Remove</span>
              </span>
              <div className="product-action_bot">
                <a
                  href="#quickAdd"
                  data-bs-toggle="modal"
                  className="tf-btn btn-white small w-100"
                >
                  Quick Add
                </a>
              </div>
            </div>
            <div className="card-product_info">
              <Link
                href={url}
                className="name-product lh-24 fw-medium link-underline-text"
              >
                {product.name}
                {variant && <span className="text-caption-01 cl-text-3 d-block mt-1">({variant.name})</span>}
              </Link>
              <div className="star-wrap d-flex align-items-center">
                <i className="icon icon-Star"></i>
                <i className="icon icon-Star"></i>
                <i className="icon icon-Star"></i>
                <i className="icon icon-Star"></i>
                <i className="icon icon-Star"></i>
              </div>
              <div className="price-wrap">
                {sale_price ? (
                  <>
                    <span className="price-new text-primary fw-semibold">
                      {formatPrice(sale_price)}
                    </span>
                    <span className="price-old text-caption-01 cl-text-3">
                      {formatPrice(price)}
                    </span>
                  </>
                ) : (
                  <span className="price-new text-primary fw-semibold">
                    {formatPrice(price)}
                  </span>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default WishlistCards;
